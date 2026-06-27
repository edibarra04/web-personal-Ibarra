import Reveal from "@/components/motion/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ScriptWord } from "@/components/ui/SectionHeading";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-bg">
      {/* AJUSTAR: reemplazar este glow por una foto de fondo real (ambiente / plato del restaurante) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-page relative flex flex-col items-center gap-8 py-24 text-center sm:py-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Solo 4 restaurantes por mes
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="max-w-3xl font-display text-4xl uppercase leading-[1.05] sm:text-5xl md:text-6xl">
            Tu restaurante tiene más valor del que está <ScriptWord>comunicando</ScriptWord>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-xl text-lg text-bg/70">
            Construyo la marca, el contenido y la presencia digital que hacen que más personas
            quieran ir a tu restaurante — no solo seguirlo en redes.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <WhatsAppButton label="Agendá tu diagnóstico gratuito" />
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-sm text-bg/50">Especializado 100% en gastronomía y hospitalidad</p>
        </Reveal>
      </div>
    </section>
  );
}
