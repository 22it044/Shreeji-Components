import { CheckCircle, Award, FileCheck, Users, TrendingUp, Shield, ClipboardCheck, Star, Gem, BadgeCheck, Medal, Sparkles, Zap, Hexagon, Gauge, BarChart4, Microscope, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const QualitySection = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15, triggerOnce: true });

  const qualityCommitments = [
    'ISO 9001:2015 Quality Management System',
    'IATF 16949:2016 Automotive Quality Standards',
    'Z Bronze Certification',
    'EEPC India Membership',
    '100% Manual as well as Machine Inspection',
    'Zero Defect Policy',
    'Statistical Process Control Monitoring',
    'In-house Quality Check Systems',
  ];

  const qualityCertifications = [
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

  const qualityMetrics = [
    { metric: '100%', label: 'Quality Inspection', description: 'Manual and machine inspection' },
    { metric: 'Zero', label: 'Defect Policy', description: 'Zero defect manufacturing approach' },
    { metric: '30+', label: 'Years Experience', description: 'Decades of quality excellence' },
    { metric: 'SPC', label: 'Process Control', description: 'Statistical process monitoring' },
  ];

  return (
    <section id="quality" ref={sectionRef} className="py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-40 h-40 border border-primary/10 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 border border-secondary/10 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-primary/10 rotate-45 opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-1/4 opacity-20 animate-float-slow">
        <Hexagon className="w-16 h-16 text-primary/30" />
      </div>
      <div className="absolute bottom-40 left-1/4 opacity-20 animate-float">
        <Gem className="w-12 h-12 text-secondary/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative">
          
          {/* Premium badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/10 rounded-full px-6 py-3 mb-6 shadow-elegant relative group overflow-hidden mx-auto"
          >
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-700"></div>
            
            {/* Animated line */}
            <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-700"></div>
            
            <div className="p-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
              <Medal className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold text-sm relative z-10">Manufacturing Excellence</span>
            <BadgeCheck className="w-4 h-4 text-secondary/70" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6 relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow relative drop-shadow-text-colored">Quality</span> is Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-glow relative drop-shadow-text-colored"> Promise</span>
            

          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: isVisible ? "8rem" : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 mx-auto relative shadow-glow"
          >
            <div className="absolute -right-1 -top-1 w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-gradient-to-br from-background/80 to-background/60 p-8 rounded-xl shadow-elegant border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-noise opacity-5"></div>
            <span className="relative z-10">
              Every component we manufacture undergoes rigorous quality control processes, 
              ensuring exceptional standards that exceed industry requirements
            </span>
          </motion.p>
        </motion.div>

        {/* Enhanced Quality Commitments */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-12 text-center relative"
          >
            Our Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow relative drop-shadow-text-colored">Standards</span>
            
            <div className="w-32 h-1 bg-gradient-to-r from-primary/30 to-primary rounded-full mt-4 mx-auto shadow-glow"></div>
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {qualityCommitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl blur-md transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative flex items-start space-x-4 p-6 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-elegant hover:shadow-elegant-hover transition-all duration-500 group-hover:-translate-y-1 overflow-hidden z-10">
                  <div className="absolute inset-0 bg-noise opacity-5"></div>
                  
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-success drop-shadow-glow" />
                  </div>
                  
                  <span className="text-foreground font-medium leading-relaxed relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/80 transition-all duration-500">
                    {commitment}
                  </span>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-success/30 to-success/10 transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Quality Metrics */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-12 text-center relative"
          >
            Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-glow relative drop-shadow-text-colored">Metrics</span>
            
            <div className="w-32 h-1 bg-gradient-to-r from-secondary/30 to-secondary rounded-full mt-4 mx-auto shadow-glow"></div>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl blur-md transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  
                  <div className="relative text-center p-8 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500 group-hover:-translate-y-2 overflow-hidden z-10">
                    <div className="absolute inset-0 bg-noise opacity-5"></div>
                    
                    {/* Quality icon */}
                    <div className="w-16 h-16 mx-auto mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-md transform group-hover:scale-110 transition-all duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full backdrop-blur-sm shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500 flex items-center justify-center">
                        <MetricIcon className="w-8 h-8 text-white drop-shadow-glow group-hover:scale-110 transition-all duration-500" />
                      </div>
                    </div>
                    
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-3 group-hover:scale-110 transition-all duration-300 drop-shadow-text-colored">{metric.metric}</div>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full mb-3 mx-auto shadow-glow group-hover:w-20 transition-all duration-500"></div>
                    <div className="text-lg font-semibold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500">{metric.label}</div>
                    <div className="text-sm text-medium-gray group-hover:text-foreground/80 transition-colors duration-500">{metric.description}</div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary/50 to-secondary/50 transition-all duration-700"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Certifications */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-12 text-center relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow relative drop-shadow-text-colored">Certifications</span> & Standards
            
            <div className="w-32 h-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full mt-4 mx-auto shadow-glow"></div>
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 justify-items-center">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl blur-md transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  
                  <div className="relative p-8 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500 group-hover:-translate-y-2 overflow-hidden z-10">
                    <div className="absolute inset-0 bg-noise opacity-5"></div>
                    
                    {/* Verification badge */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-success to-success/70 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-3 z-20">
                      <div className="flex items-center gap-1">
                        <BadgeCheck className="w-3 h-3" />
                        <span>Verified</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl blur-md transform group-hover:scale-110 transition-all duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70 rounded-2xl backdrop-blur-sm border border-primary/20 shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500 flex items-center justify-center">
                          {certImages[cert.title] ? (
                            <img 
                              src={certImages[cert.title]} 
                              alt={cert.title} 
                              className="w-full h-full object-contain p-3 drop-shadow-glow"
                            />
                          ) : (
                            <cert.icon className="w-12 h-12 text-primary drop-shadow-glow" />
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-secondary mb-2 transition-all duration-500 drop-shadow-text">
                          {cert.title}
                        </h4>
                        
                        <div className="w-16 h-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full mb-3 shadow-glow group-hover:w-24 transition-all duration-500"></div>
                        
                        <p className="text-medium-gray mb-3 text-lg group-hover:text-foreground/80 transition-colors duration-500">
                          {cert.description}
                        </p>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                          <span className="text-sm text-success font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-success group-hover:to-success/70 transition-all duration-500">
                            Certified
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-success/50 to-success/20 transition-all duration-700"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>


        {/* Enhanced Process Flow Layout */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12 relative"
          >
            Quality Control <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow relative drop-shadow-text-colored">Process</span>
            
            <div className="w-32 h-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full mt-4 mx-auto shadow-glow"></div>
          </motion.h3>
          
          <div className="relative">
            {/* Connecting line for process flow */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 transform -translate-y-1/2 hidden lg:block"></div>
            
            {/* Process Flow Steps with Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {[
                { 
                  step: '01', 
                  title: 'Material Inspection', 
                  desc: 'Every batch of raw material undergoes rigorous testing for chemical composition, physical properties, and dimensional accuracy before entering production.', 
                  image: '/images/High quality raw material.jpg',
                  icon: 'CheckCircle'
                },
                { 
                  step: '02', 
                  title: 'In-Process Control', 
                  desc: 'Continuous monitoring during machining operations with statistical process control (SPC) and real-time quality checks at every stage of production.', 
                  image: '/images/CNC Machining manufacturing.jpg',
                  icon: 'Settings'
                },
                { 
                  step: '03', 
                  title: 'Final Inspection', 
                  desc: '100% component testing with advanced measuring equipment and visual inspection to ensure dimensional accuracy and surface finish quality.', 
                  image: '/images/Material Inspection.jpg',
                  icon: 'FileCheck'
                },
                { 
                  step: '04', 
                  title: 'Documentation & Traceability', 
                  desc: 'Complete documentation and traceability from raw material to finished product, ensuring accountability and quality assurance at every step.', 
                  image: '/images/Documentation & Traceability.webp',
                  icon: 'ClipboardCheck'
                },
                ].map((process, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.15) }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl blur-md transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  
                  <div 
                    className="relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500 group-hover:-translate-y-2 overflow-hidden z-10"
                  >
                    <div className="absolute inset-0 bg-noise opacity-5"></div>
                    
                    <div className="flex flex-col md:flex-row">
                      {/* Enhanced Image Section */}
                      <div className="md:w-2/5 relative overflow-hidden h-60 md:h-auto">
                        <img 
                          src={process.image} 
                          alt={process.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center text-xl font-bold text-primary-foreground shadow-glow group-hover:scale-110 transition-all duration-300">
                          {process.step}
                        </div>
                      </div>
                      
                      {/* Enhanced Content Section */}
                      <div className="p-8 md:w-3/5 flex flex-col justify-center md:h-60 relative">
                        <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-secondary mb-4 transition-all duration-500 drop-shadow-text">{process.title}</h4>
                        
                        <div className="w-16 h-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full mb-4 shadow-glow group-hover:w-24 transition-all duration-500"></div>
                        
                        <p className="text-medium-gray leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">{process.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Enhanced Premium Quality Assurance Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative group mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl blur-md transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-gradient-to-r from-primary/5 via-background/80 to-secondary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500 overflow-hidden z-10">
                <div className="absolute inset-0 bg-noise opacity-5"></div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center space-x-6">
                    <div className="relative w-20 h-20 group-hover:scale-105 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-success/20 to-success/10 rounded-full blur-md transform group-hover:scale-110 transition-all duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-success/30 to-success/5 rounded-full backdrop-blur-sm shadow-elegant group-hover:shadow-elegant-hover transition-all duration-500 flex items-center justify-center">
                        <Shield className="w-10 h-10 text-white drop-shadow-glow group-hover:scale-110 transition-all duration-500" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-success group-hover:to-success/70 mb-2 transition-all duration-500 drop-shadow-text">Zero Defect Policy</h4>
                      
                      <div className="w-16 h-1 bg-gradient-to-r from-success/30 to-success/10 rounded-full mb-3 shadow-glow group-hover:w-32 transition-all duration-500"></div>
                      
                      <p className="text-medium-gray group-hover:text-foreground/80 transition-colors duration-500">Our commitment to excellence in every component we manufacture</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-success/10 to-success/5 backdrop-blur-sm px-6 py-3 rounded-full border border-success/10 shadow-elegant">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-success font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-success group-hover:to-success/70 transition-all duration-500">ISO 9001:2015 & IATF 16949:2016 Certified</span>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-success/50 to-success/20 transition-all duration-700"></div>
              </div>
            </motion.div>
            
            {/* Premium quality badge at bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex justify-center mb-8"
            >
              <div className="flex items-center space-x-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-md px-6 py-3 rounded-full border border-primary/10 shadow-elegant">
                <Gem className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Premium Quality Standards</span>
                <Gem className="w-5 h-5 text-secondary" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualitySection;