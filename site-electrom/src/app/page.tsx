import HeroSection from "../components/HeroSection";
import ServicesHorizontalScroll from "../components/ServicesHorizontalScroll";
import SlotMachineCases from "../components/SlotMachineCases";
import TrustBar from "../components/TrustBar";
import AboutStrip from "../components/AboutStrip";
import ImpactNumbers from "../components/ImpactNumbers";
import PartnersCarousel from "../components/PartnersCarousel";
import BlogPreview from "../components/BlogPreview";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServicesHorizontalScroll />
      <SlotMachineCases />
      <TrustBar />
      <AboutStrip />
      <ImpactNumbers />
      <PartnersCarousel />
      <BlogPreview />
      <ContactCTA />
    </main>
  );
}
