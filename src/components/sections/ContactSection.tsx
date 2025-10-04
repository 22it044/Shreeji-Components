import { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Upload, Check, Linkedin, Globe, ExternalLink, BadgeCheck, Factory } from 'lucide-react';
import QualityBadgeGroup from '@/components/ui/QualityBadgeGroup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Add intersection observer for animations
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

  // EmailJS configuration - Replace these with your actual EmailJS credentials
  const SERVICE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY;

  const productOptions = [
    'Brass Hex Parts',
    'Brass Inserts',
    'Brass Pins',
    'Brass Forging Parts',
    'Brass Rivets',
    'Brass Nickel Plated Terminals',
    'Brass Neural Terminals',
    'Brass Moulding Inserts',
    'Brass Connectors Parts',
    'Sheet Metal Parts',
    'Fasteners',
    'Stainless Steel Parts',
    'Automotive Components',
    'Other - Please specify in message',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required to submit your inquiry.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init(PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        product_interest: formData.productInterest || 'Not specified',
        message: formData.message,
        reply_to: formData.email,
        to_email: 'teaminnovativestudios@gmail.com'
      };

      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        productInterest: '',
        message: '',
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: "Thank you for your inquiry!",
        description: "Your message has been sent successfully. We'll respond within 24 hours.",
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setIsSubmitting(false);

      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at teaminnovativestudios@gmail.com",
        variant: "destructive",
      });
    }
  };

  const teamMembers = [
    {
      initials: 'HC',
      name: 'Harshil Chhapia',
      role: 'Marketing Executive',
    },
    {
      initials: 'SC',
      name: 'Sandip Chhapia',
      role: 'CEO and Founder',
    },
  ];
  
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-[#0077B5]" />,
      title: "Visit Our Facility",
      details: "Shreeji Components, GIDC Phase 3, Plot No. 4694-Z Road, Jamnagar, Gujarat 361004, IN",
    },
    
      ];

  

  if (isSubmitted) {
    return (
      <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] relative overflow-hidden">
        {/* Premium decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#11182c]/10 rounded-full blur-2xl"></div>
        
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#11182c]/10 backdrop-blur-md text-[#11182c] text-xs font-medium mb-4">
              <BadgeCheck className="w-4 h-4 mr-1.5" />
              MESSAGE SENT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#11182c] mb-6">
              Thank You for <span className="text-[#0077B5]">Contacting Us</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#11182c] to-[#0077B5] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              We've received your message and will get back to you within 24 hours. In the meantime, feel free to explore our products and services.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-[#11182c] to-[#0077B5] hover:from-[#0077B5] hover:to-[#11182c] text-white px-8 py-6 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={sectionRef} className="py-12 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Simplified decorative elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-gray-200/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-200/50 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-200 text-[#11182c] text-xs font-medium mb-4">
            <BadgeCheck className="w-3.5 h-3.5 mr-1" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11182c] mb-4 md:mb-6">
            Contact <span className="text-[#0077B5]">Our Team</span>
          </h2>
          <div className="w-16 h-1 bg-[#0077B5] rounded-full mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto">
            Have questions about our products or services? Our team is ready to assist you. Fill out the form below and we'll get back to you within 24 hours.
          </p>
          <QualityBadgeGroup badges={['iso', 'global', 'quality']} className="mt-6" />
        </div>

        {/* Two-column layout: Form on left, Team/Location on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-5 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0077B5]"></div>
            
            <h3 className="text-xl md:text-2xl font-bold text-[#11182c] mb-5 text-center">
              Send Us a Message
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#11182c] mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full text-sm border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#11182c] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full text-sm border-gray-200 focus:border-[#0077B5] focus:ring-1 focus:ring-[#0077B5]/20 rounded-md"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#11182c] mb-1">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="w-full text-sm border-gray-200 focus:border-[#0077B5] focus:ring-1 focus:ring-[#0077B5]/20 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#11182c] mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full text-sm border-gray-200 focus:border-[#0077B5] focus:ring-1 focus:ring-[#0077B5]/20 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="productInterest" className="block text-sm font-medium text-[#11182c] mb-1">
                  Product Interest
                </label>
                <Input
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleInputChange}
                  placeholder="Enter your product interest"
                  className="w-full text-sm border-gray-200 focus:border-[#0077B5] focus:ring-1 focus:ring-[#0077B5]/20 rounded-md"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#11182c] mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your requirements or questions..."
                  className="w-full text-sm border-gray-200 focus:border-[#0077B5] focus:ring-1 focus:ring-[#0077B5]/20 rounded-md min-h-[120px]"
                  required
                />
              </div>
              
              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-1/2 bg-[#0077B5] hover:bg-[#0066a1] text-white py-3 rounded-md font-medium text-sm transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Right Column - Team and Location */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Our Team Section */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0077B5]"></div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#11182c] mb-6 text-center">
                Our Leadership Team
              </h3>
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex flex-row items-center">
                    <div className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-[#0077B5] flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">
                      HC
                    </div>
                    <div className="text-left">
                      <h4 className="text-[#11182c] font-semibold text-lg">Harshil Chhapia</h4>
                      <p className="text-gray-500 text-sm">Marketing Executive</p>
                      <p className="text-[#0077B5] mt-1 font-medium text-sm">+91 8347549511</p>
                      <p className="text-gray-500 text-sm">chhapiah@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex flex-row items-center">
                    <div className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-[#11182c] flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">
                      SC
                    </div>
                    <div className="text-left">
                      <h4 className="text-[#11182c] font-semibold text-lg">Sandip Chhapia</h4>
                      <p className="text-gray-500 text-sm">CEO and Founder</p>
                      <p className="text-[#0077B5] mt-1 font-medium text-sm">+91 9824206708</p>
                      <p className="text-gray-500 text-sm">sandipchhapia2001@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Find Us Section - Map only */}
            <div className="bg-white rounded-lg shadow-md p-5 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0077B5]"></div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#11182c] mb-5 text-center">
                Find Us
              </h3>
              
              {/* Map - Full width */}
              <div className="rounded-lg overflow-hidden shadow-md h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.4554982685827!2d70.04879488663171!3d22.411875386273177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576b4bac1c169d%3A0x81d4af2ed98b2269!2sShreeji%20Components!5e0!3m2!1sen!2sin!4v1759560477723!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;