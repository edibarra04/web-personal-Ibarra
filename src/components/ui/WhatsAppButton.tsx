import Button from "./Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

/** CTA único del sitio. El número y el mensaje viven en content/site-config.ts. */
export default function WhatsAppButton({
  message,
  label = "Agenda tu diagnóstico gratuito",
  variant = "primary",
  className,
}: WhatsAppButtonProps) {
  return (
    <Button href={buildWhatsAppLink(message)} external variant={variant} className={className}>
      {label}
    </Button>
  );
}
