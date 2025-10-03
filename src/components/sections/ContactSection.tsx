import { useState, useRef } from 'react';
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
  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null);
  
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Facility',
      details: [
        'Shreeji Components',
        'GIDC Phase 3, Plot No. 4694-Z Road',
        'Jamnagar, Gujarat 361004, IN',
      ],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        'Harshil Chhapia: +91 8347549511',
        'Sandip Chhapia: +91 9824206708',
        'Marketing Executive & CEO',
      ],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'chhapiah@gmail.com',
        'sandipchhapia2001@gmail.com',
        'Marketing & CEO Contact',
      ],
    },
  ];

  const teamMembers = [
    {
      name: 'Harshil Chhapia',
      role: 'Marketing Executive',
      email: 'chhapiah@gmail.com',
      phone: '+91 8347549511',
      linkedin: 'https://linkedin.com/in/harshilchhapia',
    },
    {
      name: 'Sandip Chhapia',
      role: 'CEO and Founder',
      email: 'sandipchhapia2001@gmail.com', 
      phone: '+91 9824206708',
      linkedin: 'https://www.linkedin.com/in/sandip-chhapia-899637188/',
    },
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-royal-sapphire/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-royal-sapphire rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Thank You for Your Inquiry!
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              We've received your message and our team will review your requirements. 
              You can expect a detailed response within 24 hours.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  phone: '',
                  productInterest: '',
                  message: '',
                });
              }}
              variant="outline"
              className="border-royal-sapphire text-royal-sapphire hover:bg-royal-sapphire hover:text-white"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-md relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#11182c]/10 rounded-full blur-2xl"></div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 max-w-3xl mx-auto`}>
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md rounded-full px-5 py-2 mb-4 border border-white/70 shadow-md">
            <div className="p-1 rounded-full bg-white/60 backdrop-blur-md border border-white/70">
              <Mail className="w-3 h-3 text-[#11182c]" />
            </div>
            <span className="text-[#11182c] font-semibold text-sm">Contact Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#0077B5]">Get In</span> <span className="text-[#11182c]">Touch</span>
          </h2>
          
          <div className="w-24 h-1 bg-[#11182c] rounded-full mb-6 mx-auto"></div>
          
          <p className="text-[#334155] max-w-3xl mx-auto leading-relaxed">
            Have questions about our products or services? Our team is ready to assist you.
            Reach out to us through any of the channels below.
          </p>
          
          {/* Quality Badges */}
          <QualityBadgeGroup badges={['iso', 'global', 'quality']} className="mt-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-10 shadow-xl border border-white/70 relative group transition-all duration-500 hover:shadow-2xl hover:bg-white/90">
            <div className="absolute -top-3 -right-3 bg-[#0077B5] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform transition-transform duration-300 group-hover:scale-110">
              EXPERT SERVICE
            </div>
            
            <h3 className="text-2xl font-bold text-[#11182c] mb-6 flex items-center">
              <span className="text-[#0077B5] mr-2">Request a Quote</span>
              <div className="h-px flex-grow bg-gradient-to-r from-[#0077B5] to-transparent ml-3"></div>
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#4F6685] mb-2">
                  Name *
                </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#4F6685] mb-2">
                  Email *
                </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#4F6685] mb-2">
                  Company
                </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#4F6685] mb-2">
                  Phone
                </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="productInterest" className="block text-sm font-medium text-[#4F6685] mb-2">
                  Subject
                </label>
                <Input
                  id="productInterest"
                  name="productInterest"
                  type="text"
                  value={formData.productInterest}
                  onChange={handleInputChange}
                  placeholder="Enter email subject"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4F6685] mb-2">
                  Message / Requirements *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your requirements, including quantities, specifications, and timeline..."
                  rows={5}
                  required
                  className="w-full"
                />
              </div>

              <div className="border-2 border-dashed border-[#11182c]/20 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-[#4F6685] mx-auto mb-2" />
                <p className="text-sm text-[#4F6685]">
                  Drag & drop technical drawings or specifications here
                </p>
                <p className="text-xs text-[#4F6685] mt-1">
                  PDF, DWG, STEP files up to 10MB
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0077B5] hover:bg-[#0077B5]/90 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              <p className="text-xs text-[#4F6685] text-center">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          </div>

          {/* Contact Information - Premium Glassmorphism */}
<div className="space-y-6 bg-white/5 backdrop-blur-2xl rounded-2xl p-10 shadow-2xl border border-white/30 relative group transition-all duration-700 hover:shadow-3xl hover:bg-white/10 hover:border-white/40">
  {/* Enhanced premium gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
  
  {/* Subtle glass reflections */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
  
  {/* Team Members - Enhanced Glass Effect */}
  <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 md:p-8 shadow-xl border border-white/30 relative group transition-all duration-700 hover:shadow-2xl hover:bg-white/15 hover:border-white/40">
    {/* Premium glass overlay effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
    
    {/* Premium Badge with enhanced glass effect */}
    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-[#11182c]/90 to-[#11182c]/80 backdrop-blur-xl text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl border border-white/30 transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
      EXECUTIVE TEAM
    </div>
    
    <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center relative z-10">
      <Phone className="w-5 h-5 text-[#4F6685] mr-2" />
      <span className="text-[#4F6685]">Direct Contact</span>
      <div className="h-px flex-grow bg-gradient-to-r from-[#4F6685]/50 to-transparent ml-3"></div>
    </h4>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10">
      {teamMembers.map((member, index) => (
        <div 
          key={index} 
          className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-xl p-5 transition-all duration-500 hover:shadow-xl hover:border-white/40 hover:bg-white/20 relative overflow-hidden group/member"
          onMouseEnter={() => setHoveredTeamMember(index)}
          onMouseLeave={() => setHoveredTeamMember(null)}
        >
          {/* Enhanced animated glass background */}
          <div className={`absolute inset-0 bg-gradient-to-br from-white/15 via-white/10 to-[#11182c]/5 opacity-0 transition-all duration-500 rounded-xl ${hoveredTeamMember === index ? 'opacity-100' : ''}`}></div>
          
          {/* Enhanced shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/member:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h5 className="font-semibold text-foreground mb-1">{member.name}</h5>
            <p className="text-sm text-[#4F6685] font-medium mb-3">{member.role}</p>
            <div className="space-y-3 text-sm">
              <a 
                href={`mailto:${member.email}`}
                className="flex items-center text-[#4F6685] hover:text-[#11182c] transition-all duration-300 group/link"
              >
                <Mail className="w-4 h-4 mr-3 text-[#11182c] group-hover/link:scale-110 transition-transform duration-300" />
                <span className="group-hover/link:translate-x-1 transition-transform duration-300">{member.email}</span>
              </a>
              <a 
                href={`tel:${member.phone}`}
                className="flex items-center text-[#4F6685] hover:text-[#11182c] transition-all duration-300 group/link"
              >
                <Phone className="w-4 h-4 mr-3 text-[#11182c] group-hover/link:scale-110 transition-transform duration-300" />
                <span className="group-hover/link:translate-x-1 transition-transform duration-300">{member.phone}</span>
              </a>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#4F6685] hover:text-[#11182c] transition-all duration-300 group/link"
                >
                  <div className="bg-gradient-to-r from-[#11182c] to-[#11182c]/80 backdrop-blur-sm rounded-full p-1.5 mr-3 group-hover/link:shadow-lg group-hover/link:scale-110 transition-all duration-300">
                    <Linkedin className="w-3 h-3 text-white" />
                  </div>
                  <span className="group-hover/link:underline group-hover/link:translate-x-1 transition-all duration-300">Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* LinkedIn Button - Added beneath team info */}
    <div className="mt-6">
      <a
        href="https://www.linkedin.com/company/shreeji-components/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-[#0077B5]/90 to-[#0077B5]/80 backdrop-blur-xl text-white rounded-xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative z-10 group/btn overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
        <Linkedin className="w-5 h-5 mr-2 relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
        <span className="relative z-10 font-medium">Follow Us on LinkedIn</span>
        <ExternalLink className="w-4 h-4 ml-2 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
      </a>
    </div>
  </div>

  {/* Map Section - Full Width */}
  <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 shadow-xl border border-white/30 relative group transition-all duration-700 hover:shadow-2xl hover:bg-white/15 hover:border-white/40">
    {/* Premium glass overlay effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
    
    {/* Premium Badge with enhanced glass effect */}
    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#11182c]/90 to-[#11182c]/80 backdrop-blur-xl text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl border border-white/30 transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
      GLOBAL FACILITY
    </div>
    
    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center relative z-10">
      <MapPin className="w-5 h-5 text-[#11182c] mr-2" />
      <span className="text-[#11182c]">Our Location</span>
      <div className="h-px flex-grow bg-gradient-to-r from-[#11182c]/50 to-transparent ml-3"></div>
    </h4>
    
    {/* Address Information with enhanced premium glass effect */}
    <div className="mb-4 bg-white/20 backdrop-blur-xl p-4 rounded-xl border border-white/30 shadow-lg relative z-10 group/address hover:bg-white/25 hover:border-white/40 transition-all duration-400">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/address:translate-x-full transition-transform duration-1000 pointer-events-none rounded-xl"></div>
      <div className="space-y-2 text-medium-gray relative z-10">
        <p className="font-semibold text-[#11182c] text-base">Shreeji Components</p>
        <p className="flex items-center text-sm group-hover/address:translate-x-1 transition-transform duration-300">
          <MapPin className="w-4 h-4 text-[#11182c] mr-3 group-hover/address:scale-110 transition-transform duration-300" /> 
          GIDC Phase 3, Plot No. 4694-Z Road
        </p>
        <p className="flex items-center text-sm group-hover/address:translate-x-1 transition-transform duration-300">
          <Globe className="w-4 h-4 text-[#11182c] mr-3 group-hover/address:scale-110 transition-transform duration-300" /> 
          Jamnagar, Gujarat 361004, IN
        </p>
      </div>
    </div>
    
    {/* Google Maps with premium glass frame */}
    <div className="relative overflow-hidden rounded-xl border border-white/30 mb-4 shadow-xl group/map transition-all duration-500 hover:shadow-2xl hover:border-white/40">
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/10 opacity-0 group-hover/map:opacity-100 transition-opacity duration-500 pointer-events-none z-10 rounded-xl"></div>
      <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none z-20"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.5345736473246!2d70.0123456!3d22.4759167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0x79b0c2486aeb4ecc!2sShreeji%20Components!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Shreeji Components Location"
        className="rounded-xl"
      ></iframe>
    </div>
    
    {/* Action Button with enhanced premium glass effect */}
    <a
      href="https://maps.app.goo.gl/E9yWV3YTbcyCMDQ88?g_st=ac"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-[#11182c]/90 to-[#11182c]/80 backdrop-blur-xl text-white rounded-xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative z-10 group/btn overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
      <MapPin className="w-5 h-5 mr-2 relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
      <span className="relative z-10 font-medium">Get Directions</span>
    </a>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;