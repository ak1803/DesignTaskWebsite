import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#010101]">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
