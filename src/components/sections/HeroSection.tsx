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
        {/* Video container */}
        <div className="w-full h-full overflow-hidden rounded-xl">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-700"
          >
            <source src="/images/Hero section/CNC_Lathe_Carving_Brass_Shaft.mp4" type="video/mp4" />
          </video>
          
          {/* Enhanced overlay for better contrast with amber accents */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#11182c]/30 via-transparent to-amber-500/20 pointer-events-none transition-opacity duration-700"></div>
          
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
        
        {/* Removed text overlay as requested */}
      </motion.div>
      
      {/* Removed premium play indicator */}

      {/* Removed scroll down indicator */}
    </section>
  );
};

export default HeroSection;