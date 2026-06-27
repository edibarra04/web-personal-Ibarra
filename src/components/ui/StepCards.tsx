import StaggerReveal from "@/components/motion/StaggerReveal";

type Step = {
  title: string;
  description: string;
};

/** Tarjetas numeradas reutilizadas en casos de éxito y páginas de servicio. */
export default function StepCards({ steps }: { steps: Step[] }) {
  return (
    <StaggerReveal className="grid gap-6 sm:grid-cols-2">
      {steps.map((step, index) => (
        <div key={step.title} className="rounded-3xl border border-line bg-surface p-8">
          <span className="font-display text-3xl text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-display text-lg uppercase">{step.title}</h3>
          <p className="mt-3 text-base text-ink-soft">{step.description}</p>
        </div>
      ))}
    </StaggerReveal>
  );
}
