import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';

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
    <>
      {/* Top Bar with Contact Info */}
      <div className="hidden lg:block bg-gold-gradient py-2 text-white">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <a href="tel:+15551234567" className="flex items-center hover:text-white/80 transition-colors">
              <Phone size={14} className="mr-1" />
              (555) 123-4567
            </a>
            <a href="mailto:info@canadianmasters.edu" className="flex items-center hover:text-white/80 transition-colors">
              <Mail size={14} className="mr-1" />
              info@canadianmasters.edu
            </a>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <a href="#" className="hover:text-white/80 transition-colors">Student Portal</a>
            <a href="#" className="hover:text-white/80 transition-colors">Faculty Login</a>
          </div>
        </div>
      </div>
    
      {/* Main Navigation */}
      <header 
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-elegant py-3 bg-[#bb88ab]' : 'bg-[#bb88ab] py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-50">
              <img src="/logo.png" alt="Canadian Masters Logo" className="h-12 md:h-16" />
            </Link>

            {/* Desktop Navigation with shadcn UI NavigationMenu */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  {navLinks.map((link) => 
                    !link.hasDropdown ? (
                      <NavigationMenuItem key={link.name}>
                        <Link 
                          to={link.path}
                          className={cn(
                            "text-sm font-medium transition-colors hover:text-gold relative px-4 py-2 rounded-md inline-flex",
                            "after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:w-0 hover:after:w-[calc(100%-16px)] after:bg-gold after:transition-all",
                            location.pathname === link.path ? "text-gold after:w-[calc(100%-16px)]" : "text-white"
                          )}
                        >
                          {link.name}
                        </Link>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={link.name}>
                        <NavigationMenuTrigger 
                          className={cn(
                            "text-sm font-medium bg-transparent hover:bg-transparent hover:text-gold",
                            location.pathname.includes(link.path) ? "text-gold" : "text-white"
                          )}
                        >
                          {link.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[220px] p-2">
                            {programsSubmenu.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-4 py-2 text-sm hover:bg-gold/5 hover:text-gold rounded-md transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="default" className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
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
            
            {/* Mobile Contact Info */}
            <div className="border-t border-gray-100 pt-6 mt-6 space-y-4">
              <a href="tel:+15551234567" className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2 text-gold" />
                (555) 123-4567
              </a>
              <a href="mailto:info@canadianmasters.edu" className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2 text-gold" />
                info@canadianmasters.edu
              </a>
            </div>
            
            <div className="mt-6">
              <Button variant="default" size="lg" className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
