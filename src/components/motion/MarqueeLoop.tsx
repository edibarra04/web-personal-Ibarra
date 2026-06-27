"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/useReducedMotion";

type MarqueeLoopProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
};

/** Fila que se desplaza en loop continuo; estática si hay prefers-reduced-motion. */
export default function MarqueeLoop({ children, className, speed = 28 }: MarqueeLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reducedMotion) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [reducedMotion, speed]);

  return (
    <div className={cn("overflow-hidden", className)}>
      <div ref={trackRef} className="flex w-max">
        <div className="flex shrink-0 items-center">{children}</div>
        {!reducedMotion && (
          <div className="flex shrink-0 items-center" aria-hidden="true">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
