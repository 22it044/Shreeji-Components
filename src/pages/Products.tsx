import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Shield, Award, Zap, Settings, Factory } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Import the product data from ProductsSection
import { productData } from '@/components/sections/ProductsSection';

const Products = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header - Industrial Brutalism Style */}
        <section className="pt-32 pb-16 relative overflow-hidden bg-[#11182c]">
          {/* Premium background with subtle grid */}
          <div className="absolute inset-0 bg-grid-white/5 bg-[length:40px_40px] opacity-10"></div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#11182c]/80 via-[#11182c] to-[#0c1021] opacity-90"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <Link 
                to="/"
                className="mb-6 text-sm text-white/60 hover:text-amber-500 transition-colors flex items-center group bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-500/20 hover:border-amber-500/50"
              >
                <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              
              <motion.div
                className="inline-block px-4 py-1 bg-amber-500/10 rounded-full text-xs font-semibold text-amber-500 mb-4 backdrop-blur-sm border border-amber-500/20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                PRECISION ENGINEERED COMPONENTS
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-white relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Premium <span className="text-amber-500">Product</span> Portfolio
                {/* Amber Line */}
                <div className="absolute -bottom-3 left-0 right-0 h-1 bg-amber-500 rounded-full"></div>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-white/70 max-w-3xl mx-auto mt-6 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Explore our comprehensive range of precision-engineered brass components crafted with exceptional quality and attention to detail for various industrial applications.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Premium Products Showcase */}
        <section className="py-24 bg-ice-blue relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 relative">
              <div className="inline-block px-4 py-1 bg-amber-500/10 rounded-full text-xs font-semibold text-amber-500 mb-4 backdrop-blur-sm border border-amber-500/20">
                PRECISION ENGINEERING
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Premium Product Collection
              </h2>
              
              <div className="w-24 h-1 bg-amber-500 rounded-full mb-6 mx-auto"></div>
              
              <p className="text-medium-gray max-w-3xl mx-auto leading-relaxed">
                Browse our selection of high-quality brass components designed for precision, durability, and performance
              </p>
            </div>
            
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {productData.map((product, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-elegant border border-border-light hover:shadow-elegant-hover transition-all duration-500 h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Product Image */}
                  <Link to={product.link} className="block relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={product.src} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Premium Tag */}
                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      <span>Premium</span>
                    </div>
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full shadow-sm border border-amber-500/20">
                      {product.tag}
                    </div>
                  </Link>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed text-sm flex-grow">
                      {product.description}
                    </p>
                    
                    <Link 
                to={product.link}
                className="inline-flex items-center justify-center px-4 py-2 bg-amber-500/10 text-amber-600 rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-300 text-sm font-medium mt-auto group/btn"
              >
                View Details
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;