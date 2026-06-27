import Reveal from "@/components/motion/Reveal";
import ExpandGallery, { type ExpandGalleryItem } from "@/components/ui/ExpandGallery";
import { services } from "@/content/services";

const items: ExpandGalleryItem[] = services.map((service, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: service.title,
  shortTitle: service.shortLabel,
  description: service.problem,
  tags: service.tags,
  href: `/servicios/${service.slug}`,
  image: service.image,
  imageAlt: `Foto de ${service.title.toLowerCase()} — reemplazar`,
}));

export default function ServicesOverview() {
  return (
    <section className="bg-ink py-20 text-bg sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-bg/60">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Mis servicios
            </span>
            <h2 className="mt-5 font-display text-3xl uppercase leading-[1.05] sm:text-4xl">
              Tres maneras de que te elijan
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm lg:text-right">
            <p className="text-base text-bg/60">
              Pasá el mouse por cada una para ver cómo trabajo. Sueltas o como combo completo.
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <ExpandGallery items={items} />
        </div>
      </div>
    </section>
  );
}
