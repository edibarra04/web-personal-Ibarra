"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
};

/** Revela los hijos directos (tarjetas) con escala/opacidad escalonada. */
export default function StaggerReveal({ children, className, stagger = 0.12 }: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children);
    if (items.length === 0) return;

    if (reducedMotion) {
      gsap.set(items, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    gsap.set(items, { opacity: 0, y: 32, scale: 0.96 });
    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reducedMotion, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
