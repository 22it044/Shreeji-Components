import { useState, useEffect, useRef } from 'react';
import { Cog, Shield, Clock, Lightbulb, Users, Leaf, ChevronLeft, ChevronRight, CheckCircle, Settings, Award, Globe, Factory, ShieldCheck, Target, Star, Sparkles, Gem, BadgeCheck, Zap, Medal, Hexagon, Package, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import facilityImage from '@/assets/facility-interior.jpg';
import QualityBadgeGroup from '@/components/ui/QualityBadgeGroup';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    products: 0,
    countries: 0
  });
  
  // Carousel images for About section
  const aboutImages = [
    {
      src: '/images/Quality tools for precise measurement.jpg',
      alt: 'Quality tools for precise measurements',
      title: 'Quality tools for precise measurements'
    },
    {
      src: '/images/Hi-Tech machinaries for precise engineering.jpg',
      alt: 'Hi-Tech machineries for precise engineering',
      title: 'Hi-Tech machineries for precise engineering'
    },
    {
      src: '/images/Efficient Logistics.jpg',
      alt: 'Efficient logistics',
      title: 'Efficient logistics'
    }
  ];
  
  // Stats data
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
      description: 'Various reputed client companies across the globe',
      key: 'clients' as keyof typeof counters,
      color: 'secondary',
    },
    {
      icon: Package,
      value: 50,
      suffix: '+',
      label: 'Advanced Machinery',
      description: 'Hi-Tech machineries for precise engineering',
      key: 'machinery' as keyof typeof counters,
      color: 'success',
    },
    {
      icon: TrendingUp,
      value: 25,
      suffix: 'M+',
      label: 'Parts Monthly',
      description: 'High volume supply capacity without quality compromise',
      key: 'parts' as keyof typeof counters,
      color: 'primary',
    },
  ];
  
  // Quality control processes
  const qualityProcesses = [
    {
      icon: CheckCircle,
      title: 'Material Inspection',
      description: 'Rigorous testing of raw materials before processing to ensure compliance with specifications',
      image: '/images/High quality raw material.jpg'
    },
    {
      icon: Settings,
      title: 'In-Process Monitoring',
      description: 'Continuous monitoring during machining operations with real-time quality checks',
      image: '/images/CNC Machining manufacturing.jpg'
    },
    {
      icon: Award,
      title: 'Final Quality Assurance',
      description: '100% inspection protocols with advanced measuring equipment before dispatch',
      image: '/images/Excellence engineering_.jpg'
    }
  ];

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };
  
  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set to visible if not already visible (runs animation only once)
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setAnimationTriggered(true);
          
          // Animate counters with staggered timing
          stats.forEach((stat, index) => {
            setTimeout(() => {
              let startValue = 0;
              const duration = 2500;
              const increment = stat.value / (duration / 16);
              
              const timer = setInterval(() => {
                // Using easeOutQuad for smoother animation
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, stats]);

  const values = [
    {
      icon: Cog,
      title: 'Precision Engineering',
      description: 'Advanced CNC machining with tolerances to ±0.001mm',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO 9001:2015 certified with 100% inspection protocols',
    },
    {
      icon: Clock,
      title: 'Reliable Delivery',
      description: '99.5% on-time delivery success across all orders',
    },
    {
      icon: Users,
      title: 'Partnership Focus',
      description: 'Dedicated support for long-term business relationships',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-light-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Section - Moved from StatsSection */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium text-sm">Our Performance</span>
            </div>
            <h2 className="text-section-title mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">Industry-Leading</span> Performance
            </h2>
            <p className="text-medium-gray max-w-2xl mx-auto">Delivering exceptional quality and precision across all our manufacturing processes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl blur-md transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative p-8 bg-gradient-to-br from-light-bg/90 to-light-bg/70 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500 transform group-hover:translateY(-3px) text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500">
                    <stat.icon className="w-7 h-7 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500" />
                  </div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 drop-shadow-text-colored">
                    {counters[stat.key] || 0}{stat.suffix}
                  </div>
                  <div className="text-base font-medium text-foreground mb-1 group-hover:text-primary transition-all duration-500">{stat.label}</div>
                  <div className="text-xs text-medium-gray">{stat.description}</div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary/50 to-secondary/50 transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-light to-secondary/10 rounded-full px-6 py-3 mb-8 shadow-sm">
            <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold text-sm">Manufacturing Excellence Since 1994</span>
          </div>
          
          <h2 className="text-section-title mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark font-bold">Shreeji Components</span> - 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark font-bold mt-2">Precision Manufacturing Excellence</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8 relative mx-auto">
            <div className="absolute -right-1 -top-1 w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
          </div>
          
          {/* Quality badges */}
          <QualityBadgeGroup badges={['iso', 'global', 'quality']} className="mb-8" />
          
          <div className="space-y-6 text-lg leading-relaxed max-w-4xl mx-auto">
            <p className="text-medium-gray/90">
              Shreeji Components is an IATF 16949:2016 & ISO 9001:2015 Certified Manufacturers & 
              Exporters of Precision Brass Components manufacturing company based in Jamnagar. We are 
              actively working in the industry since past 30+ years with the aim to provide top 
              notch quality products that meet the industrial standards across the globe.
            </p>
            <p className="text-medium-gray/90">
              We serve our high quality brass components to various industries like Automotive, 
              Sanitary, Shipping, Aerospace, Oil & Gas, Pneumatic, Agriculture, Electricals and Power industry, 
              Solar (renewable energy), Rubber, EV and more.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.15) }}
              className="text-center"
            >
              <div className="relative group">
                {/* Icon Container */}
                <div className="relative w-20 h-20 mx-auto mb-6 group-hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl blur-md transform group-hover:scale-110 transition-all duration-500"></div>
                  <div className="absolute inset-0 border border-primary/10 rounded-xl backdrop-blur-sm bg-light-bg/80 shadow-md group-hover:shadow-lg transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <stat.icon className="w-10 h-10 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500" />
                  </div>
                </div>

                {/* Counter with improved animation */}
                <div className="mb-4">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/90 group-hover:from-primary group-hover:to-secondary transition-all duration-500 mb-1 relative overflow-hidden">
                    <span className="relative z-10">{counters[stat.key]}{stat.suffix}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-700"></div>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full mx-auto mb-3 group-hover:w-24 transition-all duration-500"></div>
                </div>

                {/* Label and Description with enhanced hover effects */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                  {stat.label}
                </h3>
                <p className="text-medium-gray text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Carousel Section */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-secondary/10 rounded-full blur-xl"></div>
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 shadow-elegant">
            {/* Collection tag */}
            <div className="absolute -top-5 left-10 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold py-2 px-6 rounded-full shadow-md z-10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Featured Collection</span>
              </div>
            </div>
            
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {aboutImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 backdrop-blur-sm">
                      <h4 className="text-white font-semibold text-lg">{image.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary/80 to-primary/60 backdrop-blur-sm hover:from-primary hover:to-primary/80 rounded-full p-3 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-white transition-transform duration-300 hover:-translate-x-1" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary/80 to-primary/60 backdrop-blur-sm hover:from-primary hover:to-primary/80 rounded-full p-3 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-white transition-transform duration-300 hover:translate-x-1" />
              </button>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {aboutImages.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'w-8 bg-gradient-to-r from-primary to-secondary' 
                        : 'w-3 bg-white/50 hover:bg-white/70 hover:w-5'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating Quality Badge */}
          <div className="absolute -bottom-8 -right-6 bg-gradient-to-br from-background to-background/90 backdrop-blur-sm rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-500 border border-border-light group hover:-translate-y-1">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-success to-success/70 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-success to-success-dark">ISO Certified</div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-success/30 to-success rounded-full my-1"></div>
                <div className="text-sm text-medium-gray group-hover:text-foreground/80 transition-colors duration-300">Quality Management</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-24 relative">
          {/* Simplified decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-5 py-2 mb-4 mx-auto"
            >
              <div className="p-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20">
                <Medal className="w-3 h-3 text-primary" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold text-sm">Our Values</span>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4 relative"
            >
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-secondary-glow">Values</span> That Drive Us
            </motion.h3>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: isVisible ? "8rem" : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 mx-auto"
            ></motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-medium-gray max-w-3xl mx-auto leading-relaxed"
            >
              Our core values shape every aspect of our business, from how we design and manufacture our products 
              to how we interact with our customers and partners.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : 30 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + (index * 0.1)
                }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 30px -15px rgba(var(--shadow-color), 0.15)",
                  y: -5
                }}
                className="bg-gradient-to-br from-background/90 to-background/70 rounded-xl p-8 border border-primary/10 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-300"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">{value.title}</h3>
                <p className="text-medium-gray text-center group-hover:text-foreground/80 transition-colors duration-300">{value.description}</p>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="mt-4 flex justify-center"
                >
                  <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Learn More</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
