
import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedPrograms from '../components/home/FeaturedPrograms';
import Testimonials from '../components/home/Testimonials';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, BookOpen, Users, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Programs Section */}
      <FeaturedPrograms />
      
      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              The Canadian Masters <span className="text-gold">Advantage</span>
            </h2>
            <p className="text-gray-600">
              We combine traditional techniques with cutting-edge innovation to provide 
              an unmatched educational experience in esthetics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience and expertise.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Class Sizes</h3>
              <p className="text-gray-600">Enjoy personalized attention with our limited enrollment and hands-on approach.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accredited Programs</h3>
              <p className="text-gray-600">All our programs are nationally recognized and meet industry standards.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Schedules</h3>
              <p className="text-gray-600">Choose from day, evening, and weekend classes to fit your lifestyle.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-rosegold/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="bg-white p-10 md:p-16 rounded-2xl shadow-elegant border border-gold/10 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Ready to Begin Your <span className="text-gold">Journey</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take the first step toward your future in esthetics. Apply now or request more information about our programs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold/5">
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Courses Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                <span className="text-sm font-medium">Start Your Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                Upcoming <span className="text-gold">Courses</span>
              </h2>
            </div>
            <Link to="/programs" className="mt-4 md:mt-0 group flex items-center text-gold font-medium">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white rounded-xl shadow-soft hover:shadow-elegant transition-all border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-gold font-medium mb-2">Starting June 15, 2024</div>
                <h3 className="text-xl font-semibold mb-2">Complete Esthetics Diploma</h3>
                <p className="text-gray-600 mb-4">Full-time program covering all aspects of esthetics for a comprehensive career preparation.</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">9 Months</span>
                  <Link to="/programs/diploma" className="text-gold hover:text-amber-600 flex items-center font-medium">
                    Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Course 2 */}
            <div className="bg-white rounded-xl shadow-soft hover:shadow-elegant transition-all border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-gold font-medium mb-2">Starting July 10, 2024</div>
                <h3 className="text-xl font-semibold mb-2">Skin Care Specialist</h3>
                <p className="text-gray-600 mb-4">Focused certificate program on advanced skin analysis and treatment techniques.</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">4 Months</span>
                  <Link to="/programs/certificates" className="text-gold hover:text-amber-600 flex items-center font-medium">
                    Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Course 3 */}
            <div className="bg-white rounded-xl shadow-soft hover:shadow-elegant transition-all border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-gold font-medium mb-2">Starting August 5, 2024</div>
                <h3 className="text-xl font-semibold mb-2">Makeup Artistry</h3>
                <p className="text-gray-600 mb-4">Learn professional makeup techniques for various occasions and industries.</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">3 Months</span>
                  <Link to="/programs/certificates" className="text-gold hover:text-amber-600 flex items-center font-medium">
                    Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
