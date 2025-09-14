import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Star, Shield, Zap } from 'lucide-react';

const Landing = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a short delay for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#020617] via-[#0f172a] to-black">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light" style={{ background: "#000" }}></div>
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated particles */}
        <AnimatePresence>
          {isLoaded && [
            { id: 1, x: '10%', y: '20%', size: 2, delay: 0.2 },
            { id: 2, x: '85%', y: '15%', size: 3, delay: 0.5 },
            { id: 3, x: '70%', y: '80%', size: 2, delay: 0.8 },
            { id: 4, x: '20%', y: '70%', size: 2.5, delay: 1.1 },
            { id: 5, x: '40%', y: '30%', size: 1.5, delay: 1.4 },
            { id: 6, x: '65%', y: '60%', size: 2, delay: 1.7 },
          ].map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: particle.size }}
              transition={{ 
                delay: particle.delay, 
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: Math.random() * 2 + 2
              }}
              className="absolute rounded-full bg-amber-500/10"
              style={{ 
                left: particle.x, 
                top: particle.y, 
                width: '6px', 
                height: '6px',
                filter: 'blur(1px)'
              }}
            />
          ))}
        </AnimatePresence>
      </div>
      
      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
      
      {/* Diagonal accent lines */}
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: '30vw' }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-20 right-20 h-px rotate-45 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-pulse-slow"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: '20vw' }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-40 left-20 h-px -rotate-45 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-pulse-slow"
      ></motion.div>

      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Logo and brand */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 text-center"
        >
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl"
            ></motion.div>
            <motion.div 
              initial={{ rotate: -15, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                damping: 12
              }}
              className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden border border-border-light/30"
            >
              <img 
                src="/images/company logo.jpg" 
                alt="Shreeji Components Logo" 
                className="w-16 h-16 object-contain"
              />
            </motion.div>
            
            {/* Orbiting accent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute inset-0 pointer-events-none"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="w-full h-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-500/40 rounded-full blur-[1px]"></div>
              </motion.div>
            </motion.div>
          </div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent tracking-tight"
          >
            Shreeji Components
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Precision Engineering Excellence Since 1995
          </motion.p>
        </motion.div>

        {/* Main CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <Link to="/home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="relative z-10 flex items-center"
                >
                  Enter Site
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-500/20 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Feature highlights */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto"
        >
          {[
            {
              title: "Premium Quality",
              description: "Industry-leading brass components with exceptional durability and precision"
            },
            {
              title: "Global Reach",
              description: "Serving industries worldwide with reliable manufacturing solutions"
            },
            {
              title: "Innovation Focus",
              description: "Cutting-edge technology and continuous improvement in every product"
            }
          ].map((feature, index) => {
            const icons = [Star, Shield, Zap];
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 1.2 + (index * 0.2) }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:border-amber-500/30 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-full -translate-x-10 -translate-y-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg mr-3">
                    <Icon className="h-5 w-5 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-400">{feature.title}</h3>
                </div>
                
                <p className="text-slate-400 mb-4">{feature.description}</p>
                
                <div className="mt-4 flex justify-end">
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="flex items-center text-amber-500/70 group-hover:text-amber-500 transition-colors duration-300"
                  >
                    <span className="text-sm mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">More</span>
                    <ChevronRight className="h-5 w-5" />
                  </motion.div>
                </div>
              </motion.div>
            );
          }
          )}
          
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-20 text-center text-sm text-slate-500"
        >
          <p>© {new Date().getFullYear()} Shreeji Components. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;