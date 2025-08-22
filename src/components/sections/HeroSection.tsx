import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Award, CheckCircle, Globe, ArrowRight, Zap, Target, Sparkles, Settings, Cpu, Shield, Factory, Wrench, Cog, Sparkle, BadgeCheck, Star, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const dynamicWords = ['Precision', 'Innovation', 'Excellence', 'Quality'];
  
  // Certification data for enhanced display
  // Certification data for enhanced display
  const certifications = [
    { icon: Award, label: 'ISO 9001:2015', sublabel: 'Certified' },
    { icon: CheckCircle, label: 'IATF 16949:2016', sublabel: 'Certified' },
    { icon: Globe, label: 'Export Certified', sublabel: 'Global Standards' },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set to visible if not already visible (runs animation only once)
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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // We already defined certifications above, no need to redefine

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium Dynamic Background with Hero Image */}
      <div className="absolute inset-0 z-0">
        {/* Hero Image with parallax effect */}
        <div 
          className="w-full h-full absolute inset-0 transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * 0.15}px) scale(${1 + scrollY * 0.0005})` }}
        >
          <img 
            src="\images\Hero section\hero5.jpg"
            alt="Shreeji Components CNC Machining manufacturing facility" 
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
        
        {/* Enhanced premium overlay with reduced transparency */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-slate-900/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/30"></div>
        
        {/* Animated mesh gradient overlay with premium feel */}
        <div className="absolute inset-0 opacity-40">
          <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/15 to-secondary/20 ${isVisible ? 'animate-pulse' : ''}`}></div>
        </div>
        
        {/* Premium grain texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-5"></div>
      </div>

      {/* Premium Floating Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Enhanced dynamic floating icons with premium styling */}
        <div 
          className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
          style={{ 
            left: '10%', 
            top: '20%',
            transform: `translateY(${Math.sin(Date.now() / 2000) * 20}px) rotate(${Math.sin(Date.now() / 5000) * 10}deg)`,
            transition: 'transform 2s ease-in-out'
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-md"></div>
            <Factory className="w-10 h-10 text-primary/60 filter drop-shadow-glow" />
          </div>
        </div>
        
        <div 
          className={`absolute transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
          style={{ 
            right: '15%', 
            top: '30%',
            transform: `translateY(${Math.cos(Date.now() / 2000) * 15}px) rotate(${Math.cos(Date.now() / 4000) * 15}deg)`,
            transition: 'transform 2.5s ease-in-out'
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-md"></div>
            <Settings className="w-8 h-8 text-secondary/70 filter drop-shadow-glow" />
          </div>
        </div>
        
        <div 
          className={`absolute transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
          style={{ 
            left: '20%', 
            bottom: '30%',
            transform: `translateY(${Math.sin(Date.now() / 1800) * 18}px) rotate(${Math.sin(Date.now() / 4500) * 12}deg)`,
            transition: 'transform 2.2s ease-in-out'
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-primary/20 rounded-full blur-md"></div>
            <Cpu className="w-9 h-9 text-purple-400/70 filter drop-shadow-glow" />
          </div>
        </div>
        
        <div 
          className={`absolute transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
          style={{ 
            right: '10%', 
            bottom: '25%',
            transform: `translateY(${Math.cos(Date.now() / 1600) * 22}px) rotate(${Math.cos(Date.now() / 5500) * 8}deg)`,
            transition: 'transform 1.8s ease-in-out'
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-green-500/20 rounded-full blur-md"></div>
            <Wrench className="w-7 h-7 text-secondary/70 filter drop-shadow-glow" />
          </div>
        </div>
        
        {/* Premium interactive cursor-following element */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full transition-all duration-500 ease-out opacity-80"
          style={{
            background: `radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, rgba(var(--secondary-rgb), 0.1) 50%, transparent 70%)`,
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
            transform: `scale(${isVisible ? 1 : 0})`,
            boxShadow: '0 0 80px rgba(var(--primary-rgb), 0.1), 0 0 30px rgba(var(--secondary-rgb), 0.1)',
          }}
        />
        
        {/* Enhanced geometric patterns with premium styling */}
        <div className="absolute top-20 right-20 w-40 h-40 border border-primary/30 rounded-3xl rotate-12 backdrop-blur-sm bg-white/5 shadow-elegant">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl opacity-50"></div>
        </div>
        
        <div className="absolute bottom-40 left-16 w-32 h-32 border border-secondary/30 rounded-full backdrop-blur-sm bg-white/5 shadow-elegant">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full opacity-50"></div>
        </div>
        
        <div className="absolute top-1/3 right-1/3 w-24 h-24 border border-primary/30 rotate-45 backdrop-blur-sm bg-white/5 shadow-elegant">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rotate-45 opacity-50"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex items-center justify-center min-h-[80vh] py-16">
          {/* Premium Hero Content with Enhanced Styling */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Enhanced Premium Company Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-elegant relative group overflow-hidden">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-700"></div>
              
              {/* Animated line */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-700"></div>
              
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <div className="flex items-center space-x-2">
                <span className="text-white font-semibold text-sm">30+ Years of Manufacturing Excellence</span>
                <BadgeCheck className="h-4 w-4 text-primary" />
              </div>
            </div>
            
            {/* Enhanced Premium Main Headline */}
            <div className="mb-12 relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-secondary/5 rounded-full blur-2xl"></div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="block mb-2 text-white drop-shadow-text">Shreeji Components</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-secondary-glow text-4xl sm:text-5xl md:text-6xl font-medium drop-shadow-text-colored">Precision Brass Excellence</span>
              </motion.h1>
              
              <div className="w-40 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8 shadow-glow"></div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl text-white max-w-2xl mx-auto leading-relaxed font-medium"
              >
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-glow to-primary-glow">ISO & IATF Certified</span> global leaders in precision brass manufacturing.
              </motion.p>
            </div>

            {/* Enhanced Premium CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-bold px-8 py-4 rounded-full shadow-elegant hover:shadow-elegant-hover transition-all duration-500 transform hover:-translate-y-1 group"
              >
                <span className="relative z-10 flex items-center">Request Quote <Shield className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" /></span>
                {/* Animated background effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 w-1/3 -skew-x-12 transform -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out"></span>
              </Button>
              
              <Button 
                onClick={() => scrollToSection('#products')}
                variant="outline"
                className="relative overflow-hidden border-2 border-white/80 text-white hover:text-white px-8 py-4 rounded-full transition-all duration-500 font-bold shadow-elegant hover:shadow-elegant-hover backdrop-blur-md bg-white/5 group transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">Our Products <Gem className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300 text-secondary" /></span>
                {/* Hover background effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 hover:from-primary/20 hover:to-secondary/20 transition-all duration-500 -z-10"></span>
              </Button>
            </motion.div>
            
            {/* Enhanced Premium Certifications */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 flex flex-wrap justify-center gap-6"
            >
              {certifications.map((cert, index) => (
                <div 
                  key={cert.label}
                  className="flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 group"
                >
                  <div className="p-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <cert.icon className="w-4 h-4 text-white group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">{cert.label}</span>
                    <span className="text-xs text-white/60">{cert.sublabel}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Premium Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button 
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center space-y-3 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-glow hover:to-secondary-glow transition-all duration-300 group"
        >
          <span className="text-sm font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-glow group-hover:to-secondary-glow transition-all duration-300">Discover More</span>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary/20 group-hover:to-secondary/20 rounded-full blur-md transition-all duration-300 scale-0 group-hover:scale-125"></div>
            <ChevronDown className="w-8 h-8 animate-bounce group-hover:text-primary transition-colors duration-300 relative z-10" />
            <Sparkle className="w-4 h-4 absolute -top-1 -right-1 animate-pulse text-secondary filter drop-shadow-glow" />
          </div>
        </button>
      </motion.div>
      
      {/* Premium Quality Indicators */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:block">
        <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-elegant">
          <Star className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium text-white">Premium Quality</span>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-8 z-10 hidden md:block">
        <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-elegant">
          <Globe className="w-3.5 h-3.5 text-secondary" />
          <span className="text-xs font-medium text-white">Global Standards</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;