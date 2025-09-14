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
  
  // EmailJS configuration
  const SERVICE_ID = "service_shreeji"; // Replace with your actual service ID
  const TEMPLATE_ID = "template_quote_request"; // Replace with your actual template ID
  const PUBLIC_KEY = "your_public_key"; // Replace with your actual public key

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
    <section id="contact" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#11182c]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#11182c]/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center space-x-2 bg-[#11182c]/10 rounded-full px-5 py-2 mb-4">
            <div className="p-1 rounded-full bg-[#11182c]/20">
              <Mail className="w-3 h-3 text-[#11182c]" />
            </div>
            <span className="text-[#11182c] font-semibold text-sm">Contact Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-[#11182c]">Touch</span>
          </h2>
          
          <div className="w-24 h-1 bg-[#11182c] rounded-full mb-6 mx-auto"></div>
          
          <p className="text-[#4F6685] max-w-3xl mx-auto">
            Have questions about our products or services? Our team is ready to assist you.
            Reach out to us through any of the channels below.
          </p>
          
          {/* Quality Badges */}
          <QualityBadgeGroup badges={['iso', 'global', 'quality']} className="mt-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-[#11182c]/10 backdrop-blur-sm rounded-2xl p-10 shadow-md border border-[#11182c]/20 relative group transition-all duration-500 hover:shadow-lg">
            <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform transition-transform duration-300 group-hover:scale-110">
              EXPERT SERVICE
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="text-[#4F6685] mr-2">Request a Quote</span>
              <div className="h-px flex-grow bg-[#4F6685]/50 to-transparent ml-3"></div>
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
                className="w-full bg-[#11182c] hover:bg-[#11182c]/90 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              <p className="text-xs text-[#4F6685] text-center">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          </div>

          {/* Contact Information - Simplified */}
          <div className="space-y-6 bg-[#11182c]/10 backdrop-blur-sm rounded-2xl p-10 shadow-md border border-[#11182c]/20 relative group transition-all duration-500 hover:shadow-lg">
            {/* Team Members */}
              <div className="bg-[#11182c]/10 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md border border-[#11182c]/20 relative group transition-all duration-500 hover:shadow-lg">
              {/* Premium Badge */}
              <div className="absolute -top-3 -left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform transition-transform duration-300 group-hover:scale-110">
                EXECUTIVE TEAM
              </div>
              
              <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <Phone className="w-5 h-5 text-[#4F6685] mr-2" />
                <span className="text-[#4F6685]">Direct Contact</span>
                <div className="h-px flex-grow bg-[#4F6685]/50 to-transparent ml-3"></div>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="border border-[#11182c]/20 rounded-lg p-4 transition-all duration-300 hover:shadow-elegant hover:border-[#11182c]/30 relative overflow-hidden bg-[#11182c]/5"
                    onMouseEnter={() => setHoveredTeamMember(index)}
                    onMouseLeave={() => setHoveredTeamMember(null)}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#11182c]/5 to-[#11182c]/10 opacity-0 transition-opacity duration-300 ${hoveredTeamMember === index ? 'opacity-100' : ''}`}></div>
                    
                    <div className="relative z-10">
                      <h5 className="font-semibold text-foreground">{member.name}</h5>
                      <p className="text-sm text-[#4F6685] font-medium mb-2">{member.role}</p>
                      <div className="space-y-2 text-sm">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center text-[#4F6685] hover:text-[#11182c] transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2 text-[#11182c]" />
                          {member.email}
                        </a>
                        <a 
                          href={`tel:${member.phone}`}
                          className="flex items-center text-[#4F6685] hover:text-[#11182c] transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-2 text-[#11182c]" />
                          {member.phone}
                        </a>
                        {member.linkedin && (
                           <a
                             href={member.linkedin}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex items-center text-[#4F6685] hover:text-[#11182c] transition-colors group"
                           >
                             <div className="bg-[#11182c] rounded-full p-1 mr-2 group-hover:shadow-md">
                               <Linkedin className="w-3 h-3 text-white" />
                             </div>
                             <span className="group-hover:underline">Connect on LinkedIn</span>
                             <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                           </a>
                          )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map and LinkedIn Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Facility Location and Map */}
              <div className="bg-[#11182c]/10 backdrop-blur-sm rounded-xl p-6 shadow-md border border-[#11182c]/20 relative group transition-all duration-500 hover:shadow-lg">
                {/* Premium Badge */}
                <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform transition-transform duration-300 group-hover:scale-110">
                  GLOBAL FACILITY
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-[#11182c] mr-2" />
                  <span className="text-[#11182c]">Our Location</span>
                  <div className="h-px flex-grow bg-[#11182c]/50 to-transparent ml-3"></div>
                </h4>
                
                {/* Address Information */}
                <div className="mb-4 bg-[#11182c]/10 p-3 rounded-lg border border-[#11182c]/20">
                  <div className="space-y-1 text-medium-gray">
                    <p className="font-semibold text-[#11182c]">Shreeji Components</p>
                    <p className="flex items-center text-sm"><MapPin className="w-3 h-3 text-[#11182c] mr-2" /> GIDC Phase 3, Plot No. 4694-Z Road</p>
                    <p className="flex items-center text-sm"><Globe className="w-3 h-3 text-[#11182c] mr-2" /> Jamnagar, Gujarat 361004, IN</p>
                  </div>
                </div>
                
                {/* Google Maps */}
                <div className="relative overflow-hidden rounded-lg border border-[#11182c]/20 mb-4 shadow-md group transition-all duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 bg-[#11182c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.5345736473246!2d70.0123456!3d22.4759167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0x79b0c2486aeb4ecc!2sShreeji%20Components!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shreeji Components Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
                
                {/* Action Button */}
                <a
                  href="https://maps.app.goo.gl/E9yWV3YTbcyCMDQ88?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#11182c] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </div>
              
              {/* LinkedIn Connection Section */}
              <div className="bg-[#11182c]/10 backdrop-blur-sm rounded-xl p-6 shadow-md border border-[#11182c]/20 relative group transition-all duration-500 hover:shadow-lg">
                {/* LinkedIn Badge */}
                <div className="absolute -top-3 -left-3 bg-[#11182c] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform transition-transform duration-300 group-hover:scale-110">
                  SOCIAL MEDIA
                </div>
                
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Linkedin className="w-5 h-5 text-[#11182c] mr-2" />
                  <span className="text-[#11182c]">Connect with us</span>
                  <div className="h-px flex-grow bg-[#11182c]/50 to-transparent ml-3"></div>
                </h4>
                
                <p className="text-sm text-medium-gray mb-4">
                  Stay updated with our latest achievements, industry insights, and manufacturing excellence.
                </p>
                
                {/* Featured LinkedIn Post Preview */}
                <div className="bg-[#11182c]/10 backdrop-blur-sm rounded-lg p-4 mb-4 border border-[#11182c]/20 group hover:shadow-sm transition-all duration-300 hover:border-[#11182c]/30">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-[#11182c] rounded-md flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-xs">S</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Shreeji Components</h5>
                      <div className="flex items-center text-xs text-medium-gray">
                        <BadgeCheck className="w-3 h-3 text-[#11182c] mr-1" />
                        <span>Recent post</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-medium-gray line-clamp-2">
                    🔧 Proud to announce that Shreeji Components has successfully delivered another batch of precision brass components to our automotive clients! #PrecisionManufacturing
                  </p>
                </div>
                
                <a
                  href="https://www.linkedin.com/company/shreeji-components/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#11182c] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Follow Us on LinkedIn
                  <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;