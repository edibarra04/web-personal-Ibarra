import Link from "next/link";
import SectionHeading, { ScriptWord } from "@/components/ui/SectionHeading";
import StaggerReveal from "@/components/motion/StaggerReveal";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { services } from "@/content/services";

export default function ServicesOverview() {
  return (
    <section className="container-page section-y">
      <SectionHeading
        tag="Servicios"
        title={
          <>
            Tres formas de hacer que tu marca se <ScriptWord>elija</ScriptWord>
          </>
        }
        description="Cada servicio resuelve un problema distinto. Juntos, construyen una marca consistente."
      />

      <StaggerReveal className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/servicios/${service.slug}`}
            className="group flex flex-col gap-6 rounded-3xl border border-line bg-surface p-8 transition-colors hover:border-ink"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-ink">
              <Icon name={service.icon} className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-xl uppercase">{service.title}</h3>
              <p className="mt-3 text-base text-ink-soft">{service.cardSummary}</p>
            </div>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink transition-transform duration-200 group-hover:translate-x-1">
              Conocer más
              <Icon name="arrow-right" className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </StaggerReveal>

      <div className="mt-12 flex justify-center">
        <Button href="/servicios" variant="secondary">
          Ver todos los servicios
        </Button>
      </div>
    </section>
  );
}
