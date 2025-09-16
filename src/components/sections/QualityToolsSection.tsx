import React from 'react';
import { Ruler, Wrench, Microscope, CheckCircle, Gauge, Cog, Hexagon, Zap, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export const QualityToolsSection = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const qualityTools = [
    { name: 'Facing', icon: Wrench },
    { name: 'Milling Machine Inspection', icon: Cog },
    { name: 'Digital, Mitutoyo Vernier Dial Vernier Caliper', icon: Ruler },
    { name: 'Digital Micro Meters', icon: Gauge },
    { name: 'Dial Gauges', icon: Gauge },
    { name: 'Snap Gauges', icon: Wrench },
    { name: 'Special I.D Pin Gauges', icon: Wrench },
    { name: 'Thread Plug Gauges', icon: Wrench },
    { name: 'Thread Ring Gauges', icon: Hexagon },
    { name: 'Magnifying Eye Glass for every employee in quality department', icon: Microscope },
  ];

  const qualityProcesses = [
    'Profile Projection hi tech machinery capable of making 3d autocad drawings',
    'Documentation: PDIR-& Spectro Analysis Lab Report for the Brass Extruded Drawn Rods Materials. & TPTR FORMS.',
    '22+ Automatic machines',
    '24+ threading machines',
    'Each piece undergoes rigorous manual inspection by skilled employees, utilizing magnifying glass checks to ensure zero defects and unparalleled precision engineering.'
  ];

  return (
    <section id="quality-tools" ref={sectionRef} className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center space-x-2 bg-royal-sapphire/10 rounded-full px-5 py-2 mb-4">
            <div className="p-1 rounded-full bg-royal-sapphire">
              <Factory className="w-3 h-3 text-white" />
            </div>
            <span className="text-royal-sapphire font-semibold text-sm">Quality Assurance</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Our <span className="text-royal-sapphire">Quality</span> Tools & Process
          </motion.h2>
          
          <div className="w-24 h-1 bg-royal-sapphire rounded-full mb-6 mx-auto"></div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our state-of-the-art quality tools and rigorous processes ensure unparalleled precision in every component we manufacture.
          </motion.p>
        </div>

        {/* Quality Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center text-gray-900">
            <Ruler className="w-6 h-6 text-royal-sapphire mr-3" />
            <span>Precision Measurement Tools</span>
            <div className="h-px flex-grow bg-royal-sapphire/30 ml-4"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md hover:border-royal-sapphire/40 transition-all duration-300 group"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-royal-sapphire/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-royal-sapphire/20 transition-all duration-300">
                    <tool.icon className="w-6 h-6 text-royal-sapphire" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-royal-sapphire transition-colors duration-300">{tool.name}</h4>
                    <div className="w-12 h-0.5 bg-royal-sapphire mb-2"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center text-gray-900">
            <Cog className="w-6 h-6 text-royal-sapphire mr-3" />
            <span>Advanced Manufacturing Process</span>
            <div className="h-px flex-grow bg-royal-sapphire/30 ml-4"></div>
          </h3>
          
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
            <div className="space-y-6">
              {qualityProcesses.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="flex items-start"
                >
                  <div className="w-8 h-8 bg-royal-sapphire/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-royal-sapphire" />
                  </div>
                  <p className="text-gray-700">{process}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Quality Assurance Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 p-6 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-royal-sapphire rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-royal-sapphire">Zero Defect Engineering</h4>
                  <p className="text-gray-600">Our commitment to excellence in every component</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityToolsSection;