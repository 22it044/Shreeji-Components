import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef} 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 w-full"
    >
      {/* Premium background with enhanced gradient and effects */}
      <div className="absolute inset-0 z-0 bg-[#11182c]">
        {/* Premium Gradient Overlay with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#11182c] via-[#11182c]/95 to-[#0a0f1d]/90"></div>
        
        {/* Enhanced amber/gold accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
        
        {/* Dynamic diagonal amber accent lines */}
        <div className="absolute top-20 right-20 w-[30vw] h-px rotate-45 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-[20vw] h-px -rotate-45 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-pulse-slow"></div>
        <div className="absolute top-40 left-[10%] w-[15vw] h-px rotate-[30deg] bg-gradient-to-r from-transparent via-amber-500/5 to-transparent animate-pulse-slow"></div>
        <div className="absolute bottom-60 right-[15%] w-[25vw] h-px rotate-[-60deg] bg-gradient-to-r from-transparent via-amber-500/5 to-transparent animate-pulse-slow"></div>
        
        {/* Enhanced Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light"></div>
      </div>
      
      {/* Full-width video container with floating effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0.95, 
          y: [0, -15, 0] 
        }}
        transition={{ 
          duration: 1, 
          delay: 0.3,
          y: {
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }
        }}
        className="w-[95%] h-[80vh] overflow-hidden relative shadow-2xl rounded-xl border-2 border-amber-500/30 z-10 mx-auto"
      >
        {/* Professional image container */}
        <div className="w-full h-full overflow-hidden rounded-xl">
          <img 
            src="/images/Hero section/Gemini_Generated_Image_j3idb3j3idb3j3id.png" 
            alt="Precision Brass Manufacturing"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-700"
          />
          
          {/* Enhanced overlay for better contrast with amber accents */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#11182c]/40 via-transparent to-amber-500/20 pointer-events-none transition-opacity duration-700"></div>
          
          {/* Floating border elements - larger and more prominent */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-amber-500/80 animate-float rounded-tl-3xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-amber-500/80 animate-float-delayed rounded-tr-3xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-amber-500/80 animate-float-delayed rounded-bl-3xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-amber-500/80 animate-float rounded-br-3xl"></div>
          
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 shadow-[0_0_70px_rgba(251,191,36,0.4)_inset] pointer-events-none"></div>
          
          {/* Additional subtle floating elements */}
          <div className="absolute top-1/4 left-0 w-16 h-1 bg-amber-500/40 animate-float-delayed"></div>
          <div className="absolute bottom-1/4 right-0 w-16 h-1 bg-amber-500/40 animate-float"></div>
        </div>
        
        {/* Premium text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 z-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            Shreeji Components
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-8"
          >
            Precision-engineered brass components with uncompromising quality and excellence
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button 
              variant="premium" 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Products
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Elegant scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-10 h-10 text-amber-500/80 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;