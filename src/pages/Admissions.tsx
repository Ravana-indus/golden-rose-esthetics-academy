import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, FileText, HelpCircle, CheckCircle, DollarSign, Award } from 'lucide-react';

const Admissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const admissionSteps = [
    {
      number: '01',
      title: 'Research Programs',
      description: 'Explore our programs to find the one that aligns with your career goals and interests.',
      icon: <FileText className="h-6 w-6 text-gold" />
    },
    {
      number: '02',
      title: 'Submit Application',
      description: 'Complete our online application form with your personal information and program selection.',
      icon: <CheckCircle className="h-6 w-6 text-gold" />
    },
    {
      number: '03',
      title: 'Interview',
      description: 'Meet with our admissions team to discuss your goals and ensure our program is the right fit.',
      icon: <HelpCircle className="h-6 w-6 text-gold" />
    },
    {
      number: '04',
      title: 'Enrollment',
      description: 'Upon acceptance, complete enrollment paperwork and arrange tuition payment.',
      icon: <DollarSign className="h-6 w-6 text-gold" />
    }
  ];

  const faqItems = [
    {
      question: 'What are the admission requirements?',
      answer: 'Our basic requirements include a high school diploma or equivalent, minimum age of 18, and a passion for esthetics. Some advanced programs may have additional prerequisites.'
    },
    {
      question: 'When can I apply?',
      answer: 'We accept applications year-round. However, we recommend applying at least 2-3 months before your desired start date to ensure placement in your preferred program.'
    },
    {
      question: 'Is financial aid available?',
      answer: 'Yes, we offer various financial aid options including payment plans, scholarships, and assistance with government student aid applications.'
    },
    {
      question: 'Can I transfer credits from another institution?',
      answer: 'We evaluate transfer credits on a case-by-case basis. Please provide your previous transcripts and course descriptions during the application process.'
    },
    {
      question: 'Do you offer part-time programs?',
      answer: 'Yes, many of our certificate programs are available in part-time formats, with evening and weekend options to accommodate working professionals.'
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
              <span className="text-gold">Admissions</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
              Begin your journey to becoming a skilled esthetics professional. 
              Our admissions team is here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold/5">
                Request Information
              </Button>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                <span className="text-sm font-medium">How to Apply</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Your Path to <span className="text-gold">Enrollment</span>
              </h2>
              <p className="text-gray-600">
                Our streamlined application process makes it easy to begin your esthetics education journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {admissionSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 border border-transparent hover:border-gold/10"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-playfair font-bold text-gold/30">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements & Deadlines */}
        <section className="py-20 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Requirements */}
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-soft hover:shadow-elegant transition-shadow">
                <h3 className="text-2xl font-playfair font-bold mb-6">Admission Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">High School Diploma or Equivalent</p>
                      <p className="text-sm text-gray-600">Official transcripts required</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Minimum Age of 18</p>
                      <p className="text-sm text-gray-600">Valid government ID required</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Personal Statement</p>
                      <p className="text-sm text-gray-600">Explaining your interest in esthetics</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Interview</p>
                      <p className="text-sm text-gray-600">In-person or virtual with admissions team</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Application Fee</p>
                      <p className="text-sm text-gray-600">$75 CAD (non-refundable)</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Important Dates */}
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-soft hover:shadow-elegant transition-shadow">
                <h3 className="text-2xl font-playfair font-bold mb-6">Important Dates</h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-100 pb-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-gold mr-2" />
                      <h4 className="font-semibold">Spring 2024 Intake</h4>
                    </div>
                    <div className="ml-7 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Application Deadline</span>
                        <span className="font-medium">March 15, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Classes Begin</span>
                        <span className="font-medium">May 2, 2024</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b border-gray-100 pb-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-gold mr-2" />
                      <h4 className="font-semibold">Fall 2024 Intake</h4>
                    </div>
                    <div className="ml-7 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Application Deadline</span>
                        <span className="font-medium">July 31, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Classes Begin</span>
                        <span className="font-medium">September 10, 2024</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-gold mr-2" />
                      <h4 className="font-semibold">Winter 2025 Intake</h4>
                    </div>
                    <div className="ml-7 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Application Deadline</span>
                        <span className="font-medium">November 30, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Classes Begin</span>
                        <span className="font-medium">January 15, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tuition & Financial Aid */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                <span className="text-sm font-medium">Investment in Your Future</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Tuition & <span className="text-gold">Financial Aid</span>
              </h2>
              <p className="text-gray-600">
                We offer various payment options and financial assistance to help make your education accessible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-6">Program Tuition</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gold/10 rounded-lg hover:bg-gold/5 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Complete Esthetics Diploma</h4>
                      <span className="text-gold font-bold">$12,500 CAD</span>
                    </div>
                    <p className="text-sm text-gray-600">Includes all course materials and student kit</p>
                  </div>
                  
                  <div className="p-4 border border-gold/10 rounded-lg hover:bg-gold/5 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Certificate Programs</h4>
                      <span className="text-gold font-bold">$2,500 - $4,500 CAD</span>
                    </div>
                    <p className="text-sm text-gray-600">Varies by program length and specialization</p>
                  </div>
                  
                  <div className="p-4 border border-gold/10 rounded-lg hover:bg-gold/5 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Advanced Esthetics Programs</h4>
                      <span className="text-gold font-bold">$6,800 - $9,500 CAD</span>
                    </div>
                    <p className="text-sm text-gray-600">Includes specialized equipment and materials</p>
                  </div>
                </div>
                
                <p className="mt-6 text-sm text-gray-600">
                  * Additional fees may apply for international students. All tuition is subject to change.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-6">Financial Assistance</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <DollarSign className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Payment Plans</h4>
                      <p className="text-gray-600">Spread your tuition over monthly installments with our flexible payment options.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Award className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Scholarships</h4>
                      <p className="text-gray-600">Merit-based scholarships available for exceptional applicants. Application required.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Government Student Aid</h4>
                      <p className="text-gray-600">Our programs qualify for various government student loan programs. Our financial aid office can assist with applications.</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="mt-8 border-gold text-gold hover:bg-gold/5">
                  Financial Aid Information
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-rosegold/20 text-rosegold-dark mb-4">
                <span className="text-sm font-medium">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Frequently Asked <span className="text-gold">Questions</span>
              </h2>
              <p className="text-gray-600">
                Find answers to common questions about our admissions process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-soft p-6">
                    <h3 className="text-xl font-playfair font-semibold mb-3">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">Don't see your question? Contact our admissions team.</p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold/5">
                  Contact Admissions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-gold/10 to-rosegold/10 p-10 md:p-16 rounded-2xl shadow-elegant max-w-4xl mx-auto">
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
                  Schedule a Tour
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

export default Admissions; 