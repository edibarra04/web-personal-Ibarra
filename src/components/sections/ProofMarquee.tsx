import MarqueeLoop from "@/components/motion/MarqueeLoop";
import Icon from "@/components/ui/Icon";
import { projects } from "@/content/projects";

export default function ProofMarquee() {
  return (
    <section className="border-y border-line bg-surface py-10">
      <MarqueeLoop speed={32}>
        {projects.map((project) => (
          <div
            key={project.slug}
            className="mx-4 flex items-center gap-3 rounded-full border border-line bg-bg px-6 py-3"
          >
            <Icon name="image" className="h-4 w-4 text-ink-soft" />
            <span className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
              {project.name}
            </span>
          </div>
        ))}
      </MarqueeLoop>
    </section>
  );
}
