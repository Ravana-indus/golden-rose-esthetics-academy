
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gold/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Info */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-playfair font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gold-gradient">Canadian</span>
              <span className="text-black"> Masters</span>
            </h2>
            <p className="text-gray-600 text-sm">
              Elevating beauty education with excellence and innovation. Transforming passion into professional mastery.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-600 hover:text-gold transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-600 hover:text-gold transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-gold transition-colors">Student Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/programs/diploma" className="text-gray-600 hover:text-gold transition-colors">Diploma Program</Link>
              </li>
              <li>
                <Link to="/programs/certificates" className="text-gray-600 hover:text-gold transition-colors">Certificate Courses</Link>
              </li>
              <li>
                <Link to="/programs/advanced" className="text-gray-600 hover:text-gold transition-colors">Advanced Esthetics</Link>
              </li>
              <li>
                <Link to="/student-clinic" className="text-gray-600 hover:text-gold transition-colors">Student Clinic</Link>
              </li>
              <li>
                <Link to="/career-services" className="text-gray-600 hover:text-gold transition-colors">Career Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  123 Beauty Blvd, Toronto, ON M4C 1B5, Canada
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gold shrink-0" />
                <a href="tel:+14165551234" className="text-gray-600 hover:text-gold">
                  (416) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gold shrink-0" />
                <a href="mailto:info@canadianmasters.edu" className="text-gray-600 hover:text-gold">
                  info@canadianmasters.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 py-6 border-t border-gray-100">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-playfair text-lg font-semibold mb-3">Join Our Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">Stay updated with our latest courses and industry insights.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© {currentYear} Canadian Masters Academy. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
