import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, FileText, Scissors, ShoppingBag, GraduationCap, Users, HelpCircle, Clock, MapPin } from 'lucide-react';

const StudentResources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resourceCategories = [
    {
      title: 'Academic Resources',
      description: 'Access course materials, schedules, and academic support services.',
      icon: <BookOpen className="h-6 w-6 text-gold" />,
      resources: [
        { name: 'Course Materials', link: '/resources/course-materials' },
        { name: 'Academic Calendar', link: '/resources/calendar' },
        { name: 'Student Handbook', link: '/resources/handbook' },
        { name: 'Library Resources', link: '/resources/library' },
      ]
    },
    {
      title: 'Equipment & Supplies',
      description: 'Information about required tools, products, and where to purchase them.',
      icon: <ShoppingBag className="h-6 w-6 text-gold" />,
      resources: [
        { name: 'Equipment Lists', link: '/resources/equipment' },
        { name: 'Recommended Suppliers', link: '/resources/suppliers' },
        { name: 'Student Discounts', link: '/resources/discounts' },
        { name: 'Care & Maintenance', link: '/resources/maintenance' },
      ]
    },
    {
      title: 'Career Services',
      description: 'Resources to help you prepare for and succeed in your esthetics career.',
      icon: <GraduationCap className="h-6 w-6 text-gold" />,
      resources: [
        { name: 'Job Board', link: '/resources/jobs' },
        { name: 'Resume Templates', link: '/resources/resumes' },
        { name: 'Interview Preparation', link: '/resources/interviews' },
        { name: 'Industry Connections', link: '/resources/industry' },
      ]
    },
    {
      title: 'Student Support',
      description: 'Access to counseling, tutoring, and other support services.',
      icon: <Users className="h-6 w-6 text-gold" />,
      resources: [
        { name: 'Tutoring Services', link: '/resources/tutoring' },
        { name: 'Counseling', link: '/resources/counseling' },
        { name: 'Accessibility Services', link: '/resources/accessibility' },
        { name: 'Financial Aid Support', link: '/resources/financial-support' },
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'Industry Guest Speaker: Skincare Innovations',
      date: 'June 15, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Main Auditorium'
    },
    {
      title: 'Career Fair: Summer 2024',
      date: 'July 10, 2024',
      time: '10:00 AM - 3:00 PM',
      location: 'Exhibition Hall'
    },
    {
      title: 'Workshop: Advanced Makeup Techniques',
      date: 'July 25, 2024',
      time: '1:00 PM - 5:00 PM',
      location: 'Studio B'
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
              Student <span className="text-gold">Resources</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
              Access the tools, materials, and support you need to succeed in your esthetics education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
                Student Portal Login <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold/5">
                Contact Student Services
              </Button>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                <span className="text-sm font-medium">Support for Success</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Resources for <span className="text-gold">Students</span>
              </h2>
              <p className="text-gray-600">
                Everything you need to excel in your studies and prepare for your career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-soft hover:shadow-elegant transition-all border border-transparent hover:border-gold/10"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-playfair font-bold">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.resources.map((resource, idx) => (
                      <li key={idx}>
                        <Link 
                          to={resource.link}
                          className="flex items-center text-gray-700 hover:text-gold transition-colors"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-gold" />
                          <span>{resource.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Handbook Highlight */}
        <section className="py-20 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-rosegold/20 text-rosegold-dark mb-4">
                  <span className="text-sm font-medium">Essential Guide</span>
                </div>
                <h2 className="text-3xl font-playfair font-bold mb-6">
                  Student <span className="text-gold">Handbook</span>
                </h2>
                <p className="text-gray-700 mb-4">
                  Our comprehensive student handbook contains all the information you need about 
                  policies, procedures, and expectations at Canadian Masters Academy.
                </p>
                <p className="text-gray-700 mb-6">
                  From attendance requirements to grading policies, this is your go-to resource 
                  for navigating your educational journey with us.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <FileText className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium">Academic Policies</p>
                      <p className="text-sm text-gray-600">Attendance, grading, and academic integrity</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <Calendar className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium">Important Dates</p>
                      <p className="text-sm text-gray-600">Academic calendar and scheduling information</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <HelpCircle className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium">Support Services</p>
                      <p className="text-sm text-gray-600">How to access help when you need it</p>
                    </div>
                  </div>
                </div>
                <Button variant="default" className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">Download Handbook</Button>
              </div>
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-rosegold/20 z-0"></div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-gold/10 z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Students studying together" 
                  className="rounded-xl shadow-elegant relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Equipment & Supplies */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                <span className="text-sm font-medium">Tools for Success</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Equipment & <span className="text-gold">Supplies</span>
              </h2>
              <p className="text-gray-600">
                Quality tools are essential for mastering esthetics techniques. Here's what you'll need for your program.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-elegant mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                  <Scissors className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-playfair font-bold">Student Kit Information</h3>
              </div>
              <p className="text-gray-700 mb-6">
                All full-time diploma students receive a comprehensive kit containing professional-grade 
                tools and products needed for your training. Certificate program students may purchase 
                specialized kits relevant to their course.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gold/10 rounded-lg p-4 hover:bg-gold/5 transition-colors">
                  <h4 className="font-semibold mb-2">Diploma Program Kit</h4>
                  <p className="text-sm text-gray-600 mb-2">Comprehensive kit with all essential tools</p>
                  <span className="text-gold font-medium">Included in tuition</span>
                </div>
                <div className="border border-gold/10 rounded-lg p-4 hover:bg-gold/5 transition-colors">
                  <h4 className="font-semibold mb-2">Certificate Program Kits</h4>
                  <p className="text-sm text-gray-600 mb-2">Specialized tools for specific courses</p>
                  <span className="text-gold font-medium">$350 - $750</span>
                </div>
                <div className="border border-gold/10 rounded-lg p-4 hover:bg-gold/5 transition-colors">
                  <h4 className="font-semibold mb-2">Textbooks & Materials</h4>
                  <p className="text-sm text-gray-600 mb-2">Required reading and reference materials</p>
                  <span className="text-gold font-medium">$200 - $400</span>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold/5">
                  View Detailed Equipment Lists
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Need to restock supplies? Visit our on-campus store or shop with our partner retailers for student discounts.
              </p>
              <Button variant="default" className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">Student Discount Program</Button>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-rosegold/20 text-rosegold-dark mb-4">
                <span className="text-sm font-medium">Mark Your Calendar</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Upcoming <span className="text-gold">Events</span>
              </h2>
              <p className="text-gray-600">
                Enhance your education with special workshops, guest speakers, and networking opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 border border-transparent hover:border-gold/10"
                >
                  <div className="text-gold font-medium mb-2">{event.date}</div>
                  <h3 className="text-xl font-playfair font-semibold mb-3">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Clock className="h-4 w-4 mr-2 text-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2 text-gold" />
                    <span>{event.location}</span>
                  </div>
                  <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/5">
                    Add to Calendar
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/events" className="inline-flex items-center text-gold font-medium hover:underline">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-gold/10 to-rosegold/10 p-10 md:p-16 rounded-2xl shadow-elegant max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                  Need <span className="text-gold">Help</span>?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our student support team is here to assist you with any questions or concerns.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
                  Contact Student Services
                </Button>
                <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold/5">
                  FAQ
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

export default StudentResources; 