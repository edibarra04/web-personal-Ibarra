import type { Metadata } from "next";
import ServiceTemplate from "@/components/service/ServiceTemplate";
import { getServiceBySlug } from "@/content/services";

export const metadata: Metadata = {
  title: "Branding y estrategia de marca para restaurantes — Edgard Ibarra",
};

export default function BrandingPage() {
  const service = getServiceBySlug("branding")!;
  return <ServiceTemplate service={service} />;
}
