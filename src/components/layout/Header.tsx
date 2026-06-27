"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl uppercase tracking-tight"
          onClick={() => setOpen(false)}
        >
          Edgard <span className="font-script text-ink normal-case">Ibarra</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton label="Diagnóstico gratuito" />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-ink transition-transform duration-300",
              open && "translate-y-1.5 rotate-45"
            )}
          />
          <span className={cn("h-0.5 w-6 bg-ink transition-opacity duration-300", open && "opacity-0")} />
          <span
            className={cn(
              "h-0.5 w-6 bg-ink transition-transform duration-300",
              open && "-translate-y-1.5 -rotate-45"
            )}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-line transition-[max-height] duration-300 ease-out lg:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="container-page flex flex-col gap-5 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <WhatsAppButton label="Diagnóstico gratuito" className="mt-2 self-start" />
        </nav>
      </div>
    </header>
  );
}
