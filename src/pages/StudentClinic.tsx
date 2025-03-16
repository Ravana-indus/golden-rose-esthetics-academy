import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, MapPin, Star, CheckCircle, Phone, Mail, HelpCircle } from 'lucide-react';

const StudentClinic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      category: 'Facial Treatments',
      items: [
        { name: 'Basic Facial', duration: '60 min', price: '$35' },
        { name: 'Deep Cleansing Facial', duration: '75 min', price: '$45' },
        { name: 'Anti-Aging Facial', duration: '90 min', price: '$55' },
        { name: 'Acne Treatment', duration: '60 min', price: '$40' }
      ]
    },
    {
      category: 'Body Treatments',
      items: [
        { name: 'Relaxation Massage', duration: '45 min', price: '$30' },
        { name: 'Body Scrub', duration: '45 min', price: '$35' },
        { name: 'Body Wrap', duration: '60 min', price: '$45' }
      ]
    },
    {
      category: 'Hair Removal',
      items: [
        { name: 'Eyebrow Waxing', duration: '15 min', price: '$12' },
        { name: 'Lip or Chin Waxing', duration: '15 min', price: '$10' },
        { name: 'Full Leg Waxing', duration: '45 min', price: '$35' },
        { name: 'Underarm Waxing', duration: '15 min', price: '$15' }
      ]
    },
    {
      category: 'Nail Care',
      items: [
        { name: 'Manicure', duration: '30 min', price: '$20' },
        { name: 'Pedicure', duration: '45 min', price: '$30' },
        { name: 'Gel Polish Application', duration: '45 min', price: '$25' }
      ]
    },
    {
      category: 'Makeup',
      items: [
        { name: 'Day Makeup Application', duration: '30 min', price: '$25' },
        { name: 'Evening Makeup Application', duration: '45 min', price: '$35' },
        { name: 'Makeup Lesson', duration: '60 min', price: '$40' }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      service: 'Facial Treatment',
      quote: 'I was impressed by the professionalism of the students. My facial was thorough and relaxing, and my skin looked amazing afterward!',
      rating: 5
    },
    {
      name: 'Michael T.',
      service: 'Massage Therapy',
      quote: 'Great value for the price. The student was attentive to my needs and the supervisor ensured everything was done correctly.',
      rating: 4
    },
    {
      name: 'Jennifer L.',
      service: 'Manicure & Pedicure',
      quote: 'The attention to detail was impressive. My nails looked perfect and the experience was so pleasant.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Are services performed by students?',
      answer: 'Yes, all services are performed by advanced students under the supervision of licensed instructors. This provides valuable hands-on experience for our students while offering quality services at reduced prices.'
    },
    {
      question: 'How do I book an appointment?',
      answer: 'You can book appointments online through our booking system, by phone, or in person at the clinic reception desk. We recommend booking at least 48 hours in advance as appointments fill quickly.'
    },
    {
      question: 'What if I need to cancel my appointment?',
      answer: 'We request at least 24 hours notice for cancellations. This allows us to offer the appointment time to another client and ensures our students receive the practical experience they need.'
    },
    {
      question: 'Do you accept walk-ins?',
      answer: 'We accept walk-ins based on availability, but appointments are recommended to ensure you can be accommodated at your preferred time.'
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
              Student <span className="text-gold">Clinic</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
              Experience professional esthetics services at affordable prices, 
              performed by our advanced students under expert supervision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
                Book an Appointment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold/5">
                View Service Menu
              </Button>
            </div>
          </div>
        </section>

        {/* About the Clinic */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-rosegold/20 z-0"></div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-gold/10 z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Student clinic treatment room" 
                  className="rounded-xl shadow-elegant relative z-10"
                />
              </div>
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                  <span className="text-sm font-medium">About Our Clinic</span>
                </div>
                <h2 className="text-3xl font-playfair font-bold mb-6">
                  Professional Services at <span className="text-gold">Student Prices</span>
                </h2>
                <p className="text-gray-700 mb-4">
                  Our student clinic provides a professional spa environment where our advanced 
                  students can apply their skills under the careful guidance of experienced instructors.
                </p>
                <p className="text-gray-700 mb-6">
                  By choosing our clinic, you not only receive quality treatments at reduced prices, 
                  but you also help our students gain the practical experience they need to excel in their careers.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium">Expert Supervision</p>
                      <p className="text-sm text-gray-600">All services performed under instructor guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium">Professional Products</p>
                      <p className="text-sm text-gray-600">We use the same high-quality products as professional spas</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium">Affordable Pricing</p>
                      <p className="text-sm text-gray-600">Enjoy premium services at 40-60% below market rates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-rosegold/20 text-rosegold-dark mb-4">
                <span className="text-sm font-medium">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Service <span className="text-gold">Menu</span>
              </h2>
              <p className="text-gray-600">
                We offer a wide range of esthetics services to help you look and feel your best.
              </p>
            </div>

            <div className="space-y-12">
              {services.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-soft p-8">
                  <h3 className="text-2xl font-playfair font-bold mb-6 text-center md:text-left">{category.category}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((service, idx) => (
                      <div key={idx} className="border border-gold/10 rounded-lg p-4 hover:bg-gold/5 transition-colors">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{service.name}</h4>
                          <span className="text-gold font-bold">{service.price}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1 text-gold/70" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 italic mb-4">
                * Prices and services subject to change. Additional time may be required for services performed by students.
              </p>
              <Button variant="default" className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
                Download Complete Service Menu
              </Button>
            </div>
          </div>
        </section>

        {/* Booking Information */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                <span className="text-sm font-medium">Visit Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Hours & <span className="text-gold">Location</span>
              </h2>
              <p className="text-gray-600">
                Our student clinic is conveniently located at our main campus with ample parking.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-soft">
                <h3 className="text-xl font-playfair font-bold mb-6">Clinic Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Monday - Wednesday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Thursday - Friday</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-playfair font-bold mt-8 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">clinic@canadianmasters.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">123 Beauty Lane, Toronto, ON M5V 2K7</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-soft">
                <h3 className="text-xl font-playfair font-bold mb-6">Booking Information</h3>
                <p className="text-gray-700 mb-6">
                  To ensure the best experience, please keep the following in mind when booking:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-gold font-medium text-sm">1</span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">Book in advance.</span> Our appointments fill quickly, especially for popular services.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-gold font-medium text-sm">2</span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">Allow extra time.</span> Services may take longer than in a professional spa as students are learning.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-gold font-medium text-sm">3</span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">Arrive 15 minutes early.</span> This allows time for consultation and paperwork.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-gold font-medium text-sm">4</span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">Provide feedback.</span> Your comments help our students grow and improve.
                    </p>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Button size="lg" className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
                    Book an Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-rosegold/20 text-rosegold-dark mb-4">
                <span className="text-sm font-medium">Client Experiences</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Client <span className="text-gold">Testimonials</span>
              </h2>
              <p className="text-gray-600">
                Hear what our clients have to say about their experiences at our student clinic.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all border border-transparent hover:border-gold/10"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-gold' : 'text-gray-200'}`} 
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                <span className="text-sm font-medium">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Frequently Asked <span className="text-gold">Questions</span>
              </h2>
              <p className="text-gray-600">
                Find answers to common questions about our student clinic services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-soft p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <HelpCircle className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-playfair font-semibold mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">Have more questions? We're happy to help!</p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold/5">
                  Contact the Clinic
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-gold/5 to-rosegold/5">
          <div className="container mx-auto">
            <div className="bg-white p-10 md:p-16 rounded-2xl shadow-elegant max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                  Ready for Your <span className="text-gold">Treatment</span>?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Book your appointment today and experience quality esthetics services at student prices.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
                  Book an Appointment <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold/5">
                  View Service Menu
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

export default StudentClinic; 