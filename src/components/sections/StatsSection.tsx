import { useEffect, useRef, useState } from 'react';
import { Users, Package, Award, Globe, TrendingUp, Shield, BadgeCheck, Star, Gem, Zap, BarChart3, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

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
      description: 'Decades of manufacturing leadership',
      key: 'experience' as keyof typeof counters,
      color: 'primary',
    },
    {
      icon: Users,
      value: 65,
      suffix: '+',
      label: 'Diverse Clients',
      description: 'Various reputed client companies accross the globe',
      key: 'products' as keyof typeof counters,
      color: 'secondary',
    },
    {
      icon: Package,
      value: 50,
      suffix: '+',
      label: 'Advanced Machinery',
      description: 'Hi-Tech machineries for precise engineering',
      key: 'quality' as keyof typeof counters,
      color: 'success',
    },
    {
      icon: Package,
      value: 25,
      suffix: 'M+',
      label: 'Parts Monthly',
      description: 'High volume supply capacity without quality compromise',
      key: 'countries' as keyof typeof counters,
      color: 'primary',
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
    <section id="stats" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-primary/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-secondary/10 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-primary/10 rotate-45 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Premium Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/10 rounded-full px-6 py-3 mb-6 shadow-elegant relative group overflow-hidden"
          >
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-700"></div>
            
            {/* Animated line */}
            <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-700"></div>
            
            <div className="p-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
              <TrendingUp className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-primary font-semibold text-sm relative z-10">Industry Performance</span>
            <BadgeCheck className="w-4 h-4 text-primary/70" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-section-title mb-6 relative"
          >
            <span className="relative">Proven </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow relative drop-shadow-text-colored">Manufacturing</span>
            <span className="relative"> Excellence</span>
            
            {/* Gradient line */}
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6 shadow-glow"></div>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed"
          >
            Our track record speaks to decades of consistent quality, innovation, and trusted partnerships 
            with leading manufacturers across the globe
          </motion.p>
        </div>

        {/* Enhanced Premium Stats Grid */}
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
                {/* Enhanced Premium Icon Container */}
                <div className="relative w-24 h-24 mx-auto mb-8 group-hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl blur-md transform group-hover:scale-110 transition-all duration-500"></div>
                  <div className="absolute inset-0 border border-primary/10 rounded-2xl backdrop-blur-sm bg-light-bg/80 shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-125"></div>
                      <stat.icon className="w-12 h-12 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500 relative z-10 drop-shadow-glow" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Premium Counter with animated typography */}
                <div className="mb-6 relative">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/90 group-hover:from-primary group-hover:to-secondary transition-all duration-500 mb-2 leading-none drop-shadow-text">
                    {counters[stat.key]}{stat.suffix}
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full mx-auto mb-4 shadow-glow group-hover:w-32 transition-all duration-500"></div>
                </div>

                {/* Enhanced Premium Label and Description */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                  {stat.label}
                </h3>
                <p className="text-medium-gray leading-relaxed max-w-xs mx-auto transition-all duration-500 group-hover:text-medium-gray/90">
                  {stat.description}
                </p>

                {/* Enhanced Premium background accent */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 shadow-elegant"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Premium Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Quality Inspection Card */}
            <div className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl blur-md transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative text-center p-8 bg-gradient-to-br from-light-bg/90 to-light-bg/70 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500 transform group-hover:translateY(-3px)">
                <div className="absolute top-0 right-0 p-1.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-bl-xl">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500">
                  <Shield className="w-6 h-6 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-glow transition-all duration-500" />
                </div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow mb-2 drop-shadow-text-colored">100%</div>
                <div className="text-sm font-medium text-foreground mb-1 group-hover:text-primary transition-all duration-500">Quality Inspection</div>
                <div className="text-xs text-medium-gray">Manual & Machine checks before packaging of each part</div>
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary/50 to-secondary/50 transition-all duration-700"></div>
              </div>
            </div>
            
            {/* 24/7 Support Card */}
            <div className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl blur-md transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative text-center p-8 bg-gradient-to-br from-light-bg/90 to-light-bg/70 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500 transform group-hover:translateY(-3px)">
                <div className="absolute top-0 right-0 p-1.5 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-bl-xl">
                  <Globe className="w-4 h-4 text-secondary" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500">
                  <Globe className="w-6 h-6 text-secondary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-secondary-glow transition-all duration-500" />
                </div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-glow mb-2 drop-shadow-text-colored">IATF 16949</div>
                <div className="text-sm font-medium text-foreground mb-1 group-hover:text-secondary transition-all duration-500">Certified</div>
                <div className="text-xs text-medium-gray">Global Coverage</div>
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-secondary/50 to-primary/50 transition-all duration-700"></div>
              </div>
            </div>
            
            {/* ISO Certification Card */}
            <div className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl blur-md transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative text-center p-8 bg-gradient-to-br from-light-bg/90 to-light-bg/70 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500 transform group-hover:translateY(-3px)">
                <div className="absolute top-0 right-0 p-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-bl-xl">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500">
                  <Award className="w-6 h-6 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500" />
                </div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 drop-shadow-text-colored">ISO</div>
                <div className="text-sm font-medium text-foreground mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500">Certified Quality</div>
                <div className="text-xs text-medium-gray">International Standards</div>
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary/50 to-secondary/50 transition-all duration-700"></div>
              </div>
            </div>
          </div>
          
          {/* Premium Quality Badge */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-md px-4 py-2 rounded-full border border-primary/10 shadow-elegant">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Premium Manufacturing Excellence</span>
              <Star className="w-4 h-4 text-secondary" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;