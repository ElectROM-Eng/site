import HeroSection from "../components/HeroSection";
import ServicesHorizontalScroll from "../components/ServicesHorizontalScroll";
import SlotMachineCases from "../components/SlotMachineCases";
import TrustBar from "../components/TrustBar";
import AboutStrip from "../components/AboutStrip";
import SolutionsGrid from "../components/SolutionsGrid";
import ImpactNumbers from "../components/ImpactNumbers";
import PartnersCarousel from "../components/PartnersCarousel";
import BlogPreview from "../components/BlogPreview";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServicesHorizontalScroll />
      <SlotMachineCases />
      <TrustBar />
      <AboutStrip />
      <SolutionsGrid />
      <ImpactNumbers />
      <PartnersCarousel />
      <BlogPreview />
      <ContactCTA />
      <Footer />
    </main>
  );
}
