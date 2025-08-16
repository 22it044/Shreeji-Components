import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Award, FileCheck, Users, TrendingUp, Shield } from 'lucide-react';

const QualitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const certifications = [
    {
      icon: Award,
      title: 'ISO 9001:2015',
      description: 'Quality Management System',
      validUntil: '2026',
    },
    {
      icon: FileCheck,
      title: 'IATF 16949:2016',
      description: 'Automotive Quality Standard',
      validUntil: 'Current',
    },
    {
      icon: Shield,
      title: 'Z Bronze',
      description: 'Bronze Quality Certification',
      validUntil: 'Current',
    },
    {
      icon: TrendingUp,
      title: 'EEPC India',
      description: 'Export Promotion Council Member',
      validUntil: 'Active',
    },
  ];

  const qualityMetrics = [
    { metric: '100%', label: 'Quality Inspection', description: 'Manual and machine inspection' },
    { metric: 'Zero', label: 'Defect Policy', description: 'Zero defect manufacturing approach' },
    { metric: '30+', label: 'Years Experience', description: 'Decades of quality excellence' },
    { metric: 'SPC', label: 'Process Control', description: 'Statistical process monitoring' },
  ];

  return (
    <section id="quality" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient-primary">Quality</span> is Our 
            <span className="text-secondary"> Promise</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Every component we manufacture undergoes rigorous quality control processes, 
            ensuring exceptional standards that exceed industry requirements
          </p>
        </div>

        {/* Quality Commitments */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Our Quality <span className="text-primary">Standards</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {qualityCommitments.map((commitment, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 p-6 bg-background rounded-2xl border border-border-light shadow-card hover:shadow-elegant transition-all duration-500 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <span className="text-foreground font-medium leading-relaxed">
                  {commitment}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Metrics */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Quality <span className="text-secondary">Metrics</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {qualityMetrics.map((metric, index) => (
              <div
                key={index}
                className={`text-center p-8 bg-background rounded-2xl border border-border-light shadow-card hover:shadow-elegant transition-all duration-500 group ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${800 + index * 150}ms` }}
              >
                <div className="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">{metric.metric}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{metric.label}</div>
                <div className="text-sm text-medium-gray">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            <span className="text-primary">Certifications</span> & Standards
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const certImages = {
                'ISO 9001:2015': '/images/iso certification.jpg',
                'IATF 16949:2016': '/images/iatf-16949-2016-certification-services.jpeg',
                'Z Bronze': '/images/Bronze-new-1.webp',
                'EEPC India': '/images/eepc india logo.png'
              };
              
              return (
                <div
                  key={index}
                  className={`p-8 bg-background rounded-2xl border border-border-light shadow-card hover:shadow-elegant group transition-all duration-500 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${1000 + index * 150}ms` }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-background rounded-2xl border-2 border-border-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      {certImages[cert.title] ? (
                        <img 
                          src={certImages[cert.title]} 
                          alt={cert.title} 
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <cert.icon className="w-10 h-10 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-foreground mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-medium-gray mb-3 text-lg">
                        {cert.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                        <span className="text-sm text-success font-semibold">
                          Valid: {cert.validUntil}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* Process Flow */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Quality Control Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Material Inspection', desc: 'Incoming quality control' },
              { step: '02', title: 'In-Process Control', desc: 'Real-time monitoring' },
              { step: '03', title: 'Final Inspection', desc: '100% component testing' },
              { step: '04', title: 'Documentation', desc: 'Complete traceability' },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-medium-gray text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;