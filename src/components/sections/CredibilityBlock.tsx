import Reveal from "@/components/motion/Reveal";
import { ScriptWord } from "@/components/ui/SectionHeading";

export default function CredibilityBlock() {
  return (
    <section className="container-page section-y">
      <Reveal className="flex flex-col items-center gap-6 text-center">
        <p className="max-w-4xl font-display text-3xl uppercase leading-[1.1] sm:text-4xl md:text-5xl">
          Trabajo exclusivamente con <ScriptWord>gastronomía</ScriptWord>. No soy generalista.
        </p>
        <p className="max-w-xl text-base text-ink-soft sm:text-lg">
          Restaurantes, bares, cafeterías y hoteles boutique. Un solo enfoque, llevado a fondo.
        </p>
      </Reveal>
    </section>
  );
}
