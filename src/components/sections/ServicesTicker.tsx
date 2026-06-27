import MarqueeLoop from "@/components/motion/MarqueeLoop";
import Icon from "@/components/ui/Icon";

const items = ["Reservas online", "Diseño web", "Branding", "Identidad visual", "SEO local"];

export default function ServicesTicker() {
  return (
    <section className="border-y border-bg/10 bg-ink py-6">
      <MarqueeLoop speed={26}>
        {items.map((item) => (
          <span key={item} className="mx-6 flex items-center gap-3">
            <Icon name="sparkle" className="h-4 w-4 text-accent" />
            <span className="text-base font-semibold text-bg sm:text-lg">{item}</span>
          </span>
        ))}
      </MarqueeLoop>
    </section>
  );
}
