
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setProgramsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs', hasDropdown: true },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Student Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const programsSubmenu = [
    { name: 'Diploma Program', path: '/programs/diploma' },
    { name: 'Certificate Courses', path: '/programs/certificates' },
    { name: 'Advanced Esthetics', path: '/programs/advanced' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-elegant py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gold-gradient">Canadian</span>
              <span className="text-black"> Masters</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => 
              !link.hasDropdown ? (
                <Link 
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-gold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gold after:transition-all ${
                    location.pathname === link.path ? 'text-gold after:w-full' : 'text-black'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <div key={link.name} className="relative group">
                  <button 
                    className={`flex items-center text-sm font-medium transition-colors hover:text-gold ${
                      location.pathname.includes(link.path) ? 'text-gold' : 'text-black'
                    }`}
                    onClick={() => setProgramsOpen(!programsOpen)}
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-card border border-gold/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {programsSubmenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gold/5 hover:text-gold"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="md">
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-black" />
            ) : (
              <Menu size={24} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-24 pb-6 px-6 overflow-y-auto">
          <nav className="flex-1 space-y-6">
            {navLinks.map((link) => 
              !link.hasDropdown ? (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-lg font-medium py-2 ${
                    location.pathname === link.path ? 'text-gold' : 'text-black'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <div key={link.name} className="space-y-2">
                  <button
                    className={`flex items-center justify-between w-full text-lg font-medium py-2 ${
                      location.pathname.includes(link.path) ? 'text-gold' : 'text-black'
                    }`}
                    onClick={() => setProgramsOpen(!programsOpen)}
                  >
                    {link.name}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${programsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                      programsOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {programsSubmenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block text-md py-2 text-gray-600 hover:text-gold"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </nav>
          <div className="mt-6">
            <Button variant="primary" size="lg" className="w-full">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
