import StaggerReveal from "@/components/motion/StaggerReveal";
import SmartImage from "@/components/ui/SmartImage";
import type { ProjectImage } from "@/content/projects";

export default function Gallery({ images }: { images: ProjectImage[] }) {
  return (
    <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {images.map((image) => (
        <SmartImage
          key={image.alt}
          src={image.src}
          alt={image.alt}
          ratioClassName="aspect-[4/3]"
          label="Pieza real — reemplazar"
        />
      ))}
    </StaggerReveal>
  );
}
