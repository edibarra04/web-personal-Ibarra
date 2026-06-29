/**
 * Casos de éxito. Los nombres de los proyectos son reales; el cuerpo de cada
 * sección queda en placeholder explícito hasta que se reemplace con información
 * real y autorizada por cada cliente. No inventar contexto, objetivos ni cifras.
 */
export type ProjectProcessStep = {
  title: string;
  description: string;
};

export type ProjectImage = {
  src: string | null;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  dateLabel: string;
  /** Badge corto junto a la fecha, ej. "Bar de autor" o "Producción fotográfica". */
  category?: string;
  /** Fila "Alcance": servicios concretos cubiertos en el proyecto. */
  scopeTags?: string[];
  /** Bajada debajo del título, en la página del caso. */
  heroSummary: string;
  cardSummary: string;
  cover: ProjectImage;
  about: string;
  objective: string;
  approach: string;
  process: ProjectProcessStep[];
  gallery: ProjectImage[];
};

const placeholder = (label: string) => `[PLACEHOLDER — completar con información real: ${label}]`;

export const projects: Project[] = [
  {
    slug: "omg",
    name: "OMG",
    dateLabel: "[PLACEHOLDER — mes y año]",
    heroSummary: placeholder("bajada de una línea para la página del caso OMG"),
    cardSummary: placeholder("resumen breve del proyecto para la tarjeta de listado"),
    cover: { src: null, alt: "Foto de portada del proyecto OMG — reemplazar con imagen real" },
    about: placeholder("contexto del negocio y el reto de marca que tenía OMG"),
    objective: placeholder("objetivo específico acordado con OMG"),
    approach: placeholder("enfoque y estrategia aplicados en el proyecto OMG"),
    process: [
      {
        title: "Diagnóstico y posicionamiento",
        description: placeholder("hallazgos del diagnóstico inicial de OMG"),
      },
      {
        title: "Identidad visual",
        description: placeholder("decisiones de identidad visual tomadas para OMG"),
      },
      {
        title: "Estrategia de contenido",
        description: placeholder("lineamientos de contenido definidos para OMG"),
      },
      {
        title: "Ejecución",
        description: placeholder("cómo se puso en marcha la estrategia en OMG"),
      },
    ],
    gallery: [
      { src: null, alt: "Pieza real del proyecto OMG — reemplazar 1" },
      { src: null, alt: "Pieza real del proyecto OMG — reemplazar 2" },
      { src: null, alt: "Pieza real del proyecto OMG — reemplazar 3" },
      { src: null, alt: "Pieza real del proyecto OMG — reemplazar 4" },
    ],
  },
  {
    slug: "la-barra-del-tigre",
    name: "La Barra del Tigre",
    dateLabel: "2025",
    category: "Bar de autor",
    scopeTags: ["Branding", "Fotografía", "Video", "Web con reservas"],
    heroSummary:
      "Una cocina premiada que se veía en redes como cualquier bar de la cuadra. Rearmamos la marca, el contenido y la web con reservas para que la presencia digital estuviera a la altura del plato.",
    cardSummary:
      "Rebranding completo, fotografía, video y una web con reservas para un bar de autor con cocina premiada.",
    cover: {
      src: null,
      alt: "Foto de portada del proyecto La Barra del Tigre — reemplazar con imagen real",
    },
    about:
      "Bar de autor con cocina reconocida, pero con un Instagram hecho desde el celular y sin sistema de reservas online.",
    objective:
      "Que la marca comunicara el nivel real de la propuesta y capturar reservas directas sin depender del teléfono.",
    approach:
      "Rebranding completo, dirección de arte para foto y video, y una web rápida con menú y reservas integradas.",
    process: [
      {
        title: "Diagnóstico y posicionamiento",
        description: "Entender el negocio y dónde se pierde valor.",
      },
      {
        title: "Identidad visual",
        description: "La marca que se reconoce antes de leer el cartel.",
      },
      {
        title: "Estrategia de contenido",
        description: "Qué se dice, cómo y dónde.",
      },
      {
        title: "Ejecución",
        description: "Producción de foto, video, web y piezas.",
      },
    ],
    gallery: [
      {
        src: "/images/proyectos/la-barra-del-tigre/galeria-01.png",
        alt: "Pieza de marca de La Barra del Tigre",
      },
      { src: null, alt: "Pieza real del proyecto La Barra del Tigre — reemplazar 2" },
      { src: null, alt: "Pieza real del proyecto La Barra del Tigre — reemplazar 3" },
      { src: null, alt: "Pieza real del proyecto La Barra del Tigre — reemplazar 4" },
    ],
  },
  {
    slug: "lima",
    name: "LIMA",
    dateLabel: "[PLACEHOLDER — mes y año]",
    heroSummary: placeholder("bajada de una línea para la página del caso LIMA"),
    cardSummary: placeholder("resumen breve del proyecto para la tarjeta de listado"),
    cover: { src: null, alt: "Foto de portada del proyecto LIMA — reemplazar con imagen real" },
    about: placeholder("contexto del negocio y el reto de marca que tenía LIMA"),
    objective: placeholder("objetivo específico acordado con LIMA"),
    approach: placeholder("enfoque y estrategia aplicados en el proyecto LIMA"),
    process: [
      {
        title: "Diagnóstico y posicionamiento",
        description: placeholder("hallazgos del diagnóstico inicial de LIMA"),
      },
      {
        title: "Identidad visual",
        description: placeholder("decisiones de identidad visual tomadas para LIMA"),
      },
      {
        title: "Estrategia de contenido",
        description: placeholder("lineamientos de contenido definidos para LIMA"),
      },
      {
        title: "Ejecución",
        description: placeholder("cómo se puso en marcha la estrategia en LIMA"),
      },
    ],
    gallery: [
      { src: null, alt: "Pieza real del proyecto LIMA — reemplazar 1" },
      { src: null, alt: "Pieza real del proyecto LIMA — reemplazar 2" },
      { src: null, alt: "Pieza real del proyecto LIMA — reemplazar 3" },
      { src: null, alt: "Pieza real del proyecto LIMA — reemplazar 4" },
    ],
  },
  {
    slug: "fritanga-las-palmeras",
    name: "Fritanga Las Palmeras",
    dateLabel: "[PLACEHOLDER — mes y año]",
    category: "Producción fotográfica",
    heroSummary: placeholder("bajada de una línea para la página del caso Fritanga Las Palmeras"),
    cardSummary: placeholder(
      "resumen breve del proyecto para la tarjeta de listado (alcance: producción fotográfica)"
    ),
    cover: {
      src: null,
      alt: "Foto de portada del proyecto Fritanga Las Palmeras — reemplazar con imagen real",
    },
    about: placeholder(
      "contexto del negocio Fritanga Las Palmeras y el motivo de la sesión fotográfica"
    ),
    objective: placeholder("objetivo específico de la producción fotográfica"),
    approach: placeholder(
      "enfoque de la sesión: dirección de arte, locaciones y platos cubiertos. El alcance real de este proyecto fue producción fotográfica, no branding ni estrategia de contenido completa."
    ),
    process: [
      {
        title: "Diagnóstico visual",
        description: placeholder("qué se identificó antes de planificar la sesión"),
      },
      {
        title: "Planificación de la sesión",
        description: placeholder("locaciones, platos y momentos definidos para cubrir"),
      },
      {
        title: "Producción fotográfica",
        description: placeholder("cómo se desarrolló la sesión en sitio"),
      },
      {
        title: "Entrega",
        description: placeholder("formato y uso de las piezas entregadas"),
      },
    ],
    gallery: [
      { src: null, alt: "Foto real de Fritanga Las Palmeras — reemplazar 1" },
      { src: null, alt: "Foto real de Fritanga Las Palmeras — reemplazar 2" },
      { src: null, alt: "Foto real de Fritanga Las Palmeras — reemplazar 3" },
      { src: null, alt: "Foto real de Fritanga Las Palmeras — reemplazar 4" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
