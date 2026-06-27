import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faq } from "@/content/faq";

export default function Faq() {
  return (
    <section className="container-page section-y">
      <SectionHeading tag="Preguntas frecuentes" title="Antes de escribir, esto te puede servir" />

      <Reveal className="mx-auto mt-14 max-w-3xl" y={20}>
        <Accordion items={faq} />
      </Reveal>
    </section>
  );
}
