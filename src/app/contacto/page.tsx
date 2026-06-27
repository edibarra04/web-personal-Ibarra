import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import { ScriptWord } from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contacto — Edgard Ibarra",
};

export default function ContactoPage() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center gap-8 py-20 text-center">
      <Reveal className="flex flex-col items-center gap-6">
        <h1 className="max-w-2xl font-display text-4xl uppercase leading-[1.05] sm:text-5xl">
          Agenda tu <ScriptWord>diagnóstico</ScriptWord> gratuito
        </h1>
        <p className="max-w-lg text-base text-ink-soft sm:text-lg">
          Es una conversación corta por WhatsApp para entender tu restaurante y ver qué se puede
          mejorar primero. No es una llamada de ventas.
        </p>
        <WhatsAppButton />
      </Reveal>
    </section>
  );
}
