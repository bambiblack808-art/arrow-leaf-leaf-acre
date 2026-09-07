import * as SwitchPrimitive from "@radix-ui/react-switch";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Switch({ className, ...props }: ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full",
        "bg-elevated shadow-[0_0_0_1px_rgba(255,255,255,0.10)]",
        "transition-[background-color] duration-150 ease-out",
        "data-[state=checked]:bg-primary",
        "focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(200,204,212,0.28)]",
        "disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="pointer-events-none block size-5 translate-x-0.5 rounded-full bg-fg transition-transform duration-150 ease-out data-[state=checked]:translate-x-[22px] data-[state=checked]:bg-primary-fg" />
    </SwitchPrimitive.Root>
  );
}
