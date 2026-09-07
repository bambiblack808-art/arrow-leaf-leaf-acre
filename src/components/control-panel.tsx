import type { ReactNode } from "react";
import { Pause, Play, RotateCcw, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useFieldStore, type ColorMode } from "@/lib/field-store";
import { cn } from "@/lib/utils";

function Row({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1">
      <div className="flex items-baseline justify-between gap-3">
        <Label>{label}</Label>
        {value ? <span className="text-xs tabular-nums text-subtle">{value}</span> : null}
      </div>
      {children}
    </div>
  );
}

function ToggleRow({
  label,
  checked,
  onCheckedChange,
}: {
  label: string;
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
}) {
  return (
    <div className="flex h-11 items-center justify-between gap-3">
      <Label>{label}</Label>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}

const COLOR_MODES: { id: ColorMode; label: string }[] = [
  { id: "direction", label: "Angle" },
  { id: "speed", label: "Speed" },
  { id: "ink", label: "Ink" },
];

export function ControlPanel() {
  const playing = useFieldStore((s) => s.playing);
  const density = useFieldStore((s) => s.density);
  const arrowScale = useFieldStore((s) => s.arrowScale);
  const normalize = useFieldStore((s) => s.normalize);
  const showArrows = useFieldStore((s) => s.showArrows);
  const showGrid = useFieldStore((s) => s.showGrid);
  const particlesOn = useFieldStore((s) => s.particlesOn);
  const particleCount = useFieldStore((s) => s.particleCount);
  const flowSpeed = useFieldStore((s) => s.flowSpeed);
  const trail = useFieldStore((s) => s.trail);
  const span = useFieldStore((s) => s.span);
  const colorMode = useFieldStore((s) => s.colorMode);
  const togglePlaying = useFieldStore((s) => s.togglePlaying);
  const setDensity = useFieldStore((s) => s.setDensity);
  const setArrowScale = useFieldStore((s) => s.setArrowScale);
  const setNormalize = useFieldStore((s) => s.setNormalize);
  const setShowArrows = useFieldStore((s) => s.setShowArrows);
  const setShowGrid = useFieldStore((s) => s.setShowGrid);
  const setParticlesOn = useFieldStore((s) => s.setParticlesOn);
  const setParticleCount = useFieldStore((s) => s.setParticleCount);
  const setFlowSpeed = useFieldStore((s) => s.setFlowSpeed);
  const setTrail = useFieldStore((s) => s.setTrail);
  const setSpan = useFieldStore((s) => s.setSpan);
  const resetView = useFieldStore((s) => s.resetView);
  const setColorMode = useFieldStore((s) => s.setColorMode);
  const clearTrails = useFieldStore((s) => s.clearTrails);

  return (
    <aside className="flex flex-col gap-3 rounded-2xl bg-surface p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] sm:p-4">
      <div className="flex gap-2">
        <Button
          type="button"
          onClick={togglePlaying}
          className="flex-1"
          aria-label={playing ? "Pause flow" : "Play flow"}
        >
          {playing ? (
            <Pause className="size-4" />
          ) : (
            <Play className="size-4 translate-x-px" />
          )}
          {playing ? "Pause" : "Play"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={clearTrails}
          aria-label="Clear trails and respawn"
        >
          <Wind className="size-4" />
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={resetView}
          aria-label="Reset view"
        >
          <RotateCcw className="size-4" />
        </Button>
      </div>

      <Row label="Flow speed" value={flowSpeed.toFixed(1)}>
        <Slider
          min={0.15}
          max={3.5}
          step={0.05}
          value={[flowSpeed]}
          onValueChange={([v]) => setFlowSpeed(v ?? flowSpeed)}
          aria-label="Flow speed"
        />
      </Row>

      <Row label="Arrow density" value={String(Math.round(density))}>
        <Slider
          min={6}
          max={32}
          step={1}
          value={[density]}
          onValueChange={([v]) => setDensity(v ?? density)}
          aria-label="Arrow density"
        />
      </Row>

      <Row label="Arrow size" value={arrowScale.toFixed(1)}>
        <Slider
          min={0.4}
          max={2}
          step={0.05}
          value={[arrowScale]}
          onValueChange={([v]) => setArrowScale(v ?? arrowScale)}
          aria-label="Arrow size"
        />
      </Row>

      <Row label="Zoom" value={`${span.toFixed(1)} u`}>
        <Slider
          min={0.6}
          max={16}
          step={0.1}
          value={[span]}
          onValueChange={([v]) => setSpan(v ?? span)}
          aria-label="Zoom span"
        />
      </Row>

      <div>
        <Label className="mb-2 block">Color</Label>
        <div className="grid grid-cols-3 gap-1 rounded-lg bg-elevated p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          {COLOR_MODES.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setColorMode(mode.id)}
              className={cn(
                "h-9 rounded-md text-xs font-medium transition-[background-color,color] duration-150 ease-out",
                colorMode === mode.id
                  ? "bg-primary text-primary-fg"
                  : "text-muted hover:text-fg",
              )}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-2 gap-x-3">
        <ToggleRow label="Arrows" checked={showArrows} onCheckedChange={setShowArrows} />
        <ToggleRow label="Grid" checked={showGrid} onCheckedChange={setShowGrid} />
        <ToggleRow label="Uniform" checked={normalize} onCheckedChange={setNormalize} />
        <ToggleRow label="Particles" checked={particlesOn} onCheckedChange={setParticlesOn} />
      </div>

      <Row label="Particle count" value={String(Math.round(particleCount))}>
        <Slider
          min={80}
          max={2200}
          step={20}
          value={[particleCount]}
          onValueChange={([v]) => setParticleCount(v ?? particleCount)}
          aria-label="Particle count"
          disabled={!particlesOn}
        />
      </Row>

      <Row label="Trail fade" value={trail.toFixed(2)}>
        <Slider
          min={0.02}
          max={0.22}
          step={0.01}
          value={[trail]}
          onValueChange={([v]) => setTrail(v ?? trail)}
          aria-label="Trail fade"
          disabled={!particlesOn}
        />
      </Row>

      <p className="text-xs leading-relaxed text-subtle">
        Drag to pan, scroll to zoom. Click the field to drop a streak of particles.
      </p>
    </aside>
  );
}
