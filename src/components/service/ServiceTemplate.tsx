import Reveal from "@/components/motion/Reveal";
import StaggerReveal from "@/components/motion/StaggerReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StepCards from "@/components/ui/StepCards";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Icon from "@/components/ui/Icon";
import type { Service } from "@/content/services";

/**
 * Plantilla reutilizable para cada página de servicio.
 * Esta ronda solo /servicios/contenido usa la versión completa;
 * web y branding quedan como stub hasta la siguiente ronda.
 */
export default function ServiceTemplate({ service }: { service: Service }) {
  return (
    <div>
      <section className="container-page pt-14 pb-10 sm:pt-20">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-ink">
            <Icon name={service.icon} className="h-7 w-7" />
          </div>
          <h1 className="font-display text-4xl uppercase leading-[1.05] sm:text-5xl">
            {service.title}
          </h1>
          <p className="max-w-xl text-base text-ink-soft sm:text-lg">{service.cardSummary}</p>
        </Reveal>
      </section>

      <section className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h2 className="font-display text-2xl uppercase">Qué problema resuelve</h2>
            <p className="mt-4 text-base text-ink-soft sm:text-lg">{service.problem}</p>
          </Reveal>

          <StaggerReveal className="flex flex-col gap-6">
            <div className="rounded-3xl border border-line bg-surface p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                Es para
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {service.fitFor.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-dashed border-line p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                No es para
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {service.notFitFor.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerReveal>
        </div>
      </section>

      <section className="container-page section-y">
        <SectionHeading tag="El proceso" title="Cómo se ejecuta" align="left" />
        <div className="mt-10">
          <StepCards steps={service.process} />
        </div>
      </section>

      <section className="container-page pb-24">
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl bg-surface px-8 py-16 text-center sm:px-16">
          <h2 className="font-display text-2xl uppercase sm:text-3xl">
            ¿Hablamos de {service.shortLabel.toLowerCase()} para tu restaurante?
          </h2>
          <WhatsAppButton
            message={`Hola Edgard, quiero agendar mi diagnóstico gratuito sobre ${service.title.toLowerCase()}.`}
          />
        </Reveal>
      </section>
    </div>
  );
}
