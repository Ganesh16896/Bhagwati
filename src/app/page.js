import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import LakeSection from "./components/LakeSection";
import ProductsSection from "./components/ProductsSection";
import VideoGrid from "./components/VideoGrid";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LakeSection />
      <ProductsSection />
      <div className="video-strip">
        <div className="container">
          <VideoGrid />
        </div>
      </div>
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
