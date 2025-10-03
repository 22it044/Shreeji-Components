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
      description: 'State-of-the-art manufacturing equipments',
      key: 'quality' as keyof typeof counters,
      color: 'royal-sapphire',
    },
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
      icon: Package,
      value: 5,
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
          
          // Immediately set values on mobile to prevent loading issues
          if (window.innerWidth < 768) {
            const finalValues: {[key: string]: number} = {};
            stats.forEach(stat => {
              finalValues[stat.key] = stat.value;
            });
            setCounters(finalValues as typeof counters);
            return;
          }
          
          // Animate counters with staggered timing on desktop
          stats.forEach((stat, index) => {
            setTimeout(() => {
              let startValue = 0;
              const duration = 2000; // Slightly faster animation
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
            }, index * 200); // Faster staggering
          });
        }
      },
      { threshold: 0.1, rootMargin: "50px" } // More sensitive threshold and margin
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="stats" ref={sectionRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#f8fafc]/90 to-[#f1f5f9]/80 backdrop-blur-md">
      {/* Premium decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#11182c]/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#11182c]/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#11182c]/15 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#11182c]/5 rounded-full blur-3xl"></div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md rounded-full px-3 sm:px-5 py-1.5 sm:py-2 mb-3 sm:mb-4 shadow-lg border border-white/70">
            <div className="p-1 rounded-full bg-[#11182c]/10 backdrop-blur-md">
              <Factory className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#11182c]" />
            </div>
            <span className="text-[#11182c] font-semibold text-xs sm:text-sm">Manufacturing Excellence</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Proven <span className="text-[#0077B5]">Manufacturing</span> Excellence
          </h2>
          
          <div className="w-16 sm:w-24 h-1 bg-[#11182c] rounded-full mb-4 sm:mb-6 mx-auto"></div>
          
          <p className="text-[#334155] text-sm sm:text-base max-w-3xl mx-auto leading-relaxed px-2">
            Our track record speaks to decades of consistent quality, innovation, and trusted partnerships 
            with leading manufacturers across the globe
          </p>
          
          <QualityBadgeGroup badges={['iso', 'global', 'quality']} className="mt-6 sm:mt-8" />
        </div>

        {/* Professional Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.15) }}
              className="text-center"
            >
              <div className="relative group bg-white/40 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl border border-white/50 hover:bg-white/60 transition-all duration-300 hover:shadow-2xl">
                {/* Professional Icon Container */}
                <div className="relative w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 border border-white/70 rounded-full bg-white/60 backdrop-blur-md shadow-lg transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <stat.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#11182c] transition-all duration-300" />
                  </div>
                </div>

                {/* Professional Counter */}
                <div className="mb-3 sm:mb-4">
                  <div className="text-4xl sm:text-5xl font-bold text-[#11182c] mb-2 leading-none">
                    {counters[stat.key]}{stat.suffix}
                  </div>
                  <div className="w-12 sm:w-16 h-1 bg-[#11182c] rounded-full mx-auto mb-3 sm:mb-4"></div>
                </div>

                {/* Professional Label and Description */}
                <h3 className="text-lg sm:text-xl font-semibold text-[#11182c] mb-2 sm:mb-3">
                  {stat.label}
                </h3>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Stats Cards */}
        <div className="relative">
          <div className="mb-10 sm:mb-12 md:mb-16 text-center">
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-[#11182c] transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Our <span className="text-[#0077B5]">USPs</span>
            </h3>
            
            <div className={`h-1 bg-[#11182c] rounded-full mx-auto mb-6 sm:mb-8 transition-all duration-1000 ${isVisible ? 'w-[60px] animate-fade-in' : 'w-0'}`}></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Advanced Manufacturing Card */}
            <div className={`relative group overflow-hidden transition-all duration-500 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
              <div className="relative p-5 sm:p-8 bg-white/60 backdrop-blur-md rounded-xl border border-white/70 shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-white/70 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#11182c]/10 to-transparent rounded-bl-full -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[#11182c]/5 to-transparent rounded-full -z-10"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-white/60 backdrop-blur-md border border-white/70 shadow-lg">
                  <Factory className="w-7 h-7 sm:w-8 sm:h-8 text-[#11182c]" />
                </div>
                
                <h4 className="text-lg sm:text-xl font-bold text-[#11182c] mb-3 sm:mb-4 text-center">Precision Components</h4>
                
                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-[#11182c] to-[#11182c]/50 rounded-full mx-auto mb-3 sm:mb-4"></div>
                
                <p className="text-sm sm:text-base text-[#334155] text-center mb-3 sm:mb-4">
                  Advanced manufacturing facility with cutting-edge CNC machinery delivering precision down to ±0.001mm tolerance.
                </p>
                
                <ul className="space-y-2 text-[#334155] text-sm sm:text-base">
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#11182c] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tolerance control to ±0.005mm</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#11182c] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Advanced CNC machining</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Global Reach Card */}
            <div className={`relative group overflow-hidden transition-all duration-500 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
              <div className="relative p-5 sm:p-8 bg-white/60 backdrop-blur-md rounded-xl border border-white/70 shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-white/70 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#11182c]/10 to-transparent rounded-bl-full -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[#11182c]/5 to-transparent rounded-full -z-10"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-white/60 backdrop-blur-md border border-white/70 shadow-lg">
                  <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-[#11182c]" />
                </div>
                
                <h4 className="text-lg sm:text-xl font-bold text-[#11182c] mb-3 sm:mb-4 text-center">Global Presence</h4>
                
                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-[#11182c] to-[#11182c]/50 rounded-full mx-auto mb-3 sm:mb-4"></div>
                
                <p className="text-sm sm:text-base text-[#334155] text-center mb-3 sm:mb-4">
                  Serving clients in over 30 countries with reliable logistics and dedicated regional support teams.
                </p>
                
                <ul className="space-y-2 text-[#334155] text-sm sm:text-base">
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#11182c] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Exports to 25+ countries</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#11182c] mr-2 mt-0.5 flex-shrink-0" />
                    <span>On-time delivery guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Quality Control Card */}
            <div className={`relative group overflow-hidden transition-all duration-500 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
              <div className="relative p-5 sm:p-8 bg-white/60 backdrop-blur-md rounded-xl border border-white/70 shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-white/70 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#11182c]/10 to-transparent rounded-bl-full -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[#11182c]/5 to-transparent rounded-full -z-10"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-white/60 backdrop-blur-md border border-white/70 shadow-lg">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 text-[#11182c]" />
                </div>
                
                <h4 className="text-lg sm:text-xl font-bold text-[#11182c] mb-3 sm:mb-4 text-center">Quality Assurance</h4>
                
                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-[#11182c] to-[#11182c]/50 rounded-full mx-auto mb-3 sm:mb-4"></div>
                
                <p className="text-sm sm:text-base text-[#334155] text-center mb-3 sm:mb-4">
                  Rigorous quality control processes ensure every component meets international standards.
                </p>
                
                <ul className="space-y-2 text-[#334155] text-sm sm:text-base">
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#11182c] mr-2 mt-0.5 flex-shrink-0" />
                    <span>ISO 9001:2015 certified</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#11182c] mr-2 mt-0.5 flex-shrink-0" />
                    <span>100% inspection protocols</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default StatsSection;