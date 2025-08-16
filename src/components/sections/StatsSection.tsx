import { useEffect, useRef, useState } from 'react';
import { Users, Package, Award, Globe, TrendingUp, Shield } from 'lucide-react';

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
      description: 'Global clients across the globe',
      key: 'products' as keyof typeof counters,
      color: 'secondary',
    },
    {
      icon: Package,
      value: 50,
      suffix: '+',
      label: 'Advanced Machinery',
      description: 'State-of-the-art manufacturing equipment',
      key: 'quality' as keyof typeof counters,
      color: 'success',
    },
    {
      icon: Package,
      value: 25,
      suffix: 'M+',
      label: 'Parts Monthly',
      description: 'High-volume manufacturing capacity maintained',
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
    <section id="stats" ref={sectionRef} className="py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header with more spacing */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-light rounded-full px-6 py-3 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Industry Performance</span>
          </div>
          <h2 className="text-section-title text-foreground mb-6">
            Proven <span className="text-primary">Manufacturing</span> Excellence
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Our track record speaks to decades of consistent quality, innovation, and trusted partnerships 
            with leading manufacturers across the globe
          </p>
        </div>

        {/* Stats Grid with enhanced spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative group">
                {/* Icon Container */}
                <div className="w-20 h-20 bg-light-bg border border-border-light rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary-light transition-all duration-300">
                  <stat.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Counter with enhanced typography */}
                <div className="mb-4">
                  <div className="text-6xl font-bold text-foreground mb-2 leading-none">
                    {counters[stat.key]}{stat.suffix}
                  </div>
                  <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
                </div>

                {/* Label and Description */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {stat.label}
                </h3>
                <p className="text-medium-gray leading-relaxed max-w-xs mx-auto">
                  {stat.description}
                </p>

                {/* Subtle background accent */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Indicators */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-light-bg rounded-2xl border border-border-light">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm font-medium text-foreground mb-1">Quality Inspection</div>
              <div className="text-xs text-medium-gray">Manual & Machine Processes</div>
            </div>
            <div className="text-center p-6 bg-light-bg rounded-2xl border border-border-light">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm font-medium text-foreground mb-1">Support Available</div>
              <div className="text-xs text-medium-gray">Global Coverage</div>
            </div>
            <div className="text-center p-6 bg-light-bg rounded-2xl border border-border-light">
              <div className="text-2xl font-bold text-primary mb-2">ISO</div>
              <div className="text-sm font-medium text-foreground mb-1">Certified Quality</div>
              <div className="text-xs text-medium-gray">International Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;