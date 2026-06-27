import SectionHeading, { ScriptWord } from "@/components/ui/SectionHeading";
import StaggerReveal from "@/components/motion/StaggerReveal";

const today = [
  "Buen producto, pero el feed no lo demuestra.",
  "Presencia digital dispersa: cada red dice algo distinto.",
  "El cliente decide antes de llegar — y a veces decide por otro.",
];

const potential = [
  "Una marca reconocible en cada punto de contacto.",
  "Contenido que muestra lo que se siente comer ahí.",
  "Un cliente que llega ya convencido de elegirte.",
];

export default function TensionBlock() {
  return (
    <section className="container-page section-y">
      <SectionHeading
        tag="Diagnóstico"
        title={
          <>
            Tu restaurante podría estar siendo descubierto y elegido <ScriptWord>más</ScriptWord>
          </>
        }
      />

      <StaggerReveal className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-line bg-surface p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Hoy</p>
          <ul className="mt-6 flex flex-col gap-4">
            {today.map((item) => (
              <li key={item} className="flex gap-3 text-base text-ink-soft sm:text-lg">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-ink p-8 text-bg sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Lo que podría ser
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            {potential.map((item) => (
              <li key={item} className="flex gap-3 text-base sm:text-lg">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </StaggerReveal>
    </section>
  );
}
