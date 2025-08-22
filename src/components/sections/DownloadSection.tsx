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
      'Company Brochure': '/shreeji-company-brochure.pdf',
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
    <section id="downloads" ref={sectionRef} className="py-28 bg-gradient-subtle">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {downloadItems.map((item, index) => (
            <div
              key={item.title}
              className={`relative bg-background rounded-2xl p-8 shadow-md hover:shadow-lg border border-border-light transition-all duration-300 group overflow-hidden ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              } hover:-translate-y-1`}
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
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <item.icon className="w-7 h-7 text-primary" />
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
                className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:translate-x-1"
              >
                <Download className="w-4 h-4 mr-2" />
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
