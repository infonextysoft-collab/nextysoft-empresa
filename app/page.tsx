import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/beneficios";
import PricingSection from "@/components/sections/planes";
import Processsection from "@/components/sections/Processsection";
import CTASection from "@/components/sections/CTASection";
import ProjectDemos from "@/components/sections/demos";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProjectDemos />
        <FeaturesSection />
        <PricingSection />
        <Processsection />
        <CTASection />
      </main>
    </>
  );
}
