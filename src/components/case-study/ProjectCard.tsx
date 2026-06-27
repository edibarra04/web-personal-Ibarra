import Link from "next/link";
import SmartImage from "@/components/ui/SmartImage";
import Icon from "@/components/ui/Icon";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/proyectos/${project.slug}`} className="group flex flex-col gap-5">
      <SmartImage
        src={project.cover.src}
        alt={project.cover.alt}
        ratioClassName="aspect-[4/5]"
        label="Foto de portada — reemplazar"
        className="transition-transform duration-300 group-hover:-translate-y-1"
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg uppercase">{project.name}</h3>
          {project.scopeTag && (
            <span className="mt-1 inline-block text-xs font-semibold uppercase tracking-wide text-ink-soft">
              {project.scopeTag}
            </span>
          )}
        </div>
        <Icon
          name="arrow-right"
          className="mt-1 h-4 w-4 shrink-0 text-ink transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}
