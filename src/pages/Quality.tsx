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
      <main className="bg-white">
        {/* Page Header - Matching Core Values/Vision/Mission Style */}
        <section className="pt-32 pb-16 relative overflow-hidden bg-white text-gray-900">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-80"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <Link 
                to="/"
                className="mb-6 text-sm text-gray-600 hover:text-royal-sapphire transition-colors flex items-center group"
              >
                <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Precision <span className="text-royal-sapphire">Quality Standards</span>
              </motion.h1>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-px mb-8 mx-auto bg-royal-sapphire"
              ></motion.div>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our commitment to excellence through rigorous quality control processes and international certifications
              </motion.p>
              
              {/* Quality Badge */}
              <motion.div
                className="bg-gray-50 p-8 rounded-lg border-l-4 border-royal-sapphire shadow-md relative overflow-hidden max-w-xs"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className="p-3 bg-royal-sapphire rounded-full mr-4 mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Manufacturing Excellence</h3>
                  <p className="text-sm text-center text-gray-600">Precision engineering with zero-defect policy</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Quality Commitments Section - Updated with brilliant-brass theme */}
        <section className="py-16 bg-[#11182c] text-white relative overflow-hidden">
          {/* Professional background elements */}
          <div className="absolute inset-0 bg-gradient-professional opacity-40"></div>
          <div className="absolute inset-0 bg-noise opacity-20"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-brilliant-brass/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-brilliant-brass/5 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="mb-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center space-x-2 bg-midnight-black/30 backdrop-blur-sm rounded-full px-5 py-2 mb-4">
                <div className="p-1 rounded-full bg-brilliant-brass">
                  <CheckCircle className="w-3 h-3 text-midnight-black" />
                </div>
                <span className="text-brilliant-brass font-semibold text-sm">Our Commitments</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-white">Quality <span className="text-brilliant-brass">Commitments</span></h2>
              <div className="w-24 h-0.5 bg-brilliant-brass mt-4 mx-auto mb-6"></div>
              <p className="text-white/70">Our dedication to quality is reflected in these core commitments that guide our manufacturing process.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {qualityCommitments.map((commitment, index) => (
                <motion.div 
                  key={commitment.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-midnight-black/50 backdrop-blur-md p-6 rounded-lg shadow-xl h-full relative overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-brilliant-brass/20 hover:border-brilliant-brass/40">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2.5 bg-midnight-black/60 rounded-lg border border-brilliant-brass/30">
                        {commitment.icon && <commitment.icon className="w-5 h-5 text-brilliant-brass" />}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brilliant-brass transition-colors duration-300">{commitment.title}</h3>
                    </div>
                    <p className="text-white/70">{commitment.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Quality Metrics Section - Professional Minimalist Style */}
        <section className="py-16 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="mb-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-5 py-2 mb-4">
                <div className="p-1 rounded-full bg-royal-sapphire">
                  <BarChart4 className="w-3 h-3 text-white" />
                </div>
                <span className="text-royal-sapphire font-semibold text-sm">Performance Metrics</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Quality <span className="text-royal-sapphire">Metrics</span></h2>
              <div className="w-24 h-0.5 bg-royal-sapphire mt-4 mx-auto mb-6"></div>
              <p className="text-gray-600">Our performance is measured by these key quality indicators that demonstrate our commitment to excellence.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityMetrics.map((metric, index) => (
                <motion.div 
                  key={metric.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center h-full flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 border border-gray-200">
                    <div className="inline-flex items-center justify-center p-3 bg-royal-sapphire/10 rounded-full mb-4">
                      {metric.icon && <metric.icon className="w-6 h-6 text-royal-sapphire" />}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{metric.value}</h3>
                    <p className="text-gray-600 text-sm">{metric.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Certifications Section - Updated with brilliant-brass theme */}
        <section className="py-16 bg-[#0c1021] relative overflow-hidden">
          {/* Premium background with subtle grid */}
          <div className="absolute inset-0 bg-grid-white/5 bg-[length:40px_40px] opacity-10"></div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1021]/80 via-[#0c1021] to-[#080a16] opacity-90"></div>
          
          {/* Technical grid elements */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
             {[...Array(13)].map((_, i) => (
               <div key={`v-${i}`} className={`absolute h-full w-px bg-brilliant-brass/5 left-[calc(100%*${i}/12)]`}></div>
             ))}
             {[...Array(13)].map((_, i) => (
               <div key={`h-${i}`} className={`absolute w-full h-px bg-brilliant-brass/5 top-[calc(100%*${i}/12)]`}></div>
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
              {/* Premium corner elements with brilliant-brass accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-brilliant-brass/70"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brilliant-brass/70"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brilliant-brass/70"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-brilliant-brass/70"></div>
              
              <h2 className="text-3xl font-bold mb-4 text-white">CERTIFICATIONS & <span className="text-brilliant-brass">STANDARDS</span></h2>
              <div className="w-32 h-1 bg-brilliant-brass/70 mt-4 mx-auto shadow-glow mb-6"></div>
              <p className="text-white/70">Our manufacturing processes and products meet international quality standards and certifications.</p>
              
              {/* Technical specifications */}
              <div className="absolute -top-6 right-0 text-[8px] font-mono text-brilliant-brass/70 flex items-center">
                <div className="w-2 h-2 border border-brilliant-brass/70 mr-1"></div>
                REF: QC-CRT-2023
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-royal-sapphire/10 rounded-md mr-3">
                      {cert.icon && <cert.icon className="w-5 h-5 text-royal-sapphire" />}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <div className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <CheckCircle className="w-4 h-4 text-royal-sapphire mr-2" />
                      <span className="text-gray-700">Verified & Compliant</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Quality Tools Section */}
        <QualityToolsSection />
        
        {/* Quality Control Process Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="mb-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-5 py-2 mb-4">
                <div className="p-1 rounded-full bg-royal-sapphire">
                  <Cog className="w-3 h-3 text-white" />
                </div>
                <span className="text-royal-sapphire font-semibold text-sm">Quality Process</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Quality Control <span className="text-royal-sapphire">Process</span></h2>
              <div className="w-24 h-0.5 bg-royal-sapphire mt-4 mx-auto mb-6"></div>
              <p className="text-gray-600">Our comprehensive quality control process ensures that every component meets our rigorous standards.</p>
            </motion.div>
            
            <div className="space-y-8">
              {qualityControlProcess.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-lg border border-gray-200 shadow-sm group hover:shadow-md transition-all duration-300 p-6 overflow-hidden relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Step number and image */}
                  <div className="w-full md:w-5/12 relative">
                    <div className="absolute -left-3 -top-3 w-10 h-10 flex items-center justify-center bg-royal-sapphire text-white font-bold text-lg shadow-sm z-10 rounded-full">
                      {index + 1}
                    </div>
                    <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="w-full md:w-7/12 relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-royal-sapphire/10 rounded-md text-royal-sapphire">
                        {step.icon && <step.icon className="w-5 h-5" />}
                      </div>
                      <div className="w-16 h-0.5 bg-royal-sapphire/30"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-royal-sapphire mt-0.5 flex-shrink-0" />
                          <div className="text-gray-700">{point}</div>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Verification badge */}
                    <div className="mt-4 inline-flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                      <div className="w-2 h-2 rounded-full bg-royal-sapphire"></div>
                      <span className="text-gray-700 text-sm">ISO 9001:2015 Verified</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Zero Defect Policy Section */}
        <section className="py-16 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12 relative"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full md:w-1/3 flex justify-center"
                  >
                    <div className="relative">
                      <div className="w-32 h-32 bg-royal-sapphire/10 rounded-full flex items-center justify-center">
                        <Zap className="w-16 h-16 text-royal-sapphire" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-royal-sapphire rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero Defect Policy</h3>
                    <div className="w-16 h-1 bg-royal-sapphire mb-4"></div>
                    <p className="text-gray-600 mb-6">
                      Our Zero Defect Policy is the cornerstone of our quality management system. We believe that every defect is preventable through proper engineering, manufacturing processes, and quality control.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-royal-sapphire mt-0.5 flex-shrink-0" />
                        <p className="ml-3 text-gray-700">100% inspection of critical components</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-royal-sapphire mt-0.5 flex-shrink-0" />
                        <p className="ml-3 text-gray-700">Statistical process control for continuous monitoring</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-royal-sapphire mt-0.5 flex-shrink-0" />
                        <p className="ml-3 text-gray-700">Preventive maintenance of all equipment</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Link to="/contact" className="inline-flex items-center px-4 py-2 bg-royal-sapphire text-white rounded hover:bg-royal-sapphire/90 transition-colors">
                        <span>Request Quality Documentation</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quality;