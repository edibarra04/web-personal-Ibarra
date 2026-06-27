import Image from "next/image";
import { cn } from "@/lib/cn";
import Icon from "./Icon";

type SmartImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
  ratioClassName?: string;
  label?: string;
  sizes?: string;
};

/**
 * Imagen consciente de placeholder: si `src` es null, muestra una caja
 * claramente etiquetada como "reemplazar imagen". Apenas se agregue un
 * archivo real en content/, esta misma pieza renderiza next/image.
 */
export default function SmartImage({
  src,
  alt,
  className,
  ratioClassName = "aspect-[4/3]",
  label,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: SmartImageProps) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-line bg-surface",
          ratioClassName,
          className
        )}
      >
        <div className="flex flex-col items-center gap-2 px-4 text-center text-ink-soft">
          <Icon name="image" className="h-7 w-7" />
          <span className="text-xs font-semibold uppercase tracking-wide">
            {label ?? "Imagen pendiente — reemplazar"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden rounded-2xl", ratioClassName, className)}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
