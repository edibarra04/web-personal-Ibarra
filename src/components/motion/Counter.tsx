"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/**
 * Número que sube desde 0 al entrar en viewport.
 * Usar solo con datos reales confirmados — no renderizar con cifras inventadas.
 */
export default function Counter({ value, prefix = "", suffix = "", duration = 1.6, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }

    const counter = { val: 0 };
    el.textContent = `${prefix}0${suffix}`;
    const tween = gsap.to(counter, {
      val: value,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(counter.val)}${suffix}`;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, prefix, suffix, duration, reducedMotion]);

  return <span ref={ref} className={className} />;
}
