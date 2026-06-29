import Reveal from "@/components/motion/Reveal";
import AnimatedGlow from "@/components/motion/AnimatedGlow";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StepCards from "@/components/ui/StepCards";
import Gallery from "./Gallery";
import type { Project } from "@/content/projects";

/**
 * Plantilla reutilizable para cada caso de éxito (1 encabezado + 6 secciones).
 * El contenido vive en src/content/projects.ts — esta plantilla solo da forma.
 */
export default function CaseStudyTemplate({ project }: { project: Project }) {
  return (
    <article>
      {/* 1. Encabezado */}
      <section className="container-page pt-14 pb-10 sm:pt-20">
        <Reveal className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
            {project.category && (
              <span className="rounded-full bg-accent px-3 py-1 text-accent-ink">
                {project.category}
              </span>
            )}
            <span>{project.dateLabel}</span>
          </div>
          <h1 className="font-display text-4xl uppercase leading-[1.05] sm:text-5xl md:text-6xl">
            {project.name}
          </h1>
          <p className="max-w-2xl text-base text-ink-soft sm:text-lg">{project.heroSummary}</p>
          {project.scopeTags && project.scopeTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                Alcance
              </span>
              <div className="flex flex-wrap gap-2">
                {project.scopeTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-sm font-medium text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Reveal>
      </section>

      <Reveal className="container-page" y={20}>
        <SmartImage
          src={project.cover.src}
          alt={project.cover.alt}
          ratioClassName="aspect-[16/9]"
          label="Foto de portada — reemplazar"
        />
      </Reveal>

      <div className="container-page section-y flex flex-col gap-20">
        {/* 2 y 3. Acerca del proyecto + Objetivo */}
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl uppercase">Acerca del proyecto</h2>
            <p className="mt-4 text-base text-ink-soft sm:text-lg">{project.about}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl uppercase">Objetivo</h2>
            <p className="mt-4 text-base text-ink-soft sm:text-lg">{project.objective}</p>
          </Reveal>
        </div>

        {/* 4. Enfoque y estrategia */}
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-2xl uppercase">Enfoque y estrategia</h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">{project.approach}</p>
        </Reveal>

        {/* 5. El proceso */}
        <div>
          <SectionHeading tag="El proceso" title="Cómo se trabajó" align="left" />
          <div className="mt-10">
            <StepCards steps={project.process} />
          </div>
        </div>

        {/* 6. Galería visual */}
        <div>
          <SectionHeading tag="Piezas" title="Galería del proyecto" align="left" />
          <div className="mt-10">
            <Gallery images={project.gallery} />
          </div>
        </div>
      </div>

      {/* 7. Cierre con CTA */}
      <section className="relative overflow-hidden bg-ink py-24 text-bg sm:py-32">
        <AnimatedGlow />
        <Reveal className="container-page relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl leading-[1.05]">
            <span className="block font-body text-2xl font-medium tracking-tight text-bg sm:text-3xl md:text-4xl">
              Tu producto es bueno
            </span>
            <span className="mt-1 block font-display text-3xl uppercase sm:text-4xl md:text-5xl">
              Tu marca no lo demuestra
            </span>
          </h2>
          <p className="max-w-xl text-base text-bg/70 sm:text-lg">
            Agendá un diagnóstico gratis de 30 minutos y te digo, sin vueltas, qué cambiaría para
            que tu marca esté a la altura de tu producto.
          </p>
          <WhatsAppButton label="Escribime por WhatsApp" />
        </Reveal>
      </section>
    </article>
  );
}
