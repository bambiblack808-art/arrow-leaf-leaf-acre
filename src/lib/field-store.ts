import { create } from "zustand";
import { persist } from "zustand/middleware";
import { compileField, type FieldFn } from "@/lib/math/parse";
import { DEFAULT_PRESET, PRESETS } from "@/lib/math/presets";

export type ColorMode = "ink" | "direction" | "speed";

export type Probe = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mag: number;
  theta: number;
  active: boolean;
};

const defaultCompiled = compileField(DEFAULT_PRESET.vx, DEFAULT_PRESET.vy);
if (!defaultCompiled.ok) {
  throw new Error("Default field failed to compile");
}

const ZERO_PROBE: Probe = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  mag: 0,
  theta: 0,
  active: false,
};

type FieldState = {
  vxText: string;
  vyText: string;
  vxError: string | null;
  vyError: string | null;
  field: FieldFn;
  usesT: boolean;
  presetId: string | null;
  playing: boolean;
  density: number;
  arrowScale: number;
  normalize: boolean;
  showArrows: boolean;
  showGrid: boolean;
  particlesOn: boolean;
  particleCount: number;
  flowSpeed: number;
  trail: number;
  span: number;
  cx: number;
  cy: number;
  colorMode: ColorMode;
  simT: number;
  probe: Probe;
  seedNonce: number;
  seedX: number;
  seedY: number;
  clearNonce: number;
  setVx: (text: string) => void;
  setVy: (text: string) => void;
  applyPreset: (id: string) => void;
  setPlaying: (playing: boolean) => void;
  togglePlaying: () => void;
  setDensity: (n: number) => void;
  setArrowScale: (n: number) => void;
  setNormalize: (v: boolean) => void;
  setShowArrows: (v: boolean) => void;
  setShowGrid: (v: boolean) => void;
  setParticlesOn: (v: boolean) => void;
  setParticleCount: (n: number) => void;
  setFlowSpeed: (n: number) => void;
  setTrail: (n: number) => void;
  setSpan: (n: number) => void;
  setView: (cx: number, cy: number, span: number) => void;
  resetView: () => void;
  setColorMode: (m: ColorMode) => void;
  setSimT: (t: number) => void;
  setProbe: (probe: Probe) => void;
  seedAt: (x: number, y: number) => void;
  clearTrails: () => void;
};

function applyExpressions(vxText: string, vyText: string, presetId: string | null) {
  const compiled = compileField(vxText, vyText);
  if (!compiled.ok) {
    return {
      vxText,
      vyText,
      vxError: compiled.vxError,
      vyError: compiled.vyError,
      presetId,
    };
  }
  return {
    vxText,
    vyText,
    vxError: null,
    vyError: null,
    field: compiled.field,
    usesT: compiled.usesT,
    presetId,
  };
}

export const useFieldStore = create<FieldState>()(
  persist(
    (set, get) => ({
      vxText: DEFAULT_PRESET.vx,
      vyText: DEFAULT_PRESET.vy,
      vxError: null,
      vyError: null,
      field: defaultCompiled.field,
      usesT: defaultCompiled.usesT,
      presetId: DEFAULT_PRESET.id,
      playing: true,
      density: 16,
      arrowScale: 1,
      normalize: true,
      showArrows: true,
      showGrid: true,
      particlesOn: true,
      particleCount: 700,
      flowSpeed: 1,
      trail: 0.08,
      span: 4,
      cx: 0,
      cy: 0,
      colorMode: "direction",
      simT: 0,
      probe: ZERO_PROBE,
      seedNonce: 0,
      seedX: 0,
      seedY: 0,
      clearNonce: 0,
      setVx: (text) => {
        set(applyExpressions(text, get().vyText, null));
      },
      setVy: (text) => {
        set(applyExpressions(get().vxText, text, null));
      },
      applyPreset: (id) => {
        const preset = PRESETS.find((p) => p.id === id);
        if (!preset) return;
        set({
          ...applyExpressions(preset.vx, preset.vy, preset.id),
          simT: 0,
          cx: 0,
          cy: 0,
          span: 4,
          clearNonce: get().clearNonce + 1,
        });
      },
      setPlaying: (playing) => set({ playing }),
      togglePlaying: () => set({ playing: !get().playing }),
      setDensity: (density) => set({ density }),
      setArrowScale: (arrowScale) => set({ arrowScale }),
      setNormalize: (normalize) => set({ normalize }),
      setShowArrows: (showArrows) => set({ showArrows }),
      setShowGrid: (showGrid) => set({ showGrid }),
      setParticlesOn: (particlesOn) => set({ particlesOn }),
      setParticleCount: (particleCount) => set({ particleCount }),
      setFlowSpeed: (flowSpeed) => set({ flowSpeed }),
      setTrail: (trail) => set({ trail }),
      setSpan: (span) => set({ span }),
      setView: (cx, cy, span) => set({ cx, cy, span }),
      resetView: () => set({ cx: 0, cy: 0, span: 4 }),
      setColorMode: (colorMode) => set({ colorMode }),
      setSimT: (simT) => set({ simT }),
      setProbe: (probe) => set({ probe }),
      seedAt: (x, y) => set({ seedX: x, seedY: y, seedNonce: get().seedNonce + 1 }),
      clearTrails: () => set({ clearNonce: get().clearNonce + 1 }),
    }),
    {
      name: "flux-field-v1",
      skipHydration: true,
      partialize: (s) => ({
        vxText: s.vxText,
        vyText: s.vyText,
        presetId: s.presetId,
        playing: s.playing,
        density: s.density,
        arrowScale: s.arrowScale,
        normalize: s.normalize,
        showArrows: s.showArrows,
        showGrid: s.showGrid,
        particlesOn: s.particlesOn,
        particleCount: s.particleCount,
        flowSpeed: s.flowSpeed,
        trail: s.trail,
        span: s.span,
        colorMode: s.colorMode,
      }),
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<FieldState>;
        const next = { ...current, ...p };
        const compiled = compileField(next.vxText, next.vyText);
        if (compiled.ok) {
          next.field = compiled.field;
          next.usesT = compiled.usesT;
          next.vxError = null;
          next.vyError = null;
        } else {
          next.vxError = compiled.vxError;
          next.vyError = compiled.vyError;
        }
        return next;
      },
    },
  ),
);


