import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, Award, CheckCircle, Globe, Star, Linkedin, BadgeCheck, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Ensure this path is correct for your project structure
import { productData } from '@/components/sections/ProductsSection';

// Define the navigation item type
interface NavigationItem {
  name: string;
  href: string;
  isPage?: boolean;
  hasDropdown?: boolean;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMobileProductDropdownOpen, setIsMobileProductDropdownOpen] = useState(false);
  const productDropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target as Node)) {
        setIsProductDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '/products', isPage: true, hasDropdown: true },
    { name: 'Quality', href: '/quality', isPage: true },
    { name: 'Industries', href: '#industries' },
    { name: 'Downloads', href: '#downloads' },
  ];

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsMobileProductDropdownOpen(false);
    
    if (href.startsWith('/')) {
      navigate(href);
      return;
    }
    
    const sectionId = href.replace('#', '');
    
    if (location.pathname === '/' || location.pathname === '/home') {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = (element as HTMLElement).offsetTop - 120;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      sessionStorage.setItem('scrollTarget', sectionId);
      navigate('/');
    }
  };

  useEffect(() => {
    const scrollTarget = sessionStorage.getItem('scrollTarget');
    if (scrollTarget && (location.pathname === '/' || location.pathname === '/home')) {
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          const offsetTop = element.offsetTop - 120;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          sessionStorage.removeItem('scrollTarget');
        }
      }, 500);
    }
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#11182C]/25 backdrop-blur-lg shadow-lg border-white/10' 
          : 'bg-transparent border-transparent'
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-[#0a0f1d]/90 text-white/80 py-2.5 px-4 text-sm border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a href="tel:+918347549511" className="flex items-center space-x-2 hover:text-royal-sapphire transition-colors group">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 8347549511</span>
            </a>
            <a href="https://www.linkedin.com/company/shreeji-components/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-royal-sapphire transition-colors group">
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href="mailto:chhapiah@gmail.com" className="flex items-center space-x-2 hover:text-royal-sapphire transition-colors group">
              <Mail className="h-4 w-4" />
              <span className="hidden md:inline">chhapiah@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-xs font-medium">
            <span className="flex items-center gap-1.5"><Award size={14} className="text-royal-sapphire"/> ISO 9001:2015</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-royal-sapphire"/> IATF 16949:2016</span>
            <span className="flex items-center gap-1.5"><Globe size={14} className="text-royal-sapphire"/> Global Exports</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="group flex-shrink-0">
            <div className="flex items-center gap-3">
              <img src="/images/company logo.jpg" alt="Shreeji Components Logo" className="w-12 h-12 object-contain rounded-lg shadow-sm border border-white/10" />
              <div>
                <h1 className="text-lg font-bold text-white whitespace-nowrap">Shreeji Components</h1>
                <div className="flex items-center space-x-1.5">
                  <div className="w-5 h-0.5 bg-royal-sapphire rounded-full"></div>
                  <p className="text-xs text-royal-sapphire font-medium">Precision Manufacturing</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.isPage ? (
                item.hasDropdown ? (
                  <div key={item.name} className="relative" ref={productDropdownRef}>
                    <button onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)} className="text-white/90 hover:text-royal-sapphire transition-colors font-medium flex items-center group">
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isProductDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-[#0a0f1d] rounded-lg shadow-xl border border-white/10 py-2 z-50">
                        <Link to="/products" className="block px-4 py-2 text-white/90 hover:bg-royal-sapphire/10 hover:text-royal-sapphire transition-colors" onClick={() => setIsProductDropdownOpen(false)}>Product Portfolio</Link>
                        <div className="my-1 h-px bg-white/10"></div>
                        <div className="max-h-60 overflow-y-auto">
                          {productData.map((product) => (
                            <Link key={product.title} to={product.link} className="block px-4 py-2 text-sm text-white/70 hover:bg-royal-sapphire/10 hover:text-royal-sapphire transition-colors" onClick={() => setIsProductDropdownOpen(false)}>{product.title}</Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.name} to={item.href} className="text-white/90 hover:text-royal-sapphire transition-colors font-medium">{item.name}</Link>
                )
              ) : (
                <button key={item.name} onClick={() => handleNavigation(item.href)} className="text-white/90 hover:text-royal-sapphire transition-colors font-medium">{item.name}</button>
              )
            ))}
          </div>

          <div className="hidden lg:block">
            <Button onClick={() => handleNavigation('#contact')} className="bg-royal-sapphire hover:bg-royal-sapphire/90 text-white font-bold px-6 py-2.5 rounded-full">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-white">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-white/10 bg-[#0a0f1d]/95 backdrop-blur-md rounded-lg shadow-lg">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <div key={item.name} className="px-4">
                  {item.hasDropdown ? (
                    <>
                      <button onClick={() => setIsMobileProductDropdownOpen(!isMobileProductDropdownOpen)} className="w-full flex justify-between items-center py-3 text-lg font-medium text-white">
                        {item.name}
                        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isMobileProductDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMobileProductDropdownOpen && (
                        <div className="pl-4 border-l-2 border-royal-sapphire/20 ml-2 pb-2">
                          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-white/90">Product Portfolio</Link>
                          {productData.map((product) => (
                            <Link key={product.title} to={product.link} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-white/70">{product.title}</Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button onClick={() => handleNavigation(item.href)} className="w-full text-left py-3 text-lg font-medium text-white">{item.name}</button>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 mt-2 border-t border-white/10">
                <Button onClick={() => handleNavigation('#contact')} className="w-full bg-royal-sapphire hover:bg-royal-sapphire/90 text-white rounded-full">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;