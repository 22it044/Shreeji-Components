import React from 'react';
import { Award, FileCheck, TrendingUp, Gauge, Cog, Shield, CheckCircle, Settings, BadgeCheck, Hexagon, ArrowRight } from 'lucide-react';
import { motion, useInView, Variants  } from 'framer-motion';
import { Link } from 'react-router-dom';

// Data exports remain the same
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

export const qualityControlProcess = [
  { 
    step: '01', 
    title: 'Material Inspection', 
    desc: 'Every batch of raw material undergoes rigorous testing...', 
    image: '/images/High quality raw material.jpg',
    icon: CheckCircle
  },
  { 
    step: '02', 
    title: 'In-Process Control', 
    desc: 'Continuous monitoring during machining operations...', 
    image: '/images/CNC Machining manufacturing.jpg',
    icon: Settings
  },
  { 
    step: '03', 
    title: 'Final Inspection', 
    desc: 'Comprehensive quality verification including dimensional...', 
    image: '/images/Material Inspection.jpg',
    icon: BadgeCheck
  },
  { 
    step: '04', 
    title: 'Documentation & Traceability', 
    desc: 'Complete documentation and lot traceability for every batch...', 
    image: '/images/Documentation & Traceability.webp',
    icon: Hexagon
  }
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
    icon: TrendingUp,
    title: 'EEPC India',
    description: 'Export Promotion Council Member',
  },
  {
    icon: Shield,
    title: 'Z Bronze',
    description: 'Bronze Quality Certification',
  },
];

export const qualityMetrics = [
  { metric: 'Zero', label: 'Defect Policy', Icon: Shield, description: 'Our foundational principle for flawless manufacturing.' },
  { metric: '100%', label: 'Quality Inspection', Icon: Gauge, description: 'Manual and machine inspection on every critical component.' },
  { metric: '30+', label: 'Years Experience', Icon: Award, description: 'Decades of engineering and manufacturing excellence.' },
  { metric: 'SPC', label: 'Process Control', Icon: Cog, description: 'Statistical monitoring for consistent, reliable output.' },
];  


const QualitySection = () => {
  const certImages: { [key: string]: string } = {
    'ISO 9001:2015': '/images/iso certification.jpg',
    'IATF 16949:2016': '/images/iatf-16949-2016-certification-services.jpeg',
    'Z Bronze': '/images/Bronze-new-1.webp',
    'EEPC India': '/images/eepc india logo.png'
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section 
      id="quality" 
      className="py-24 md:py-32 relative overflow-hidden bg-[#11182c] text-slate-100"
    >
      {/* AESTHETIC REFINEMENT: Neutral background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            A Framework of Unwavering Quality
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Our commitment to excellence is built upon measurable metrics and adherence to globally recognized industry standards.
          </motion.p>
        </div>
        
        <div className="space-y-24">
          {/* --- Performance Metrics Section --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-center mb-12 text-white">Performance Metrics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityMetrics.map(({ metric, label, Icon }) => (
                <motion.div 
                  key={label}
                  variants={itemVariants}
                  className="group relative bg-slate-900/50 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-slate-900/80"
                >
                  {/* AESTHETIC REFINEMENT: Subtle white "aurora" glow on hover */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative h-full backdrop-blur-lg rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-700 shadow-inner">
                      <Icon className="w-8 h-8 text-slate-300 transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h4 className="text-4xl font-bold text-white">{metric}</h4>
                    <p className="text-sm font-semibold tracking-wider text-slate-400 mt-2 uppercase">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- Industry Certifications Section --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-center mb-12 text-white">Industry Certifications</h3>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map(cert => (
                <motion.div 
                  key={cert.title}
                  variants={itemVariants}
                  className="group relative bg-slate-900/50 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-slate-900/80"
                >
                  {/* AESTHETIC REFINEMENT: Subtle white "aurora" glow on hover */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative h-full backdrop-blur-lg rounded-2xl p-6 flex items-center gap-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-slate-800/50 rounded-xl flex items-center justify-center p-2 border border-slate-700">
                      <img src={certImages[cert.title] || ''} alt={cert.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                      <p className="text-slate-400 mt-1 text-sm">{cert.description}</p>
                    </div>
                    <ArrowRight className="absolute top-4 right-4 w-5 h-5 text-slate-600 transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;