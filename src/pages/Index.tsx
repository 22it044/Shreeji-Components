import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import QualitySection from '@/components/sections/QualitySection';
import LinkedInSection from '@/components/sections/LinkedInSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import DownloadSection from '@/components/sections/DownloadSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProductsSection />
        <QualitySection />
        <IndustriesSection />
        <DownloadSection />
        <LinkedInSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
