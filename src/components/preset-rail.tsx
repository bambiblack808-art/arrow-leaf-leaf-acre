import { PRESETS } from "@/lib/math/presets";
import { useFieldStore } from "@/lib/field-store";
import { cn } from "@/lib/utils";

export function PresetRail() {
  const presetId = useFieldStore((s) => s.presetId);
  const applyPreset = useFieldStore((s) => s.applyPreset);

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {PRESETS.map((preset) => {
        const active = preset.id === presetId;
        return (
          <button
            key={preset.id}
            type="button"
            title={preset.blurb}
            onClick={() => applyPreset(preset.id)}
            className={cn(
              "h-9 shrink-0 rounded-full px-3.5 text-sm transition-[background-color,color,box-shadow] duration-150 ease-out",
              active
                ? "bg-primary text-primary-fg"
                : "text-muted shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:bg-elevated hover:text-fg",
            )}
          >
            {preset.name}
          </button>
        );
      })}
    </div>
  );
}
