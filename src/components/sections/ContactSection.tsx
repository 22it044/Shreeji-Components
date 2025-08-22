import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Upload, Check, Linkedin, Globe, ExternalLink, BadgeCheck, Factory } from 'lucide-react';
import QualityBadgeGroup from '@/components/ui/QualityBadgeGroup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
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
      // Create mailto URL for quote request
      const subject = encodeURIComponent(`Quote Request from ${formData.name} - ${formData.company}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Product Interest: ${formData.productInterest}

Message:
${formData.message}

---
Sent via Shreeji Components Website Contact Form`);
      
      const mailtoUrl = `mailto:teaminnovativestudios@gmail.com?subject=${subject}&body=${body}`;
      
      // Open mailto link
      window.location.href = mailtoUrl;
      
      // Show success message after a short delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast({
          title: "Thank you for your inquiry!",
          description: "Your email client should open with the quote request. We'll respond within 24 hours.",
        });
      }, 1000);
    } catch (error) {
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
      <section id="contact" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Thank You for Your Inquiry!
            </h2>
            <p className="text-lg text-medium-gray mb-8">
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
              className="btn-outline"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-background-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-xs font-semibold text-primary mb-4 backdrop-blur-sm border border-primary/20">
            CONSULTATION REQUEST
          </div>
          
          <h2 className="text-5xl font-bold mb-6 relative inline-block">
            Get in <span className="text-gradient-primary">Touch</span>
            {/* Gradient Line */}
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 via-secondary to-primary/80 rounded-full"></div>
          </h2>
          
          <p className="text-xl text-medium-gray max-w-3xl mx-auto mt-6">
            Ready to discuss your manufacturing needs? Our expert team is here to help you 
            find the perfect solution for your requirements.
          </p>
          
          {/* Quality Badges */}
          <QualityBadgeGroup badges={['iso', 'global', 'quality']} className="mt-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-10 shadow-elegant border border-primary/10 relative group transition-all duration-500 hover:shadow-elegant-xl">
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              EXPERT SERVICE
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="text-gradient-primary mr-2">Request a Quote</span>
              <div className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent ml-3"></div>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
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
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
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
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
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
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
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
                <label htmlFor="productInterest" className="block text-sm font-medium text-foreground mb-2">
                  Product Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                >
                  <option value="">Select a product category</option>
                  {productOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
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

              <div className="border-2 border-dashed border-border-light rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-medium-gray mx-auto mb-2" />
                <p className="text-sm text-medium-gray">
                  Drag & drop technical drawings or specifications here
                </p>
                <p className="text-xs text-medium-gray mt-1">
                  PDF, DWG, STEP files up to 10MB
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
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

              <p className="text-xs text-medium-gray text-center">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          </div>

          {/* Contact Information - Simplified */}
          <div className="space-y-6">
            {/* Team Members */}
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-elegant border border-primary/10 relative group transition-all duration-500 hover:shadow-elegant-xl">
              {/* Premium Badge */}
              <div className="absolute -top-3 -left-3 bg-gradient-to-r from-secondary to-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                EXECUTIVE TEAM
              </div>
              
              <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <Phone className="w-5 h-5 text-gradient-primary mr-2" />
                <span className="text-gradient-primary">Direct Contact</span>
                <div className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent ml-3"></div>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="border border-border-light/50 rounded-lg p-4 transition-all duration-300 hover:shadow-elegant hover:border-primary/20 relative overflow-hidden bg-background/50"
                    onMouseEnter={() => setHoveredTeamMember(index)}
                    onMouseLeave={() => setHoveredTeamMember(null)}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 ${hoveredTeamMember === index ? 'opacity-100' : ''}`}></div>
                    
                    <div className="relative z-10">
                      <h5 className="font-semibold text-foreground">{member.name}</h5>
                      <p className="text-sm text-gradient-primary font-medium mb-2">{member.role}</p>
                      <div className="space-y-2 text-sm">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center text-medium-gray hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2 text-primary" />
                          {member.email}
                        </a>
                        <a 
                          href={`tel:${member.phone}`}
                          className="flex items-center text-medium-gray hover:text-primary transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                          {member.phone}
                        </a>
                        {member.linkedin && (
                           <a
                             href={member.linkedin}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex items-center text-medium-gray hover:text-[#0077B5] transition-colors group"
                           >
                             <div className="bg-gradient-to-br from-[#0077B5] to-[#00a0dc] rounded-full p-1 mr-2 group-hover:shadow-glow-sm">
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
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 shadow-elegant border border-primary/10 relative group transition-all duration-500 hover:shadow-elegant-xl">
                {/* Premium Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-secondary to-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                  GLOBAL FACILITY
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-gradient-primary mr-2" />
                  <span className="text-gradient-primary">Our Location</span>
                  <div className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent ml-3"></div>
                </h4>
                
                {/* Address Information */}
                <div className="mb-4 bg-gradient-to-r from-primary/5 to-secondary/5 p-3 rounded-lg border border-primary/10">
                  <div className="space-y-1 text-medium-gray">
                    <p className="font-semibold text-gradient-primary">Shreeji Components</p>
                    <p className="flex items-center text-sm"><MapPin className="w-3 h-3 text-primary mr-2" /> GIDC Phase 3, Plot No. 4694-Z Road</p>
                    <p className="flex items-center text-sm"><Globe className="w-3 h-3 text-primary mr-2" /> Jamnagar, Gujarat 361004, IN</p>
                  </div>
                </div>
                
                {/* Google Maps */}
                <div className="relative overflow-hidden rounded-lg border border-primary/20 mb-4 shadow-elegant group transition-all duration-300 hover:shadow-elegant-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
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
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </div>
              
              {/* LinkedIn Connection Section */}
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 shadow-elegant border border-[#0077B5]/20 relative group transition-all duration-500 hover:shadow-elegant-xl">
                {/* LinkedIn Badge */}
                <div className="absolute -top-3 -left-3 bg-gradient-to-r from-[#0077B5] to-[#00a0dc] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                  SOCIAL MEDIA
                </div>
                
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Linkedin className="w-5 h-5 text-[#0077B5] mr-2" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B5] to-[#00a0dc]">Connect with us</span>
                  <div className="h-px flex-grow bg-gradient-to-r from-[#0077B5]/50 to-transparent ml-3"></div>
                </h4>
                
                <p className="text-sm text-medium-gray mb-4">
                  Stay updated with our latest achievements, industry insights, and manufacturing excellence.
                </p>
                
                {/* Featured LinkedIn Post Preview */}
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 mb-4 border border-[#0077B5]/10 group hover:shadow-sm transition-all duration-300 hover:border-[#0077B5]/30">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#0077B5] to-[#00a0dc] rounded-md flex items-center justify-center shadow-glow-sm">
                      <span className="text-white font-bold text-xs">S</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Shreeji Components</h5>
                      <div className="flex items-center text-xs text-medium-gray">
                        <BadgeCheck className="w-3 h-3 text-[#0077B5] mr-1" />
                        <span>Recent post</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-foreground line-clamp-2">
                    🔧 Proud to announce that Shreeji Components has successfully delivered another batch of precision brass components to our automotive clients! #PrecisionManufacturing
                  </p>
                </div>
                
                <a
                  href="https://www.linkedin.com/company/shreeji-components/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-[#0077B5] to-[#00a0dc] text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
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