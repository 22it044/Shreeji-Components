import React from 'react';
import { CheckCircle, Award, FileCheck, Users, TrendingUp, Shield, ClipboardCheck, Star, Gem, BadgeCheck, Medal, Sparkles, Zap, Hexagon, Gauge, BarChart4, Microscope, Cog, ArrowRight, Settings, CheckSquare, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Export these variables for use in the Quality page
export const qualityCommitments = [
  'ISO 9001:2015 Quality Management System',
  'IATF 16949:2016 Automotive Quality Standards',
  'Z Bronze Certification',
  'EEPC India Membership',
  '100% Manual as well as Machine Inspection',
  'Zero Defect Policy',
  'Statistical Process Control Monitoring',
  'In-house Quality Check Systems',
];

export const certifications = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Quality Management System',
  },
  {
    icon: FileCheck,
    title: 'IATF 16949:2016',
    description: 'Automotive Quality Standard',
  },
  {
    icon: Shield,
    title: 'Z Bronze',
    description: 'Bronze Quality Certification',
  },
  {
    icon: TrendingUp,
    title: 'EEPC India',
    description: 'Export Promotion Council Member',
  },
];

export const qualityMetrics = [
  { metric: '100%', label: 'Quality Inspection', description: 'Manual and machine inspection' },
  { metric: 'Zero', label: 'Defect Policy', description: 'Zero defect manufacturing approach' },
  { metric: '30+', label: 'Years Experience', description: 'Decades of quality excellence' },
  { metric: 'SPC', label: 'Process Control', description: 'Statistical process monitoring' },
];

export const qualityControlProcess = [
  { 
    step: '01', 
    title: 'Material Inspection', 
    desc: 'Every batch of raw material undergoes rigorous testing for chemical composition, physical properties, and dimensional accuracy before entering production.', 
    image: '/images/High quality raw material.jpg',
    icon: CheckCircle
  },
  { 
    step: '02', 
    title: 'In-Process Control', 
    desc: 'Continuous monitoring during machining operations with statistical process control (SPC) and real-time quality checks at every stage of production.', 
    image: '/images/CNC Machining manufacturing.jpg',
    icon: Settings
  },
  { 
    step: '03', 
    title: 'Final Inspection', 
    desc: 'Comprehensive quality verification including dimensional, visual, and functional testing before packaging.', 
    image: '/images/Material Inspection.jpg',
    icon: CheckSquare
  },
  { 
    step: '04', 
    title: 'Documentation & Traceability', 
    desc: 'Complete documentation and lot traceability for every batch of components manufactured.', 
    image: '/images/Documentation & Traceability.webp',
    icon: FileText
  }
];

const QualitySection = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: true });

  // Use the exported variables
  const qualityCertifications = certifications.slice(0, 4); // Only use the first 4 certifications

  return (
    <section id="quality" ref={sectionRef} className="py-28 relative overflow-hidden bg-[#11182c] shadow-inner">
      {/* Premium background with subtle grid */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[length:40px_40px] opacity-10"></div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#11182c]/80 via-[#11182c] to-[#0c1021] opacity-90"></div>
      
      {/* Technical grid elements - more refined */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
        {[...Array(13)].map((_, i) => (
          <div key={`v-${i}`} className="absolute h-full w-px bg-white/5 left-[calc(100%*${i}/12)]"></div>
        ))}
        {[...Array(13)].map((_, i) => (
          <div key={`h-${i}`} className="absolute w-full h-px bg-white/5 top-[calc(100%*${i}/12)]"></div>
        ))}
      </div>
      
      {/* Refined measurement markers */}
      <div className="absolute left-0 top-0 h-full w-6 border-r border-white/10 flex flex-col justify-between py-10">
        {[...Array(5)].map((_, i) => (
          <div key={`marker-${i}`} className="flex items-center">
            <div className="w-2 h-px bg-white/40"></div>
            <div className="text-[8px] text-white/40 font-mono ml-1">{(100 - i * 25).toString().padStart(3, '0')}</div>
          </div>
        ))}
      </div>
      
      {/* Decorative elements - removed animations */}
      <div className="absolute top-20 right-1/4 opacity-60">
        <Cog className="w-14 h-14 text-white/20" />
      </div>
      <div className="absolute bottom-40 left-1/4 opacity-60">
        <Hexagon className="w-10 h-10 text-white/20" strokeWidth={1} />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section header - Industrial Brutalism Style */}
        <div className="text-center mb-16 relative">
          {/* Premium corner elements with white accent */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/70"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/70"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/70"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/70"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-sans mb-6 relative inline-block tracking-wider"
          >
            <span className="text-white font-bold">PRECISION</span> <span className="text-amber-500">QUALITY</span> <span className="text-white">STANDARDS</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-white rounded-full"></div>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: isVisible ? "12rem" : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-white/80 relative mb-6 mx-auto"
          >
            <div className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-white rounded-full"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-white max-w-3xl mx-auto leading-relaxed bg-black/30 p-8 relative overflow-hidden rounded-lg border border-white/20"
          >
            {/* Technical measurement lines */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white/50 via-white/20 to-white/50"></div>
            <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-white/50 via-white/20 to-white/50"></div>
            
            {/* Technical ID */}
            <div className="absolute top-2 right-2 text-[8px] font-mono text-white/70">QC-STD-001</div>
            
            <span className="relative z-10 font-sans">
              Every component we manufacture undergoes rigorous quality control processes, 
              ensuring exceptional standards that exceed industry requirements
              <span className="text-white font-bold"> [TOLERANCE: ±0.001mm]</span>
            </span>
          </motion.div>

        </div>
        
        <div className="py-8"></div> {/* Added padding between sections */}

        {/* Enhanced Quality Metrics - Premium Style */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative"
        >
          {/* Technical blueprint grid */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full border border-royal-sapphire/20"></div>
            {[...Array(5)].map((_, i) => (
              <div key={`grid-h-${i}`} className="absolute w-full h-px bg-royal-sapphire/10 top-[${20 * i}%]"></div>
            ))}
            {[...Array(5)].map((_, i) => (
              <div key={`grid-v-${i}`} className="absolute h-full w-px bg-royal-sapphire/10 left-[${20 * i}%]"></div>
            ))}
          </div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-industrial mb-12 text-center relative"
          >
            <div className="inline-block relative">
              <span className="text-amber-500">QUALITY</span> <span className="text-white">METRICS</span>
              <div className="absolute -bottom-2 left-0 w-full h-px bg-white"></div>
              <div className="absolute -bottom-4 left-1/4 w-1/2 h-px bg-white/80"></div>
            </div>
            
            <div className="w-32 h-1 bg-white/70 mt-4 mx-auto shadow-glow"></div>
            
            {/* Technical specifications */}
            <div className="absolute -top-6 right-0 text-[8px] font-mono text-royal-sapphire/70 flex items-center">
<div className="w-2 h-2 border border-royal-sapphire/70 mr-1"></div>
              REF: QC-MTR-2023
            </div>
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {qualityMetrics.map((metric, index) => {
              // Define icons for each metric
              const metricIcons = {
                '100%': Gauge,
                'Zero': BarChart4,
                '30+': Microscope,
                'SPC': Cog
              };
              const MetricIcon = metricIcons[metric.metric] || Gauge;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.15) }}
                  className="relative group"
                >
                  {/* Premium metal plate background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] shadow-xl transform group-hover:scale-105 transition-all duration-500"></div>
                  
                  <div className="relative text-center p-6 border border-white/30 overflow-hidden z-10 transition-all duration-500 group-hover:-translate-y-1 rounded-lg bg-black/20">
                    {/* Premium corner elements */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/70"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/70"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/70"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/70"></div>
                    
                    {/* Technical ID */}
                    <div className="absolute top-1 right-1 text-[8px] font-mono text-white/50">{`QM-${index + 1}`.padStart(5, '0')}</div>
                    
                    {/* Quality icon */}
                    <div className="w-16 h-16 mx-auto mb-4 relative">
                      <div className="absolute inset-0 bg-black/40 rounded-full transform group-hover:scale-110 transition-all duration-500"></div>
                      <div className="absolute inset-0 border border-white/50 rounded-full flex items-center justify-center">
                        <MetricIcon className="w-8 h-8 text-white group-hover:scale-110 transition-all duration-500" />
                      </div>
                    </div>
                    
                    <div className="text-4xl font-sans text-white mb-2 group-hover:scale-110 transition-all duration-300">{metric.metric}</div>
                    <div className="w-12 h-0.5 bg-white/80 mb-3 mx-auto group-hover:w-20 transition-all duration-500"></div>
                    <div className="text-lg font-sans text-white mb-2 transition-all duration-500">{metric.label.toUpperCase()}</div>
                    <div className="text-sm text-white/80 font-light transition-colors duration-500">{metric.description}</div>
                    
                    {/* Technical measurement indicator */}
                    <div className="absolute bottom-2 left-2 flex items-center">
                      <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                      <div className="ml-1 text-[8px] font-mono text-white/80">VERIFIED</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Certifications - Industrial Brutalism Style */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative"
        >
          {/* Technical measurement lines */}
          <div className="absolute left-0 top-0 h-full w-px bg-white/30"></div>
          <div className="absolute right-0 top-0 h-full w-px bg-white/30"></div>
          {[...Array(5)].map((_, i) => (
            <div key={`tick-${i}`} className="absolute left-0 h-px w-2 bg-white/50" style={{ top: `${i * 25}%` }}></div>
          ))}
          {[...Array(5)].map((_, i) => (
            <div key={`tick-r-${i}`} className="absolute right-0 h-px w-2 bg-white/50" style={{ top: `${i * 25}%` }}></div>
          ))}
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-sans mb-12 text-center relative tracking-wider"
          >
            <div className="inline-block relative">
              <span className="text-amber-400">CERTIFICATIONS</span> <span className="text-white">&</span> <span className="text-amber-400">STANDARDS</span>
              <div className="absolute -bottom-2 left-0 w-full h-px bg-white"></div>
            </div>
            
            <div className="w-32 h-1 bg-white/70 mt-4 mx-auto"></div>
            
            {/* Technical specifications */}
            <div className="absolute -top-6 left-0 text-[8px] font-mono text-white/70 flex items-center">
              <div className="w-2 h-2 border border-white/70 mr-1"></div>
              ISO-CERT-VERIFICATION
            </div>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-4 sm:px-0">
            {qualityCertifications.map((cert, index) => {
              const certImages = {
                'ISO 9001:2015': '/images/iso certification.jpg',
                'IATF 16949:2016': '/images/iatf-16949-2016-certification-services.jpeg',
                'Z Bronze': '/images/Bronze-new-1.webp',
                'EEPC India': '/images/eepc india logo.png'
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.15) }}
                  className="relative group"
                >
                  {/* Industrial metal background */}
                  <div className="absolute inset-0 bg-metal shadow-industrial transform group-hover:scale-105 transition-all duration-500"></div>
                  
                  <div className="relative p-4 sm:p-6 border border-white/30 overflow-hidden z-10 transition-all duration-500 group-hover:-translate-y-1 rounded-lg bg-black/20">
                    {/* Technical corner elements */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/70"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/70"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/70"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/70"></div>
                    
                    {/* Technical ID */}
                    <div className="absolute top-2 right-2 text-[8px] font-mono text-white/50">{`CERT-${index + 1}`.padStart(5, '0')}</div>
                    
                    {/* Verification indicator */}
                    <div className="absolute top-2 left-2 flex items-center">
                      <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                      <div className="ml-1 text-[8px] font-mono text-white/80">VERIFIED</div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="relative w-24 h-24 flex items-center justify-center group-hover:scale-105 transition-all duration-500 overflow-hidden border border-white/50">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {certImages[cert.title] ? (
                            <img 
                              src={certImages[cert.title]} 
                              alt={cert.title} 
                              className="w-full h-full object-contain p-3"
                            />
                          ) : (
                            <cert.icon className="w-12 h-12 text-white" />
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-2xl font-industrial text-white mb-2">
                          {cert.title}
                        </h4>
                        
                        <div className="w-16 h-1 bg-white/80 mb-3"></div>
                        
                        <p className="text-white mb-3 text-lg font-technical">
                          {cert.description}
                        </p>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 border border-white/70 flex items-center justify-center">
                            <div className="w-1 h-1 bg-white/80"></div>
                          </div>
                          <span className="text-sm text-white/90 font-mono">
                            CERTIFIED
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Technical measurement lines */}
                    <div className="absolute bottom-4 left-0 w-full h-px bg-royal-sapphire/30"></div>
<div className="absolute bottom-4 left-1/4 h-2 w-px bg-royal-sapphire/50"></div>
<div className="absolute bottom-4 left-2/4 h-2 w-px bg-royal-sapphire/50"></div>
<div className="absolute bottom-4 left-3/4 h-2 w-px bg-royal-sapphire/50"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>


        {/* Quality Control Process section removed as requested */}
            
            {/* Premium Quality Assurance Badge - Modern Premium Style */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative group mb-12"
            >
              {/* Premium background with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] shadow-xl"></div>
              
              <div className="relative p-6 border border-white/30 overflow-hidden z-10 group-hover:border-white/70 transition-all duration-500">
                {/* Premium corner elements */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/70"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/70"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/70"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/70"></div>
                
                {/* Technical ID and specifications - refined */}
                <div className="absolute top-2 right-2 text-[8px] font-mono text-white/50">QC-ZDP-001</div>
                <div className="absolute top-2 left-2 text-[8px] font-mono text-white/50">REV: 2023.04</div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center space-x-6">
                    <div className="relative w-20 h-20 transition-all duration-500 group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/50 flex items-center justify-center">
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Technical measurement indicators - refined */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4">
                        <div className="w-px h-4 bg-white/50 mx-auto"></div>
                        <div className="w-4 h-px bg-white/50 mt-1"></div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4">
                        <div className="w-px h-4 bg-white/50 mx-auto"></div>
                        <div className="w-4 h-px bg-white/50 mt-1"></div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">ZERO DEFECT POLICY</h4>
                      
                      <div className="w-16 h-0.5 bg-white/80 mb-3"></div>
                      
                      <p className="text-white font-light">Our commitment to excellence in every component we manufacture <span className="text-white/90">[TOLERANCE: ±0.001mm]</span></p>
                    </div>
                  </div>
                  
                  <Link to="/quality">
                    <Button variant="outline" className="border border-white/50 bg-black/30 hover:bg-white/20 transition-all duration-300 font-medium text-white hover:text-white hover:border-white/80">
                      <span>VIEW STANDARDS</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                
                {/* Technical measurement grid - refined */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/20"></div>
                {[...Array(10)].map((_, i) => (
                  <div key={`grid-b-${i}`} className="absolute bottom-0 h-2 w-px bg-white/30" style={{ left: `${i * 10}%` }}></div>
                ))}
              </div>
            </motion.div>
            
            {/* View Full Quality Page Button - Premium Style */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-black/30 p-2 px-6 border border-white/50 transition-all duration-300 group cursor-pointer relative hover:border-white/80">
                {/* Premium corner elements */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/70"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/70"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/70"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/70"></div>
                
                <span className="text-sm font-medium text-white transition-colors duration-300 tracking-wide">PRECISION QUALITY STANDARDS</span>
                <div className="w-3 h-3 border border-white/70 flex items-center justify-center">
                  <div className="w-1 h-1 bg-white/80"></div>
                </div>
              </div>
            </motion.div>
          </div>
        
      
    </section>
  );
};

export default QualitySection;