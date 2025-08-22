import { useEffect, useRef, useState } from 'react';
import { Car, Plane, Ship, Zap, Droplets, Wrench, Factory, Leaf, Fuel, Building2, CircuitBoard, Truck } from 'lucide-react';
import QualityBadgeGroup from '@/components/ui/QualityBadgeGroup';

const IndustriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(industries.length / 4));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const industries = [
    {
      icon: Car,
      title: 'Automobile',
      description: 'Precision automotive components for engine, transmission, and electrical systems',
      image: '/images/Automobile industry.jpg'
    },
    {
      icon: Ship,
      title: 'Shipping',
      description: 'Marine-grade brass components for maritime and offshore applications',
      image: '/images/Shipping industryjpg.jpg'
    },
    {
      icon: Plane,
      title: 'Aviation & Aerospace',
      description: 'High-precision aerospace components meeting strict aviation standards',
      image: '/images/Aviation industry.jpg'
    },
    {
      icon: Leaf,
      title: 'Renewable Energy',
      description: 'Solar and wind energy components for sustainable power generation',
      image: '/images/Green Energy-433308.jpg'
    },
    {
      icon: Droplets,
      title: 'Sanitary',
      description: 'Hygienic brass fittings and components for plumbing and sanitary systems',
      image: '/images/Braass sanitary parts.jpg'
    },
    {
      icon: Factory,
      title: 'Plastic & Rubber',
      description: 'Specialized components for plastic injection molding and rubber processing',
      image: '/images/Plastic industries.jpg'
    },
    {
      icon: Fuel,
      title: 'Oil & Gas',
      description: 'Corrosion-resistant components for petroleum and natural gas applications',
      image: '/images/Oil and gass.jpg'
    },
    {
      icon: Zap,
      title: 'Electricals & Power',
      description: 'High-conductivity electrical components and power distribution parts',
      image: '/images/Electrical connector industry.jpg'
    },
    {
      icon: Wrench,
      title: 'Pneumatic',
      description: 'Precision pneumatic fittings and air handling system components',
      image: '/images/Pnumatic.jpg'
    },
    {
      icon: Building2,
      title: 'Agriculture',
      description: 'Durable agricultural equipment components and irrigation system parts',
      image: '/images/agriculture.jpg'
    },
    {
      icon: CircuitBoard,
      title: 'EV (Electric Vehicles)',
      description: 'Advanced components for electric vehicle charging and power systems',
      image: '/images/ev cars.jpg'
    },
    {
      icon: Truck,
      title: 'Industrial Manufacturing',
      description: 'Custom industrial components for various manufacturing applications',
      image: '/images/CNC Machining manufacturing.jpg'
    },
  ];

  return (
    <section id="industries" ref={sectionRef} className="py-24 bg-light-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block">
            <span className="text-xs font-medium text-primary/80 uppercase tracking-widest bg-primary/5 px-4 py-1 rounded-full border border-primary/10 shadow-sm mb-4 inline-block">Global Excellence</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Industries We</span> <span className="text-gradient-primary">Serve</span>
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Shreeji Components delivers precision brass parts across diverse industries, 
            meeting specific requirements and quality standards for each sector
          </p>
          
          <QualityBadgeGroup badges={['iso', 'global', 'quality']} className="mt-8" />
        </div>

        {/* Industries Carousel */}
        <div className="relative overflow-hidden rounded-3xl shadow-elegant bg-background/50 backdrop-blur-sm border border-border-light">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(industries.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8">
                  {industries.slice(slideIndex * 4, slideIndex * 4 + 4).map((industry, index) => (
                    <div
                      key={industry.title}
                      className={`bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-elegant group transition-all duration-500 border border-border-light transform hover:-translate-y-2 hover:scale-[1.02] ${
                        isVisible ? 'animate-scale-in' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >

                      
                      {/* Industry Image */}
                      <div className="relative h-52 md:h-56 overflow-hidden">
                        <img 
                          src={industry.image} 
                          alt={`${industry.title} industry`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                        <div className="absolute top-4 left-4 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500 border border-primary/10">
                          <industry.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-secondary transition-colors duration-500" />
                        </div>
                        
                        <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 border border-white/20">
                          <h3 className="text-lg font-semibold text-white">
                            {industry.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-4 md:p-6">
                        <div className="w-10 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-3 md:mb-4"></div>
                        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300 flex items-center">
                          {industry.title}
                          <span className="w-2 h-2 rounded-full bg-primary ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        </h3>
                        <p className="text-medium-gray leading-relaxed text-sm">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center py-6 space-x-3">
            {Array.from({ length: Math.ceil(industries.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentIndex === index 
                    ? 'bg-gradient-to-r from-primary to-secondary w-10 shadow-glow' 
                    : 'bg-gray-300 hover:bg-primary/30 w-2 hover:w-6'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 md:mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-background to-background/80 rounded-2xl p-6 md:p-10 shadow-elegant max-w-4xl mx-auto border border-primary/5 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full filter blur-2xl -translate-y-1/2 translate-x-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/5 rounded-full filter blur-2xl translate-y-1/2 -translate-x-1/2 z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                Don't See Your Industry?
              </h3>
              <p className="text-base md:text-lg text-medium-gray mb-6 md:mb-8 max-w-2xl mx-auto">
                We work with clients across many more industries. Contact us to discuss 
                how our precision manufacturing can serve your specific needs.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4 md:mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary-light rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm hover:shadow-md transition-shadow duration-300 w-full md:w-auto">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary font-semibold text-sm">30+ Years Serving Diverse Industries</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-secondary-light rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm hover:shadow-md transition-shadow duration-300 w-full md:w-auto">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-secondary font-semibold text-sm">Global Manufacturing Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
