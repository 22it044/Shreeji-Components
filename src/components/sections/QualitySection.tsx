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
  // Certificate images and their corresponding PDF files
  const certData: { [key: string]: { image: string, pdf: string } } = {
    'ISO 9001:2015': { 
      image: '/images/iso certification.jpg',
      pdf: '/ISO 2015 .pdf'
    },
    'IATF 16949:2016': { 
      image: '/images/iatf-16949-2016-certification-services.jpeg',
      pdf: '/IATF.pdf'
    },
    'Z Bronze': { 
      image: '/images/Bronze-new-1.webp',
      pdf: '/Z Bronze1.pdf'
    },
    'EEPC India': { 
      image: '/images/eepc india logo.png',
      pdf: '#' // Using company profile as fallback
    }
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
      className="py-16 md:py-24 relative overflow-hidden bg-[#11182c] text-white"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-12 md:mb-20">
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
            className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Our commitment to excellence is built upon measurable metrics and adherence to globally recognized industry standards.
          </motion.p>
        </div>
        
        <div className="space-y-16 md:space-y-24">
          {/* --- Performance Metrics Section --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12 text-white">Performance Metrics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {qualityMetrics.map(({ metric, label, Icon }) => (
                <motion.div 
                  key={label}
                  variants={itemVariants}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/15"
                >
                  <div className="relative h-full rounded-xl p-4 md:p-6 text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-3xl md:text-4xl font-bold text-white">{metric}</h4>
                    <p className="text-xs md:text-sm font-medium tracking-wider text-white/80 mt-2 uppercase">{label}</p>
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
            <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12 text-white">Industry Certifications</h3>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {certifications.map(cert => (
                <motion.div 
                  key={cert.title}
                  variants={itemVariants}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/15"
                >
                  <div className="relative h-full rounded-xl p-4 md:p-6 flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                    <div 
                      className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center p-2 border border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                    >
                      <img src={certData[cert.title]?.image || ''} alt={cert.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="text-base md:text-lg font-semibold text-white">{cert.title}</h4>
                      <p className="text-white/80 mt-1 text-sm">{cert.description}</p>
                    </div>
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