import type { Metadata } from "next";
import ServiceTemplate from "@/components/service/ServiceTemplate";
import { getServiceBySlug } from "@/content/services";

export const metadata: Metadata = {
  title: "Diseño web para restaurantes — Edgard Ibarra",
};

export default function WebPage() {
  const service = getServiceBySlug("web")!;
  return <ServiceTemplate service={service} />;
}
