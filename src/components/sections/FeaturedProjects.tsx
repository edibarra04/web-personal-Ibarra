import SectionHeading, { ScriptWord } from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ExpandGallery, { type ExpandGalleryItem } from "@/components/ui/ExpandGallery";
import { projects } from "@/content/projects";

const items: ExpandGalleryItem[] = projects.slice(0, 2).map((project, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: project.name,
  description: project.cardSummary,
  tags: project.scopeTags ?? (project.category ? [project.category] : undefined),
  href: `/proyectos/${project.slug}`,
  image: project.cover.src,
  imageAlt: project.cover.alt,
}));

export default function FeaturedProjects() {
  return (
    <section className="container-page section-y">
      <SectionHeading
        tag="Proyectos"
        title={
          <>
            Marcas que ya trabajan su <ScriptWord>consistencia</ScriptWord>
          </>
        }
      />

      <div className="mt-14">
        <ExpandGallery items={items} />
      </div>

      <div className="mt-12 flex justify-center">
        <Button href="/proyectos" variant="secondary">
          Ver todos los proyectos
        </Button>
      </div>
    </section>
  );
}
