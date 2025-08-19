import { useEffect, useRef, useState } from 'react';
import { Linkedin, Heart, MessageCircle, Share2, Calendar, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import axios from 'axios';

const LinkedInSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [linkedInPosts, setLinkedInPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const linkedInAccount = "https://www.linkedin.com/company/shreeji-components/";
  const companyId = "shreeji-components"; // LinkedIn company identifier

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

  // Fetch LinkedIn posts
  useEffect(() => {
    const fetchLinkedInPosts = async () => {
      setLoading(true);
      try {
        // Use the JSON file in the public folder for LinkedIn posts
        const apiUrl = `/api/linkedin/posts/${companyId}.json`;
        const response = await axios.get(apiUrl);
        if (response.data && Array.isArray(response.data)) {
          setLinkedInPosts(response.data);
        } else {
          console.error('Invalid response format:', response.data);
          setError('Received invalid data format from API');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching LinkedIn posts:', err);
        setError('Failed to load LinkedIn posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchLinkedInPosts();
  }, [companyId]);

  return (
    <div id="linkedin" ref={sectionRef} className="py-16 bg-background">
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

        {/* LinkedIn Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {loading ? (
            // Loading state
            <>
              {[1, 2, 3].map((placeholder) => (
                <div key={placeholder} className="bg-background rounded-2xl shadow-card border border-border-light overflow-hidden animate-pulse">
                  <div className="p-6 pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-slate-200 rounded w-24"></div>
                        <div className="h-2 bg-slate-200 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="h-3 bg-slate-200 rounded"></div>
                      <div className="h-3 bg-slate-200 rounded"></div>
                      <div className="h-3 w-2/3 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                  <div className="h-40 bg-slate-200"></div>
                  <div className="p-6 pt-4">
                    <div className="flex justify-between">
                      <div className="h-4 w-24 bg-slate-200 rounded"></div>
                      <div className="h-4 w-16 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : error ? (
            // Error state
            <div className="col-span-3 text-center py-12">
              <div className="text-destructive mb-4">{error}</div>
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
                className="mx-auto"
              >
                Try Again
              </Button>
            </div>
          ) : Array.isArray(linkedInPosts) && linkedInPosts.length > 0 ? (
            // Loaded posts
            linkedInPosts.map((post, index) => (
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
                  </div>
                  
                  {/* Post Content */}
                  <p className="text-sm text-foreground leading-relaxed mb-4">
                    {post.content}
                  </p>
                </div>
                
                {/* Post Image */}
                {post.image && (
                  <div className="relative h-48 md:h-56 overflow-hidden bg-light-gray">
                    <img 
                      src={post.image} 
                      alt="LinkedIn post" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                  </div>
                )}
                
                {/* Post Footer */}
                <div className="p-6 pt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-1 text-xs text-medium-gray">
                        <Heart className="w-3.5 h-3.5 text-[#0077B5]" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-medium-gray">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-medium-gray">
                        <Share2 className="w-3.5 h-3.5" />
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
            ))
          ) : (
            // No posts available
            <div className="col-span-3 text-center py-12">
              <div className="mb-4 text-medium-gray">No LinkedIn posts available at the moment.</div>
              <Button 
                onClick={() => window.open(linkedInAccount, '_blank')}
                variant="outline"
                className="mx-auto"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                Visit our LinkedIn
              </Button>
            </div>
          )}
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
    </div>
  );
};

export default LinkedInSection;
