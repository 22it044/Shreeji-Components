import { useEffect, useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button'; // Assuming you have this
import { ChevronDown, ArrowRight } from 'lucide-react';

// Animation variants for staggered text animation (kept same as your preferred version)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Observe only once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="hero" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-48 z-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>

      {/* --- Background (kept same as your preferred version) --- */}
      <div className="absolute inset-0 z-0 bg-[#0a0f1d] bg-[radial-gradient(ellipse_at_center,_rgba(23,30,58,0.7)_0%,_rgba(10,15,29,1)_70%)]"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-soft-light"></div>

      {/* --- Main Content Container --- */}
      <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 pt-24 pb-12">
        
        {/* === Left Column: Text Content (kept same as your preferred version) === */}
        <motion.div
          className="text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight"
          >
            Shreeji Components
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mt-4 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0"
          >
            Precision-engineered brass components with uncompromising quality and excellence.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-8">
            <Button 
              size="lg" 
              className="group bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-base transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* === Right Column: Visual Element with Subtle Enclosure === */}
        <motion.div
          className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-square max-w-lg mx-auto lg:max-w-none flex items-center justify-center p-4" // Padding for visual breathing room
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            scale: isVisible ? 1 : 0.8 
          }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          {/* Subtle glow behind the enclosure to make it pop */}
          <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-3xl" /> 
          
          {/* The new subtle enclosure for the image */}
          <motion.div
            className="relative w-full  bg-gradient-to-br from-[#1c243a]/80 to-[#0d121c]/80 rounded-xl overflow-hidden
                       shadow-xl shadow-black/40 border border-amber-500/20 flex items-center justify-center p-4" // Added inner padding
            // A more subtle and continuous floating animation for the enclosure
            animate={{ y: ["-1%", "1%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          >
            <img 
              src="images/Hero section/Gemini_Generated_Image_j3idb3j3idb3j3id.png" // IMPORTANT: Use a transparent background image for the best effect
              alt="Precision-engineered brass components by Shreeji Components"
              className="relative w-full h-auto object-contain max-h-[85%]" // Constrain height within enclosure for breathing room
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* --- Elegant Scroll Indicator --- */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <ChevronDown className="w-8 h-8 text-amber-500/70 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;