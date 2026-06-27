import Hero from "@/components/sections/Hero";
import TensionBlock from "@/components/sections/TensionBlock";
import ProofMarquee from "@/components/sections/ProofMarquee";
import ServicesOverview from "@/components/sections/ServicesOverview";
import CredibilityBlock from "@/components/sections/CredibilityBlock";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TensionBlock />
      <ProofMarquee />
      <ServicesOverview />
      <CredibilityBlock />
      <FeaturedProjects />
      <Faq />
      <FinalCta />
    </>
  );
}
