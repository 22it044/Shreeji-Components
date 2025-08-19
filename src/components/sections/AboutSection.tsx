import { useState, useEffect, useRef } from 'react';
import { Cog, Shield, Clock, Lightbulb, Users, Leaf, ChevronLeft, ChevronRight, CheckCircle, Settings, Award, Globe, Factory, ShieldCheck, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import facilityImage from '@/assets/facility-interior.jpg';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel images for About section
  const aboutImages = [
    {
      src: '/images/CNC Machining manufacturing.jpg',
      alt: 'Advanced CNC Machining Operations',
      title: 'Advanced CNC Machining'
    },
    {
      src: '/images/Excellence engineering_.jpg',
      alt: 'Engineering Excellence',
      title: 'Engineering Excellence'
    },
    {
      src: '/images/Metal_Fabrication_Quality_Control-725w.webp',
      alt: 'Manufacturing Facility',
      title: 'State-of-the-Art Facility'
    },
    {
      src: '/images/High quality raw material.jpg',
      alt: 'High Quality Raw Materials',
      title: 'Premium Raw Materials'
    }
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
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const values = [
    {
      icon: Cog,
      title: 'Precision Engineering',
      description: 'Advanced CNC machining capabilities with tolerances down to ±0.001mm for critical applications',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO 9001:2015 certified quality management with 100% inspection protocols',
    },
    {
      icon: Clock,
      title: 'Reliable Delivery',
      description: 'Consistent on-time delivery with 99.5% success rate across all customer orders',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Leadership',
      description: 'Continuous investment in R&D and cutting-edge manufacturing technologies',
    },
    {
      icon: Users,
      title: 'Partnership Focus',
      description: 'Dedicated account management and engineering support for long-term partnerships',
    },
    {
      icon: Leaf,
      title: 'Sustainable Manufacturing',
      description: 'Environmental responsibility with eco-friendly processes and material optimization',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          {/* Content */}
          <div className={`lg:col-span-7 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary-light rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-primary font-semibold text-sm">Manufacturing Excellence Since 1994</span>
              </div>
              
              <h2 className="text-section-title text-foreground mb-8 leading-tight">
                <span className="text-primary">Shreeji Components</span> - 
                <span className="block text-secondary">Precision Manufacturing Excellence</span>
              </h2>
              
              <div className="w-24 h-1 bg-secondary rounded-full mb-8"></div>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-medium-gray">
                  Shreeji Components is an IATF 16949:2016 & ISO 9001:2015 Certified Manufacturers & 
                  Exporters of Precision Brass Components manufacturing company based in Jamnagar. We are 
                  actively working in the industry since past 30+ years with the aim to provide top 
                  notch quality products that meet the industrial standards across the globe.
                </p>
                <p className="text-medium-gray">
                  We serve our high quality brass components to various industries like Automotive, 
                  Sanitary, Shipping, Aerospace, Oil & Gas, Pneumatic, Agriculture, Electricals and Power industry, 
                  Solar (renewable energy), Rubber, EV and more.
                </p>
              </div>
            </div>

            {/* Enhanced Company Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-2xl p-8 border border-border-light shadow-card">
                <div className="text-3xl font-bold text-primary mb-3">Millions</div>
                <h4 className="font-semibold text-foreground mb-2">Parts Monthly</h4>
                <p className="text-medium-gray text-sm">
                  Consistent high-volume production capacity with maintained quality standards
                </p>
              </div>
              <div className="bg-background rounded-2xl p-8 border border-border-light shadow-card">
                <div className="text-3xl font-bold text-primary mb-3">65+</div>
                <h4 className="font-semibold text-foreground mb-2">Diverse Clients</h4>
                <p className="text-medium-gray text-sm">
                  Global clients across diverse industries with established supply chains
                </p>
              </div>
            </div>
            

          </div>

          {/* Image Carousel Section */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
                {/* Carousel Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-deep">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {aboutImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0 relative">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                          <h4 className="text-white font-semibold text-lg">{image.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation Buttons */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                  
                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {aboutImages.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          currentSlide === index ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Quality Badge - Adjusted position to avoid overlap */}
              <div className="absolute -bottom-8 -right-6 bg-background rounded-2xl p-6 shadow-deep border border-border-light">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">ISO Certified</div>
                    <div className="text-sm text-medium-gray">Quality Management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values with enhanced spacing */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Core</span> Values
            </h3>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto leading-relaxed">
              The foundational values that drive Shreeji Components' commitment to manufacturing excellence 
              and long-term global partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-background rounded-2xl p-8 border border-border-light shadow-card hover:shadow-elegant group transition-all duration-500 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h4>
                <p className="text-medium-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
