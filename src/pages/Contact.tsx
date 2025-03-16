import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, Clock, Calendar, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-gold" />,
      title: 'Phone',
      details: '(123) 456-7890',
      action: 'Call Us',
      link: 'tel:+11234567890'
    },
    {
      icon: <Mail className="h-6 w-6 text-gold" />,
      title: 'Email',
      details: 'info@canadianmasters.edu',
      action: 'Email Us',
      link: 'mailto:info@canadianmasters.edu'
    },
    {
      icon: <MapPin className="h-6 w-6 text-gold" />,
      title: 'Visit Us',
      details: '123 Beauty Lane, Toronto, ON M5V 2K7',
      action: 'Get Directions',
      link: 'https://maps.google.com'
    }
  ];

  const departments = [
    {
      name: 'Admissions',
      email: 'admissions@canadianmasters.edu',
      phone: '(123) 456-7891',
      description: 'For inquiries about programs, application process, and enrollment.'
    },
    {
      name: 'Student Services',
      email: 'studentservices@canadianmasters.edu',
      phone: '(123) 456-7892',
      description: 'For current students needing assistance with academic or administrative matters.'
    },
    {
      name: 'Career Services',
      email: 'careers@canadianmasters.edu',
      phone: '(123) 456-7893',
      description: 'For job placement assistance, industry partnerships, and alumni support.'
    },
    {
      name: 'Student Clinic',
      email: 'clinic@canadianmasters.edu',
      phone: '(123) 456-7894',
      description: 'For booking appointments and information about services offered.'
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Contact <span className="text-gold">Us</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
              We're here to answer your questions and help you on your journey to becoming an esthetics professional.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 md:px-6 -mt-12 relative z-10">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-elegant hover:shadow-elegant-lg transition-all hover:-translate-y-1 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-6">{method.details}</p>
                  <a 
                    href={method.link} 
                    className="inline-flex items-center text-gold font-medium hover:underline"
                  >
                    {method.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                  <span className="text-sm font-medium">Get in Touch</span>
                </div>
                <h2 className="text-3xl font-playfair font-bold mb-6">
                  Send Us a <span className="text-gold">Message</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="programs">Program Information</option>
                      <option value="clinic">Student Clinic</option>
                      <option value="careers">Career Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Map & Hours */}
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-rosegold/20 text-rosegold-dark mb-4">
                  <span className="text-sm font-medium">Find Us</span>
                </div>
                <h2 className="text-3xl font-playfair font-bold mb-6">
                  Our <span className="text-gold">Location</span>
                </h2>
                
                <div className="rounded-xl overflow-hidden shadow-elegant mb-8 h-[300px]">
                  {/* Replace with actual map component or iframe */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Map Placeholder</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-soft">
                  <h3 className="text-xl font-playfair font-bold mb-4">Hours of Operation</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gold mr-2" />
                        <span className="font-medium">Monday - Friday</span>
                      </div>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gold mr-2" />
                        <span className="font-medium">Saturday</span>
                      </div>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gold mr-2" />
                        <span className="font-medium">Sunday</span>
                      </div>
                      <span>Closed</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h3 className="text-xl font-playfair font-bold mb-4">Schedule a Visit</h3>
                    <p className="text-gray-600 mb-4">
                      Interested in touring our campus? Schedule a visit with our admissions team.
                    </p>
                    <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/5">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Campus Tour
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-20 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                <span className="text-sm font-medium">Direct Contacts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Department <span className="text-gold">Directory</span>
              </h2>
              <p className="text-gray-600">
                Contact specific departments directly for specialized assistance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all"
                >
                  <h3 className="text-xl font-playfair font-bold mb-2">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gold mr-2" />
                      <a href={`mailto:${dept.email}`} className="text-gray-700 hover:text-gold transition-colors">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gold mr-2" />
                      <a href={`tel:${dept.phone.replace(/[^0-9]/g, '')}`} className="text-gray-700 hover:text-gold transition-colors">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-rosegold/20 text-rosegold-dark mb-4">
              <span className="text-sm font-medium">Connect With Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Follow Us on <span className="text-gold">Social Media</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Stay updated with the latest news, events, and beauty trends by following us on social media.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Instagram className="h-8 w-8" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Facebook className="h-8 w-8" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-sky-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Twitter className="h-8 w-8" />
              </a>
            </div>
            
            <p className="text-gray-500 mt-8">
              Tag us in your posts: #CanadianMastersAcademy #CMABeauty
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-gold/5 to-rosegold/5">
          <div className="container mx-auto">
            <div className="bg-white p-10 md:p-16 rounded-2xl shadow-elegant max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                  Ready to Begin Your <span className="text-gold">Journey</span>?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Take the first step toward your future in esthetics. Apply now or schedule a campus tour to learn more.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold/5">
                  Request Information
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact; 