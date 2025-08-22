import { useEffect, useState } from 'react';
import { ArrowRight, Zap, Car, Wrench, Home, Settings, Droplets, ChevronLeft, ChevronRight, Factory, Image as Image3, MessageSquare, Download, Check } from 'lucide-react';
import QualityBadgeGroup from '@/components/ui/QualityBadgeGroup';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import productsImage from '@/assets/products-brass.jpg';
import { Link } from 'react-router-dom';

// Enhanced Interactive Product Carousel Component
const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const productImages = [
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
      src: '/images/Brass sheet metal p arts.jpg',
      title: 'Brass Pin Molding Inserts',
      description: 'Precision sheet metal components for manufacturing processes',
      link: '/products/brass-pin-molding-inserts',
      tag: 'Manufacturing'
    },
    {
      src: '/images/brass-fittings-sale-parts-installation-600nw-1842618283.webp',
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

  // Filter categories based on product tags
  const filterCategories = ['All', 'Industrial', 'Electrical', 'Precision', 'Hydraulic', 'Engineering'];
  
  // Filter products based on selected category
  const filteredProducts = selectedFilter === 'All' 
    ? productImages 
    : productImages.filter(product => product.tag === selectedFilter);
    
  useEffect(() => {
    // Reset current slide when filter changes
    setCurrentSlide(0);
  }, [selectedFilter]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredProducts.length / 4));
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [filteredProducts.length, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredProducts.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredProducts.length / 4)) % Math.ceil(filteredProducts.length / 4));
  };
  
  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="relative">
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary/20 via-primary to-primary/20 h-0.5 w-40 rounded-full"></div>
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs font-medium text-primary/80 uppercase tracking-widest bg-background/80 px-4 py-1 rounded-full border border-primary/20 shadow-sm">Product Collection</div>
      
      {/* Filter Categories */}
      <div className="flex justify-center mb-6 overflow-x-auto pb-2 no-scrollbar">
        <div className="flex space-x-2 p-1 bg-light-bg/50 backdrop-blur-sm rounded-full border border-primary/10 shadow-sm">
          {filterCategories.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${selectedFilter === filter 
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow transform scale-105' 
                : 'text-medium-gray hover:text-foreground hover:bg-light-bg'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Carousel Container */}
      <div 
        className="overflow-hidden rounded-2xl shadow-elegant mx-10 transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {filteredProducts.length === 0 ? (
            <div className="w-full flex-shrink-0 py-20 flex items-center justify-center">
              <div className="text-center p-10 bg-light-bg/50 rounded-xl border border-primary/10 shadow-elegant">
                <Settings className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Products Found</h3>
                <p className="text-medium-gray">No products match the selected filter criteria.</p>
                <button 
                  onClick={() => setSelectedFilter('All')} 
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-primary/80 to-secondary/80 text-white rounded-full text-sm font-medium hover:from-primary hover:to-secondary transition-all duration-300"
                >
                  View All Products
                </button>
              </div>
            </div>
          ) : (
            Array.from({ length: Math.ceil(filteredProducts.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 h-full">
                  {filteredProducts.slice(slideIndex * 4, slideIndex * 4 + 4).map((product, index) => (
                  <Link 
                    to={product.link} 
                    key={`${slideIndex}-${index}`}
                    className="block h-full"
                  >
                    <div
                      className="group relative overflow-hidden rounded-xl bg-background shadow-elegant hover:shadow-elegant-hover transition-all duration-500 border border-transparent hover:border-primary/20 h-full flex flex-col transform hover:-translate-y-1"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="aspect-square overflow-hidden relative">
                        <img 
                          src={product.src} 
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {product.tag && (
                          <div className="absolute top-3 right-3 bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium px-3 py-1 rounded-full shadow-glow">
                            {product.tag}
                          </div>
                        )}
                        <div className="absolute top-0 left-0 w-full h-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 backdrop-blur-sm bg-gradient-to-t from-black/90 to-black/40">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100"></div>
                        <h4 className="font-semibold text-base mb-2">{product.title}</h4>
                        <p className="text-sm text-white/90">{product.description}</p>
                        <div className="mt-4 flex items-center">
                          <div className="px-3 py-1.5 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full text-white text-xs font-medium flex items-center group-hover:shadow-glow transition-all duration-300">
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
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-elegant hover:shadow-elegant-hover hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-500 border border-primary/10 group z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
        <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-elegant hover:shadow-elegant-hover hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-500 border border-primary/10 group z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
        <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-4">
        {filteredProducts.length > 0 && Array.from({ length: Math.ceil(filteredProducts.length / 4) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === index 
                ? 'bg-gradient-to-r from-primary to-secondary w-10 shadow-glow scale-110' 
                : 'bg-gray-300/50 hover:bg-gray-300 w-3 hover:w-8'
            }`}
          />
        ))}
      </div>
      
      {/* Product Count */}
      <div className="text-center mt-4 text-xs text-medium-gray">
        <span className="bg-light-bg/70 px-3 py-1 rounded-full">
          Showing {filteredProducts.length} of {productImages.length} products
        </span>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const productCategories = [
    {
      icon: Settings,
      title: 'Brass Hex Parts',
      description: 'Precision-engineered hexagonal brass components for various industrial applications.',
      features: ['Hex Bolts', 'Hex Nuts', 'Hex Spacers', 'Custom Hex Parts'],
      image: 'images/products images/Brass Barb Fitting.jpg',
      link: '/products/brass-hex-body',
    },
    {
      icon: Zap,
      title: 'Brass Electrical Terminal Parts',
      description: 'High-quality brass terminals including nickel plated and neutral terminals for electrical applications.',
      features: ['Nickel Plated Terminals', 'Neutral Terminals', 'Electrical Connectors', 'Custom Terminals'],
      image: '/images/products images/Brass CNC turned components.jpg',
      link: '/products/brass-electrical-terminal-parts',
    },
    {
      icon: Wrench,
      title: 'Brass Cross Diamond Knurling Inserts',
      description: 'Precision brass inserts, moulding inserts, and pins for various assembly applications.',
      features: ['Threaded Inserts', 'Moulding Inserts', 'Precision Pins', 'Custom Inserts'],
      image: '/images/products images/Brass pipe fittings and inserts.jpg',
      link: '/products/brass-cross-diamond-knurling-inserts',
    },
    {
      icon: Car,
      title: 'Precise Knurling Inserts',
      description: 'IATF 16949:2016 certified automotive components for various vehicle systems.',
      features: ['Engine Parts', 'Transmission Components', 'Brake Parts', 'Electrical Components'],
      image: '/images/products images/Brass mould  parts.jpg',
      link: '/products/precise-knurling-inserts',
    },
    {
      icon: Settings,
      title: 'Brass Special Hex Inserts',
      description: 'High-strength brass fasteners, rivets and connector parts for assembly applications.',
      features: ['Brass Rivets', 'Connector Parts', 'Fasteners', 'Assembly Hardware'],
      image: '/images/products images/Brass components for meters.jpg',
      link: '/products/brass-special-hex-inserts',
    },
    {
      icon: Droplets,
      title: 'Brass Nickel Plated Terminal',
      description: 'Precision sheet metal parts and stainless steel components manufactured to exact specifications.',
      features: ['Sheet Metal Parts', 'Stainless Steel Parts', 'Copper Components', 'Aluminium Parts'],
      image: '/images/Brass sheet metal p arts.jpg',
      link: '/products/brass-nickel-plated-terminal',
    },
    {
      icon: Settings,
      title: 'Brass Forging Components',
      description: 'Precision-engineered hexagonal brass components for various industrial applications.',
      features: ['Hex Bolts', 'Hex Nuts', 'Hex Spacers', 'Custom Hex Parts'],
      image: '/images/products images/Brass knurling inserts.jpg',
      link: '/products/brass-forging-components',
    },
    {
      icon: Zap,
      title: 'Brass Hex Critical 1/8" NPT Thread',
      description: 'High-quality brass terminals including nickel plated and neutral terminals for electrical applications.',
      features: ['Nickel Plated Terminals', 'Neutral Terminals', 'Electrical Connectors', 'Custom Terminals'],
      image: '/images/products images/Brass components for meters.jpg',
      link: '/products/brass-hex-critical-npt-thread',
    },
    {
      icon: Wrench,
      title: 'Brass Sensor Temperature Body',
      description: 'Precision brass inserts, moulding inserts, and pins for various assembly applications.',
      features: ['Threaded Inserts', 'Moulding Inserts', 'Precision Pins', 'Custom Inserts'],
      image: '/images/products images/Brass sensor parts.jpg',
      link: '/products/brass-sensor-temperature-body',
    },
    {
      icon: Car,
      title: 'Brass Rivets',
      description: 'Durable brass rivets for various fastening applications.',
      features: ['Rivets', 'Fasteners', 'Assembly Hardware', 'Custom Rivets'],
      image: '/images/Diverse brass parts.jpg',
      link: '/products/brass-rivets',
    },
    {
      icon: Wrench,
      title: 'Brass Pin Molding Inserts',
      description: 'Precision brass pin molding inserts for plastic injection molding applications.',
      features: ['Moulding Inserts', 'Precision Pins', 'Custom Inserts', 'Injection Molds'],
      image: '/images/products images/Brass mould  parts.jpg',
      link: '/products/brass-pin-molding-inserts',
    },
  ];

  return (
    <section id="products" ref={sectionRef} className="py-28 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-5 py-2 mb-4">
            <div className="p-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20">
              <Factory className="w-3 h-3 text-primary" />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold text-sm">Industry Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-secondary-glow">Product</span> Portfolio
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 mx-auto"></div>
          
          <p className="text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of precision-engineered brass components and industrial solutions 
            for diverse applications across multiple industries
          </p>
          
          <QualityBadgeGroup badges={['iso', 'global', 'quality']} className="mt-8" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}">
          {productCategories.map((product, index) => (
            <Link
              to={product.link}
              key={product.title}
              className={`shadow-elegant group overflow-hidden rounded-xl transition-all duration-500 block hover:shadow-2xl transform hover:-translate-y-2 flex flex-col h-full border border-border-light hover:border-primary/20 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/30 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-14 h-14 bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-3 transition-all duration-300">
                  <product.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative flex flex-col flex-grow">
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"></div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 flex items-center">
                  <span className="mr-2">{product.title}</span>
                  <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </h3>
                <p className="text-medium-gray mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-5 bg-light-bg/50 p-3 rounded-lg flex-grow">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm group/feature">
                      <div className="w-2 h-2 bg-secondary rounded-full group-hover/feature:scale-125 transition-transform duration-300"></div>
                      <span className="text-medium-gray group-hover/feature:text-foreground transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <div className="inline-flex items-center justify-center w-full text-white font-medium bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary px-5 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 group">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Product Showcase Carousel */}
        <div className={`mb-16 mt-10 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full px-5 py-2 mb-4">
              <div className="p-1 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20">
                <Factory className="w-3 h-3 text-secondary" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-semibold text-sm">Featured Collection</span>
            </div>
            <h3 className="text-3xl font-bold mt-4 mb-2 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Product</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Showcase</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </h3>
            <div className="text-medium-gray mt-4 max-w-2xl mx-auto">Explore our featured collection of precision-engineered brass components designed for various industrial applications</div>
          </div>
          <div className="relative bg-gradient-to-b from-background to-light-bg/30 p-1 rounded-2xl shadow-elegant">
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-3xl"></div>
            <ProductCarousel />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-background to-background/80 rounded-2xl p-10 shadow-elegant max-w-4xl mx-auto transform hover:scale-[1.02] transition-all duration-300 border border-border-light relative overflow-hidden">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
            <div className="absolute -left-16 -top-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Custom Solution</span>?
            </h3>
            <p className="text-lg text-medium-gray mb-8 max-w-2xl mx-auto">
              Our engineering team specializes in developing bespoke manufacturing solutions 
              tailored to your unique requirements and specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-base px-8 py-6 h-auto rounded-full"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Custom Quote
              </Button>
              <Button 
                variant="outline" 
                className="bg-background hover:bg-light-bg text-foreground border-2 hover:border-primary transition-all duration-300 transform hover:-translate-y-1 text-base px-8 py-6 h-auto rounded-full"
                onClick={() => {
                  document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Download Catalog
              </Button>
            </div>
            <div className="flex justify-center mt-8">
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-medium-gray bg-light-bg/70 px-6 py-3 rounded-full">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Global Shipping</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span>Quality Assured</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  <span>Custom Manufacturing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;