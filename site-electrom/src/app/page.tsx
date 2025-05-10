import HeroSection from "../components/HeroSection";
import TrustBar from "../components/TrustBar";
import AboutStrip from "../components/AboutStrip";
import TimelineHorizontal from "../components/TimelineHorizontal";
import SolutionsGrid from "../components/SolutionsGrid";
import ImpactNumbers from "../components/ImpactNumbers";
import CaseCarousel from "../components/CaseCarousel";
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
      <TrustBar />
      <AboutStrip />
      <TimelineHorizontal />
      <SolutionsGrid />
      <ImpactNumbers />
      <CaseCarousel />
      <ESGSection />
      <LeadMagnet />
      <TestimonialsSlider />
      <BlogPreview />
      <ContactCTA />
      <Footer />
    </main>
  );
}
