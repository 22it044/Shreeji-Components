import React from 'react';
import { Ruler, Wrench, Microscope, CheckCircle, Gauge, Cog, Hexagon, Zap, Factory, Award, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const QualityToolsSection = () => {
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
    <section id="quality-tools" className="py-24 bg-[#fcfbf8] relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-amber-500/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-amber-500/30 to-transparent"></div>
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4"
          >
            <span className="bg-amber-500/20 text-amber-600 text-xs font-medium px-3 py-1 rounded-full border border-amber-500/30 shadow-elegant">
              QUALITY ASSURANCE
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900"
          >
            Our <span className="text-amber-500">Quality</span> Tools & Process
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px mb-8 mx-auto bg-amber-500"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600/90 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Our state-of-the-art quality tools and rigorous processes ensure unparalleled precision in every component we manufacture.
          </motion.p>
        </div>

        {/* Quality Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center text-gray-900">
            <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center mr-3 border border-amber-500/30 shadow-elegant">
              <Ruler className="w-5 h-5 text-amber-500" />
            </div>
            <span>Precision Measurement Tools</span>
            <div className="h-px flex-grow bg-amber-500/30 ml-4"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-elegant p-6 border border-amber-500/10 hover:shadow-glow-amber hover:border-amber-500/40 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Premium decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-amber-500/30 rounded-tr-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-amber-500/30 rounded-bl-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                
                <div className="flex items-start relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-700/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-500/30 transition-all duration-300 border border-amber-500/30 shadow-glow-sm">
                    <tool.icon className="w-8 h-8 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-amber-500 transition-colors duration-300">{tool.name}</h4>
                    <div className="w-12 h-0.5 bg-amber-500 mb-2"></div>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center text-gray-900">
            <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center mr-3 border border-amber-500/30 shadow-elegant">
              <Cog className="w-5 h-5 text-amber-500" />
            </div>
            <span>Advanced Manufacturing Process</span>
            <div className="h-px flex-grow bg-amber-500/30 ml-4"></div>
          </h3>
          
          <div className="bg-white rounded-xl shadow-elegant p-8 border border-amber-500/10 hover:shadow-glow-amber transition-all duration-300 group">
            <div className="space-y-6">
              {qualityProcesses.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="flex items-start group/item hover:bg-amber-500/5 p-2 rounded-lg transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-700/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 border border-amber-500/30 shadow-glow-sm group-hover/item:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-amber-500" />
                  </div>
                  <p className="text-gray-700 group-hover/item:text-slate-800 transition-colors duration-300">{process}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Quality Assurance Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 p-6 border border-amber-500/20 rounded-lg bg-amber-500/5 flex items-center justify-between shadow-elegant hover:shadow-glow-amber transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-700/20 rounded-full flex items-center justify-center mr-4 border border-amber-500/30 shadow-glow-sm">
                    <Zap className="w-8 h-8 text-amber-500" />
                  </div>
                 
                </div>
                <div>
                  <h4 className="text-xl font-bold text-amber-500">Zero Defect Engineering</h4>
                  <p className="text-gray-700">Our commitment to excellence in every component</p>
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