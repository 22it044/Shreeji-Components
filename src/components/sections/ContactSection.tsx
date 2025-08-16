import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Upload, Check, Linkedin } from 'lucide-react';
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll get back to you within 24 hours with a detailed response.",
      });
    }, 2000);
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
    {
      icon: Clock,
      title: 'Industries We Serve',
      details: [
        'Automobile, Shipping, Aviation',
        'Renewable Energy, Sanitary, Plastic',
        'Aerospace, Oil & Gas, EV & More',
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
      linkedin: '#', // Personal account - link not provided
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
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Ready to discuss your manufacturing needs? Our expert team is here to help you 
            find the perfect solution for your requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Request a Quote
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
                className="btn-hero w-full"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              <p className="text-xs text-medium-gray text-center">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          </div>

          {/* Contact Information - Simplified */}
          <div className="space-y-8">
            {/* Team Members */}
            <div className="bg-background rounded-xl p-6 shadow-card">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Phone className="w-5 h-5 text-primary mr-2" />
                Direct Contact
              </h4>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="border-b border-border-light last:border-b-0 pb-4 last:pb-0">
                    <h5 className="font-semibold text-foreground">{member.name}</h5>
                    <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                    <div className="space-y-1 text-sm">
                      <a 
                        href={`mailto:${member.email}`}
                        className="flex items-center text-medium-gray hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        {member.email}
                      </a>
                      <a 
                        href={`tel:${member.phone}`}
                        className="flex items-center text-medium-gray hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        {member.phone}
                      </a>
                      {member.linkedin !== '#' && (
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-medium-gray hover:text-primary transition-colors"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn Profile
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Combined Facility Location and Map */}
            <div className="bg-background rounded-xl p-6 shadow-card border border-border-light">
              <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center">
                <MapPin className="w-5 h-5 text-primary mr-2" />
                Visit Our Manufacturing Facility
              </h4>
              
              {/* Address Information */}
              <div className="mb-6">
                <div className="space-y-2 text-medium-gray">
                  <p className="font-semibold text-foreground">Shreeji Components</p>
                  <p>GIDC Phase 3, Plot No. 4694-Z Road</p>
                  <p>Jamnagar, Gujarat 361004, IN</p>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="relative overflow-hidden rounded-lg border border-border-light mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.5345736473246!2d70.0123456!3d22.4759167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0x79b0c2486aeb4ecc!2sShreeji%20Components!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shreeji Components Location"
                ></iframe>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://maps.app.goo.gl/E9yWV3YTbcyCMDQ88?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
                <a
                  href="tel:+918347549511"
                  className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary-light transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule Visit
                </a>
              </div>
              
              <p className="text-xs text-medium-gray text-center mt-3">
                Schedule a tour to see our state-of-the-art CNC machining capabilities and ISO certified quality control processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;