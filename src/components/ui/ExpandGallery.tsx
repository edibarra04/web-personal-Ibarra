import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import Icon from "./Icon";

export type ExpandGalleryItem = {
  number: string;
  title: string;
  description?: string;
  tags?: string[];
  href: string;
  image?: string | null;
  imageAlt: string;
};

function CardBackground({ item }: { item: ExpandGalleryItem }) {
  return (
    <>
      {item.image ? (
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      ) : (
        <div
          aria-label={item.imageAlt}
          className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-black"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
    </>
  );
}

function CardInfo({ item, alwaysVisible }: { item: ExpandGalleryItem; alwaysVisible?: boolean }) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300 ease-out",
        alwaysVisible
          ? "mt-3 max-h-40 opacity-100"
          : "max-h-0 opacity-0 group-hover:mt-3 group-hover:max-h-40 group-hover:opacity-100 group-focus-visible:mt-3 group-focus-visible:max-h-40 group-focus-visible:opacity-100"
      )}
    >
      {item.description && <p className="text-sm text-white/80 sm:text-base">{item.description}</p>}
      {item.tags && item.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/30 px-3 py-1 text-xs text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Galería de paneles de igual ancho: el tamaño no cambia, al hacer hover
 * (o foco por teclado) solo aparece la información adicional dentro de la tarjeta.
 */
export default function ExpandGallery({ items }: { items: ExpandGalleryItem[] }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:h-[480px]">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group relative h-72 flex-1 overflow-hidden rounded-3xl lg:h-full"
        >
          <CardBackground item={item} />

          <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-ink opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
            <Icon name="arrow-up-right" className="h-5 w-5" />
          </span>

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <span className="font-display text-2xl text-accent">{item.number}</span>
            <h3 className="mt-2 font-display text-xl uppercase text-white sm:text-2xl">
              {item.title}
            </h3>
            {/* Mobile/tablet: info siempre visible (no hay hover). Desktop: solo al hover/foco. */}
            <div className="lg:hidden">
              <CardInfo item={item} alwaysVisible />
            </div>
            <div className="hidden lg:block">
              <CardInfo item={item} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
