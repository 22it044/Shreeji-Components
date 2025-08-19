import { CheckCircle, Award, FileCheck, Users, TrendingUp, Shield, ClipboardCheck } from 'lucide-react';
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

  const certifications = [
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
                          Certified
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* Process Flow - Enhanced Layout */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Quality Control <span className="text-primary">Process</span>
          </h3>
          
          <div className="relative">
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
                <div 
                  key={index} 
                  className={`bg-background rounded-2xl border border-border-light shadow-card hover:shadow-elegant transition-all duration-500 overflow-hidden group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${1200 + index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-2/5 relative overflow-hidden h-60 md:h-auto">
                      <img 
                        src={process.image} 
                        alt={process.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-xl font-bold text-primary-foreground">
                        {process.step}
                      </div>
                    </div>
                    
                    {/* Content Section - Fixed height to prevent elongation */}
                    <div className="p-6 md:w-3/5 flex flex-col justify-center md:h-60">
                      <h4 className="text-xl font-semibold text-foreground mb-3">{process.title}</h4>
                      <p className="text-medium-gray leading-relaxed">{process.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Quality Assurance Badge */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border-light shadow-card mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-success" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-1">Zero Defect Policy</h4>
                    <p className="text-medium-gray">Our commitment to excellence in every component we manufacture</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-success font-semibold">ISO 9001:2015 & IATF 16949:2016 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;