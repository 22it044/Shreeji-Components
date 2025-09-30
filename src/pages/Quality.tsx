import { useEffect, useRef } from 'react';
  import { Link } from 'react-router-dom';
  import { ArrowRight, ChevronLeft, ShieldCheck, Award, Shield, CheckCircle, BadgeCheck, Zap, BarChart4, Hexagon, Cog, Gem, ExternalLink, Settings, Factory } from 'lucide-react';
  import Header from '@/components/layout/Header';
  import Footer from '@/components/layout/Footer';
  import { Button } from '@/components/ui/button';
  import { motion } from 'framer-motion';
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
    image: `/images/certification-${index + 1}.png`,
    pdfPath: cert.title === 'ISO 9001:2015' ? '/ISO 2015 .pdf' :
             cert.title === 'IATF 16949:2016' ? '/IATF.pdf' :
             cert.title === 'Z Bronze' ? '/Z Bronze1.pdf' :
             cert.title === 'Z Bronze 2' ? '/Z Bronze2.pdf' :
             cert.title === 'EEPC India' ? '/shreeji-components-profile.pdf' : 
             '/shreeji-company-brochure.pdf'
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
    useEffect(() => {
      // Scroll to top when page loads
      window.scrollTo(0, 0);
    }, []);

    return (
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Page Header - Industrial Brutalism Style */}
          
<section className="relative overflow-hidden bg-[#fbfcf8]  pb-8 sm:pt-32 lg:pt-40">
  {/* The subtle background gradient remains for depth */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-100/80 via-stone-50 to-stone-50"></div>
  
  <div className="container mx-auto py-10 px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Column: Refined Content */}
      <div className="text-center lg:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block border border-amber-500/30 bg-amber-500/10  px-4 py-1.5 rounded-full mb-6">
            <p className="font-semibold text-amber-600 text-sm">QUALITY ASSURANCE</p>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight"
        >
          Where Precision Becomes an <span className="text-amber-500">Art</span>.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed text-slate-600"
        >
          We merge decades of human expertise with state-of-the-art metrology to craft components where perfection is not an option—it is the standard.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
        </motion.div>
      </div>

      {/* Right Column: Animated Blueprint Visual */}
<motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
  className="relative w-full max-w-md mx-auto lg:max-w-none h-96 lg:h-full"
>
  {/* The SVG container */}
  <div className="absolute inset-0 flex items-center justify-center [filter:drop-shadow(0_0_25px_rgba(245,158,11,0.4))]">
    {/* ... SVG code remains the same ... */}
    <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path d="M200 340C277.32 340 340 277.32 340 200C340 122.68 277.32 60 200 60C122.68 60 60 122.68 60 200C60 277.32 122.68 340 200 340Z" stroke="url(#paint0_linear_101_2)" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}/>
      <motion.path d="M200 280C244.183 280 280 244.183 280 200C280 155.817 244.183 120 200 120C155.817 120 120 155.817 120 200C120 244.183 155.817 280 200 280Z" stroke="url(#paint1_linear_101_2)" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}/>
      <motion.path d="M150 200L130 220M250 200L270 180M200 150L180 130M200 250L220 270" stroke="url(#paint2_linear_101_2)" strokeWidth="2" strokeLinecap="round" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}/>
      <defs>
        <linearGradient id="paint0_linear_101_2" x1="200" y1="60" x2="200" y2="340" gradientUnits="userSpaceOnUse"><stop stopColor="#F59E0B"/><stop offset="1" stopColor="#F59E0B" stopOpacity="0.2"/></linearGradient>
        <linearGradient id="paint1_linear_101_2" x1="200" y1="120" x2="200" y2="280" gradientUnits="userSpaceOnUse"><stop stopColor="#F59E0B"/><stop offset="1" stopColor="#FBBF24" stopOpacity="0.5"/></linearGradient>
        <linearGradient id="paint2_linear_101_2" x1="190" y1="190" x2="210" y2="210" gradientUnits="userSpaceOnUse"><stop stopColor="#F59E0B"/><stop offset="1" stopColor="#FDE68A" stopOpacity="0.3"/></linearGradient>
      </defs>
    </svg>
  </div>
  
  {/* Interactive Nodes with Visible Labels */}
  <div className="absolute inset-0">
      {/* Node 1: Inspection */}
      <motion.div 
        initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay: 1.5}} 
        className="group absolute top-[15%] left-[15%]"
      >
        <div className="absolute w-44 right-8 top-1/2 -translate-y-1/2 flex items-center justify-end">
            <p className="text-sm font-medium text-slate-500 mr-3 transition-colors group-hover:text-amber-600">Inspection</p>
            <div className="w-8 h-px bg-slate-300 transition-colors group-hover:bg-amber-500"></div>
        </div>
        <div className="relative w-3 h-3 bg-white rounded-full border-2 border-amber-500 cursor-pointer transition-transform group-hover:scale-125"></div>
        {/* Detailed Tooltip on Hover */}
        <div className="absolute w-48 -ml-52 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-3 rounded-lg shadow-elegant border border-border-light text-right z-10">
            <h4 className="font-bold text-slate-800">Automated Inspection</h4>
            <p className="text-xs text-slate-500">Laser and vision systems ensure flawless geometry.</p>
        </div>
      </motion.div>

      {/* Node 2: Control */}
      <motion.div 
        initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay: 1.6}} 
        className="group absolute top-[20%] right-[20%]"
      >
        <div className="absolute w-44 left-8 top-1/2 -translate-y-1/2 flex items-center">
            <div className="w-8 h-px bg-slate-300 transition-colors group-hover:bg-amber-500"></div>
            <p className="text-sm font-medium text-slate-500 ml-3 transition-colors group-hover:text-amber-600">Control</p>
        </div>
        <div className="relative w-3 h-3 bg-white rounded-full border-2 border-amber-500 cursor-pointer transition-transform group-hover:scale-125"></div>
        {/* Detailed Tooltip on Hover */}
        <div className="absolute w-48 ml-8 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-3 rounded-lg shadow-elegant border border-border-light text-left z-10">
            <h4 className="font-bold text-slate-800">Process Control</h4>
            <p className="text-xs text-slate-500">Real-time data monitoring prevents deviations.</p>
        </div>
      </motion.div>

       {/* Node 3: Integrity */}
      <motion.div 
        initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay: 1.7}} 
        className="group absolute bottom-[25%] left-[25%]"
      >
        <div className="absolute w-44 right-8 top-1/2 -translate-y-1/2 flex items-center justify-end">
            <p className="text-sm font-medium text-slate-500 mr-3 transition-colors group-hover:text-amber-600">Integrity</p>
            <div className="w-8 h-px bg-slate-300 transition-colors group-hover:bg-amber-500"></div>
        </div>
        <div className="relative w-3 h-3 bg-white rounded-full border-2 border-amber-500 cursor-pointer transition-transform group-hover:scale-125"></div>
        {/* Detailed Tooltip on Hover */}
        <div className="absolute w-48 -ml-52 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-3 rounded-lg shadow-elegant border border-border-light text-right z-10">
            <h4 className="font-bold text-slate-800">Material Integrity</h4>
            <p className="text-xs text-slate-500">Certified raw materials and full traceability.</p>
        </div>
      </motion.div>
  </div>
</motion.div>
    </div>
  </div>
</section>
          
          {/* Quality Commitments Section */}
          <section className="py-14 relative overflow-hidden bg-[#11182c]">
            {/* Premium background with subtle grid */}
            <div className="absolute inset-0 bg-grid-white/5 bg-[length:40px_40px] opacity-10"></div>
            
            {/* Premium decorative elements */}
            <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-amber-500 to-transparent"></div>
            
            {/* Enhanced background elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8 }}
                  className="inline-block mb-4"
                >
                  <span className="bg-amber-500/20 text-amber-500 text-xs font-medium px-3 py-1 rounded-full border border-amber-500/30 shadow-glow-sm">
                    OUR PROMISE
                  </span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white"
                >
                  Quality <span className="text-amber-500">Commitments</span>
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
                  className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light"
                >
                  Our unwavering commitment to quality ensures that every component we manufacture meets the highest standards of precision and reliability.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {qualityCommitments.map((commitment, index) => (
                  <motion.div 
                    key={commitment.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-amber-500/20 shadow-elegant hover:shadow-glow-amber transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Premium decorative elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-amber-500/30 rounded-tr-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-amber-500/30 rounded-bl-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                    
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-700/20 rounded-full flex items-center justify-center mb-6 border border-amber-500/30 shadow-glow-sm group-hover:scale-110 transition-transform duration-300">
                      <commitment.icon className="w-8 h-8 text-amber-500" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-amber-500 transition-colors duration-300">{commitment.title}</h3>
                    
                    <div className="w-12 h-0.5 bg-amber-500 mb-4"></div>
                    
                    <p className="text-white/70 mb-4">{commitment.description}</p>
                    
                  
                  </motion.div>
                ))}
              </div>
              
      
            </div>
          </section>
          
          {/* Quality Metrics Section */}
<section className="py-24 bg-[#fcfbf8] relative overflow-hidden">
  {/* Premium decorative elements */}
  <div className="absolute top-0 -left-16 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 -right-16 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
  <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl"></div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
        className="inline-block mb-4"
      >
        <span className="bg-white/80 backdrop-blur-sm text-amber-600 text-xs font-medium px-4 py-1.5 rounded-full border border-amber-500/20 shadow-elegant">
          PERFORMANCE METRICS
        </span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight"
      >
        Our Commitment to <span className="text-amber-500">Quality</span>
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "4rem" }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="h-px mb-6 mx-auto bg-amber-500"
      ></motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed"
      >
        Our dedication to excellence is reflected in key performance indicators that demonstrate our commitment to the highest standards.
      </motion.p>
    </div>

    {/* Metrics Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {qualityMetrics.map((metric, index) => (
        <motion.div
          key={metric.id}
          className="group relative bg-white rounded-xl overflow-hidden shadow-elegant border border-border-light hover:shadow-elegant-hover hover:border-amber-500/20 transition-all duration-500 h-full flex flex-col p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Premium decorative elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-amber-500/10 rounded-tr-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-amber-500/10 rounded-bl-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Icon */}
          <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-inner group-hover:shadow-glow-amber transition-all duration-300">
            <metric.icon className="w-8 h-8 text-amber-500" />
          </div>
          
          {/* Value */}
          <h3 className="text-4xl font-bold text-slate-800 mb-2">{metric.value}</h3>
          
          {/* Label */}
          <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">
            {metric.label}
          </p>

          {/* Description */}
          <p className="text-foreground/70 text-sm leading-relaxed">
            {metric.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
          
          {/* Certifications Section - Updated with brilliant-brass theme */}
          <section className="py-24 relative overflow-hidden bg-[#11182c]">
            {/* Premium decorative elements */}
            <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-amber-500 to-transparent"></div>
            
            {/* Enhanced background elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-20 right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8 }}
                  className="inline-block mb-4"
                >
                  <span className="bg-amber-500/20 text-amber-500 text-xs font-medium px-3 py-1 rounded-full border border-amber-500/30 shadow-glow-sm">
                    INDUSTRY STANDARDS
                  </span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white"
                >
                  Certifications & <span className="text-amber-500">Standards</span>
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
                  className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light"
                >
                  Our manufacturing processes adhere to international quality standards, ensuring consistent excellence in every component we produce.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={cert.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20 shadow-elegant hover:shadow-glow-amber transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Premium decorative elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-amber-500/30 rounded-tr-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-amber-500/30 rounded-bl-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                    
                    <div className="relative z-10">
                      {/* Certificate image */}
                      <div className="w-full h-32 mb-4 bg-white/10 rounded-lg overflow-hidden border border-amber-500/30 shadow-glow-sm flex items-center justify-center">
                        <img 
                          src={cert.title === 'ISO 9001:2015' ? '/images/iso certification.jpg' :
                               cert.title === 'IATF 16949:2016' ? '/images/iatf-16949-2016-certification-services.jpeg' :
                               
                               cert.title === 'EEPC India' ? '/images/eepc india logo.png' :
                               cert.title === 'Z Bronze' ? '/images/Bronze-new-1.webp' :
                               cert.title === 'Z Bronze 2' ? '/images/Bronze-new-1.webp' :
                               '/images/certification-default.png'}
                          alt={cert.title}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
                        {cert.title}
                        <span className="ml-2 bg-amber-500/20 text-amber-500 text-[10px] px-2 py-0.5 rounded-full">Verified</span>
                      </h3>
                      
                      <p className="text-white/70 mb-4">{cert.description}</p>
                      
                      <a 
                        href={cert.pdfPath} 
                        download
                        className="inline-flex items-center justify-center px-4 py-2 bg-amber-500/10 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-300 text-sm font-medium group border border-amber-500/20"
                      >
                        <ArrowRight className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Download Certificate
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Quality Tools Section */}
          <QualityToolsSection />
          
          {/* Quality Control Process Section */}
          <section className="py-24 relative overflow-hidden bg-[#11182c]">
            {/* Premium decorative elements */}
            <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-amber-500 to-transparent"></div>
            
            {/* Enhanced background elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8 }}
                  className="inline-block mb-4"
                >
                  <span className="bg-amber-500/20 text-amber-500 text-xs font-medium px-3 py-1 rounded-full border border-amber-500/30 shadow-glow-sm">
                    QUALITY ASSURANCE
                  </span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white"
                >
                  Quality Control <span className="text-amber-500">Process</span>
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
                  className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light"
                >
                  Our comprehensive quality control process ensures that every component meets our rigorous standards before reaching our customers.
                </motion.p>
              </div>
              
              <div className="space-y-8">
                {qualityControlProcess.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="flex flex-col md:flex-row gap-8 items-center bg-midnight-black/50 backdrop-blur-md rounded-lg border border-amber-500/20 shadow-xl group hover:shadow-glow-amber transition-all duration-300 p-6 overflow-hidden relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Step number and image */}
                    <div className="w-full md:w-5/12 relative">
                      <div className="absolute -left-3 -top-3 w-10 h-10 flex items-center justify-center bg-amber-500 text-midnight-black font-bold text-lg shadow-sm z-10 rounded-full">
                        {index + 1}
                      </div>
                      <div className="bg-midnight-black/60 rounded-lg overflow-hidden border border-amber-500/30">
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
                        <div className="p-2 bg-midnight-black/60 rounded-md text-amber-500 border border-amber-500/30">
                          {step.icon && <step.icon className="w-5 h-5" />}
                        </div>
                        <div className="w-16 h-0.5 bg-amber-500/30"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-white/70 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.points.map((point, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                            <div className="text-white/80">{point}</div>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Verification badge */}
                      <div className="mt-4 inline-flex items-center space-x-2 bg-midnight-black/60 px-3 py-1 rounded-full border border-amber-500/30">
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                        <span className="text-white/80 text-sm">ISO 9001:2015 Verified</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Zero Defect Policy Section */}
<section className="py-24 bg-[#fcfbf8] relative overflow-hidden">
  {/* Premium decorative elements */}
  <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-amber-500/30 to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-amber-500/30 to-transparent"></div>
  <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
  <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="group bg-white rounded-xl shadow-elegant border border-amber-500/10 hover:shadow-glow-amber transition-all duration-500 p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Icon with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-amber-500/10 rounded-full flex items-center justify-center border-4 border-white shadow-inner group-hover:shadow-glow-amber transition-all duration-300">
                <ShieldCheck className="w-16 h-16 text-amber-500" />
              </div>
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-md animate-pulse-slow">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Content with enhanced styling */}
          <div className="w-full">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Zero Defect Policy</h3>
            <p className="text-amber-500 font-semibold mb-4">Our Cornerstone of Quality Management</p>
            <p className="text-foreground/70 mb-6">
              We believe every defect is preventable through meticulous engineering, manufacturing processes, and rigorous quality control. This commitment is central to delivering unparalleled excellence.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start group/item hover:bg-amber-500/5 p-2 rounded-lg transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <p className="ml-3 text-foreground/70 group-hover/item:text-slate-800 transition-colors duration-300">100% inspection of all critical components.</p>
              </div>
              <div className="flex items-start group/item hover:bg-amber-500/5 p-2 rounded-lg transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <p className="ml-3 text-foreground/70 group-hover/item:text-slate-800 transition-colors duration-300">Statistical Process Control (SPC) for continuous monitoring.</p>
              </div>
              <div className="flex items-start group/item hover:bg-amber-500/5 p-2 rounded-lg transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <p className="ml-3 text-foreground/70 group-hover/item:text-slate-800 transition-colors duration-300">Rigorous preventive maintenance schedules for all equipment.</p>
              </div>
            </div>
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              <span className="text-amber-600 text-sm font-medium">ISO 9001:2015 Certified</span>
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