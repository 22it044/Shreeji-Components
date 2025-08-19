import { Phone, Mail, MapPin, Award, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-dark-foreground relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors duration-300 shadow-elegant"
      >
        <ArrowUp className="w-6 h-6 text-primary-foreground" />
      </button>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Shreeji Components</h1>
                <p className="text-xs text-dark-foreground/80">Precision Brass Components</p>
              </div>
            </div>
            <p className="text-dark-foreground/80 mb-6 leading-relaxed max-w-md">
              IATF 16949:2016 & ISO 9001:2015 Certified Manufacturers & Exporters of Precision 
              Brass Components based in Jamnagar, Gujarat. Serving industries globally 
              for 30+ years with top-notch quality products.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-success">
                <Award className="w-4 h-4" />
                <span className="text-sm">ISO 9001:2015 & IATF 16949:2016</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Products', href: '#products' },
                { name: 'Quality', href: '#quality' },
                { name: 'Industries', href: '#industries' },
                { name: 'Downloads', href: '#downloads' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-dark-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-dark-foreground/80">
                  <p>Shreeji Components</p>
                  <p>GIDC Phase 3, Plot No. 4694-Z Road</p>
                  <p>Jamnagar, Gujarat 361004, IN</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a 
                  href="tel:+918347549511"
                  className="text-sm text-dark-foreground/80 hover:text-secondary transition-colors"
                >
                  +91 8347549511 (Harshil)
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a 
                  href="mailto:chhapiah@gmail.com"
                  className="text-sm text-dark-foreground/80 hover:text-secondary transition-colors"
                >
                  chhapiah@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-dark-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-dark-foreground/70">
            © 2025 Shreeji Components. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-dark-foreground/70">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Quality Policy</a>
          </div>
        </div>

        {/* Certifications Footer */}
        <div className="text-center mt-8 pt-6 border-t border-dark-foreground/20">
          <p className="text-xs text-dark-foreground/60">
            ISO 9001:2015 | IATF 16949:2016 | Z Bronze | EEPC India | Made with precision in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;