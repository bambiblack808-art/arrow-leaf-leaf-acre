import { useEffect, useRef } from "react";
import { useFieldStore, type ColorMode, type Probe } from "@/lib/field-store";
import type { FieldFn } from "@/lib/math/parse";

type Particle = {
  x: number;
  y: number;
  px: number;
  py: number;
  life: number;
};

type View = { cx: number; cy: number; span: number };

const BG = { r: 10, g: 11, b: 13 };

function niceStep(span: number): number {
  const raw = span / 4;
  const exp = 10 ** Math.floor(Math.log10(raw));
  const n = raw / exp;
  if (n < 1.5) return exp;
  if (n < 3.5) return 2 * exp;
  if (n < 7.5) return 5 * exp;
  return 10 * exp;
}

function formatTick(v: number, step: number): string {
  const abs = Math.abs(v);
  if (abs < 1e-10) return "0";
  if (step >= 1) return String(Math.round(v));
  const digits = Math.min(4, Math.max(0, Math.ceil(-Math.log10(step)) + 1));
  return v.toFixed(digits).replace(/\.?0+$/, "");
}

function fieldColor(
  vx: number,
  vy: number,
  mag: number,
  magScale: number,
  mode: ColorMode,
  alpha: number,
): string {
  if (mode === "ink") {
    return `rgba(200, 204, 212, ${alpha})`;
  }
  if (mode === "direction") {
    const hue = ((Math.atan2(vy, vx) * 180) / Math.PI + 360) % 360;
    const light = 58 + 10 * Math.min(1, mag / (magScale || 1));
    return `hsla(${hue.toFixed(1)}, 32%, ${light.toFixed(1)}%, ${alpha})`;
  }
  const t = Math.min(1, mag / (magScale || 1));
  const light = 42 + t * 28;
  return `hsla(210, 22%, ${light.toFixed(1)}%, ${alpha})`;
}

function spawnParticle(view: View, rng: () => number): Particle {
  const x = view.cx + (rng() * 2 - 1) * view.span * 1.05;
  const y = view.cy + (rng() * 2 - 1) * view.span * 1.05;
  return { x, y, px: x, py: y, life: rng() };
}

function drawArrow(
  ctx: CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  color: string,
  width: number,
) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy);
  if (len < 0.8) return;
  const ux = dx / len;
  const uy = dy / len;
  const head = Math.min(7, Math.max(3.5, len * 0.32));
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1 - ux * head * 0.35, y1 - uy * head * 0.35);
  ctx.moveTo(x1 - ux * head - uy * head * 0.52, y1 - uy * head + ux * head * 0.52);
  ctx.lineTo(x1, y1);
  ctx.lineTo(x1 - ux * head + uy * head * 0.52, y1 - uy * head - ux * head * 0.52);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();
}

export function FieldCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const arrowsRef = useRef<HTMLCanvasElement>(null);
  const flowRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<{ x: number; y: number; inside: boolean } | null>(null);
  const dragRef = useRef<{
    id: number;
    sx: number;
    sy: number;
    cx: number;
    cy: number;
    moved: boolean;
  } | null>(null);
  const lastSeed = useRef(0);
  const lastClear = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const arrows = arrowsRef.current;
    const flow = flowRef.current;
    const overlay = overlayRef.current;
    if (!wrap || !arrows || !flow || !overlay) return;

    const ctxA = arrows.getContext("2d");
    const ctxF = flow.getContext("2d");
    const ctxO = overlay.getContext("2d");
    if (!ctxA || !ctxF || !ctxO) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let cssW = 1;
    let cssH = 1;
    let running = true;
    let last = performance.now();
    let lastHud = 0;
    let t = 0;
    let magScale = 1;
    let arrowsDirty = true;
    let lastArrowKey = "";
    let lastViewKey = "";
    const particles: Particle[] = [];
    let rngs = 1;
    const rng = () => {
      rngs = (rngs * 16807) % 2147483647;
      return (rngs - 1) / 2147483646;
    };

    const worldToScreen = (x: number, y: number, view: View) => {
      const scale = Math.min(cssW, cssH) / (2 * view.span);
      return {
        sx: (x - view.cx) * scale + cssW / 2,
        sy: -(y - view.cy) * scale + cssH / 2,
        scale,
      };
    };

    const screenToWorld = (sx: number, sy: number, view: View) => {
      const scale = Math.min(cssW, cssH) / (2 * view.span);
      return {
        x: view.cx + (sx - cssW / 2) / scale,
        y: view.cy - (sy - cssH / 2) / scale,
      };
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      cssW = Math.max(1, rect.width);
      cssH = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.floor(cssW * dpr);
      h = Math.floor(cssH * dpr);
      for (const c of [arrows, flow, overlay]) {
        c.width = w;
        c.height = h;
        c.style.width = `${cssW}px`;
        c.style.height = `${cssH}px`;
      }
      ctxA.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctxF.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctxO.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctxF.clearRect(0, 0, cssW, cssH);
      arrowsDirty = true;
    };

    const syncCount = (n: number, view: View) => {
      if (particles.length > n) particles.length = n;
      while (particles.length < n) particles.push(spawnParticle(view, rng));
    };

    const drawGrid = (view: View, showGrid: boolean) => {
      ctxA.fillStyle = `rgb(${BG.r}, ${BG.g}, ${BG.b})`;
      ctxA.fillRect(0, 0, cssW, cssH);
      if (!showGrid) return;
      const step = niceStep(view.span);
      const scale = Math.min(cssW, cssH) / (2 * view.span);
      const x0 = view.cx - (cssW / 2) / scale;
      const x1 = view.cx + (cssW / 2) / scale;
      const y0 = view.cy - (cssH / 2) / scale;
      const y1 = view.cy + (cssH / 2) / scale;
      const startX = Math.floor(x0 / step) * step;
      const startY = Math.floor(y0 / step) * step;

      ctxA.lineWidth = 1;
      for (let x = startX; x <= x1 + step * 0.5; x += step) {
        const { sx } = worldToScreen(x, 0, view);
        const axis = Math.abs(x) < step * 1e-6;
        ctxA.strokeStyle = axis ? "rgba(232, 236, 241, 0.22)" : "rgba(232, 236, 241, 0.06)";
        ctxA.beginPath();
        ctxA.moveTo(sx, 0);
        ctxA.lineTo(sx, cssH);
        ctxA.stroke();
      }
      for (let y = startY; y <= y1 + step * 0.5; y += step) {
        const { sy } = worldToScreen(0, y, view);
        const axis = Math.abs(y) < step * 1e-6;
        ctxA.strokeStyle = axis ? "rgba(232, 236, 241, 0.22)" : "rgba(232, 236, 241, 0.06)";
        ctxA.beginPath();
        ctxA.moveTo(0, sy);
        ctxA.lineTo(cssW, sy);
        ctxA.stroke();
      }

      ctxA.fillStyle = "rgba(139, 144, 154, 0.9)";
      ctxA.font = "11px 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif";
      ctxA.textAlign = "left";
      ctxA.textBaseline = "top";
      for (let x = startX; x <= x1 + step * 0.5; x += step) {
        if (Math.abs(x) < step * 1e-6) continue;
        const { sx } = worldToScreen(x, 0, view);
        const { sy } = worldToScreen(0, 0, view);
        const label = formatTick(x, step);
        const ly = Math.min(cssH - 16, Math.max(6, sy + 6));
        ctxA.fillText(label, sx + 4, ly);
      }
      ctxA.textAlign = "right";
      for (let y = startY; y <= y1 + step * 0.5; y += step) {
        if (Math.abs(y) < step * 1e-6) continue;
        const { sy } = worldToScreen(0, y, view);
        const { sx } = worldToScreen(0, 0, view);
        const label = formatTick(y, step);
        const lx = Math.min(cssW - 6, Math.max(28, sx - 6));
        ctxA.fillText(label, lx, sy + 4);
      }
      ctxA.textAlign = "left";
      const origin = worldToScreen(0, 0, view);
      ctxA.fillText("0", origin.sx + 4, origin.sy + 6);
    };

    const drawArrows = (
      field: FieldFn,
      view: View,
      density: number,
      arrowScale: number,
      normalize: boolean,
      colorMode: ColorMode,
      showArrows: boolean,
      showGrid: boolean,
      time: number,
    ) => {
      drawGrid(view, showGrid);
      if (!showArrows) return;
      const n = Math.round(density);
      const mags: number[] = [];
      const samples: { x: number; y: number; vx: number; vy: number; mag: number }[] = [];
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          const x = view.cx + ((i + 0.5) / n - 0.5) * 2 * view.span * (cssW / Math.min(cssW, cssH));
          const y = view.cy + ((j + 0.5) / n - 0.5) * 2 * view.span * (cssH / Math.min(cssW, cssH));
          const { vx, vy } = field(x, y, time);
          if (!Number.isFinite(vx) || !Number.isFinite(vy)) continue;
          const mag = Math.hypot(vx, vy);
          if (!Number.isFinite(mag)) continue;
          samples.push({ x, y, vx, vy, mag });
          mags.push(mag);
        }
      }
      mags.sort((a, b) => a - b);
      magScale = mags[Math.floor(mags.length * 0.9)] || 1;
      const cell = Math.min(cssW, cssH) / n;
      const baseLen = cell * 0.42 * arrowScale;

      for (const s of samples) {
        const { sx, sy } = worldToScreen(s.x, s.y, view);
        let ux = s.vx;
        let uy = s.vy;
        const mag = s.mag;
        if (mag < 1e-9) continue;
        ux /= mag;
        uy /= mag;
        const len = normalize ? baseLen : baseLen * Math.min(1.8, mag / magScale);
        const x0 = sx - ux * len * 0.5;
        const y0 = sy + uy * len * 0.5;
        const x1 = sx + ux * len * 0.5;
        const y1 = sy - uy * len * 0.5;
        const color = fieldColor(s.vx, s.vy, mag, magScale, colorMode, 0.82);
        drawArrow(ctxA, x0, y0, x1, y1, color, 1.15);
      }
    };

    const integrate = (field: FieldFn, view: View, dt: number, speed: number) => {
      const maxStep = view.span * 0.05;
      const margin = view.span * 1.15;
      for (const p of particles) {
        p.px = p.x;
        p.py = p.y;
        const a = field(p.x, p.y, t);
        if (!Number.isFinite(a.vx) || !Number.isFinite(a.vy)) {
          Object.assign(p, spawnParticle(view, rng));
          continue;
        }
        let step = dt * speed;
        const mag = Math.hypot(a.vx, a.vy);
        if (mag * step > maxStep) step = maxStep / Math.max(mag, 1e-9);
        const x1 = p.x + a.vx * step;
        const y1 = p.y + a.vy * step;
        const b = field(x1, y1, t);
        if (!Number.isFinite(b.vx) || !Number.isFinite(b.vy)) {
          Object.assign(p, spawnParticle(view, rng));
          continue;
        }
        p.x += 0.5 * (a.vx + b.vx) * step;
        p.y += 0.5 * (a.vy + b.vy) * step;
        p.life += dt;
        const out =
          Math.abs(p.x - view.cx) > margin * (cssW / Math.min(cssW, cssH)) ||
          Math.abs(p.y - view.cy) > margin * (cssH / Math.min(cssW, cssH));
        if (out || p.life > 12 + rng() * 8 || mag < 1e-5) {
          Object.assign(p, spawnParticle(view, rng));
        }
      }
    };

    const drawFlow = (field: FieldFn, view: View, colorMode: ColorMode, fade: number) => {
      ctxF.save();
      ctxF.globalCompositeOperation = "destination-out";
      ctxF.fillStyle = `rgba(0,0,0,${Math.min(0.35, Math.max(0.02, fade))})`;
      ctxF.fillRect(0, 0, cssW, cssH);
      ctxF.restore();
      ctxF.lineCap = "round";
      ctxF.lineJoin = "round";
      for (const p of particles) {
        const a = worldToScreen(p.px, p.py, view);
        const b = worldToScreen(p.x, p.y, view);
        const dx = b.sx - a.sx;
        const dy = b.sy - a.sy;
        if (dx * dx + dy * dy < 0.15) continue;
        const { vx, vy } = field(p.x, p.y, t);
        const mag = Math.hypot(vx, vy);
        ctxF.strokeStyle = fieldColor(vx, vy, mag, magScale, colorMode, 0.55);
        ctxF.lineWidth = 1.35;
        ctxF.beginPath();
        ctxF.moveTo(a.sx, a.sy);
        ctxF.lineTo(b.sx, b.sy);
        ctxF.stroke();
      }
    };

    const drawOverlay = (field: FieldFn, view: View, colorMode: ColorMode) => {
      ctxO.clearRect(0, 0, cssW, cssH);
      const ptr = pointerRef.current;
      if (!ptr?.inside) return;
      const world = screenToWorld(ptr.x, ptr.y, view);
      const { vx, vy } = field(world.x, world.y, t);
      const mag = Math.hypot(vx, vy);
      const { sx, sy } = worldToScreen(world.x, world.y, view);

      ctxO.beginPath();
      ctxO.arc(sx, sy, 5, 0, Math.PI * 2);
      ctxO.strokeStyle = "rgba(236, 238, 241, 0.9)";
      ctxO.lineWidth = 1.25;
      ctxO.stroke();
      ctxO.beginPath();
      ctxO.arc(sx, sy, 1.6, 0, Math.PI * 2);
      ctxO.fillStyle = "rgba(236, 238, 241, 0.95)";
      ctxO.fill();

      if (Number.isFinite(vx) && Number.isFinite(vy) && mag > 1e-9) {
        const len = Math.min(cssW, cssH) * 0.12;
        const ux = vx / mag;
        const uy = vy / mag;
        const x1 = sx + ux * len;
        const y1 = sy - uy * len;
        drawArrow(ctxO, sx, sy, x1, y1, fieldColor(vx, vy, mag, magScale, colorMode, 1), 2);
      }
    };

    const seedStreak = (field: FieldFn, view: View, x: number, y: number) => {
      const { vx, vy } = field(x, y, t);
      const mag = Math.hypot(vx, vy) || 1;
      const nx = -vy / mag;
      const ny = vx / mag;
      const spacing = view.span * 0.04;
      for (let i = -7; i <= 7; i++) {
        const px = x + nx * i * spacing;
        const py = y + ny * i * spacing;
        const idx = Math.floor(rng() * particles.length);
        if (particles[idx]) {
          particles[idx] = { x: px, y: py, px, py, life: 0 };
        } else {
          particles.push({ x: px, y: py, px, py, life: 0 });
        }
      }
    };

    const tick = (now: number) => {
      if (!running) return;
      const rawDt = (now - last) / 1000;
      last = now;
      const dt = Math.min(rawDt, 0.05);
      const state = useFieldStore.getState();
      const view: View = { cx: state.cx, cy: state.cy, span: state.span };

      if (state.clearNonce !== lastClear.current) {
        lastClear.current = state.clearNonce;
        ctxF.clearRect(0, 0, cssW, cssH);
        t = state.simT === 0 ? 0 : t;
        if (state.simT === 0) t = 0;
        particles.length = 0;
      }
      if (state.particlesOn) syncCount(state.particleCount, view);
      else particles.length = 0;

      if (state.seedNonce !== lastSeed.current) {
        lastSeed.current = state.seedNonce;
        seedStreak(state.field, view, state.seedX, state.seedY);
      }

      if (state.playing) {
        t += dt;
        if (state.particlesOn) integrate(state.field, view, dt, state.flowSpeed);
      }

      const viewKey = `${view.cx}|${view.cy}|${view.span}|${cssW}|${cssH}`;
      if (viewKey !== lastViewKey) {
        lastViewKey = viewKey;
        ctxF.clearRect(0, 0, cssW, cssH);
        arrowsDirty = true;
      }
      const arrowKey = [
        state.density,
        state.arrowScale,
        state.normalize,
        state.showArrows,
        state.showGrid,
        state.colorMode,
        state.cx,
        state.cy,
        state.span,
        state.usesT && state.playing ? Math.floor(t * 12) : 0,
        state.vxText,
        state.vyText,
        cssW,
        cssH,
      ].join("|");
      if (arrowKey !== lastArrowKey) {
        lastArrowKey = arrowKey;
        arrowsDirty = true;
      }
      if (arrowsDirty) {
        drawArrows(
          state.field,
          view,
          state.density,
          state.arrowScale,
          state.normalize,
          state.colorMode,
          state.showArrows,
          state.showGrid,
          t,
        );
        arrowsDirty = false;
      }

      if (state.playing && state.particlesOn) {
        drawFlow(state.field, view, state.colorMode, state.trail);
      }
      drawOverlay(state.field, view, state.colorMode);

      if (now - lastHud > 80) {
        lastHud = now;
        const ptr = pointerRef.current;
        let probe: Probe;
        if (ptr?.inside) {
          const world = screenToWorld(ptr.x, ptr.y, view);
          const { vx, vy } = state.field(world.x, world.y, t);
          const mag = Math.hypot(vx, vy);
          probe = {
            x: world.x,
            y: world.y,
            vx,
            vy,
            mag,
            theta: Math.atan2(vy, vx),
            active: true,
          };
        } else {
          probe = { ...state.probe, active: false };
        }
        if (state.simT !== t || probe.active !== state.probe.active || probe.active) {
          useFieldStore.setState({ simT: t, probe });
        }
      }

      requestAnimationFrame(tick);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;
      pointerRef.current = { x: sx, y: sy, inside: true };
      const drag = dragRef.current;
      if (drag && e.pointerId === drag.id) {
        const state = useFieldStore.getState();
        const scale = Math.min(cssW, cssH) / (2 * state.span);
        const dx = (e.clientX - drag.sx) / scale;
        const dy = (e.clientY - drag.sy) / scale;
        if (Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > 4) drag.moved = true;
        useFieldStore.getState().setView(drag.cx - dx, drag.cy + dy, state.span);
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      const state = useFieldStore.getState();
      wrap.setPointerCapture(e.pointerId);
      dragRef.current = {
        id: e.pointerId,
        sx: e.clientX,
        sy: e.clientY,
        cx: state.cx,
        cy: state.cy,
        moved: false,
      };
    };

    const onPointerUp = (e: PointerEvent) => {
      const drag = dragRef.current;
      if (drag && e.pointerId === drag.id) {
        if (!drag.moved) {
          const rect = wrap.getBoundingClientRect();
          const world = screenToWorld(e.clientX - rect.left, e.clientY - rect.top, {
            cx: useFieldStore.getState().cx,
            cy: useFieldStore.getState().cy,
            span: useFieldStore.getState().span,
          });
          useFieldStore.getState().seedAt(world.x, world.y);
        }
        dragRef.current = null;
      }
    };

    const onPointerLeave = () => {
      if (pointerRef.current) pointerRef.current.inside = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const state = useFieldStore.getState();
      const factor = e.deltaY > 0 ? 1.08 : 1 / 1.08;
      const next = Math.min(40, Math.max(0.4, state.span * factor));
      const rect = wrap.getBoundingClientRect();
      const world = screenToWorld(e.clientX - rect.left, e.clientY - rect.top, {
        cx: state.cx,
        cy: state.cy,
        span: state.span,
      });
      const tZoom = 1 - next / state.span;
      useFieldStore.getState().setView(
        state.cx + (world.x - state.cx) * tZoom,
        state.cy + (world.y - state.cy) * tZoom,
        next,
      );
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    wrap.addEventListener("pointermove", onPointerMove);
    wrap.addEventListener("pointerdown", onPointerDown);
    wrap.addEventListener("pointerup", onPointerUp);
    wrap.addEventListener("pointercancel", onPointerUp);
    wrap.addEventListener("pointerleave", onPointerLeave);
    wrap.addEventListener("wheel", onWheel, { passive: false });
    requestAnimationFrame(tick);

    return () => {
      running = false;
      ro.disconnect();
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerdown", onPointerDown);
      wrap.removeEventListener("pointerup", onPointerUp);
      wrap.removeEventListener("pointercancel", onPointerUp);
      wrap.removeEventListener("pointerleave", onPointerLeave);
      wrap.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative h-full min-h-[240px] w-full touch-none overflow-hidden rounded-lg bg-bg"
      style={{ cursor: "crosshair" }}
    >
      <canvas ref={arrowsRef} className="absolute inset-0" />
      <canvas ref={flowRef} className="absolute inset-0" />
      <canvas ref={overlayRef} className="absolute inset-0" />
    </div>
  );
}
