import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PromoBanner } from "@/components/PromoBanner";
import { TopDealsSection } from "@/components/TopDealsSection";
import { ContactBanner } from "@/components/ContactBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex-1 flex flex-col gap-16 pb-16">
        <HeroSection />
        <AboutSection />

        <PromoBanner />

        <TopDealsSection />
        <ServicesSection />
        <ContactBanner />
      </main>
      <Footer />
    </div>
  );
}
