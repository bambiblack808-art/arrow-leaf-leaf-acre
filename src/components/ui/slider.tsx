import * as SliderPrimitive from "@radix-ui/react-slider";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Slider({ className, ...props }: ComponentProps<typeof SliderPrimitive.Root>) {
  return (
    <SliderPrimitive.Root
      className={cn(
        "relative flex h-11 w-full touch-none items-center select-none",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-elevated shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
        <SliderPrimitive.Range className="absolute h-full bg-primary/70" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block size-4 rounded-full bg-primary shadow-[0_0_0_1px_rgba(255,255,255,0.16)] transition-[scale] duration-150 ease-out focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(200,204,212,0.28)] active:scale-95" />
    </SliderPrimitive.Root>
  );
}
