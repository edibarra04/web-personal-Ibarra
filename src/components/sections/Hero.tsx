import Reveal from "@/components/motion/Reveal";
import StaggerReveal from "@/components/motion/StaggerReveal";
import AnimatedGlow from "@/components/motion/AnimatedGlow";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ScriptWord } from "@/components/ui/SectionHeading";

const headlineWords = ["Tu", "restaurante", "tiene", "más", "valor", "del", "que", "está"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-bg">
      {/* AJUSTAR: reemplazar este glow por una foto de fondo real (ambiente / plato del restaurante) */}
      <AnimatedGlow />

      <div className="container-page relative flex flex-col items-center gap-8 py-24 text-center sm:py-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Solo 4 restaurantes por mes
          </span>
        </Reveal>

        <StaggerReveal
          as="h1"
          stagger={0.06}
          className="flex max-w-3xl flex-wrap justify-center gap-x-3 gap-y-1 font-display text-4xl uppercase leading-[1.05] sm:text-5xl md:text-6xl"
        >
          {headlineWords.map((word) => (
            <span key={word} className="inline-block">
              {word}
            </span>
          ))}
          <ScriptWord>comunicando</ScriptWord>
        </StaggerReveal>

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
