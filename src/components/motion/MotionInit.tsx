"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Se monta una vez en el layout para garantizar que ScrollTrigger esté registrado. */
export default function MotionInit() {
  return null;
}
