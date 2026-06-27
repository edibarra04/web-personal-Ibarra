import Reveal from "@/components/motion/Reveal";
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
            <span>{project.dateLabel}</span>
            {project.scopeTag && (
              <span className="rounded-full bg-accent px-3 py-1 text-accent-ink">
                {project.scopeTag}
              </span>
            )}
          </div>
          <h1 className="font-display text-4xl uppercase leading-[1.05] sm:text-5xl md:text-6xl">
            {project.name}
          </h1>
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
      <section className="container-page pb-24">
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl bg-surface px-8 py-16 text-center sm:px-16">
          <h2 className="font-display text-2xl uppercase sm:text-3xl">
            ¿Querés un resultado parecido para tu restaurante?
          </h2>
          <WhatsAppButton />
        </Reveal>
      </section>
    </article>
  );
}
