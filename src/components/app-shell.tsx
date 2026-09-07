import { useEffect } from "react";
import { Pause, Play } from "lucide-react";
import { ControlPanel } from "@/components/control-panel";
import { EquationBar } from "@/components/equation-bar";
import { FieldCanvas } from "@/components/field-canvas";
import { PresetRail } from "@/components/preset-rail";
import { ProbeHud } from "@/components/probe-hud";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useFieldStore } from "@/lib/field-store";

export function AppShell() {
  const playing = useFieldStore((s) => s.playing);
  const togglePlaying = useFieldStore((s) => s.togglePlaying);
  const presetId = useFieldStore((s) => s.presetId);

  useEffect(() => {
    void useFieldStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.code === "Space") {
        e.preventDefault();
        useFieldStore.getState().togglePlaying();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <TooltipProvider delayDuration={250}>
      <div className="flex min-h-dvh flex-col bg-bg text-fg lg:h-dvh lg:overflow-hidden">
        <header className="flex items-center justify-between gap-4 px-4 pt-4 pb-3 sm:px-5">
          <div className="min-w-0">
            <h1 className="font-display text-3xl leading-none font-medium tracking-tight italic">
              Flux
            </h1>
            <p className="mt-1 text-sm text-muted">Vector field plotter</p>
          </div>
          <Button
            type="button"
            variant="secondary"
            className="lg:hidden"
            onClick={togglePlaying}
            aria-label={playing ? "Pause flow" : "Play flow"}
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4 translate-x-px" />}
            {playing ? "Pause" : "Play"}
          </Button>
        </header>

        <div className="flex flex-col gap-3 px-3 pb-3 sm:px-4 lg:px-5">
          <EquationBar />
          <PresetRail />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 overflow-x-hidden px-3 pb-4 sm:px-4 lg:grid-cols-[minmax(0,1fr)_20rem] lg:overflow-hidden lg:px-5 lg:pb-5">
          <div className="relative min-h-[52vh] overflow-hidden rounded-2xl p-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] lg:min-h-0">
            <FieldCanvas />
            <ProbeHud />
            <p className="pointer-events-none absolute right-3 bottom-3 text-[11px] tracking-wide text-subtle">
              {presetId ? presetId.replace("-", " ") : "custom"}
            </p>
          </div>
          <div className="lg:min-h-0 lg:overflow-y-auto">
            <ControlPanel />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
