import React, { useState, useEffect, useRef } from 'react';
import { Shield, Globe, Factory, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Company images for carousel with descriptions
  const companyImages = [
    { src: '/images/Quality tools for precise measurement.jpg', description: 'Quality tools for precise measurements' },
    { src: '/images/High quality raw material.jpg', description: 'High Quality Raw Material' },
    { src: '/images/Hi-Tech machinaries for precise engineering.jpg', description: 'Hi-Tech machineries for precise engineering' },
    { src: '/images/Efficient Logistics.jpg', description: 'Efficient Logistics' }
  ];
  
  // State for carousel hover effect
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  
  // Function to handle image navigation
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % companyImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? companyImages.length - 1 : prevIndex - 1
    );
  };
  
  // Auto-rotate images with pause on hover
  useEffect(() => {
    if (isCarouselHovered) return;
    
    const interval = setInterval(() => {
      nextImage();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isCarouselHovered]);
  
  // Company highlights removed as requested

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden bg-[#11182c]">
      {/* Minimalist decorative elements - Blue family */}
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r" style={{ background: 'linear-gradient(to right,rgb(0, 102, 219), transparent)' }}></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l" style={{ background: 'linear-gradient(to left,rgb(0, 102, 197), transparent)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Section header - Minimalist */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white"
          >
            About <span className="text-white">Shreeji Components</span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isVisible ? "4rem" : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px mb-8 mx-auto bg-white/40"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light"
          >
            A leading manufacturer of precision brass components with over 30 years of industry excellence
          </motion.p>
        </div>
        
        {/* Company description with image carousel - Elegant and Minimalist */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16 items-center px-2 sm:px-0">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light">
              Shreeji Components is an IATF 16949:2016 & ISO 9001:2015 Certified Manufacturer & 
              Exporter of Precision Brass Components based in Jamnagar. With over 30 years of industry experience, 
              we deliver high-quality products meeting global industrial standards across automotive, aerospace, 
              sanitary, and many other sectors.
            </p>
          </motion.div>
          
          {/* Premium Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full md:w-1/2 relative rounded-xl overflow-hidden shadow-elegant h-[250px] sm:h-[300px] md:h-[350px] group"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-xl z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-xl z-10"></div>
            
            {/* Images with descriptions */}
            {companyImages.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentImageIndex ? 1 : 0,
                  scale: index === currentImageIndex ? 1 : 1.05
                }}
                transition={{ 
                  opacity: { duration: 0.8 },
                  scale: { duration: 1.2 }
                }}
                className="absolute inset-0"
              >
                <img 
                  src={image.src} 
                  alt={`Shreeji Components - ${image.description}`} 
                  className="w-full h-full object-cover transition-transform duration-7000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                
                {/* Premium description box */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: index === currentImageIndex ? 0 : 20, 
                    opacity: index === currentImageIndex ? 1 : 0 
                  }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 backdrop-blur-sm bg-gradient-to-t from-black/90 to-black/40"
                >
                  <div className="w-8 sm:w-10 h-0.5 bg-white/60 mb-2 sm:mb-3"></div>
                  <p className="text-white text-xs sm:text-sm md:text-base font-medium">{image.description}</p>
                </motion.div>
              </motion.div>
            ))}
            
            {/* Premium navigation buttons */}
            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex space-x-1.5 sm:space-x-2 z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevImage}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md hover:bg-royal-sapphire text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-royal-sapphire shadow-md hover:shadow-lg transform hover:-translate-y-1"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} className="sm:hidden" />
                <ChevronLeft size={18} className="hidden sm:block" />
              </button>
              <button 
                onClick={nextImage}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md hover:bg-royal-sapphire text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-royal-sapphire shadow-md hover:shadow-lg transform hover:-translate-y-1"
                aria-label="Next image"
              >
                <ChevronRight size={16} className="sm:hidden" />
                <ChevronRight size={18} className="hidden sm:block" />
              </button>
            </div>
            
            {/* Carousel indicators */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex space-x-1 sm:space-x-1.5 z-20">
              {companyImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === currentImageIndex 
                    ? 'w-4 sm:w-6 bg-white' 
                    : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/80'}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Elegant overlay effect */}
            <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>
        </div>
        
        {/* Three new cards after stats section */}
        <div className="mt-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold mb-8 text-center text-white"
          >
            Why Choose <span className="text-white">Shreeji Components</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            
            {/* Card 2: Quality */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-7 h-7 text-white" />
                </div>
              <h4 className="text-xl font-bold mb-3 text-center text-white">Certified Excellence</h4>
              <p className="text-white/80 text-center">
                ISO 9001:2015, IATF 16949:2016 & Zed Bronze certified with rigorous quality control processes ensuring zero defects.
              </p>
            </motion.div>
            
            {/* Card 1: Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Factory className="w-7 h-7 text-white" />
                </div>
              <h4 className="text-xl font-bold mb-3 text-center text-white">Advanced Manufacturing</h4>
              <p className="text-white/80 text-center">
                State-of-the-art CNC machinery, Automatic machinery and precision equipments delivering components with tolerances as tight as ±0.001mm.
              </p>
            </motion.div>

            {/* Card 3: Global Reach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Globe className="w-7 h-7 text-white" />
                </div>
              <h4 className="text-xl font-bold mb-3 text-center text-white">Global Partnerships</h4>
              <p className="text-white/80 text-center">
                Serving clients across automotive, aerospace, and industrial sectors worldwide with 30+ years of expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
