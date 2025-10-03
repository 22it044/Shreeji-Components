import { useEffect, useRef, useState } from 'react';
import { Linkedin, Heart, MessageCircle, Share2, Calendar, ExternalLink, BadgeCheck, Award, Globe, Star, Sparkles, Gem, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const LinkedInSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Static LinkedIn posts
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
      content: '🏆 30+ years of manufacturing excellence! From our facility in Jamnagar, Gujarat, we continue to deliver millions of precision brass parts monthly. Our journey from a small workshop to an ISO 9001:2015 certified manufacturer is a testament to our commitment to quality. #Anniversary',
      image: '/images/Excellence engineering_.jpg',
      likes: 156,
      comments: 31,
      shares: 22,
    },
  ];

  const linkedInAccount = "https://www.linkedin.com/company/shreeji-components/";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set to visible if not already visible (runs animation only once)
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

  // No need to fetch posts as they are now static

  return (
    <div id="linkedin" ref={sectionRef} className="py-24 bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-md relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#0077B5]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0077B5]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#0077B5]/10 rounded-full blur-2xl"></div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float-slow">
        <Linkedin className="w-16 h-16 text-[#0077B5]" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-float">
        <Globe className="w-12 h-12 text-[#11182c]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Premium Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 relative"
        >
          {/* Premium tag */}
          <div className="inline-block relative mb-2">
            <span className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md rounded-full px-5 py-2 mb-4 border border-white/70 shadow-md">
              <div className="p-1 rounded-full bg-white/60 backdrop-blur-md border border-white/70">
                <Linkedin className="w-3 h-3 text-[#0077B5]" />
              </div>
              <span className="text-[#11182c] font-semibold text-sm">Professional Network</span>
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#0077B5]">Connect</span> <span className="text-[#11182c]">with us on LinkedIn</span>
          </h2>
          
          <div className="w-24 h-1 bg-[#11182c] rounded-full mb-6 mx-auto"></div>
          
          <p className="text-[#334155] max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest achievements, industry insights, and premium manufacturing excellence
          </p>
          
          {/* Decorative line with badge */}
          <div className="flex items-center justify-center mt-8">
             <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#0077B5]/50"></div>
             <div className="mx-4 p-1 rounded-full bg-white/60 backdrop-blur-md border border-white/70">
               <BadgeCheck className="w-5 h-5 text-[#0077B5]" />
             </div>
             <div className="h-px w-16 bg-gradient-to-r from-[#0077B5]/50 to-transparent"></div>
          </div>
        </motion.div>

        {/* Enhanced LinkedIn Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 relative">
          {linkedInPosts.length > 0 ? (
            // Loaded posts
            linkedInPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/70 overflow-hidden group relative hover:translate-y-[-5px]"
              >
                {/* Enhanced Post Header */}
                <div className="p-6 pb-4 relative">
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/60 backdrop-blur-md rounded-full px-2 py-0.5 text-xs font-medium text-[#0077B5] border border-white/70 shadow-sm flex items-center">
                      <BadgeCheck className="w-3 h-3 mr-1 text-[#0077B5]" />
                      <span>Official</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">S</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0077B5] text-sm">Shreeji Components</h4>
                        <div className="flex items-center space-x-2 text-xs text-[#4F6685]">
                          <Calendar className="w-3 h-3 text-[#0077B5]" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Post Content */}
                  <p className="text-sm text-[#334155] leading-relaxed mb-4 group-hover:text-[#11182c] transition-colors duration-300">
                    {post.content}
                  </p>
                </div>
                
                {/* Enhanced Post Image */}
                {post.image && (
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="LinkedIn post" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                )}
                
                {/* Enhanced Post Footer */}
                <div className="p-6 pt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-1 text-xs text-[#4F6685] group-hover:text-[#0077B5] transition-colors duration-300">
                        <Heart className="w-3.5 h-3.5 text-[#0077B5] group-hover:scale-110 transition-transform duration-300" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-[#4F6685] group-hover:text-[#0077B5] transition-colors duration-300">
                        <MessageCircle className="w-3.5 h-3.5 text-[#0077B5] group-hover:scale-110 transition-transform duration-300" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-[#4F6685] group-hover:text-[#0077B5] transition-colors duration-300">
                        <Share2 className="w-3.5 h-3.5 text-[#0077B5] group-hover:scale-110 transition-transform duration-300" />
                        <span>{post.shares}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => window.open(linkedInAccount, '_blank')}
                      className="bg-white/60 backdrop-blur-md text-[#0077B5] px-3 py-1 rounded-full transition-all duration-300 text-xs font-medium flex items-center space-x-1 border border-white/70 hover:bg-[#0077B5]/10 shadow-sm"
                    >
                      <span>View Post</span>
                      <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            // No posts available
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-3 text-center py-12"
            >
              <div className="mb-4 text-medium-gray">No LinkedIn posts available at the moment.</div>
              <Button 
                onClick={() => window.open(linkedInAccount, '_blank')}
                variant="outline"
                className="mx-auto"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                Visit our LinkedIn
              </Button>
            </motion.div>
          )}
        </div>

        {/* Enhanced LinkedIn Follow CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="text-center relative"
        >
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-10 max-w-3xl mx-auto border border-white/30 group hover:bg-white/15 hover:border-white/40 relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0077B5]/5 rounded-2xl"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#0077B5]/20 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#0077B5]/10 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-16 h-16 bg-gradient-to-br from-[#0077B5] to-[#00a0dc] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-500">
              <Linkedin className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0077B5] to-[#00a0dc]">
              Join Our Professional Network
            </h3>
            
            <p className="text-lg text-[#334155] mb-8 leading-relaxed max-w-xl mx-auto">
              Connect with Shreeji Components on LinkedIn for exclusive updates on our manufacturing achievements, industry insights, and global partnerships.
            </p>
            
            <Button 
              onClick={() => window.open(linkedInAccount, '_blank')}
              className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              <span>Follow Us on LinkedIn</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center mt-8 space-x-6">
              <div className="flex items-center text-xs text-[#4F6685]">
                <BadgeCheck className="w-4 h-4 text-[#0077B5] mr-1" />
                <span>Verified Company</span>
              </div>
              <div className="flex items-center text-xs text-[#4F6685]">
                <Award className="w-4 h-4 text-[#0077B5] mr-1" />
                <span>Industry Leader</span>
              </div>
              <div className="flex items-center text-xs text-[#4F6685]">
                <Globe className="w-4 h-4 text-[#0077B5] mr-1" />
                <span>Global Network</span>
              </div>
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="mt-16 flex items-center justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#0077B5]/30"></div>
            <div className="mx-4 p-1 rounded-full bg-gradient-to-r from-[#0077B5]/20 to-[#00a0dc]/20 shadow-sm">
              <div className="bg-background rounded-full p-2">
                <Star className="w-4 h-4 text-[#0077B5]" />
              </div>
            </div>
            <div className="h-px w-24 bg-gradient-to-r from-[#0077B5]/30 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LinkedInSection;
