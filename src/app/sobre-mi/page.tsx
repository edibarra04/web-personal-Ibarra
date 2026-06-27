import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import StaggerReveal from "@/components/motion/StaggerReveal";
import SectionHeading, { ScriptWord } from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sobre mí — Edgard Ibarra",
};

const principles = [
  "[PLACEHOLDER — principio 1 de cómo trabajás]",
  "[PLACEHOLDER — principio 2 de cómo trabajás]",
  "[PLACEHOLDER — principio 3 de cómo trabajás]",
];

export default function SobreMiPage() {
  return (
    <div>
      <section className="container-page pt-14 pb-10 sm:pt-20">
        <Reveal>
          <SectionHeading
            tag="Sobre mí"
            title={
              <>
                Especializado en <ScriptWord>gastronomía</ScriptWord>, sin atajos
              </>
            }
          />
        </Reveal>
      </section>

      <section className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SmartImage
              src={null}
              alt="Foto de Edgard Ibarra — reemplazar con foto real"
              ratioClassName="aspect-[4/5]"
              label="Foto personal — reemplazar"
            />
          </Reveal>

          <div className="flex flex-col gap-10">
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl uppercase">Cómo empecé</h2>
              <p className="mt-4 text-base text-ink-soft sm:text-lg">
                [PLACEHOLDER — historia fundacional: cómo empezaste a trabajar en marketing para
                restaurantes].
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-2xl uppercase">Por qué gastronomía</h2>
              <p className="mt-4 text-base text-ink-soft sm:text-lg">
                [PLACEHOLDER — por qué te especializaste en restaurantes y no en otro rubro].
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page section-y">
        <SectionHeading tag="Cómo trabajo" title="Principios" align="left" />
        <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-3">
          {principles.map((principle, index) => (
            <div key={principle} className="rounded-3xl border border-line bg-surface p-8">
              <span className="font-display text-3xl text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-base text-ink-soft">{principle}</p>
            </div>
          ))}
        </StaggerReveal>
      </section>

      <section className="container-page pb-24">
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl bg-surface px-8 py-16 text-center sm:px-16">
          <h2 className="font-display text-2xl uppercase sm:text-3xl">
            Conversemos sobre tu restaurante
          </h2>
          <WhatsAppButton />
        </Reveal>
      </section>
    </div>
  );
}
