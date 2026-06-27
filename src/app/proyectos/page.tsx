import type { Metadata } from "next";
import SectionHeading, { ScriptWord } from "@/components/ui/SectionHeading";
import StaggerReveal from "@/components/motion/StaggerReveal";
import ProjectCard from "@/components/case-study/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Proyectos — Edgard Ibarra",
};

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

      <StaggerReveal className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </StaggerReveal>
    </div>
  );
}
