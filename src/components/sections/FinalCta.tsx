import Reveal from "@/components/motion/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ScriptWord } from "@/components/ui/SectionHeading";

export default function FinalCta() {
  return (
    <section className="container-page pb-24 sm:pb-32">
      <Reveal className="flex flex-col items-center gap-8 rounded-3xl bg-surface px-8 py-16 text-center sm:px-16">
        <h2 className="max-w-2xl font-display text-3xl uppercase leading-[1.05] sm:text-4xl md:text-5xl">
          Hablemos de tu <ScriptWord>marca</ScriptWord>
        </h2>
        <p className="max-w-xl text-base text-ink-soft sm:text-lg">
          Un diagnóstico gratuito por WhatsApp, sin compromiso. No es una llamada de ventas.
        </p>
        <WhatsAppButton />
      </Reveal>
    </section>
  );
}
