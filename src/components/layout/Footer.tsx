import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QualityBadge from '@/components/ui/QualityBadge';

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
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        <ArrowUp className="w-5 h-5 text-primary-foreground" />
      </button>

      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
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
            <div className="flex flex-wrap items-center gap-4">
              <QualityBadge type="iso" className="bg-dark-foreground/10 border-dark-foreground/20" />
              <QualityBadge type="iatf" className="bg-dark-foreground/10 border-dark-foreground/20" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-2.5">
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
                    className="text-dark-foreground/80 hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary/70 rounded-full mr-2"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-dark-foreground/10 p-2 rounded-md">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                </div>
                <div className="text-sm text-dark-foreground/80">
                  <p>Shreeji Components</p>
                  <p>GIDC Phase 3, Plot No. 4694-Z Road</p>
                  <p>Jamnagar, Gujarat 361004, IN</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-dark-foreground/10 p-2 rounded-md">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a 
                  href="tel:+918347549511"
                  className="text-sm text-dark-foreground/80 hover:text-primary transition-colors"
                >
                  +91 8347549511 (Harshil)
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-dark-foreground/10 p-2 rounded-md">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a 
                  href="mailto:chhapiah@gmail.com"
                  className="text-sm text-dark-foreground/80 hover:text-primary transition-colors"
                >
                  chhapiah@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar with Certificates */}
        <div className="border-t border-dark-foreground/20 pt-6 flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-dark-foreground/70">
              © {new Date().getFullYear()} Shreeji Components. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-dark-foreground/70">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Quality Policy</a>
            </div>
          </div>
          
          {/* Certificates */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-3">
            <span className="text-xs bg-dark-foreground/10 px-2 py-0.5 rounded-full text-dark-foreground/70">ISO 9001:2015</span>
            <span className="text-xs bg-dark-foreground/10 px-2 py-0.5 rounded-full text-dark-foreground/70">IATF 16949:2016</span>
            <span className="text-xs bg-dark-foreground/10 px-2 py-0.5 rounded-full text-dark-foreground/70">Z Bronze</span>
            <span className="text-xs bg-dark-foreground/10 px-2 py-0.5 rounded-full text-dark-foreground/70">EEPC India</span>
            <span className="text-xs bg-dark-foreground/10 px-2 py-0.5 rounded-full text-dark-foreground/70">Made with precision in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;