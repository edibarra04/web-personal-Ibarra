import Reveal from "@/components/motion/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Button from "@/components/ui/Button";
import SmartImage from "@/components/ui/SmartImage";
import { ScriptWord } from "@/components/ui/SectionHeading";

export default function Hero() {
  return (
    <section className="container-page pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <Reveal>
            <h1 className="font-display text-4xl uppercase leading-[1.05] sm:text-5xl md:text-6xl">
              Que tu restaurante se vea, se recuerde y se <ScriptWord>elija</ScriptWord>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-lg text-lg text-ink-soft">
              Estrategia de marketing especializada en restaurantes, bares, cafeterías y hoteles
              boutique. Convierto un buen producto en una marca que se elige, no en una que se
              descubre por accidente.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap items-center gap-4">
              <WhatsAppButton />
              <Button href="/servicios" variant="secondary">
                Ver servicios
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={40}>
          <SmartImage
            src={null}
            alt="Foto o video de Edgard Ibarra — reemplazar con material real"
            ratioClassName="aspect-[4/5]"
            label="Foto / video — reemplazar"
            className="w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
