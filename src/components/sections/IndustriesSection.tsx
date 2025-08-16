import { useEffect, useRef, useState } from 'react';
import { Car, Plane, Ship, Zap, Droplets, Wrench, Factory, Leaf, Fuel, Building2, CircuitBoard, Truck } from 'lucide-react';

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
    }, 3000);
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
      image: '/images/Rubber industries.jpg'
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
      image: '/images/High quality raw material.jpg'
    },
    {
      icon: Building2,
      title: 'Agriculture',
      description: 'Durable agricultural equipment components and irrigation system parts',
      image: '/images/Excellence engineering_.jpg'
    },
    {
      icon: CircuitBoard,
      title: 'EV (Electric Vehicles)',
      description: 'Advanced components for electric vehicle charging and power systems',
      image: '/images/Green Energy-433308.jpg'
    },
    {
      icon: Truck,
      title: 'Industrial Manufacturing',
      description: 'Custom industrial components for various manufacturing applications',
      image: '/images/CNC Machining manufacturing.jpg'
    },
  ];

  return (
    <section id="industries" ref={sectionRef} className="py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industries We <span className="text-gradient-primary">Serve</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Shreeji Components delivers precision brass parts across diverse industries, 
            meeting specific requirements and quality standards for each sector
          </p>
        </div>

        {/* Industries Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(industries.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                  {industries.slice(slideIndex * 4, slideIndex * 4 + 4).map((industry, index) => (
                    <div
                      key={industry.title}
                      className={`bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-elegant group transition-all duration-500 border border-border-light ${
                        isVisible ? 'animate-scale-in' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Industry Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={industry.image} 
                          alt={`${industry.title} industry`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <industry.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {industry.title}
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
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(industries.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-background rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto border border-border-light">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-lg text-medium-gray mb-6">
              We work with clients across many more industries. Contact us to discuss 
              how our precision manufacturing can serve your specific needs.
            </p>
            <div className="inline-flex items-center space-x-2 bg-primary-light rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-semibold text-sm">30+ Years Serving Diverse Industries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
