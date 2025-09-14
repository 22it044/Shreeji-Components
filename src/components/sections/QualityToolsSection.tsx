import { useRef, useState } from 'react';
import { Ruler, Wrench, Microscope, FileText, CheckCircle, Gauge, Cog, Hexagon, Zap, CircleOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const QualityToolsSection = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: true });

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
    <section id="quality-tools" ref={sectionRef} className="py-24 bg-ice-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r" style={{ background: 'linear-gradient(to right,rgb(0, 102, 219), transparent)' }}></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l" style={{ background: 'linear-gradient(to left,rgb(0, 102, 197), transparent)' }}></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float-slow">
        <Cog className="w-16 h-16 text-royal-sapphire" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-float">
        <Hexagon className="w-12 h-12 text-primary" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block px-4 py-1 bg-royal-sapphire/10 rounded-full text-xs font-semibold text-royal-sapphire mb-4 backdrop-blur-sm border border-royal-sapphire/20">
            PRECISION ENGINEERING
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 relative inline-block"
          >
            Quality <span className="text-royal-sapphire">Tools & Process</span>
            {/* Blue Line */}
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-royal-sapphire rounded-full"></div>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/70 max-w-3xl mx-auto mt-6"
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
          <h3 className="text-2xl font-bold mb-8 flex items-center">
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
                className="bg-white rounded-xl shadow-md p-6 border border-royal-sapphire/10 hover:shadow-lg hover:border-royal-sapphire/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-royal-sapphire/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <tool.icon className="w-6 h-6 text-royal-sapphire" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{tool.name}</h4>
                    <div className="w-12 h-0.5 bg-royal-sapphire/50 mb-2"></div>
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
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Cog className="w-6 h-6 text-royal-sapphire mr-3" />
            <span>Advanced Manufacturing Process</span>
            <div className="h-px flex-grow bg-royal-sapphire/30 ml-4"></div>
          </h3>
          
          <div className="bg-white rounded-xl shadow-md p-8 border border-royal-sapphire/10">
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
                  <p className="text-medium-gray">{process}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Quality Assurance Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 p-6 border border-royal-sapphire/20 rounded-lg bg-royal-sapphire/5 flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-royal-sapphire/20 rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-royal-sapphire" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-royal-sapphire">Zero Defect Engineering</h4>
                  <p className="text-medium-gray">Our commitment to excellence in every component</p>
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