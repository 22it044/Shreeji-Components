import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Shield, Award, CheckCircle, BadgeCheck, Zap, BarChart4, Hexagon, Cog } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import QualityToolsSection from '@/components/sections/QualityToolsSection';

// Import the quality data from QualitySection
import {
  qualityCommitments as qualityCommitmentsArray,
  qualityMetrics as qualityMetricsArray,
  certifications as certificationsArray,
  qualityControlProcess as qualityControlProcessArray
} from '@/components/sections/QualitySection';

// Convert arrays to objects with id for proper mapping
const qualityCommitments = qualityCommitmentsArray.map((commitment, index) => ({
  id: `commitment-${index}`,
  title: commitment,
  description: 'We maintain the highest standards in our manufacturing process.',
  icon: CheckCircle
}));

const qualityMetrics = qualityMetricsArray.map((metric, index) => ({
  id: `metric-${index}`,
  value: metric.metric,
  label: metric.label,
  description: metric.description,
  icon: metric.label.includes('Quality') ? CheckCircle : 
        metric.label.includes('Defect') ? Shield : 
        metric.label.includes('Experience') ? Award : 
        BarChart4
}));

const certifications = certificationsArray.map((cert, index) => ({
  id: `cert-${index}`,
  title: cert.title,
  description: cert.description,
  icon: cert.icon,
  image: `/images/certification-${index + 1}.png`
}));

const qualityControlProcess = qualityControlProcessArray.map((process, index) => ({
  id: `process-${index}`,
  title: process.title,
  description: process.desc,
  icon: process.icon,
  image: process.image,
  points: [
    `Rigorous ${process.title.toLowerCase()} standards`,
    `Comprehensive documentation`,
    `Advanced quality assurance techniques`
  ]
}));

const Quality = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: true });
  
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
          
          {/* Technical grid elements */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
            {[...Array(13)].map((_, i) => (
              <div key={`v-${i}`} className={`absolute h-full w-px bg-amber-600/5 left-[calc(100%*${i}/12)]`}></div>
            ))}
            {[...Array(13)].map((_, i) => (
              <div key={`h-${i}`} className={`absolute w-full h-px bg-amber-600/5 top-[calc(100%*${i}/12)]`}></div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-1/4 opacity-60 animate-rotate-slow">
            <Cog className="w-14 h-14 text-amber-500/20" />
          </div>
          <div className="absolute bottom-40 left-1/4 opacity-60 animate-float">
            <Hexagon className="w-10 h-10 text-amber-500/20" strokeWidth={1} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <Link 
                to="/"
                className="mb-6 text-sm text-foreground/60 hover:text-royal-sapphire transition-colors flex items-center group"
              >
                <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white font-bold">PRECISION</span> <span className="text-white">QUALITY</span> <span className="text-white">STANDARDS</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500 rounded-full shadow-glow"></div>
              </motion.h1>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "12rem" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-1 bg-amber-500/80 relative shadow-glow mb-6 mx-auto"
              >
                <div className="absolute -right-1 -top-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse-fast"></div>
                <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-amber-500 rounded-full"></div>
              </motion.div>
              
              <motion.p 
                className="text-xl text-white max-w-3xl mx-auto leading-relaxed bg-black/30 backdrop-blur-md p-8 relative overflow-hidden rounded-lg border border-white/20 shadow-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white/50 via-white/20 to-white/50"></div>
                <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-white/50 via-white/20 to-white/50"></div>
                <div className="absolute top-2 right-2 text-[8px] font-mono text-white/70">QC-STD-001</div>
                
                <span className="relative z-10 font-technical">
                  Discover our commitment to excellence through rigorous quality control processes and international certifications
                  <span className="text-white font-bold"> [TOLERANCE: ±0.001mm]</span>
                </span>
              </motion.p>
              
              {/* Quality Badge */}
              <motion.div
                className="bg-black/30 p-6 rounded-2xl border border-amber-500/30 shadow-md relative overflow-hidden max-w-xs"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Premium corner elements */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber-500/70"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-amber-500/70"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-amber-500/70"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber-500/70"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <Shield className="w-12 h-12 text-amber-500 mb-2" />
                  <h3 className="text-lg font-bold text-amber-500 mb-1">Manufacturing Excellence</h3>
                  <p className="text-sm text-center text-white/70">Precision engineering with zero-defect policy</p>
                  
                  {/* Technical measurement indicator */}
                  <div className="absolute bottom-2 left-2 flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-500/80 rounded-full animate-pulse-slow"></div>
                    <div className="ml-1 text-[8px] font-mono text-amber-500/80">VERIFIED</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Quality Commitments Section - Industrial Brutalism Style */}
        <section className="py-16 bg-[#0c1021] relative overflow-hidden">
          {/* Premium background with subtle grid */}
          <div className="absolute inset-0 bg-grid-white/5 bg-[length:40px_40px] opacity-10"></div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1021]/80 via-[#0c1021] to-[#080a16] opacity-90"></div>
          
          {/* Technical grid elements */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
            {[...Array(13)].map((_, i) => (
               <div key={`v-${i}`} className={`absolute h-full w-px bg-amber-600/5 left-[calc(100%*${i}/12)]`}></div>
             ))}
             {[...Array(13)].map((_, i) => (
               <div key={`h-${i}`} className={`absolute w-full h-px bg-amber-600/5 top-[calc(100%*${i}/12)]`}></div>
             ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="mb-16 text-center max-w-3xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Premium corner elements with amber/gold accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-500/70"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-500/70"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-500/70"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-500/70"></div>
              
              <h2 className="text-3xl font-bold mb-4 text-white">OUR QUALITY COMMITMENTS</h2>
              <div className="w-32 h-1 bg-amber-500/70 mt-4 mx-auto shadow-glow mb-6"></div>
              <p className="text-white/70">We are dedicated to maintaining the highest standards of quality in every component we manufacture.</p>
              
              {/* Technical specifications */}
              <div className="absolute -top-6 right-0 text-[8px] font-mono text-amber-500/70 flex items-center">
                <div className="w-2 h-2 border border-amber-500/70 mr-1"></div>
                REF: QC-CMT-2023
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {qualityCommitments.map((commitment, index) => (
                <motion.div
                  key={commitment.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Industrial metal background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] shadow-xl transform group-hover:scale-105 transition-all duration-500"></div>
                  
                  <div className="relative p-6 border border-amber-500/30 overflow-hidden z-10 transition-all duration-500 group-hover:-translate-y-1 rounded-lg bg-black/20 backdrop-blur-sm">
                    {/* Technical corner elements */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber-500/70"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-amber-500/70"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-amber-500/70"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber-500/70"></div>
                    
                    {/* Technical ID */}
                    <div className="absolute top-2 right-2 text-[8px] font-mono text-amber-500/50">{`CMT-${index + 1}`.padStart(5, '0')}</div>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2.5 bg-black/40 rounded-lg border border-amber-500/50">
                        {commitment.icon && <commitment.icon className="w-5 h-5 text-amber-500" />}
                      </div>
                      <h3 className="text-xl font-bold text-amber-500">{commitment.title}</h3>
                    </div>
                    <p className="text-white/70">{commitment.description}</p>
                    
                    {/* Technical measurement indicator */}
                    <div className="absolute bottom-2 left-2 flex items-center">
                      <div className="w-1.5 h-1.5 bg-amber-500/80 rounded-full animate-pulse-slow"></div>
                      <div className="ml-1 text-[8px] font-mono text-amber-500/80">VERIFIED</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Quality Metrics Section - Industrial Brutalism Style */}
        <section className="py-16 relative overflow-hidden bg-[#11182c]">
          {/* Premium background with subtle grid */}
          <div className="absolute inset-0 bg-grid-white/5 bg-[length:40px_40px] opacity-10"></div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#11182c]/80 via-[#11182c] to-[#0c1021] opacity-90"></div>
          
          {/* Technical grid elements */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
             {[...Array(13)].map((_, i) => (
               <div key={`v-${i}`} className={`absolute h-full w-px bg-amber-600/5 left-[calc(100%*${i}/12)]`}></div>
             ))}
             {[...Array(13)].map((_, i) => (
               <div key={`h-${i}`} className={`absolute w-full h-px bg-amber-600/5 top-[calc(100%*${i}/12)]`}></div>
             ))}
           </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="mb-16 text-center max-w-3xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Premium corner elements with amber/gold accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-500/70"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-500/70"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-500/70"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-500/70"></div>
              
              <h2 className="text-3xl font-bold mb-4 text-white">QUALITY METRICS</h2>
              <div className="w-32 h-1 bg-amber-500/70 mt-4 mx-auto shadow-glow mb-6"></div>
              <p className="text-white/70">Our performance is measured by these key quality indicators that demonstrate our commitment to excellence.</p>
              
              {/* Technical specifications */}
              <div className="absolute -top-6 right-0 text-[8px] font-mono text-amber-500/70 flex items-center">
                <div className="w-2 h-2 border border-amber-500/70 mr-1"></div>
                REF: QC-MTR-2023
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityMetrics.map((metric, index) => (
                <motion.div
                  key={metric.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Industrial metal background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] shadow-xl transform group-hover:scale-105 transition-all duration-500"></div>
                  
                  <div className="relative p-6 border border-amber-500/30 overflow-hidden z-10 transition-all duration-500 group-hover:-translate-y-1 rounded-lg bg-black/20 backdrop-blur-sm text-center">
                    {/* Technical corner elements */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber-500/70"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-amber-500/70"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-amber-500/70"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber-500/70"></div>
                    
                    {/* Technical ID */}
                    <div className="absolute top-2 right-2 text-[8px] font-mono text-amber-500/50">{`MTR-${index + 1}`.padStart(5, '0')}</div>
                    
                    <div className="inline-flex items-center justify-center p-3 bg-black/40 rounded-xl mb-4 border border-amber-500/50">
                      {metric.icon && <metric.icon className="w-6 h-6 text-amber-500" />}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-amber-500">{metric.value}</h3>
                    <p className="text-white/70 text-sm">{metric.label}</p>
                    
                    {/* Technical measurement indicator */}
                    <div className="absolute bottom-2 left-2 flex items-center">
                      <div className="w-1.5 h-1.5 bg-amber-500/80 rounded-full animate-pulse-slow"></div>
                      <div className="ml-1 text-[8px] font-mono text-amber-500/80">VERIFIED</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Certifications Section - Industrial Brutalism Style */}
        <section className="py-16 bg-[#0c1021] relative overflow-hidden">
          {/* Premium background with subtle grid */}
          <div className="absolute inset-0 bg-grid-white/5 bg-[length:40px_40px] opacity-10"></div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1021]/80 via-[#0c1021] to-[#080a16] opacity-90"></div>
          
          {/* Technical grid elements */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
             {[...Array(13)].map((_, i) => (
               <div key={`v-${i}`} className={`absolute h-full w-px bg-amber-600/5 left-[calc(100%*${i}/12)]`}></div>
             ))}
             {[...Array(13)].map((_, i) => (
               <div key={`h-${i}`} className={`absolute w-full h-px bg-amber-600/5 top-[calc(100%*${i}/12)]`}></div>
             ))}
           </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="mb-16 text-center max-w-3xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Premium corner elements with amber/gold accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-500/70"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-500/70"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-500/70"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-500/70"></div>
              
              <h2 className="text-3xl font-bold mb-4 text-white">CERTIFICATIONS & STANDARDS</h2>
              <div className="w-32 h-1 bg-amber-500/70 mt-4 mx-auto shadow-glow mb-6"></div>
              <p className="text-white/70">Our manufacturing processes and products meet international quality standards and certifications.</p>
              
              {/* Technical specifications */}
              <div className="absolute -top-6 right-0 text-[8px] font-mono text-amber-500/70 flex items-center">
                <div className="w-2 h-2 border border-amber-500/70 mr-1"></div>
                REF: QC-CRT-2023
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((certification, index) => (
                <motion.div
                  key={certification.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Industrial metal background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] shadow-xl transform group-hover:scale-105 transition-all duration-500"></div>
                  
                  <div className="relative border border-amber-500/30 overflow-hidden z-10 transition-all duration-500 group-hover:-translate-y-1 rounded-lg bg-black/20 backdrop-blur-sm">
                    {/* Technical corner elements */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber-500/70"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-amber-500/70"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-amber-500/70"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber-500/70"></div>
                    
                    {/* Technical ID */}
                    <div className="absolute top-2 right-2 text-[8px] font-mono text-amber-500/50">{`CRT-${index + 1}`.padStart(5, '0')}</div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2.5 bg-black/40 rounded-lg">
                            {certification.icon && <certification.icon className="w-5 h-5 text-amber-500" />}
                          </div>
                        <h3 className="text-xl font-bold text-amber-500">{certification.title}</h3>
                      </div>
                      <p className="text-white/70 mb-4">{certification.description}</p>
                      
                      <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img 
                          src={certification.image} 
                          alt={certification.title} 
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                      <div className="flex items-center space-x-1 bg-black/40 px-3 py-1 rounded-full text-xs border border-amber-500/30">
                        <BadgeCheck className="h-3.5 w-3.5 text-amber-500" />
                        <span className="text-amber-500 font-medium">VERIFIED</span>
                      </div>
                    </div>
                    
                    {/* Technical measurement indicator */}
                    <div className="absolute bottom-2 left-2 flex items-center">
                      <div className="w-1.5 h-1.5 bg-amber-500/80 rounded-full animate-pulse-slow"></div>
                      <div className="ml-1 text-[8px] font-mono text-amber-500/80">VERIFIED</div>
                    </div>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Quality Tools Section */}
        <QualityToolsSection />
        
        {/* Quality Control Process Section - Industrial Brutalism Style */}
        <section className="py-16 relative overflow-hidden bg-[#11182c]">
          {/* Premium decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -right-32 top-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
            <div className="absolute -left-32 bottom-32 w-64 h-64 bg-secondary/5 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="mb-16 text-center max-w-3xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500/70"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500/70"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500/70"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500/70"></div>
              
              {/* Technical ID */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black/60 px-3 py-0.5 rounded-sm border border-amber-500/30">
                <span className="text-[10px] font-mono text-amber-500/80">QC-PROC-ID:7842</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 uppercase tracking-wider">Quality Control <span className="text-amber-500">Process</span></h2>
              <motion.div 
                className="w-32 h-1 bg-amber-500/30 rounded-full mx-auto mb-6 shadow-md"
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: 128 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              <p className="text-white/70">Our comprehensive quality control process ensures that every component meets our rigorous standards.</p>
              
              {/* Technical measurement lines */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-3 h-px bg-amber-500/50"></div>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-3 h-px bg-amber-500/50"></div>
            </motion.div>
            
            <div className="space-y-12">
              {qualityControlProcess.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-black/90 to-zinc-900/90 backdrop-blur-sm rounded-none border border-amber-500/20 shadow-elegant group hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-1 p-6 overflow-hidden relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-noise opacity-10"></div>
                  
                  {/* Technical grid overlay */}
                  <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10 pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="h-full border-l border-amber-500/20"></div>
                    ))}
                  </div>
                  
                  {/* Technical ID */}
                  <div className="absolute top-2 right-2 bg-black/60 px-2 py-0.5 rounded-sm border border-amber-500/30">
                    <span className="text-[10px] font-mono text-amber-500/80">QC-STEP-{index + 1}</span>
                  </div>
                  
                  {/* Step number and image */}
                  <div className="w-full md:w-5/12 relative">
                    <div className="absolute -left-4 -top-4 w-14 h-14 flex items-center justify-center bg-black border-2 border-amber-500 text-amber-500 font-bold text-lg shadow-md z-10 group-hover:scale-110 transition-all duration-300">
                      {index + 1}
                    </div>
                    <div className="bg-black rounded-none shadow-elegant overflow-hidden border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 hover:shadow-elegant-hover">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
                      
                      {/* Technical measurement lines */}
                      <div className="absolute bottom-0 left-0 w-full h-8 flex justify-between items-end pointer-events-none">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div key={i} className="h-full border-l border-amber-500/40 relative">
                            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-amber-500/40"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="w-full md:w-7/12 relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-black border border-amber-500/50 text-amber-500 shadow-md">
                        {step.icon && <step.icon className="w-5 h-5" />}
                      </div>
                      <div className="w-16 h-1 bg-amber-500/30 rounded-none shadow-md group-hover:w-24 transition-all duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-all duration-500 uppercase tracking-wider">{step.title}</h3>
                    <p className="text-white/70 mb-4 group-hover:text-white/90 transition-colors duration-500">{step.description}</p>
                    <ul className="space-y-2">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0 transition-colors duration-500" />
                          <div className="text-white/80 font-light">{point}</div>
                        </li>
                      ))}
                    </ul>
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-amber-500/30 transition-all duration-700"></div>
                    
                    {/* Technical verification indicator */}
                    <div className="absolute bottom-2 right-2 flex items-center">
                      <div className="w-1.5 h-1.5 bg-amber-500/80 rounded-full animate-pulse-slow"></div>
                      <div className="ml-1 text-[8px] font-mono text-amber-500/80">VERIFIED</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Zero Defect Policy Section - Industrial Brutalism Style */}
        <section className="py-16 bg-[#0c1021] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-1/4 -bottom-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute left-1/4 -top-32 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl opacity-30"></div>
            
            {/* Technical grid overlay */}
            <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-full border-l border-amber-500/20"></div>
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-12 gap-4 opacity-10 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-full border-t border-amber-500/20"></div>
              ))}
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-black rounded-none shadow-elegant border border-amber-500/30 p-8 md:p-12 max-w-4xl mx-auto relative">
              {/* Technical ID */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black/60 px-3 py-0.5 rounded-sm border border-amber-500/30">
                <span className="text-[10px] font-mono text-amber-500/80">ZDP-SPEC-9921</span>
              </div>
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-amber-500/70"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-amber-500/70"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-amber-500/70"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-amber-500/70"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  className="w-full md:w-1/3 flex justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gradient-to-br from-black to-zinc-900 p-6 rounded-none border border-amber-500/30 shadow-md relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/10 rounded-full blur-xl opacity-70"></div>
                      <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-amber-500/10 rounded-full blur-xl opacity-70"></div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <Zap className="w-16 h-16 text-amber-500 mb-4" />
                      <h3 className="text-xl font-bold text-amber-500 mb-2 uppercase tracking-wider">Zero Defect Policy</h3>
                      <p className="text-sm text-white/70">Our commitment to perfection in every component</p>
                      
                      {/* Technical measurement indicators */}
                      <div className="mt-4 flex items-center justify-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-amber-500/80 rounded-full animate-pulse-slow"></div>
                        <div className="text-[8px] font-mono text-amber-500/80">VERIFIED</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="w-full md:w-2/3 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {/* Technical ID */}
                  <div className="absolute -top-3 right-0 bg-black/60 px-2 py-0.5 rounded-sm border border-amber-500/30">
                    <span className="text-[10px] font-mono text-amber-500/80">ZDP-POLICY-7721</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 uppercase tracking-wider">Premium Quality <span className="text-amber-500">Standards</span></h2>
                  <div className="w-32 h-1 bg-amber-500/30 rounded-none mb-6"></div>
                  <p className="text-white/70 mb-6">
                    At Shreeji Components, we maintain a strict zero-defect policy throughout our manufacturing process. Every component undergoes rigorous inspection and testing to ensure it meets our exacting standards before reaching our customers.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button 
                      onClick={() => window.location.href = '/home#contact'}
                      className="relative overflow-hidden bg-black border border-amber-500 hover:bg-amber-500 hover:text-black text-amber-500 font-bold px-6 py-3 shadow-md hover:shadow-lg transition-all duration-500 w-full sm:w-auto group uppercase tracking-wider"
                    >
                      <span className="relative z-10 flex items-center justify-center">Contact Us <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                      <span className="absolute inset-0 bg-amber-500/10 w-1/3 -skew-x-12 transform -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out"></span>
                    </Button>
                  </div>
                  
                  {/* Technical measurement grid */}
                  <div className="absolute -bottom-4 left-0 w-full h-4 flex justify-between items-end pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-full border-l border-amber-500/40"></div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quality;