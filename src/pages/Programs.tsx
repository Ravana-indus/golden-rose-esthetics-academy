
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';
import { ArrowRight, Clock, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programCategories = [
    {
      id: 'diploma',
      title: 'Complete Esthetics Diploma',
      description: 'Our comprehensive diploma program covers all aspects of esthetics, preparing you for a successful career in the beauty industry.',
      duration: '12 months full-time',
      startDates: 'January, May, September',
      certification: 'Accredited Diploma',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      link: '/programs/diploma'
    },
    {
      id: 'certificates',
      title: 'Certificate Programs',
      description: 'Specialized certificate courses focusing on specific areas of esthetics, perfect for targeted skill development or career enhancement.',
      duration: '3-6 months part-time',
      startDates: 'Monthly intakes',
      certification: 'Specialized Certificates',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      link: '/programs/certificates'
    },
    {
      id: 'advanced',
      title: 'Advanced Esthetics Programs',
      description: 'Take your skills to the next level with our advanced techniques and specialist training for experienced professionals.',
      duration: '6-9 months flexible',
      startDates: 'Quarterly intakes',
      certification: 'Advanced Specialist Certification',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
      link: '/programs/advanced'
    }
  ];

  const certificateCourses = [
    {
      id: 'skincare',
      title: 'Skin Care Specialist',
      duration: '6 months',
      description: 'Master the art of skin analysis, treatments, and advanced care techniques.',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'makeup',
      title: 'Makeup Artistry',
      duration: '4 months',
      description: 'Develop professional makeup application skills for various occasions and settings.',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80'
    },
    {
      id: 'nails',
      title: 'Nail Technician',
      duration: '3 months',
      description: 'Learn nail care, enhancement techniques, and artistic nail design.',
      image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'hair',
      title: 'Hair Removal Techniques',
      duration: '3 months',
      description: 'Master various methods of hair removal including waxing, threading, and sugaring.',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
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
              Our <span className="text-gold">Programs</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
              Discover our diverse range of esthetics programs designed to prepare you 
              for a successful career in the beauty industry.
            </p>
          </div>
        </section>

        {/* Program Categories */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                <span className="text-sm font-medium">Educational Pathways</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Choose Your <span className="text-gold">Path</span>
              </h2>
              <p className="text-gray-600">
                Whether you're starting your journey or advancing your career, 
                we offer programs to suit your goals and schedule.
              </p>
            </div>

            <div className="space-y-12">
              {programCategories.map((program, index) => (
                <div 
                  key={program.id} 
                  className={`grid md:grid-cols-5 gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:col-span-3 order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {program.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-gold" />
                        <div>
                          <p className="text-sm font-medium">Duration</p>
                          <p className="text-sm text-gray-600">{program.duration}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-gold" />
                        <div>
                          <p className="text-sm font-medium">Start Dates</p>
                          <p className="text-sm text-gray-600">{program.startDates}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-gold" />
                        <div>
                          <p className="text-sm font-medium">Certification</p>
                          <p className="text-sm text-gray-600">{program.certification}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link to={program.link}>
                      <Button variant="primary" className="group">
                        <span>Explore Program</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="md:col-span-2 order-1 md:order-2">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-20 h-20 md:w-32 md:h-32 rounded-full bg-gold/5 z-0"></div>
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="rounded-xl shadow-elegant relative z-10 aspect-[4/3] object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificate Courses Preview */}
        <section className="py-20 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-rosegold/20 text-rosegold-dark mb-4">
                <span className="text-sm font-medium">Specialized Training</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Certificate <span className="text-gold">Courses</span>
              </h2>
              <p className="text-gray-600">
                Focused programs designed to develop specific skills and expertise in various esthetics specialties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certificateCourses.map((course) => (
                <Link 
                  key={course.id} 
                  to={`/programs/certificates/${course.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all hover:-translate-y-1 hover:shadow-elegant">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-playfair font-bold text-lg">{course.title}</h3>
                        <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded-full">
                          {course.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                      <div className="flex items-center text-gold font-medium text-sm group-hover:underline">
                        <span>View Details</span>
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Admissions CTA */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="bg-white rounded-xl shadow-elegant p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-playfair font-bold mb-4">
                    Ready to <span className="text-gold">Apply</span>?
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Take the next step in your esthetics career. Our admissions team 
                    is here to guide you through the application process and answer any questions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary">
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      Contact Admissions
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gold/5 z-0"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2131&q=80" 
                    alt="Students in esthetics class" 
                    className="rounded-xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Programs;
