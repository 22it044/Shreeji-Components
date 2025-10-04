import { useEffect, useRef, useState } from 'react';
import { Car, Plane, Ship, Zap, Droplets, Wrench, Factory, Leaf, Fuel, Building2, CircuitBoard, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import QualityBadgeGroup from '@/components/ui/QualityBadgeGroup';
import { ResponsiveImage } from '@/components/ui/responsive-image';

const IndustriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Define industries data first
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

  useEffect(() => {
    // Check if mobile on initial render
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(industries.length / (isMobile ? 2 : 4)));
    }, 6000);
    return () => clearInterval(interval);
  }, [isMobile, industries.length]);

  return (
    <section id="industries" ref={sectionRef} className="py-24 bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-md relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#11182c]/10 rounded-full blur-2xl"></div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md rounded-full px-5 py-2 mb-4 border border-white/70 shadow-md">
            <div className="p-1 rounded-full bg-white/60 backdrop-blur-md border border-white/70">
              <Factory className="w-3 h-3 text-[#11182c]" />
            </div>
            <span className="text-[#11182c] font-semibold text-sm">Global Excellence</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#0077B5] ">Industries </span>  <span className="text-[#11182c]"> We Serve</span>
          </h2>
          
          <div className="w-24 h-1 bg-[#11182c] rounded-full mb-6 mx-auto"></div>
          
          <p className="text-[#334155] max-w-3xl mx-auto leading-relaxed">
            We deliver precision brass parts and various other engineered solutions across different industries, meeting specific requirements and quality standards for each sector.
          </p>
          
          <QualityBadgeGroup badges={['iso', 'global', 'quality']} className="mt-8" />
        </div>

        {/* Industries Carousel */}
        <div className="relative overflow-hidden rounded-xl shadow-elegant bg-white/160 backdrop-blur-md border border-white/170">
          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + Math.ceil(industries.length / (isMobile ? 2 : 4))) % Math.ceil(industries.length / (isMobile ? 2 : 4)))}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-[#11182c]/50 hover:text-white transition-all duration-500 border border-white/70 group z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute inset-0 rounded-full bg-[#0077B5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % Math.ceil(industries.length / (isMobile ? 2 : 4)))}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-[#11182c]/50 hover:text-white transition-all duration-500 border border-white/70 group z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute inset-0 rounded-full bg-[#0077B5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(industries.length / (isMobile ? 2 : 4)) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8">
                  {industries.slice(slideIndex * (isMobile ? 2 : 4), slideIndex * (isMobile ? 2 : 4) + (isMobile ? 2 : 4)).map((industry, index) => (
                    <div
                      key={industry.title}
                      className={`bg-white/60 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-2xl group transition-all duration-500 border border-white/70 transform hover:-translate-y-2 hover:scale-[1.02] ${
                        isVisible ? 'animate-scale-in' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Industry Image */}
                      <div className="relative h-52 md:h-56 overflow-hidden">
                        <ResponsiveImage 
                          src={industry.image} 
                          alt={`${industry.title} industry`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          width={800}
                          height={600}
                          priority={false}
                          aboveTheFold={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                        <div className="absolute top-4 left-4 w-12 h-12 md:w-14 md:h-14 bg-white/60 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 border border-white/70">
                          <industry.icon className="w-6 h-6 md:w-7 md:h-7 text-[#11182c] transition-colors duration-500" />
                        </div>
                        
                        <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 border border-white/20">
                          <h3 className="text-lg font-semibold text-white">
                            {industry.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-4 md:p-6">
                        <div className="w-10 h-0.5 bg-[#11182c]/70 rounded-full mb-3 md:mb-4"></div>
                        <h3 className="text-lg md:text-xl font-semibold text-[#11182c] mb-2 md:mb-3 group-hover:text-royal-sapphire transition-colors duration-300 flex items-center">
                          {industry.title}
                          <span className="w-2 h-2 rounded-full bg-royal-sapphire ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        </h3>
                        <p className="text-[4F6685] leading-relaxed text-sm">
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
            {Array.from({ length: Math.ceil(industries.length / (isMobile ? 2 : 4)) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentIndex === index 
                    ? 'bg-[#11182c] w-10 shadow-glow' 
                    : 'bg-gray-300 hover:bg-[#11182c]/30 w-2 hover:w-6'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
