import HeroSection from "../components/HeroSection";
import ServicesHorizontalScroll from "../components/ServicesHorizontalScroll";
import SlotMachineCases from "../components/SlotMachineCases";
import TrustBar from "../components/TrustBar";
import AboutStrip from "../components/AboutStrip";
import SolutionsGrid from "../components/SolutionsGrid";
import ImpactNumbers from "../components/ImpactNumbers";
import ESGSection from "../components/ESGSection";
import LeadMagnet from "../components/LeadMagnet";
import TestimonialsSlider from "../components/TestimonialsSlider";
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
      <ESGSection />
      <LeadMagnet />
      <TestimonialsSlider />
      <BlogPreview />
      <ContactCTA />
      <Footer />
    </main>
  );
}
