import type { Metadata } from "next";
import ServiceTemplate from "@/components/service/ServiceTemplate";
import { getServiceBySlug } from "@/content/services";

export const metadata: Metadata = {
  title: "Creación de contenido para restaurantes — Edgard Ibarra",
};

export default function ContenidoPage() {
  const service = getServiceBySlug("contenido")!;
  return <ServiceTemplate service={service} />;
}
