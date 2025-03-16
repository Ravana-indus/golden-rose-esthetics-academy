
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import Button from '@/components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, CalendarCheck, DollarSign, GraduationCap, CheckCircle2 } from 'lucide-react';

const Admissions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rosegold/20 to-white py-16 md:py-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-right opacity-10"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603217040300-951627e6e802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')" }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Begin Your Journey With Us</h1>
            <p className="text-lg md:text-xl mb-8">
              Our admissions process is designed to identify passionate individuals with the potential to excel in the beauty and wellness industry. We look forward to helping you take the first step toward your new career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Apply Now
              </Button>
              <Button variant="outline" size="lg">
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-semibold mb-4">Your Admissions Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these steps to join our academy and begin your professional education in beauty arts and wellness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-16 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-rosegold/30 z-0"></div>
          
          {/* Step 1 */}
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-rosegold flex items-center justify-center mb-4 shadow-md">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-soft w-full">
                <h3 className="font-semibold text-lg mb-2">1. Submit Application</h3>
                <p className="text-muted-foreground text-sm">
                  Complete our online application form with your personal information and program of interest.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-rosegold flex items-center justify-center mb-4 shadow-md">
                <CalendarCheck className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-soft w-full">
                <h3 className="font-semibold text-lg mb-2">2. Interview</h3>
                <p className="text-muted-foreground text-sm">
                  Schedule a personal or virtual interview with our admissions team to discuss your goals.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-rosegold flex items-center justify-center mb-4 shadow-md">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-soft w-full">
                <h3 className="font-semibold text-lg mb-2">3. Financial Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Meet with our financial aid office to explore scholarships, payment plans, and funding options.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-rosegold flex items-center justify-center mb-4 shadow-md">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-soft w-full">
                <h3 className="font-semibold text-lg mb-2">4. Enrollment</h3>
                <p className="text-muted-foreground text-sm">
                  Receive your acceptance letter, sign enrollment agreement, and prepare for your first day.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <Button>
            Download Detailed Admissions Guide
          </Button>
        </div>
      </div>
      
      {/* Requirements & FAQ */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="requirements" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="requirements">Admission Requirements</TabsTrigger>
              <TabsTrigger value="faq">Common Questions</TabsTrigger>
            </TabsList>
            <TabsContent value="requirements">
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair">Program Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-rosegold-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Minimum Age</h4>
                        <p className="text-muted-foreground">Applicants must be at least 18 years of age by the program start date.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-rosegold-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Education</h4>
                        <p className="text-muted-foreground">High school diploma or equivalent (GED) is required. Official transcripts must be submitted.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-rosegold-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Interview</h4>
                        <p className="text-muted-foreground">All applicants must complete a personal interview with our admissions team.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-rosegold-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">English Proficiency</h4>
                        <p className="text-muted-foreground">For non-native English speakers, proof of English proficiency may be required.</p>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 border border-rosegold/30 rounded-lg bg-rosegold/5">
                      <h3 className="font-medium mb-2">International Students</h3>
                      <p className="mb-4">
                        We welcome international students who meet our admission requirements. Additional documentation including visa information and international credentials evaluation may be required.
                      </p>
                      <Button variant="outline">International Student Guide</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>When should I apply?</AccordionTrigger>
                      <AccordionContent>
                        We recommend applying 3-6 months before your desired start date. Our programs have limited enrollment to ensure quality education, and spaces fill quickly. Applications are reviewed on a rolling basis until all positions are filled.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is financial aid available?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we offer various financial aid options including scholarships, grants, payment plans, and loan programs. Our financial aid office works individually with each student to create a personalized funding plan based on your situation.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Can I transfer credits from another institution?</AccordionTrigger>
                      <AccordionContent>
                        We evaluate transfer credits on a case-by-case basis. Credits may be accepted from accredited institutions if the coursework aligns with our curriculum. Documentation of previous coursework and assessment of skills may be required.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger>What is the application fee?</AccordionTrigger>
                      <AccordionContent>
                        The application fee is $75 CAD (non-refundable). This fee helps cover the cost of processing your application, scheduling interviews, and assessing eligibility. The fee can be waived for applicants with financial hardship.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Do you offer housing assistance?</AccordionTrigger>
                      <AccordionContent>
                        While we don't provide on-campus housing, our student services team offers guidance in finding accommodations near campus. We maintain relationships with local housing providers and can provide resources for students relocating to the area.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-6">
                      <AccordionTrigger>Is there an age limit for applicants?</AccordionTrigger>
                      <AccordionContent>
                        Applicants must be at least 18 years of age by the program start date. There is no upper age limit, and we welcome students from diverse backgrounds and life stages who wish to pursue a career in esthetics or cosmetology.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-rosegold/30 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-playfair text-3xl font-semibold mb-4">Ready to Begin Your Application?</h2>
            <p className="text-lg mb-8">
              Our admissions team is ready to guide you through every step of the process. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Apply Now
              </Button>
              <Button variant="secondary" size="lg">
                Schedule a Campus Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admissions;
