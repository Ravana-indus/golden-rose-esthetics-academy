
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';
import { Award, BookOpen, Users, Heart, CheckCircle, Building } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <BookOpen className="h-6 w-6 text-gold" />,
      title: "Excellence in Education",
      description: "We maintain the highest standards in our curriculum and teaching methodologies."
    },
    {
      icon: <Users className="h-6 w-6 text-gold" />,
      title: "Student-Centered Approach",
      description: "Our programs are designed with your success and growth at the forefront."
    },
    {
      icon: <Heart className="h-6 w-6 text-gold" />,
      title: "Passion for Beauty",
      description: "We foster creativity and a genuine love for the art and science of esthetics."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-gold" />,
      title: "Professional Integrity",
      description: "We uphold ethical standards and responsibility in all our practices."
    },
    {
      icon: <Building className="h-6 w-6 text-gold" />,
      title: "Industry Connection",
      description: "We maintain strong ties with industry leaders to keep our education relevant."
    },
    {
      icon: <Award className="h-6 w-6 text-gold" />,
      title: "Continuous Innovation",
      description: "We constantly evolve our programs to include the latest techniques and technologies."
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
              About <span className="text-gold">Canadian Masters</span> Academy
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
              We are dedicated to providing excellence in esthetics education, 
              empowering students to achieve their full potential and transform 
              their passion into successful careers.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                  <span className="text-sm font-medium">Our Story</span>
                </div>
                <h2 className="text-3xl font-playfair font-bold mb-6">
                  Excellence in Esthetics <span className="text-gold">Since 2010</span>
                </h2>
                <p className="text-gray-700 mb-4">
                  Canadian Masters Academy was founded with a vision to elevate the standard of esthetics education in Canada. 
                  Starting as a small specialized school, we have grown into one of the country's leading institutions for 
                  cosmetology studies.
                </p>
                <p className="text-gray-700 mb-6">
                  Our journey has been guided by our commitment to combine traditional techniques with innovative approaches, 
                  ensuring our graduates are not just trained for today's industry needs but are prepared to lead the 
                  beauty industry into the future.
                </p>
                <Button variant="primary">Our Accreditations</Button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-rosegold/20 z-0"></div>
                  <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-gold/10 z-0"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Canadian Masters Academy team" 
                    className="rounded-xl shadow-elegant relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-soft hover:shadow-elegant transition-shadow">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <span className="text-gold text-2xl font-playfair font-bold">M</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  To empower aspiring estheticians with exceptional education that blends artistry, 
                  science, and professional practice, enabling them to excel in the beauty industry.
                </p>
                <p className="text-gray-700">
                  We are committed to fostering a supportive learning environment where creativity flourishes, 
                  technical skills are mastered, and business acumen is developed.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-soft hover:shadow-elegant transition-shadow">
                <div className="w-16 h-16 rounded-full bg-rosegold/20 flex items-center justify-center mb-6">
                  <span className="text-rosegold-dark text-2xl font-playfair font-bold">V</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-4">
                  To be recognized as Canada's premier institution for esthetics education, 
                  renowned for producing graduates who lead and innovate in the beauty industry.
                </p>
                <p className="text-gray-700">
                  We aspire to set new standards of excellence in cosmetology education, continually 
                  evolving our curriculum to reflect emerging techniques and technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                <span className="text-sm font-medium">What Guides Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Our Core <span className="text-gold">Values</span>
              </h2>
              <p className="text-gray-600">
                These principles guide everything we do, from curriculum development to student support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 border border-transparent hover:border-gold/10"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section - Teaser */}
        <section className="py-20 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-rosegold/20 text-rosegold-dark mb-4">
              <span className="text-sm font-medium">Meet Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Learn from Industry <span className="text-gold">Experts</span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 mb-8">
              Our faculty brings decades of combined experience from various sectors of the beauty industry, 
              providing you with practical knowledge and valuable insights.
            </p>
            <Button variant="primary">Meet Our Faculty</Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 bg-gold/5 border-t border-b border-gold/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Ready to Begin Your <span className="text-gold">Journey</span>?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-700 mb-8">
              Take the first step toward your career in esthetics. Explore our programs, 
              visit our campus, or speak with our admissions team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Apply Now
              </Button>
              <Button variant="outline" size="lg">
                Request Information
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
