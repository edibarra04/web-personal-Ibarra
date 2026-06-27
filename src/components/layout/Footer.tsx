import Link from "next/link";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site-config";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Footer() {
  return (
    <footer className="bg-ink text-bg">
      <div className="container-page section-y">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl uppercase tracking-tight">
              Edgard <span className="font-script text-accent normal-case">Ibarra</span>
            </p>
            <p className="mt-4 text-sm text-bg/70">{siteConfig.role}.</p>
            <p className="mt-2 text-sm text-bg/70">
              Trabajo exclusivamente con restaurantes, bares, cafeterías y hoteles boutique.
            </p>
            <WhatsAppButton className="mt-6" />
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bg/50">Servicios</p>
              <ul className="mt-4 flex flex-col gap-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="text-sm text-bg/80 transition-colors hover:text-accent"
                    >
                      {service.shortLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bg/50">Sitio</p>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <Link href="/proyectos" className="text-sm text-bg/80 transition-colors hover:text-accent">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="/sobre-mi" className="text-sm text-bg/80 transition-colors hover:text-accent">
                    Sobre mí
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-sm text-bg/80 transition-colors hover:text-accent">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bg/50">Contacto</p>
              <ul className="mt-4 flex flex-col gap-3">
                <li className="text-sm text-bg/80">WhatsApp: reemplazar número</li>
                <li className="text-sm text-bg/80">Correo: reemplazar correo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-bg/15 pt-6 text-xs text-bg/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Edgard Ibarra. Todos los derechos reservados.</p>
          <p>Sitio en construcción — contenido de marcador de posición.</p>
        </div>
      </div>
    </footer>
  );
}
