import React, { useRef, useState, useEffect } from 'react';
import { Target, Compass, Award, Shield, Lightbulb, Users, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const VisionMissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Core values data
  const coreValues = [
    {
      icon: Shield,
      title: 'Quality Excellence',
      description: 'Unwavering commitment to precision and quality in every component we manufacture.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously advancing our manufacturing processes and technologies.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting partnerships through exceptional service and reliability.'
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards in all business practices.'
    },
  ];

  return (
    <section 
      id="vision-mission" 
      ref={sectionRef} 
      className="py-16 bg-[#11182c] text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-professional opacity-80"></div>
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-midnight-black/30 p-8 rounded-lg border-l-4 border-brilliant-brass shadow-professional"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-brilliant-brass rounded-full mr-4">
                <Target className="h-6 w-6 text-midnight-black" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg mb-6">
              To be the foremost global leader in precision manufacturing, renowned for zero-defect, high-volume production, diversification beyond brass components, and a steadfast commitment to sustainable and eco-friendly industrial growth.
            </p>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-brilliant-brass mr-2" />
              <p className="text-brilliant-brass font-medium">
                Excellence in every component
              </p>
            </div>
          </motion.div>
          
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-midnight-black/30 p-8 rounded-lg border-l-4 border-brilliant-brass shadow-professional"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-brilliant-brass rounded-full mr-4">
                <Compass className="h-6 w-6 text-midnight-black" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg mb-6">
              To deliver uncompromising quality through advanced technology, skilled engineering, and efficient processes. We aim to consistently produce flawless products at scale, expand into new manufacturing segments, and foster sustainable practices that strengthen customer trust, create value for stakeholders, and contribute positively to the environment.
            </p>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-brilliant-brass mr-2" />
              <p className="text-brilliant-brass font-medium">
                Precision with purpose
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Core Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 relative">
            <span className="relative z-10">Our Core Values</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-brilliant-brass"></span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                className="bg-midnight-black/20 p-6 rounded-lg border-t-2 border-brilliant-brass/50 shadow-professional hover:shadow-deep transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-brilliant-brass/20 rounded-full mr-3">
                    <value.icon className="h-5 w-5 text-brilliant-brass" />
                  </div>
                  <h4 className="text-xl font-semibold">{value.title}</h4>
                </div>
                <p className="text-white/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;