"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import Icon from "./Icon";

export type ExpandGalleryItem = {
  number: string;
  title: string;
  shortTitle?: string;
  description?: string;
  tags?: string[];
  href: string;
  image?: string | null;
  imageAlt: string;
};

function CardOverlay({ item, expanded }: { item: ExpandGalleryItem; expanded: boolean }) {
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

      {expanded && (
        <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-ink">
          <Icon name="arrow-up-right" className="h-5 w-5" />
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <span className="font-display text-2xl text-accent">{item.number}</span>
        <h3 className="mt-2 font-display text-xl uppercase text-white sm:text-2xl">
          {expanded ? item.title : item.shortTitle ?? item.title}
        </h3>
        <div
          className={cn(
            "overflow-hidden transition-all duration-500 ease-out",
            expanded ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {item.description && (
            <p className="text-sm text-white/80 sm:text-base">{item.description}</p>
          )}
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
      </div>
    </>
  );
}

/**
 * Galería de paneles que se expanden al pasar el mouse (desktop).
 * En mobile no hay hover: se muestran apilados, siempre con su contenido visible.
 */
export default function ExpandGallery({ items }: { items: ExpandGalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* Desktop: fila con expansión al hover */}
      <div className="hidden gap-4 lg:flex lg:h-[480px]">
        {items.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(index)}
            onBlur={() => setActiveIndex(null)}
            className="relative overflow-hidden rounded-3xl transition-[flex-grow] duration-500 ease-out"
            style={{ flexGrow: activeIndex === index ? items.length * 2 : 1, flexBasis: 0 }}
          >
            <CardOverlay item={item} expanded={activeIndex === index} />
          </Link>
        ))}
      </div>

      {/* Mobile / tablet: lista apilada, siempre expandida */}
      <div className="flex flex-col gap-4 lg:hidden">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="relative h-72 overflow-hidden rounded-3xl"
          >
            <CardOverlay item={item} expanded />
          </Link>
        ))}
      </div>
    </>
  );
}
