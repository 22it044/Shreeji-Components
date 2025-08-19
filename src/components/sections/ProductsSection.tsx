import { useEffect, useState } from 'react';
import { ArrowRight, Zap, Car, Wrench, Home, Settings, Droplets, ChevronLeft, ChevronRight, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import productsImage from '@/assets/products-brass.jpg';

// Product Carousel Component
const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const productImages = [
    {
      src: '/images/Brass hex parts.jpg',
      title: 'Brass Hex Parts',
      description: 'High-precision hexagonal brass components'
    },
    {
      src: '/images/Brass hex parts 1.png',
      title: 'Brass Hex Components',
      description: 'Various hexagonal brass fittings and fasteners'
    },
    {
      src: '/images/Brass neural terminals.png',
      title: 'Brass Neural Terminals',
      description: 'Electrical connection terminals'
    },
    {
      src: '/images/Brass nickel platted part.png',
      title: 'Nickel Plated Parts',
      description: 'Corrosion-resistant nickel plated components'
    },
    {
      src: '/images/Brass connector parts.png',
      title: 'Connector Parts',
      description: 'Precision brass connector components'
    },
    {
      src: '/images/Brass hyderlauic parts.jpg',
      title: 'Hydraulic Parts',
      description: 'Automotive and industrial hydraulic components'
    },
    {
      src: '/images/Diverse brass parts.jpg',
      title: 'Diverse Brass Parts',
      description: 'Wide range of brass components'
    },
    {
      src: '/images/Braass sanitary parts.jpg',
      title: 'Sanitary Parts',
      description: 'Brass components for sanitary applications'
    },
    {
      src: '/images/Brass sheet metal p arts.jpg',
      title: 'Sheet Metal Parts',
      description: 'Precision sheet metal components'
    },
    {
      src: '/images/brass-fittings-sale-parts-installation-600nw-1842618283.webp',
      title: 'Brass Fittings',
      description: 'Installation and assembly fittings'
    },
    {
      src: '/images/Precision Brass manufacturing.jpg',
      title: 'Precision Manufacturing',
      description: 'State-of-the-art manufacturing process'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(productImages.length / 4));
    }, 4000);
    return () => clearInterval(timer);
  }, [productImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(productImages.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(productImages.length / 4)) % Math.ceil(productImages.length / 4));
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(productImages.length / 4) }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {productImages.slice(slideIndex * 4, slideIndex * 4 + 4).map((product, index) => (
                  <div
                    key={`${slideIndex}-${index}`}
                    className="group relative overflow-hidden rounded-xl bg-background shadow-card hover:shadow-elegant transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.src} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-semibold text-sm mb-1">{product.title}</h4>
                      <p className="text-xs text-white/90">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(productImages.length / 4) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-primary w-8' : 'bg-border-light hover:bg-primary/50'
            }`}
          />
        ))}
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
      image: '/images/Brass hex parts.jpg',
    },
    {
      icon: Zap,
      title: 'Brass Terminals',
      description: 'High-quality brass terminals including nickel plated and neutral terminals for electrical applications.',
      features: ['Nickel Plated Terminals', 'Neutral Terminals', 'Electrical Connectors', 'Custom Terminals'],
      image: '/images/Brass neural terminals.png',
    },
    {
      icon: Wrench,
      title: 'Brass Inserts & Pins',
      description: 'Precision brass inserts, moulding inserts, and pins for various assembly applications.',
      features: ['Threaded Inserts', 'Moulding Inserts', 'Precision Pins', 'Custom Inserts'],
      image: '/images/Diverse brass parts.jpg',
    },
    {
      icon: Car,
      title: 'Automotive Parts',
      description: 'IATF 16949:2016 certified automotive components for various vehicle systems.',
      features: ['Engine Parts', 'Transmission Components', 'Brake Parts', 'Electrical Components'],
      image: '/images/Brass hyderlauic parts.jpg',
    },
    {
      icon: Settings,
      title: 'Fasteners & Rivets',
      description: 'High-strength brass fasteners, rivets and connector parts for assembly applications.',
      features: ['Brass Rivets', 'Connector Parts', 'Fasteners', 'Assembly Hardware'],
      image: '/images/Brass connector parts.png',
    },
    {
      icon: Droplets,
      title: 'Sheet Metal & Steel Parts',
      description: 'Precision sheet metal parts and stainless steel components manufactured to exact specifications.',
      features: ['Sheet Metal Parts', 'Stainless Steel Parts', 'Copper Components', 'Aluminium Parts'],
      image: '/images/Brass sheet metal p arts.jpg',
    },
  ];

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient-primary">Product</span> Portfolio
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of precision-engineered brass components and industrial solutions 
            for diverse applications across multiple industries
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((product, index) => (
            <div
              key={product.title}
              className={`card-premium group overflow-hidden transition-all duration-500 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-medium-gray mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span className="text-medium-gray">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Showcase Carousel */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Product <span className="text-primary">Showcase</span>
          </h3>
          <ProductCarousel />
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-background rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-medium-gray mb-6">
              Our engineering team specializes in developing bespoke manufacturing solutions 
              tailored to your unique requirements and specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-hero"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Custom Quote
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline"
                onClick={() => {
                  document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;