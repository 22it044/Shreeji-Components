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
    <section id="quality-tools" ref={sectionRef} className="py-28 bg-gradient-subtle relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#11182c]/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center space-x-2 bg-[#11182c]/10 rounded-full px-5 py-2 mb-4">
            <div className="p-1 rounded-full bg-[#11182c]/20">
              <Factory className="w-3 h-3 text-[#11182c]" />
            </div>
            <span className="text-[#11182c] font-semibold text-sm">Quality Assurance</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="text-[#11182c]">Quality</span> Tools & Process
          </motion.h2>
          
          <div className="w-24 h-1 bg-[#11182c] rounded-full mb-6 mx-auto"></div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/70 max-w-3xl mx-auto"
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
            <Ruler className="w-6 h-6 text-[#11182c] mr-3" />
            <span>Precision Measurement Tools</span>
            <div className="h-px flex-grow bg-[#11182c]/30 ml-4"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/40 backdrop-blur-md rounded-xl shadow-xl p-6 border border-white/50 hover:shadow-2xl hover:border-white/70 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg border border-white/70">
                    <tool.icon className="w-6 h-6 text-[#11182c]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{tool.name}</h4>
                    <div className="w-12 h-0.5 bg-[#11182c]/50 mb-2"></div>
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
            <Cog className="w-6 h-6 text-[#11182c] mr-3" />
            <span>Advanced Manufacturing Process</span>
            <div className="h-px flex-grow bg-[#11182c]/30 ml-4"></div>
          </h3>
          
          <div className="bg-white/40 backdrop-blur-md rounded-xl shadow-xl p-8 border border-white/50">
            <div className="space-y-6">
              {qualityProcesses.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="flex items-start"
                >
                  <div className="w-8 h-8 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-lg border border-white/70">
                    <CheckCircle className="w-4 h-4 text-[#11182c]" />
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
              className="mt-10 p-6 border border-white/50 rounded-lg bg-white/30 backdrop-blur-md flex items-center justify-between shadow-xl"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center mr-4 shadow-lg border border-white/70">
                  <Zap className="w-6 h-6 text-[#11182c]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#11182c]">Zero Defect Engineering</h4>
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