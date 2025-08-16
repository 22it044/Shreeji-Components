import { useEffect, useRef, useState } from 'react';
import { Linkedin, Heart, MessageCircle, Share2, Eye, Calendar, ExternalLink, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LinkedInSection = () => {
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

  const linkedInAccount = "https://linkedin.com/in/harshilchhapia";
  
  const linkedInPosts = [
    {
      id: 1,
      date: '3 days ago',
      content: '🔧 Proud to announce that Shreeji Components has successfully delivered another batch of precision brass components to our automotive clients! Our IATF 16949:2016 certification ensures every part meets the highest industry standards. #PrecisionManufacturing #BrassComponents #Automotive',
      image: '/images/Precision Brass manufacturing.jpg',
      likes: 127,
      comments: 23,
      shares: 15,
    },
    {
      id: 2,
      date: '1 week ago',
      content: '🌍 Exciting milestone achieved! We\'ve now expanded our reach to serve 65+ diverse clients across the globe. From automotive to renewable energy, our precision brass parts are making a difference in various industries. #GlobalReach #Manufacturing #QualityFirst',
      image: '/images/CNC Machining manufacturing.jpg',
      likes: 89,
      comments: 12,
      shares: 8,
    },
    {
      id: 3,
      date: '2 weeks ago',
      content: '🏆 30+ years of manufacturing excellence! From our facility in Jamnagar, Gujarat, we continue to deliver millions of precision brass parts monthly. Our journey from a small workshop to an ISO 9001:2015 certified manufacturer is a testament to our commitment to quality. #Anniversary #QualityManufacturing',
      image: '/images/Excellence engineering_.jpg',
      likes: 156,
      comments: 31,
      shares: 22,
    },
  ];

  return (
    <section id="linkedin" ref={sectionRef} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Simple Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Connect with us on <span className="text-[#0077B5]">LinkedIn</span>
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto leading-relaxed">
            Stay updated with our latest achievements and industry insights
          </p>
        </div>

        {/* LinkedIn Posts */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {linkedInPosts.map((post, index) => (
            <div
              key={post.id}
              className={`bg-background rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 border border-border-light overflow-hidden ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Shreeji Components</h4>
                      <div className="flex items-center space-x-2 text-xs text-medium-gray">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                </div>
                
                {/* Post Content */}
                <p className="text-foreground leading-relaxed text-sm mb-4">
                  {post.content}
                </p>
              </div>

              {/* Post Image */}
              <div className="relative overflow-hidden h-40">
                <img 
                  src={post.image} 
                  alt="LinkedIn post content" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Engagement Stats */}
              <div className="p-6 pt-4">
                <div className="flex items-center justify-between text-sm text-medium-gray">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share2 className="w-4 h-4" />
                      <span>{post.shares}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.open(linkedInAccount, '_blank')}
                    className="text-[#0077B5] hover:text-[#005885] transition-colors duration-200 text-xs font-medium flex items-center space-x-1"
                  >
                    <span>View</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#0077B5]/5 to-[#0077B5]/10 rounded-2xl p-8 max-w-2xl mx-auto border border-[#0077B5]/20">
            <div className="w-12 h-12 bg-[#0077B5] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Follow for More Updates
            </h3>
            <p className="text-medium-gray mb-6 leading-relaxed">
              Connect with us on LinkedIn for regular updates on our manufacturing achievements and industry insights.
            </p>
            <Button 
              onClick={() => window.open(linkedInAccount, '_blank')}
              className="bg-[#0077B5] hover:bg-[#005885] text-white px-8 py-3 rounded-full transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Follow on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;
