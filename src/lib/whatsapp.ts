import { siteConfig } from "@/content/site-config";

/** Arma el link de wa.me con el mensaje pre-cargado configurado en site-config.ts. */
export function buildWhatsAppLink(message: string = siteConfig.whatsappDefaultMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
