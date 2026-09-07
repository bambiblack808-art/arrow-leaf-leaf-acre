import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md bg-elevated px-3 text-sm text-fg tabular-nums",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.08)] placeholder:text-subtle",
        "transition-[box-shadow,background-color] duration-150 ease-out",
        "focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_rgba(200,204,212,0.55)]",
        "disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}
