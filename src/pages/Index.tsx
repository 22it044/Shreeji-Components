import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import StatsSection from '@/components/sections/StatsSection';
import VisionMissionSection from '@/components/sections/VisionMissionSection';
import ProductsSectionMain from '@/components/sections/ProductsSection';
import QualitySection from '@/components/sections/QualitySection';
// QualityToolsSection removed as requested
import IndustriesSection from '@/components/sections/IndustriesSection';
import DownloadSection from '@/components/sections/DownloadSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  useEffect(() => {
    // Check if there's a scroll target in sessionStorage
    const scrollTarget = sessionStorage.getItem('scrollTarget');
    if (scrollTarget) {
      // Clear the scroll target from sessionStorage
      sessionStorage.removeItem('scrollTarget');
      
      // Add a small delay to ensure the page is fully loaded
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          const offsetTop = element.offsetTop - 120; // Account for fixed header height
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 300); // Slightly longer delay to ensure all components are rendered
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <VisionMissionSection />
        <ProductsSectionMain />
        <QualitySection />
        {/* QualityToolsSection removed as requested */}
        <IndustriesSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
