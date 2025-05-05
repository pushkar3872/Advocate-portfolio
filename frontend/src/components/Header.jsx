import { useState, useEffect } from 'react';
import { MoreHorizontal, X, ChevronDown, Calendar, Phone, Home, Info, Briefcase, FileText, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home', icon: <Home size={16} /> },
    { name: 'Services', id: 'services', icon: <Briefcase size={16} /> },
    { name: 'Reviews', id: 'reviews', icon: <FileText size={16} /> },
    { name: 'Contact', id: 'contact', icon: <Mail size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport, consider it active
          // Adjust the threshold based on your header height and preferences
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll to the section
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Update active section
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900 shadow-lg py-2' 
            : 'bg-gradient-to-r from-gray-900 to-gray-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center space-x-2"
          >
            <div
              className={`h-10 w-10 flex items-center justify-center rounded-md font-bold transition-all duration-300
              ${isScrolled ? 'bg-amber-600 text-white scale-95' : 'bg-amber-700 text-white'}`}
            >
              BD
            </div>
            <span className={`font-semibold text-white transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
              Bapu Dombale <span className="text-amber-300 text-sm">Advocate</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`transition hover:text-amber-300 text-white flex items-center gap-2
                ${activeSection === item.id 
                  ? 'font-semibold border-b-2 border-amber-700 pb-1' 
                  : 'hover:scale-105'}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`bg-amber-700 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition 
              flex items-center gap-2 shadow-md hover:shadow-lg ${isScrolled ? 'scale-95' : ''}`}
            >
              <Calendar size={18} />
              Book Consultation
            </a>
            <a 
              href="tel:+919527407072" 
              className="text-white hover:text-amber-300 transition flex items-center gap-1"
              aria-label="Call us"
            >
              <Phone size={18} />
              <span className="hidden lg:inline"> 9527407072 </span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-1 rounded-md hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <MoreHorizontal size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-lg rounded-b-md border-t border-gray-700 max-h-[80vh] overflow-y-auto animate-fadeIn">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-4 py-3 text-gray-200 border-b border-gray-700 hover:bg-gray-700 hover:text-amber-300 flex items-center gap-3
                  ${activeSection === item.id ? 'font-semibold bg-gray-700 text-amber-300' : ''}`}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col sm:flex-row gap-2 p-4">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 rounded-md transition flex items-center justify-center gap-2 flex-1"
                >
                  <Calendar size={18} />
                  Book Consultation
                </a>
                <a 
                  href="tel:+919527407072" 
                  className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 rounded-md transition flex items-center justify-center gap-2 flex-1"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-700 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 animate-fadeIn"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Header;