import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default link behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Enchanting Events', path: '/enchanting-events' },
    { name: 'Captured Moments', path: '/captured-moments' },
    { name: 'Savor the Flavor', path: '/savor-the-flavor' },
    { name: 'Dream Consultation', path: '/dream-consultation' },
    { name: 'Love Stories', path: '/love-stories' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center h-20 px-4 justify-between md:justify-start">
        {/* Logo at top left */}
        <a href="/" onClick={handleScrollToTop} className="flex items-center cursor-pointer">
          <div className="flex items-center space-x-2">
            <span className="font-garamond text-3xl md:text-4xl font-semibold text-golden">
              BISHA
            </span>
            <span className="font-dancing-script text-2xl md:text-3xl text-golden">
              events
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="flex-grow hidden md:flex justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleNavLinkClick}
              className={`nav-link text-lg whitespace-nowrap ${
                location.pathname === link.path ? 'text-golden/80' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex-none md:hidden flex items-center h-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-golden hover:text-golden/80 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavLinkClick}
                className="block px-3 py-2 nav-link text-lg whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
