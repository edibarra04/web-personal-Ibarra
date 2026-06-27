/**
 * Copy de borrador para los 3 servicios, basada en el brief.
 * Revisar y ajustar el texto antes de publicar — no contiene cifras ni promesas de resultado.
 */
export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: "contenido" | "web" | "branding";
  title: string;
  shortLabel: string;
  cardSummary: string;
  icon: "camera" | "globe" | "stamp";
  problem: string;
  process: ServiceProcessStep[];
  fitFor: string[];
  notFitFor: string[];
};

export const services: Service[] = [
  {
    slug: "contenido",
    title: "Creación de contenido",
    shortLabel: "Contenido",
    cardSummary:
      "Foto y video que muestran tu comida y tu lugar como realmente se sienten en mesa.",
    icon: "camera",
    problem:
      "Tu comida se ve mejor en persona que en redes. Eso significa que estás perdiendo clientes antes de que pisen el local: deciden con la foto, no con el plato.",
    process: [
      {
        title: "Diagnóstico visual",
        description:
          "Reviso tu feed, tu carta y tu local actual para identificar qué se está perdiendo en la traducción a pantalla.",
      },
      {
        title: "Plan de contenido",
        description:
          "Defino qué piezas necesitás (foto de producto, video corto, cobertura de ambiente) y con qué frecuencia, según tu operación real.",
      },
      {
        title: "Producción",
        description:
          "Sesión en sitio, dirigida para no interrumpir el servicio, con foco en los platos y momentos que más venden.",
      },
      {
        title: "Entrega y uso",
        description:
          "Piezas editadas y listas para publicar, con guía simple de cuándo y cómo usarlas.",
      },
    ],
    fitFor: [
      "Restaurantes con buen producto pero un feed que no le hace justicia.",
      "Dueños que quieren material listo para usar, sin tener que aprender a editar.",
    ],
    notFitFor: [
      "Negocios que buscan solo \"más posteos\" sin una dirección de marca detrás.",
    ],
  },
  {
    slug: "web",
    title: "Diseño web",
    shortLabel: "Web",
    cardSummary:
      "Menú digital y reservas que hacen fácil elegirte desde el celular.",
    icon: "globe",
    problem:
      "Si alguien te busca desde el celular y no encuentra tu menú claro o una forma simple de reservar, elige al de la competencia que sí lo tiene.",
    process: [
      {
        title: "Diagnóstico digital",
        description:
          "Reviso tu presencia actual (o la ausencia de ella): qué encuentra un cliente cuando te busca hoy.",
      },
      {
        title: "Arquitectura del sitio",
        description:
          "Defino qué necesita tu sitio realmente: menú digital, reservas, ubicación, contacto — sin relleno innecesario.",
      },
      {
        title: "Diseño y construcción",
        description:
          "Sitio rápido, mobile-first, con tu identidad y tus piezas reales, no plantillas genéricas.",
      },
      {
        title: "Publicación y entrega",
        description:
          "Sitio en línea, con acceso para que lo actualices o lo actualicemos juntos cuando haga falta.",
      },
    ],
    fitFor: [
      "Restaurantes sin sitio propio o con uno desactualizado.",
      "Negocios que reciben reservas por llamada o WhatsApp y quieren ordenar ese proceso.",
    ],
    notFitFor: [
      "Cadenas que ya tienen un sistema de reservas corporativo integrado.",
    ],
  },
  {
    slug: "branding",
    title: "Branding y estrategia de marca",
    shortLabel: "Branding",
    cardSummary:
      "Una identidad y un mensaje consistente para que se te recuerde y se te elija.",
    icon: "stamp",
    problem:
      "Sin una marca clara, cada pieza que publicás se ve distinta y no construye nada. La gente no recuerda lo que no es consistente.",
    process: [
      {
        title: "Diagnóstico y posicionamiento",
        description:
          "Entiendo qué te hace distinto y cómo se percibe hoy tu marca frente a la competencia local.",
      },
      {
        title: "Identidad visual",
        description:
          "Defino los elementos que hacen reconocible tu marca en cualquier pieza: del menú a la fachada.",
      },
      {
        title: "Estrategia de contenido",
        description:
          "Un lineamiento claro de qué comunicar y cómo, para que cada publicación sume a la misma idea de marca.",
      },
      {
        title: "Ejecución",
        description:
          "Acompañamiento en la puesta en marcha, para que la consistencia no se pierda en el día a día.",
      },
    ],
    fitFor: [
      "Restaurantes con identidad inconsistente entre local, carta y redes.",
      "Dueños que están por abrir o reabrir y quieren partir con una base sólida.",
    ],
    notFitFor: [
      "Negocios que buscan un logo aislado sin trabajar la estrategia detrás.",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
