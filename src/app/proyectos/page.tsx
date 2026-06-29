import type { Metadata } from "next";
import SectionHeading, { ScriptWord } from "@/components/ui/SectionHeading";
import ExpandGallery, { type ExpandGalleryItem } from "@/components/ui/ExpandGallery";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Proyectos — Edgard Ibarra",
};

const items: ExpandGalleryItem[] = projects.map((project, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: project.name,
  description: project.cardSummary,
  tags: project.scopeTags ?? (project.category ? [project.category] : undefined),
  href: `/proyectos/${project.slug}`,
  image: project.cover.src,
  imageAlt: project.cover.alt,
}));

const rows = [items.slice(0, 2), items.slice(2, 4)];

export default function ProyectosPage() {
  return (
    <div className="container-page section-y">
      <SectionHeading
        tag="Proyectos"
        title={
          <>
            Casos de <ScriptWord>éxito</ScriptWord>
          </>
        }
        description="Marcas gastronómicas con las que trabajé. Cada caso detalla el proceso real, no solo el resultado final."
      />

      <div className="mt-14 flex flex-col gap-6">
        {rows.map((row) => (
          <ExpandGallery key={row.map((item) => item.title).join("-")} items={row} />
        ))}
      </div>
    </div>
  );
}
