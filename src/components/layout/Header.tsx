import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, Wrench, Award, CheckCircle, Globe, Shield, Sparkle, Star, Linkedin, BadgeCheck, Zap, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Import product data for dropdown
import { productData } from '@/components/sections/ProductsSection';

// Define the navigation item type
interface NavigationItem {
  name: string;
  href: string;
  isPage?: boolean;
  hasDropdown?: boolean;
  highlight?: boolean;
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

  // Close dropdown when clicking outside
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

  // Unified function to handle section links and page navigation
  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsMobileProductDropdownOpen(false);
    
    // If it's a page link (starts with '/'), use React Router navigation
    if (href.startsWith('/')) {
      navigate(href);
      return;
    }
    
    // It's a section link (starts with '#')
    const sectionId = href.replace('#', '');
    
    // If we're on the home page, scroll to the section
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
      // If we're on another page, navigate to home and store the section target
      sessionStorage.setItem('scrollTarget', sectionId);
      navigate('/');
    }
  };

  // Check for stored scroll target on page load
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
      }, 500); // Small delay to ensure the page has loaded
    }
  }, [location.pathname]);

  return (
    <header 
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] border-b border-white/40' 
      : 'bg-white/90 backdrop-blur-lg border-b border-white/30'
  }`}
  style={{
    backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(16px) saturate(150%)',
    WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(16px) saturate(150%)',
    boxShadow: isScrolled ? '0 8px 32px 0 rgba(0, 0, 0, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)' : 'inset 0 1px 0 0 rgba(255, 255, 255, 0.4)',
  }}
    >
      {/* Top Contact Bar - Professional design */}
      <div className="bg-dark text-dark-foreground py-2 px-3 sm:py-2.5 sm:px-4 text-sm relative overflow-hidden border-b border-dark-foreground/10">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-royal-sapphire/5 rounded-full blur-xl opacity-70"></div>
        <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-royal-sapphire/5 rounded-full blur-lg opacity-70"></div>
        </div>
        
        <div className="container mx-auto flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <a href="tel:+918347549511" className="flex items-center space-x-2 hover:text-royal-sapphire transition-colors duration-300 group">
                <div className="bg-royal-sapphire/10 p-1.5 rounded-full group-hover:bg-royal-sapphire/20 transition-colors duration-300">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span className="hidden sm:inline-block">+91 8347549511</span>
              </a>
            
            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/company/shreeji-components/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-royal-sapphire transition-colors duration-300 group"
            >
              <div className="bg-royal-sapphire/10 p-1.5 rounded-full group-hover:bg-royal-sapphire/20 transition-colors duration-300">
                <Linkedin className="h-3.5 w-3.5" />
              </div>
              <span className="hidden sm:inline-block">Connect on LinkedIn</span>
            </a>
            <a href="mailto:chhapiah@gmail.com" className="flex items-center space-x-2 hover:text-royal-sapphire transition-colors duration-300 group">
              <div className="bg-royal-sapphire/10 p-1.5 rounded-full group-hover:bg-royal-sapphire/20 transition-colors duration-300">
                <Mail className="h-3.5 w-3.5" />
              </div>
              <span className="hidden sm:inline-block">chhapiah@gmail.com</span>
            </a>
          </div>
          
          {/* Enhanced certification display with logos */}
          <div className="hidden md:flex items-center space-x-2 text-xs">
            <div className="flex items-center space-x-1 bg-white px-2 py-0.5 rounded-md text-[10px] font-medium border border-royal-sapphire/10 shadow-md">
              <img src="/images/iso certification.jpg" alt="ISO 9001:2015" className="h-5 w-auto" />
              <span className="text-dark">ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-1 bg-white px-2 py-0.5 rounded-md text-[10px] font-medium border border-royal-sapphire/10 shadow-md">
              <img src="/images/iatf-16949-2016-certification-services.jpeg" alt="IATF 16949:2016" className="h-5 w-auto" />
              <span className="text-dark">IATF 16949:2016</span>
            </div>
            <div className="flex items-center space-x-1 bg-white px-2 py-0.5 rounded-md text-[10px] font-medium border border-royal-sapphire/10 shadow-md">
              <img src="/images/Bronze-new-1.webp" alt="Z Bronze" className="h-5 w-auto" />
              <span className="text-dark">Z Bronze</span>
            </div>
            <div className="flex items-center space-x-1 bg-white px-2 py-0.5 rounded-md text-[10px] font-medium border border-royal-sapphire/10 shadow-md">
              <img src="/images/eepc india logo.png" alt="EEPC India" className="h-5 w-auto" />
              <span className="text-dark">EEPC India</span>
            </div>
          </div>
          
          {/* Mobile certification display - Logos only */}
          <div className="md:hidden flex items-center overflow-x-auto scrollbar-hide space-x-2 text-xs max-w-[140px]">
            <div className="flex-shrink-0 flex items-center justify-center bg-white p-1 rounded-md text-[10px] font-medium border border-royal-sapphire/10 shadow-md">
              <img src="/images/iso certification.jpg" alt="ISO 9001:2015" className="h-5 w-auto" />
            </div>
            <div className="flex-shrink-0 flex items-center justify-center bg-white p-1 rounded-md text-[10px] font-medium border border-royal-sapphire/10 shadow-md">
              <img src="/images/iatf-16949-2016-certification-services.jpeg" alt="IATF 16949:2016" className="h-5 w-auto" />
            </div>
            <div className="flex-shrink-0 flex items-center justify-center bg-white p-1 rounded-md text-[10px] font-medium border border-royal-sapphire/10 shadow-md">
              <img src="/images/Bronze-new-1.webp" alt="Z Bronze" className="h-5 w-auto" />
            </div>
            <div className="flex-shrink-0 flex items-center justify-center bg-white p-1 rounded-md text-[10px] font-medium border border-royal-sapphire/10 shadow-md">
              <img src="/images/eepc india logo.png" alt="EEPC India" className="h-5 w-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Professional styling */}
      <nav className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 relative">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-1/4 top-1/2 w-32 h-32 bg-royal-sapphire/5 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute left-1/3 top-1/4 w-24 h-24 bg-royal-sapphire/5 rounded-full blur-2xl opacity-40"></div>
        </div>
        
        <div className="flex items-center justify-between relative z-10">
          {/* Professional Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-md overflow-hidden border border-border-light/30 group-hover:border-royal-sapphire/20 transition-all duration-300">
              <div className="absolute inset-0 bg-royal-sapphire/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="/images/company logo.jpg" 
                alt="Shreeji Components Logo" 
                className="w-full h-full object-contain relative z-10 group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/90">Shreeji Components</h1>
                <div className="hidden sm:flex items-center space-x-1 bg-royal-sapphire/10 px-2 py-0.5 rounded-full text-[10px] font-medium">
                  <Star className="h-2.5 w-2.5 text-[#202f50]" />
                  <span className="text-[#11182c]">SINCE 1995</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-6 h-0.5 bg-[#11182c] rounded-full"></div>
                <p className="text-xs text-[#11182c] font-medium">Precision Manufacturing</p>
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
                item.isPage ? (
                  item.hasDropdown ? (
                    <div key={item.name} className="relative" ref={productDropdownRef}>
                      <button
                        onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                        className={`text-foreground hover:text-royal-sapphire transition-all duration-200 font-medium relative group flex items-center ${item.highlight ? 'text-royal-sapphire bg-royal-sapphire/10 px-3 py-1 rounded-full' : ''}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-sapphire transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full"></span>
                        {/* Subtle glow effect on hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-royal-sapphire/0 to-royal-sapphire/0 group-hover:from-royal-sapphire/5 group-hover:to-royal-sapphire/5 rounded-lg blur-sm transition-all duration-300 -z-10"></span>
                      </button>
                      
                      {/* Product Dropdown Menu */}
                      {isProductDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-elegant border border-border-light/30 py-2 z-50 transform origin-top transition-all duration-300">
                          {/* Product Portfolio Link */}
                          <Link 
                            to="/products" 
                            className="block px-4 py-2.5 text-foreground hover:bg-royal-sapphire/5 hover:text-royal-sapphire transition-colors duration-200 font-medium border-b border-border-light/30"
                            onClick={() => setIsProductDropdownOpen(false)}
                          >
                            Product Portfolio
                          </Link>
                          
                          {/* Individual Product Links */}
                          <div className="max-h-80 overflow-y-auto py-1">
                            {productData.map((product, idx) => (
                              <Link 
                                key={idx}
                                to={product.link} 
                                className="block px-4 py-2 text-sm text-foreground hover:bg-royal-sapphire/5 hover:text-royal-sapphire transition-colors duration-200"
                                onClick={() => setIsProductDropdownOpen(false)}
                              >
                                {product.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-foreground hover:text-royal-sapphire transition-all duration-200 font-medium relative group ${item.highlight ? 'text-royal-sapphire bg-royal-sapphire/10 px-3 py-1 rounded-full' : ''}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-sapphire transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full"></span>
                      {/* Subtle glow effect on hover */}
                      <span className="absolute inset-0 bg-gradient-to-r from-royal-sapphire/0 to-royal-sapphire/0 group-hover:from-royal-sapphire/5 group-hover:to-royal-sapphire/5 rounded-lg blur-sm transition-all duration-300 -z-10"></span>
                    </Link>
                  )
                ) : (
                  <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`text-foreground hover:text-royal-sapphire transition-all duration-200 font-medium relative group ${item.highlight ? 'text-royal-sapphire bg-royal-sapphire/10 px-3 py-1 rounded-full' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-sapphire transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full"></span>
                  {/* Subtle glow effect on hover */}
                  <span className="absolute inset-0 bg-royal-sapphire/0 group-hover:bg-royal-sapphire/5 rounded-lg blur-sm transition-all duration-300 -z-10"></span>
                </button>
              )
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => handleNavigation('#contact')}
              className="relative overflow-hidden bg-[#11182c] hover:bg-[#11182c]/90 text-white font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 group"
            >
              <span className="relative z-10 flex items-center">Contact Us <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /></span>
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-white/10 w-1/3 -skew-x-12 transform -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out"></div>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-royal-sapphire transition-colors relative group bg-royal-sapphire/5 rounded-lg"
          >
            <div className="absolute inset-0 bg-royal-sapphire/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="relative z-10">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border-light bg-white/95 backdrop-blur-xl rounded-b-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] overflow-hidden fixed top-[100px] left-0 right-0 max-h-[80vh] overflow-y-auto z-50">
            {/* Premium decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tr from-royal-sapphire/10 to-transparent rounded-full blur-3xl opacity-70"></div>
              <div className="absolute left-0 top-0 w-48 h-48 bg-gradient-to-br from-royal-sapphire/10 to-transparent rounded-full blur-2xl opacity-60"></div>
            </div>
            
            <div className="flex flex-col space-y-1 relative z-10 px-6">
              {navigation.map((item, index) => (
                item.hasDropdown ? (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setIsMobileProductDropdownOpen(!isMobileProductDropdownOpen)}
                      className="text-left py-3.5 px-4 text-foreground hover:text-royal-sapphire transition-all duration-300 font-medium relative group w-full flex justify-between items-center rounded-lg hover:bg-royal-sapphire/5 border-b border-gray-100"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="relative z-10 text-base font-semibold">{item.name}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-300 text-royal-sapphire ${isMobileProductDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isMobileProductDropdownOpen && (
                      <div className="mt-1 mb-2 bg-gradient-to-r from-royal-sapphire/5 to-transparent rounded-xl overflow-hidden">
                        <div className="border-l-3 border-royal-sapphire/30 ml-4 py-2">
                          <Link 
                            to="/products"
                            className="block py-3 px-4 text-sm text-foreground hover:text-royal-sapphire transition-colors duration-200 font-semibold"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileProductDropdownOpen(false);
                            }}
                          >
                            Product Portfolio
                          </Link>
                          
                          <div className="space-y-0.5 max-h-[40vh] overflow-y-auto pr-2 pl-2">
                            {productData.map((product, idx) => (
                              <Link 
                                key={idx}
                                to={product.link} 
                                className="block py-2.5 px-4 text-sm text-foreground/80 hover:text-royal-sapphire hover:bg-royal-sapphire/5 transition-colors duration-200 rounded-lg"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileProductDropdownOpen(false);
                                }}
                              >
                                {product.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavigation(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left py-3.5 px-4 text-base text-foreground hover:text-royal-sapphire transition-all duration-300 font-medium relative group rounded-lg hover:bg-royal-sapphire/5 border-b border-gray-100"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10 font-semibold">{item.name}</span>
                  </button>
                )
              ))}
              
              <div className="pt-4 pb-2">
                <Button 
                  onClick={() => {
                    handleNavigation('#contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#11182c] to-royal-sapphire text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <span className="flex items-center">Contact Us <ArrowRight className="ml-2 w-5 h-5" /></span>
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