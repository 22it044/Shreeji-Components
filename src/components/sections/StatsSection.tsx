import { useEffect, useRef, useState } from 'react';
import { Users, Package, Award, Globe, Shield, Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import QualityBadgeGroup from '@/components/ui/QualityBadgeGroup';

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    products: 0,
    quality: 0,
    countries: 0,
  });

  const stats = [
    {
      icon: Award,
      value: 30,
      suffix: '+',
      label: 'Years Experience',
      description: 'Decades of manufacturing excellence',
      key: 'experience' as keyof typeof counters,
      color: '#11182c',
    },
    {
      icon: Users,
      value: 65,
      suffix: '+',
      label: 'Global Clients',
      description: 'Trusted partnerships worldwide',
      key: 'products' as keyof typeof counters,
      color: 'royal-sapphire',
    },
    {
      icon: Factory,
      value: 50,
      suffix: '+',
      label: 'Advanced Machinery',
      description: 'State-of-the-art manufacturing equipment',
      key: 'quality' as keyof typeof counters,
      color: 'royal-sapphire',
    },
    {
      icon: Package,
      value: 25,
      suffix: 'M+',
      label: 'Parts Monthly',
      description: 'High-volume production capacity',
      key: 'countries' as keyof typeof counters,
      color: 'royal-sapphire',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counters with staggered timing
          stats.forEach((stat, index) => {
            setTimeout(() => {
              let startValue = 0;
              const duration = 2500;
              const increment = stat.value / (duration / 16);
              
              const timer = setInterval(() => {
                startValue += increment;
                if (startValue >= stat.value) {
                  startValue = stat.value;
                  clearInterval(timer);
                }
                
                setCounters(prev => ({
                  ...prev,
                  [stat.key]: Math.floor(startValue),
                }));
              }, 16);
            }, index * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="stats" ref={sectionRef} className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#11182c]/10 rounded-full blur-2xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-[#11182c]/10 rounded-full px-5 py-2 mb-4">
            <div className="p-1 rounded-full bg-[#11182c]/20">
              <Factory className="w-3 h-3 text-[#11182c]" />
            </div>
            <span className="text-[#11182c] font-semibold text-sm">Manufacturing Excellence</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven <span className="text-[#11182c]">Manufacturing</span> Excellence
          </h2>
          
          <div className="w-24 h-1 bg-[#11182c] rounded-full mb-6 mx-auto"></div>
          
          <p className="text-[#4F6685] max-w-3xl mx-auto leading-relaxed">
            Our track record speaks to decades of consistent quality, innovation, and trusted partnerships 
            with leading manufacturers across the globe
          </p>
          
          <QualityBadgeGroup badges={['iso', 'global', 'quality']} className="mt-8" />
        </div>

        {/* Professional Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.15) }}
              className="text-center"
            >
              <div className="relative group">
                {/* Professional Icon Container */}
                <div className="relative w-20 h-20 mx-auto mb-6 group-hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 border border-[#11182c]/20 rounded-full bg-[#11182c]/5 shadow-md transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <stat.icon className="w-10 h-10 text-[#11182c] transition-all duration-300" />
                  </div>
                </div>

                {/* Professional Counter */}
                <div className="mb-4">
                  <div className="text-5xl font-bold text-foreground mb-2 leading-none">
                    {counters[stat.key]}{stat.suffix}
                  </div>
                  <div className="w-16 h-1 bg-[#11182c] rounded-full mx-auto mb-4"></div>
                </div>

                {/* Professional Label and Description */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {stat.label}
                </h3>
                <p className="text-[#4F6685] leading-relaxed max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="relative">
          <div className="mb-16 text-center">
            <h3 className={`text-2xl md:text-3xl font-semibold mb-4 text-[#11182c] transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Our <span className="text-[#11182c]">Product</span> Showcase
            </h3>
            
            <div className={`h-1 bg-[#11182c] rounded-full mx-auto mb-8 transition-all duration-1000 ${isVisible ? 'w-[60px] animate-fade-in' : 'w-0'}`}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Advanced Manufacturing Card */}
            <div className={`relative group overflow-hidden transition-all duration-500 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
              <div className="relative p-8 bg-[#11182c]/10 backdrop-blur-sm rounded-lg border border-[#11182c]/20 shadow-lg transition-all duration-300 hover:shadow-xl h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#11182c]/5 rounded-bl-full -z-10"></div>
                
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#11182c]/10 border border-[#11182c]/20">
                  <Factory className="w-8 h-8 text-[#11182c]" />
                </div>
                
                <h4 className="text-xl font-bold text-[#11182c] mb-4 text-center">Precision Components</h4>
                
                <div className="w-12 h-1 bg-[#11182c]/50 rounded-full mx-auto mb-4"></div>
                
                <p className="text-[#4F6685] text-center mb-4">
                  Advanced manufacturing facility with cutting-edge CNC machinery delivering precision down to ±0.001mm tolerance.
                </p>
                
                <div className="flex justify-center items-center gap-2 text-sm text-[#11182c] font-medium">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span>Precision Engineering</span>
                </div>
              </div>
            </div>
            
            {/* Global Reach Card */}
            <div className={`relative group overflow-hidden transition-all duration-500 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
              <div className="relative p-8 bg-[#11182c]/10 backdrop-blur-sm rounded-lg border border-[#11182c]/20 shadow-lg transition-all duration-300 hover:shadow-xl h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#11182c]/5 rounded-bl-full -z-10"></div>
                
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#11182c]/10 border border-[#11182c]/20">
                  <Globe className="w-8 h-8 text-[#11182c]" />
                </div>
                
                <h4 className="text-xl font-bold text-[#11182c] mb-4 text-center">Custom Solutions</h4>
                
                <div className="w-12 h-1 bg-[#11182c]/50 rounded-full mx-auto mb-4"></div>
                
                <p className="text-[#4F6685] text-center mb-4">
                  Tailored manufacturing solutions for automotive, industrial, and consumer sectors with rapid prototyping capabilities.
                </p>
                
                <div className="flex justify-center items-center gap-2 text-sm text-[#11182c] font-medium">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span>Customized Production</span>
                </div>
              </div>
            </div>
            
            {/* Quality Assurance Card */}
            <div className={`relative group overflow-hidden transition-all duration-500 ${isVisible ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
              <div className="relative p-8 bg-[#11182c]/10 backdrop-blur-sm rounded-lg border border-[#11182c]/20 shadow-lg transition-all duration-300 hover:shadow-xl h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#11182c]/5 rounded-bl-full -z-10"></div>
                
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#11182c]/10 border border-[#11182c]/20">
                  <Shield className="w-8 h-8 text-[#11182c]" />
                </div>
                
                <h4 className="text-xl font-bold text-[#11182c] mb-4 text-center">Premium Materials</h4>
                
                <div className="w-12 h-1 bg-[#11182c]/50 rounded-full mx-auto mb-4"></div>
                
                <p className="text-[#4F6685] text-center mb-4">
                  High-grade materials with certified quality processes ensuring durability and performance in every product we manufacture.
                </p>
                
                <div className="flex justify-center items-center gap-2 text-sm text-[#11182c] font-medium">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span>Superior Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;