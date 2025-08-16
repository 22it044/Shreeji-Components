import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Award, CheckCircle, Globe, ArrowRight, Zap, Target, Sparkles, Settings, Cpu, Shield, Factory, Wrench, Cog, Sparkle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const dynamicWords = ['Precision', 'Innovation', 'Excellence', 'Quality'];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
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
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const certifications = [
    { icon: Award, label: 'ISO 9001:2015', sublabel: 'Quality Management' },
    { icon: CheckCircle, label: 'IATF 16949', sublabel: 'Automotive Standards' },
    { icon: Globe, label: 'Export Certified', sublabel: 'Global Compliance' },
  ];

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background with Hero Image */}
      <div className="absolute inset-0 z-0">
        {/* Hero Image */}
        <img 
          src="/images/CNC Machining manufacturing.jpg" 
          alt="Shreeji Components CNC Machining manufacturing facility" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-amber-900/30"></div>
        
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-amber-500/20 animate-pulse"></div>
        </div>
      </div>

      {/* Floating Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic floating icons */}
        <div className={`absolute transition-all duration-1000 ${isVisible ? 'animate-float' : 'opacity-0'}`} style={{ left: '10%', top: '20%' }}>
          <Factory className="w-8 h-8 text-blue-400/30 animate-spin-slow" />
        </div>
        <div className={`absolute transition-all duration-1000 delay-200 ${isVisible ? 'animate-float-delayed' : 'opacity-0'}`} style={{ right: '15%', top: '30%' }}>
          <Settings className="w-6 h-6 text-amber-400/40 animate-bounce-slow" />
        </div>
        <div className={`absolute transition-all duration-1000 delay-400 ${isVisible ? 'animate-float' : 'opacity-0'}`} style={{ left: '20%', bottom: '30%' }}>
          <Cpu className="w-7 h-7 text-purple-400/35 animate-pulse" />
        </div>
        <div className={`absolute transition-all duration-1000 delay-600 ${isVisible ? 'animate-float-delayed' : 'opacity-0'}`} style={{ right: '10%', bottom: '25%' }}>
          <Wrench className="w-5 h-5 text-green-400/40 animate-spin-slow" />
        </div>
        
        {/* Interactive cursor-following element */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: `scale(${isVisible ? 1 : 0})`,
          }}
        />
        
        {/* Geometric patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl rotate-12 animate-spin-very-slow"></div>
        <div className="absolute bottom-40 left-16 w-24 h-24 border-2 border-amber-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-green-400/25 rotate-45 animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex items-center justify-center min-h-[80vh] py-16">
          {/* Hero Content - Centered and Clean */}
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Company Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-white font-semibold text-sm">30+ Years of Manufacturing Excellence</span>
            </div>
            
            {/* Main Headline - Simplified */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="block mb-2">Shreeji Components</span>
                <span className="block text-amber-400 text-3xl sm:text-4xl md:text-5xl font-medium">Precision Brass Manufacturing</span>
              </h1>
              
              <div className="w-24 h-1 bg-amber-400 rounded-full mx-auto mb-8"></div>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                IATF 16949:2016 & ISO 9001:2015 Certified manufacturers and exporters of precision brass components, serving industries globally for 30+ years.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="bg-amber-400 hover:bg-amber-500 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <span className="text-black font-bold">Request Quote</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 text-black" />
              </Button>
              <Button 
                onClick={() => scrollToSection('#products')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition-all duration-300 font-bold shadow-lg hover:shadow-xl backdrop-blur-sm bg-white/10"
              >
                <span className="font-bold">Our Products</span>
              </Button>
            </div>
            
            {/* Simple certifications indicator */}
            <div className="mt-16 flex flex-wrap justify-center gap-6 text-white/80">
              <span className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span className="text-sm">ISO 9001:2015</span>
              </span>
              <span className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">IATF 16949:2016</span>
              </span>
              <span className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span className="text-sm">Export Certified</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={() => scrollToSection('#stats')}
          className="flex flex-col items-center space-y-3 text-white/70 hover:text-amber-400 transition-all duration-300 group"
        >
          <span className="text-sm font-medium group-hover:text-amber-400">Discover More</span>
          <div className="relative">
            <ChevronDown className="w-8 h-8 animate-bounce group-hover:text-amber-400" />
            <Sparkle className="w-4 h-4 absolute -top-1 -right-1 animate-pulse text-amber-400/60" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;