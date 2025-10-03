import { Phone, Mail, MapPin, Award, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (href: string) => {
    if (location.pathname === '/' || location.pathname === '/home') {
      // If on home page, scroll to section
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = (element as HTMLElement).offsetTop - 120;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to home and set scroll target
      sessionStorage.setItem('scrollTarget', href.replace('#', ''));
      navigate('/');
    }
  };

  return (
    <footer className="bg-dark text-dark-foreground relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#404E68] rounded-full flex items-center justify-center hover:bg-[#404E68]/80 transition-colors duration-300 shadow-md"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/images/company logo.jpg" alt="Company Logo" className="w-10 h-10 rounded-lg" />
              <div>
                <h1 className="text-xl font-bold">Shreeji Components</h1>
                <p className="text-xs text-dark-foreground/80">Precision Manufacturing</p>
              </div>
            </div>
            <p className="text-dark-foreground/80 mb-6 leading-relaxed max-w-md">
              IATF 16949:2016 & ISO 9001:2015 Certified Manufacturers & Exporters of Precision 
              Brass Components based in Jamnagar, Gujarat. Serving industries globally 
              for 30+ years with top-notch quality products.
            </p>
            <div className="flex flex-col space-y-3">
              
              
              <div className="flex items-center space-x-4">
                <a href="/ISO 2015 .pdf" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-md hover:shadow-md transition-shadow">
                  <img src="/images/iso certification.jpg" alt="ISO 9001:2015 Certificate" className="h-12 w-auto object-contain" />
                </a>
                <a href="/IATF.pdf" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-md hover:shadow-md transition-shadow">
                  <img src="/images/iatf-16949-2016-certification-services.jpeg" alt="IATF 16949:2016 Certificate" className="h-12 w-auto object-contain" />
                </a>
                <a href="/Z Bronze1.pdf" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-md hover:shadow-md transition-shadow">
                  <img src="/images/Bronze-new-1.webp" alt="Z Bronze Certificate" className="h-12 w-auto object-contain" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-md hover:shadow-md transition-shadow">
                  <img src="/images/eepc india logo.png" alt="EEPC India Certificate" className="h-12 w-auto object-contain" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Products', href: '#products' },
                { name: 'Quality', href: '/quality' },
                { name: 'Industries', href: '#industries' },
                { name: 'Stats', href: '#stats' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => link.href.startsWith('#') ? handleNavigation(link.href) : navigate(link.href)}
                    className="text-white hover:text-amber-400 transition-colors duration-300"
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
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div className="text-sm text-dark-foreground/80">
                  <p>Shreeji Components</p>
                  <p>GIDC Phase 3, Plot No. 4694-Z Road</p>
                  <p>Jamnagar, Gujarat 361004, IN</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <a 
                  href="tel:+918347549511"
                  className="text-sm text-dark-foreground/80 hover:text-amber-400 transition-colors"
                >
                  +91 8347549511 (Harshil)
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <a 
                  href="mailto:chhapiah@gmail.com"
                  className="text-sm text-dark-foreground/80 hover:text-amber-400 transition-colors"
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
            <button onClick={() => navigate('/privacy-policy')} className="hover:text-amber-400 transition-colors">Privacy Policy</button>
            <button onClick={() => navigate('/terms-of-service')} className="hover:text-amber-400 transition-colors">Terms of Service</button>
            <button onClick={() => navigate('/quality')} className="hover:text-amber-400 transition-colors">Quality Policy</button>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;