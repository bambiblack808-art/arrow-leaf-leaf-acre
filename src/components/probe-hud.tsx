import { useFieldStore } from "@/lib/field-store";

function fmt(n: number, digits = 2): string {
  if (!Number.isFinite(n)) return "—";
  const abs = Math.abs(n);
  if (abs >= 1000 || (abs !== 0 && abs < 0.005)) return n.toExponential(2);
  return n.toFixed(digits);
}

function deg(rad: number): string {
  if (!Number.isFinite(rad)) return "—";
  let d = (rad * 180) / Math.PI;
  if (d < 0) d += 360;
  return `${d.toFixed(0)}°`;
}

export function ProbeHud() {
  const probe = useFieldStore((s) => s.probe);
  const simT = useFieldStore((s) => s.simT);
  const usesT = useFieldStore((s) => s.usesT);
  const dim = !probe.active;

  return (
    <div
      className="pointer-events-none absolute top-3 left-3 z-10 rounded-xl bg-surface/90 px-3 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-[2px]"
      style={{ opacity: dim ? 0.72 : 1 }}
    >
      <dl className="grid grid-cols-[auto_auto] gap-x-3 gap-y-1 text-xs tabular-nums">
        <div className="contents">
          <dt className="text-subtle">x</dt>
          <dd className="text-fg">{fmt(probe.x)}</dd>
        </div>
        <div className="contents">
          <dt className="text-subtle">y</dt>
          <dd className="text-fg">{fmt(probe.y)}</dd>
        </div>
        <div className="contents">
          <dt className="text-subtle">vx</dt>
          <dd className="text-fg">{fmt(probe.vx)}</dd>
        </div>
        <div className="contents">
          <dt className="text-subtle">vy</dt>
          <dd className="text-fg">{fmt(probe.vy)}</dd>
        </div>
        <div className="contents">
          <dt className="text-subtle">|v|</dt>
          <dd className="text-fg">{fmt(probe.mag)}</dd>
        </div>
        <div className="contents">
          <dt className="text-subtle">θ</dt>
          <dd className="text-fg">{deg(probe.theta)}</dd>
        </div>
        {usesT ? (
          <div className="contents">
            <dt className="text-subtle">t</dt>
            <dd className="text-fg">{fmt(simT)}</dd>
          </div>
        ) : null}
      </dl>
    </div>
  );
}
