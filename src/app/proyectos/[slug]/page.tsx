import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";
import { projects, getProjectBySlug } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project ? `${project.name} — Caso de éxito` : "Proyecto no encontrado",
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyTemplate project={project} />;
}
