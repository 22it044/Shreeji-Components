import { useEffect, useRef, useState } from 'react';
import { Download, FileText, Image, BookOpen, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const DownloadSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const downloadItems = [
    {
      icon: BookOpen,
      title: 'Company Profile',
      description: 'Complete overview of Shreeji Components, our capabilities, and quality standards',
      fileSize: '2.4 MB',
      pages: '16 pages',
      format: 'PDF',
      popular: true,
    },
    {
      icon: FileText,
      title: 'ISO 9001:2015 Certificate',
      description: 'Quality Management System certification demonstrating our commitment to quality standards',
      fileSize: '0.8 MB',
      pages: '1 page',
      format: 'PDF',
      popular: false,
    },
    {
      icon: FileText,
      title: 'IATF 16949:2016 Certificate',
      description: 'Automotive Quality Management System certification for automotive industry standards',
      fileSize: '0.9 MB',
      pages: '1 page',
      format: 'PDF',
      popular: false,
    },
    {
      icon: FileText,
      title: 'Z Bronze Certificate 1',
      description: 'Z Bronze certification for excellence in manufacturing and quality control',
      fileSize: '0.7 MB',
      pages: '1 page',
      format: 'PDF',
      popular: false,
    },
    {
      icon: FileText,
      title: 'Z Bronze Certificate 2',
      description: 'Additional Z Bronze certification for specialized manufacturing processes',
      fileSize: '0.7 MB',
      pages: '1 page',
      format: 'PDF',
      popular: false,
    },
  ];

  const handleDownload = (item: typeof downloadItems[0]) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    
    // Map each item to its actual file path
    const fileMap: Record<string, string> = {
      'Company Profile': '/shreeji-company-brochure.pdf',
      'ISO 9001:2015 Certificate': '/ISO 2015 .pdf',
      'IATF 16949:2016 Certificate': '/IATF.pdf',
      'Z Bronze Certificate 1': '/Z Bronze1.pdf',
      'Z Bronze Certificate 2': '/z Bronze 2.pdf',
    };
    
    const filePath = fileMap[item.title];
    
    if (filePath === '#') {
      alert(`${item.title} will be available soon. Please contact us for immediate access.`);
      return;
    }
    
    link.href = filePath;
    link.download = filePath.split('/').pop() || item.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="downloads" ref={sectionRef} className="py-24 relative overflow-hidden bg-[#11182c] text-white">
      {/* Professional background elements */}
      <div className="absolute inset-0 bg-gradient-professional opacity-1000"></div>
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-brilliant-brass to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-brilliant-brass to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Section header - Matching Core Values/Mission/Vision style */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white"
          >
            Download <span className="text-brilliant-brass">Resources</span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isVisible ? "4rem" : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px mb-8 mx-auto bg-brilliant-brass"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Access comprehensive information about our products, quality standards, and manufacturing capabilities
          </motion.p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {downloadItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 transition-all duration-300 group hover:border-brilliant-brass/40 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute top-3 right-3 bg-brilliant-brass/20 text-white text-xs font-medium px-2 py-1 rounded-md flex items-center space-x-1 backdrop-blur-sm">
                  <Star className="w-3 h-3 text-brilliant-brass" />
                  <span>Popular</span>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-brilliant-brass/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-brilliant-brass/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-brilliant-brass" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-brilliant-brass transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* File Details */}
              <div className="flex items-center justify-between mb-4 text-xs text-white/50">
                <span className="flex items-center space-x-1">
                  <FileText className="w-3 h-3" />
                  <span>{item.format}</span>
                </span>
                <span>{item.fileSize}</span>
                <span>{item.pages}</span>
              </div>
              <div className="flex items-center space-x-1 text-brilliant-brass text-xs mb-4">
                <CheckCircle className="w-3 h-3" />
                <span>Updated 2024</span>
              </div>

              {/* Download Button */}
              <Button 
                onClick={() => handleDownload(item)}
                className="w-full bg-brilliant-brass/10 hover:bg-brilliant-brass/30 text-brilliant-brass border-none flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm"
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brilliant-brass/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brilliant-brass/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
