"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

/** Fondo con glow animado — AJUSTAR: reemplazar por foto real de fondo cuando esté disponible. */
export default function AnimatedGlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reducedMotion) return;

    const blobs = Array.from(container.children);
    const tweens = blobs.map((blob, index) =>
      gsap.to(blob, {
        x: index % 2 === 0 ? 60 : -50,
        y: index % 2 === 0 ? -40 : 50,
        duration: 10 + index * 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
    );

    return () => tweens.forEach((tween) => tween.kill());
  }, [reducedMotion]);

  return (
    <div ref={containerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-[20rem] w-[20rem] rounded-full bg-accent/10 blur-3xl" />
    </div>
  );
}
