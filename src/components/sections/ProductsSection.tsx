import { useEffect, useState } from 'react';
import { ArrowRight, Zap, Car, Wrench, Home, Settings, Droplets, ChevronLeft, ChevronRight, Factory, Image as Image3, MessageSquare, Download, Check } from 'lucide-react';
import QualityBadgeGroup from '@/components/ui/QualityBadgeGroup';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import productsImage from '@/assets/products-brass.jpg';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Define product images at the top level so they can be exported and used throughout the file
export const productData = [

  {
    src: '/images/Brass hex parts.jpg',
    title: 'Brass Hex Parts',
    description: 'High-precision hexagonal brass components for industrial applications',
    link: '/products/brass-hex-body',
    tag: 'Industrial'
  },
  {
    src: '/images/Brass hex parts 1.png',
    title: 'Brass Special Hex Inserts',
    description: 'Various hexagonal brass fittings and fasteners with superior durability',
    link: '/products/brass-special-hex-inserts',
    tag: 'Assembly'
  },
  {
    src: '/images/Brass neural terminals.png',
    title: 'Brass Electrical Terminal Parts',
    description: 'Electrical connection terminals with excellent conductivity',
    link: '/products/brass-electrical-terminal-parts',
    tag: 'Electrical'
  },
  {
    src: '/images/Brass nickel platted part.png',
    title: 'Brass Nickel Plated Terminal',
    description: 'Corrosion-resistant nickel plated components for harsh environments',
    link: '/products/brass-nickel-plated-terminal',
    tag: 'Durable'
  },
  {
    src: '/images/Brass connector parts.png',
    title: 'Brass Forging Components',
    description: 'Precision brass connector components for reliable connections',
    link: '/products/brass-forging-components',
    tag: 'Precision'
  },
  {
    src: '/images/Brass hyderlauic parts.jpg',
    title: 'Brass Hex Critical 1/8" NPT Thread',
    description: 'Automotive and industrial hydraulic components for fluid systems',
    link: '/products/brass-hex-critical-npt-thread',
    tag: 'Hydraulic'
  },
  {
    src: '/images/Diverse brass parts.jpg',
    title: 'Brass Rivets',
    description: 'Wide range of brass components for various fastening applications',
    link: '/products/brass-rivets',
    tag: 'Fasteners'
  },
  {
    src: '/images/Braass sanitary parts.jpg',
    title: 'Brass Sensor Temperature Body',
    description: 'Brass components for sanitary applications with hygienic properties',
    link: '/products/brass-sensor-temperature-body',
    tag: 'Sanitary'
  },
  {
    src: '/images/Brass Pin Moulding Inserts.jpg',
    title: 'Brass Pin Molding Inserts',
    description: 'Precision sheet metal components for manufacturing processes',
    link: '/products/brass-pin-molding-inserts',
    tag: 'Manufacturing'
  },
  {
    src: '/images/Brass cross diamond knurling.jpg',
    title: 'Brass Cross Diamond Knurling Inserts',
    description: 'Installation and assembly fittings with enhanced grip patterns',
    link: '/products/brass-cross-diamond-knurling-inserts',
    tag: 'Engineering'
  },
  {
    src: '/images/Precision Brass manufacturing.jpg',
    title: 'Precise Knurling Inserts',
    description: 'State-of-the-art manufacturing process for consistent quality',
    link: '/products/precise-knurling-inserts',
    tag: 'Quality'
  },
  {
    src: '/images/brass-fittings-sale-parts-installation-600nw-1842618283.webp',
    title: 'Brass Fittings',
    description: 'Installation and assembly fittings for plumbing applications',
    link: '/products/brass-hex-body',
    tag: 'Plumbing'
  }
  ];

// Product data is now exported at the top of the file

// Main component
const ProductsSection = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isMobile, setIsMobile] = useState(false);
  
  // Filter categories based on product tags
  const filterCategories = ['All', 'Industrial', 'Electrical', 'Precision', 'Hydraulic', 'Engineering'];
  
  // Filter products based on selected category
  const filteredProducts = selectedFilter === 'All' 
    ? productData 
    : productData.filter(product => product.tag === selectedFilter);
  
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
    // Reset current slide when filter changes
    setCurrentSlide(0);
  }, [selectedFilter]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredProducts.length / (isMobile ? 2 : 4)));
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [filteredProducts.length, isHovered, isMobile]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredProducts.length / (isMobile ? 2 : 4)));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredProducts.length / (isMobile ? 2 : 4))) % Math.ceil(filteredProducts.length / (isMobile ? 2 : 4)));
  };
  
  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="relative">
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-royal-sapphire/70 h-0.5 w-40 rounded-full"></div>
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs font-medium text-royal-sapphire uppercase tracking-widest bg-background/80 px-4 py-1 rounded-full border border-royal-sapphire/20 shadow-sm">Product Collection</div>
      
      {/* Filter Categories */}
      <div className="flex justify-center mb-6 overflow-x-auto pb-2 no-scrollbar">
        <div className="flex space-x-2 p-1 bg-light-bg/50 backdrop-blur-sm rounded-full border border-royal-sapphire/10 shadow-sm">
          {filterCategories.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${selectedFilter === filter 
                ? 'bg-royal-sapphire text-white shadow-md transform scale-105' 
                : 'text-medium-gray hover:text-foreground hover:bg-light-bg'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl shadow-elegant bg-white/40 backdrop-blur-md border border-white/50 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/30 before:to-transparent before:pointer-events-none">
        {/* Glass decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#11182c]/10 rounded-full blur-2xl"></div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-[#11182c] hover:text-white transition-all duration-500 border border-white/50 group z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-[#11182c] group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
          <span className="absolute inset-0 rounded-full bg-[#0077B5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-[#11182c] hover:text-white transition-all duration-500 border border-white/50 group z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-[#11182c] group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
          <span className="absolute inset-0 rounded-full bg-[#0077B5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
        
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {filteredProducts.length === 0 ? (
            <div className="w-full flex-shrink-0 py-20 flex items-center justify-center">
              <div className="text-center p-10 bg-white/40 backdrop-blur-md rounded-xl border border-royal-sapphire/10 shadow-elegant">
                <Settings className="w-12 h-12 text-royal-sapphire/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Products Found</h3>
                <p className="text-medium-gray">No products match the selected filter criteria.</p>
                <button 
                  onClick={() => setSelectedFilter('All')} 
                  className="mt-4 px-4 py-2 bg-royal-sapphire text-white rounded-full text-sm font-medium hover:bg-royal-sapphire/90 transition-all duration-300"
                >
                  View All Products
                </button>
              </div>
            </div>
          ) : (
            Array.from({ length: Math.ceil(filteredProducts.length / (isMobile ? 2 : 4)) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-8 px-5 md:px-7 lg:px-10">
                  {filteredProducts.slice(slideIndex * (isMobile ? 2 : 4), slideIndex * (isMobile ? 2 : 4) + (isMobile ? 2 : 4)).map((product, index) => (
                  <Link 
                    to={product.link} 
                    key={`${slideIndex}-${index}`}
                    className="block h-full"
                  >
                    <div
                      className={`bg-white/40 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-2xl group transition-all duration-700 border border-white/40 transform hover:-translate-y-2 hover:scale-[1.02] h-full ${
                        isVisible ? 'animate-scale-in' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 150}ms` }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Glass effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-70 pointer-events-none z-10"></div>
                      
                      {/* Product Image */}
                      <div className="relative h-52 md:h-56 overflow-hidden">
                        <img 
                          src={product.src} 
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-royal-sapphire/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        {/* Liquid animation effect */}
                        <div className="absolute -bottom-2 left-0 right-0 h-8 bg-white/20 backdrop-blur-sm transform skew-y-3 z-10"></div>
                        
                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/60 backdrop-blur-md rounded-lg text-[#11182c] text-xs font-medium border border-white/50 shadow-md">
                          {product.tag}
                        </div>
                        
                        <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out border border-white/20">
                          <h3 className="text-lg font-semibold text-white">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-5 md:p-6 relative">
                        {/* Subtle glass highlight */}
                        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
                        
                        <div className="w-10 h-0.5 bg-[#11182c]/70 rounded-full mb-3 md:mb-4"></div>
                        <h3 className="text-lg md:text-xl font-semibold text-[#11182c] mb-2 md:mb-3 group-hover:text-royal-sapphire transition-colors duration-300 flex items-center">
                          {product.title}
                          <span className="w-2 h-2 rounded-full bg-royal-sapphire ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        </h3>
                        <p className="text-[#4F6685] leading-relaxed text-sm">
                          {product.description}
                        </p>
                        <div className="mt-4 flex items-center">
                          <div className="px-3 py-1.5 bg-gradient-to-r from-royal-sapphire to-royal-sapphire/90 rounded-full text-white text-xs font-medium flex items-center group-hover:shadow-md transition-all duration-300 border border-white/20">
                            <span>View Details</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Carousel indicators with liquid effect */}
        <div className="flex justify-center py-8 space-x-3 relative z-10">
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#11182c]/10 to-transparent transform -translate-y-1/2"></div>
          {filteredProducts.length > 0 && Array.from({ length: Math.ceil(filteredProducts.length / (isMobile ? 2 : 4)) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-700 ${
                currentSlide === index 
                  ? 'bg-[#11182c] w-12 shadow-glow scale-110' 
                  : 'bg-gray-300/70 hover:bg-[#11182c]/30 w-2 hover:w-8'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Product Count */}
      <div className="text-center mt-4 text-xs text-medium-gray">
        <span className="bg-light-bg/70 px-3 py-1 rounded-full">
          Showing {filteredProducts.length} of {productData.length} products
        </span>
      </div>
    </div>
  );
};

// Main component
const ProductsSectionMain = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: true });
  
  return (
    <section id="products" ref={sectionRef} className="py-28 bg-gradient-subtle relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#11182c]/10 rounded-full blur-2xl"></div>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-[#11182c]/10 rounded-full px-5 py-2 mb-4">
            <div className="p-1 rounded-full bg-[#11182c]/20">
              <Factory className="w-3 h-3 text-[#11182c]" />
            </div>
            <span className="text-[#11182c] font-semibold text-sm">Industry Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#0077B5]">Product</span> Showcase
          </h2>
          
          <div className="w-24 h-1 bg-[#11182c] rounded-full mb-6 mx-auto"></div>
          
          <p className="text-[#4F6685] max-w-3xl mx-auto leading-relaxed">
            Explore our featured collection of precision-engineered brass components designed for various industrial applications
          </p>
          
          <QualityBadgeGroup badges={['iso', 'global', 'quality']} className="mt-8" />
        </div>

        {/* Product Showcase Carousel */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="relative bg-gradient-to-b from-background to-light-bg/30 p-1 rounded-2xl shadow-md">
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-[#11182c]/30 rounded-tl-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-[#11182c]/30 rounded-br-3xl"></div>
            <ProductCarousel productItems={productData} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-background to-background/80 rounded-xl p-6 shadow-sm max-w-3xl mx-auto border border-[#11182c]/10 relative overflow-hidden">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#11182c] rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-[#11182c]/30"></div>
            <div className="absolute -left-16 -top-16 w-24 h-24 bg-[#11182c]/5 rounded-full blur-xl"></div>
            <div className="absolute -right-16 -bottom-16 w-24 h-24 bg-[#11182c]/5 rounded-full blur-xl"></div>
            
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Need a <span className="text-[#11182c]">Custom Solution</span>?
            </h3>
            <p className="text-base text-foreground/70 mb-4 max-w-2xl mx-auto">
              Not just Brass, we provide exceptionally engineered products made up of : Copper, Stainless steel, Bronze, Gold plated parts, Plastic parts and much more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
                className="bg-[#11182c] hover:bg-[#11182c]/90 text-white shadow-sm hover:shadow-md transition-all duration-300 text-sm px-6 py-2 h-auto rounded-full"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Custom Quote
              </Button>
              <Link to="/products">
                <Button 
                  variant="outline" 
                  className="bg-[#E7ECEF]/20 hover:bg-[#E7ECEF]/50 text-[#404E68] border border-[#404E68]/30 hover:border-gray-400 hover:text-[#404E68] shadow-sm hover:shadow-md transition-all duration-300 text-sm px-6 py-3 h-auto rounded-full"
                >
                  View All Products <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

// Define the type for product items
interface ProductItem {
  src: string;
  title: string;
  description: string;
  link: string;
  features?: string[];
}

// ProductCarousel component
const ProductCarousel = ({ productItems }: { productItems: ProductItem[] }) => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) return;
    
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-rotation effect with infinite scrolling
  useEffect(() => {
    if (!api || isHovered) return;
    
    const interval = setInterval(() => {
      const nextIndex = (current + 1) % count;
      api.scrollTo(nextIndex);
    }, 4000); // Rotate every 4 seconds - slightly slower for better user experience
    
    return () => clearInterval(interval);
  }, [api, isHovered, current, count]);

  return (
    <Carousel 
      className="w-full" 
      setApi={setApi}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CarouselContent>
        {productItems.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 mt-2">
            <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
              <Card className="border-blue-900/20 hover:border-blue-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-0 relative overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-white/80 text-sm mt-1">{item.description}</p>
                  </div>
                  
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
<CarouselPrevious 
  className="-left-4 bg-white/60 backdrop-blur-md border-white/50 hover:bg-[#11182c] hover:text-white w-10 h-10 md:w-12 md:h-12 shadow-md hover:!translate-y-0"
/>
<CarouselNext 
  className="-right-4 bg-white/60 backdrop-blur-md border-white/50 hover:bg-[#11182c] hover:text-white w-10 h-10 md:w-12 md:h-12 shadow-md hover:!translate-y-0"
/>
      
      {/* Indicators */}
      <div className="flex justify-center gap-1 mt-2 ">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-[#11182c]' : 'w-2 bg-gray-300'}`}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default ProductsSectionMain;