/** Objeciones típicas de un dueño de restaurante ocupado. Ajustar libremente. */
export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "No tengo tiempo para esto, ¿cuánto me va a quitar?",
    answer:
      "El diagnóstico inicial es una conversación corta por WhatsApp. Si avanzamos, organizo el trabajo (sesiones, entregas) alrededor de tu operación, no al revés.",
  },
  {
    question: "Ya probé con una agencia y no funcionó.",
    answer:
      "Trabajo exclusivamente con gastronomía. No soy generalista: el diagnóstico parte de cómo funciona un restaurante, no de una plantilla genérica de marketing.",
  },
  {
    question: "¿Esto es solo para redes sociales?",
    answer:
      "No. Cubre desde cómo se ve tu marca (fotos, identidad) hasta cómo se te encuentra y se reserva (web, menú digital). Las redes son una pieza, no todo el trabajo.",
  },
  {
    question: "¿Necesito cambiar todo de una vez?",
    answer:
      "No. El diagnóstico te dice qué mover primero según impacto y urgencia. Se puede avanzar por etapas.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Depende del alcance que necesite tu negocio. Eso se define después del diagnóstico gratuito, no antes.",
  },
];
