import { useEffect, useRef, useState } from 'react';
import { Download, FileText, Image, BookOpen, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      title: 'Company Brochure',
      description: 'Complete overview of Shreeji Components, our capabilities, and quality standards',
      fileSize: '2.4 MB',
      pages: '16 pages',
      format: 'PDF',
      popular: true,
    },
    {
      icon: FileText,
      title: 'Product Catalog',
      description: 'Detailed specifications and technical drawings of all our brass components',
      fileSize: '5.8 MB',
      pages: '28 pages',
      format: 'PDF',
      popular: false,
    },
    {
      icon: Image,
      title: 'Quality Certificates',
      description: 'ISO 9001:2015, IATF 16949:2016, Z Bronze, and EEPC India certifications',
      fileSize: '1.2 MB',
      pages: '8 pages',
      format: 'PDF',
      popular: false,
    },
    {
      icon: FileText,
      title: 'Capability Statement',
      description: 'Manufacturing capabilities, machinery details, and technical specifications',
      fileSize: '3.1 MB',
      pages: '12 pages',
      format: 'PDF',
      popular: false,
    },
  ];

  const handleDownload = (item: typeof downloadItems[0]) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    
    // Map each item to its actual file path
    const fileMap: Record<string, string> = {
      'Company Brochure': '/shreeji-components-profile.pdf',
      'Product Catalog': '#', // Placeholder - add actual file when available
      'Quality Certificates': '#', // Placeholder - add actual file when available  
      'Capability Statement': '#', // Placeholder - add actual file when available
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
    <section id="downloads" ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Download Our <span className="text-gradient-primary">Resources</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Access comprehensive information about Shreeji Components, our products, 
            quality standards, and manufacturing capabilities
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {downloadItems.map((item, index) => (
            <div
              key={item.title}
              className={`relative bg-background rounded-2xl p-8 shadow-card hover:shadow-elegant border border-border-light transition-all duration-500 group overflow-hidden ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                  <Star className="w-3 h-3" />
                  <span>Popular</span>
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-medium-gray leading-relaxed mb-6">
                {item.description}
              </p>

              {/* File Details */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-medium-gray">
                  <span className="flex items-center space-x-1">
                    <FileText className="w-4 h-4" />
                    <span>{item.format}</span>
                  </span>
                  <span>{item.fileSize}</span>
                  <span>{item.pages}</span>
                </div>
                <div className="flex items-center space-x-1 text-success text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Updated 2024</span>
                </div>
              </div>

              {/* Download Button */}
              <Button 
                onClick={() => handleDownload(item)}
                className="w-full btn-hero group-hover:scale-105 transition-transform duration-300"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download {item.format}
              </Button>

              {/* Decorative Background */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DownloadSection;
