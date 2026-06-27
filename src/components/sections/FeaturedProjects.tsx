import SectionHeading, { ScriptWord } from "@/components/ui/SectionHeading";
import StaggerReveal from "@/components/motion/StaggerReveal";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/case-study/ProjectCard";
import { projects } from "@/content/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

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

      <StaggerReveal className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </StaggerReveal>

      <div className="mt-12 flex justify-center">
        <Button href="/proyectos" variant="secondary">
          Ver todos los proyectos
        </Button>
      </div>
    </section>
  );
}
