import { useRef, useState, type KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useFieldStore } from "@/lib/field-store";

const CHIPS = [
  { label: "sin", insert: "sin()" },
  { label: "cos", insert: "cos()" },
  { label: "exp", insert: "exp()" },
  { label: "sqrt", insert: "sqrt()" },
  { label: "x²", insert: "x^2" },
  { label: "t", insert: "t" },
];

export function EquationBar() {
  const vxText = useFieldStore((s) => s.vxText);
  const vyText = useFieldStore((s) => s.vyText);
  const vxError = useFieldStore((s) => s.vxError);
  const vyError = useFieldStore((s) => s.vyError);
  const setVx = useFieldStore((s) => s.setVx);
  const setVy = useFieldStore((s) => s.setVy);
  const usesT = useFieldStore((s) => s.usesT);
  const vxRef = useRef<HTMLInputElement>(null);
  const vyRef = useRef<HTMLInputElement>(null);
  const [focus, setFocus] = useState<"vx" | "vy">("vx");

  const insert = (snippet: string) => {
    const isVx = focus === "vx";
    const el = isVx ? vxRef.current : vyRef.current;
    const current = isVx ? vxText : vyText;
    const start = el?.selectionStart ?? current.length;
    const end = el?.selectionEnd ?? current.length;
    const next = current.slice(0, start) + snippet + current.slice(end);
    if (isVx) setVx(next);
    else setVy(next);
    requestAnimationFrame(() => {
      const caret = start + (snippet.endsWith("()") ? snippet.length - 1 : snippet.length);
      el?.focus();
      el?.setSelectionRange(caret, caret);
    });
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  const error = vxError || vyError;

  return (
    <section className="rounded-2xl bg-surface px-3 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] sm:px-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <p className="flex shrink-0 items-baseline gap-2 text-fg">
          <span className="font-display text-2xl italic leading-none">F</span>
          <span className="font-display text-lg italic text-muted">(x, y{usesT ? ", t" : ""})</span>
          <span className="text-muted">=</span>
        </p>

        <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center">
          <span className="hidden font-display text-xl text-subtle sm:inline">(</span>
          <div className="min-w-0 flex-1">
            <label className="sr-only" htmlFor="vx-input">
              x-component of the field
            </label>
            <Input
              id="vx-input"
              ref={vxRef}
              value={vxText}
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              aria-invalid={Boolean(vxError)}
              placeholder="-y"
              onFocus={() => setFocus("vx")}
              onChange={(e) => setVx(e.target.value)}
              onKeyDown={onKey}
              className={cn(
                "font-medium tracking-tight",
                vxError && "shadow-[0_0_0_1px_rgba(217,114,114,0.7)]",
              )}
            />
          </div>
          <span className="hidden text-muted sm:inline">,</span>
          <div className="min-w-0 flex-1">
            <label className="sr-only" htmlFor="vy-input">
              y-component of the field
            </label>
            <Input
              id="vy-input"
              ref={vyRef}
              value={vyText}
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              aria-invalid={Boolean(vyError)}
              placeholder="x"
              onFocus={() => setFocus("vy")}
              onChange={(e) => setVy(e.target.value)}
              onKeyDown={onKey}
              className={cn(
                "font-medium tracking-tight",
                vyError && "shadow-[0_0_0_1px_rgba(217,114,114,0.7)]",
              )}
            />
          </div>
          <span className="hidden font-display text-xl text-subtle sm:inline">)</span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {CHIPS.map((chip) => (
          <button
            key={chip.label}
            type="button"
            onClick={() => insert(chip.insert)}
            className="h-8 rounded-full px-3 text-xs text-muted shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-[background-color,color] duration-150 ease-out hover:bg-elevated hover:text-fg"
          >
            {chip.label}
          </button>
        ))}
        <p
          className={cn(
            "ml-auto text-xs",
            error ? "text-danger" : "text-subtle",
          )}
          role={error ? "alert" : undefined}
        >
          {error ?? "x and y are position. t runs while playing."}
        </p>
      </div>
    </section>
  );
}
