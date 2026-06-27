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
  scopeTag?: string;
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
    dateLabel: "[PLACEHOLDER — mes y año]",
    cardSummary: placeholder("resumen breve del proyecto para la tarjeta de listado"),
    cover: {
      src: null,
      alt: "Foto de portada del proyecto La Barra del Tigre — reemplazar con imagen real",
    },
    about: placeholder("contexto del negocio y el reto de marca que tenía La Barra del Tigre"),
    objective: placeholder("objetivo específico acordado con La Barra del Tigre"),
    approach: placeholder("enfoque y estrategia aplicados en el proyecto La Barra del Tigre"),
    process: [
      {
        title: "Diagnóstico y posicionamiento",
        description: placeholder("hallazgos del diagnóstico inicial de La Barra del Tigre"),
      },
      {
        title: "Identidad visual",
        description: placeholder("decisiones de identidad visual tomadas para La Barra del Tigre"),
      },
      {
        title: "Estrategia de contenido",
        description: placeholder("lineamientos de contenido definidos para La Barra del Tigre"),
      },
      {
        title: "Ejecución",
        description: placeholder("cómo se puso en marcha la estrategia en La Barra del Tigre"),
      },
    ],
    gallery: [
      { src: null, alt: "Pieza real del proyecto La Barra del Tigre — reemplazar 1" },
      { src: null, alt: "Pieza real del proyecto La Barra del Tigre — reemplazar 2" },
      { src: null, alt: "Pieza real del proyecto La Barra del Tigre — reemplazar 3" },
      { src: null, alt: "Pieza real del proyecto La Barra del Tigre — reemplazar 4" },
    ],
  },
  {
    slug: "lima",
    name: "LIMA",
    dateLabel: "[PLACEHOLDER — mes y año]",
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
    scopeTag: "Producción fotográfica",
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
