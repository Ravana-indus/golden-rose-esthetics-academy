
import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Button from '@/components/common/Button';
import { Calendar, Clock, GraduationCap, Lightbulb, Users, Award, BookOpen } from 'lucide-react';

// Mock data - normally you would fetch this from an API
const programsData = {
  'esthetics': {
    id: 'esthetics',
    title: 'Advanced Esthetics',
    subtitle: 'Professional Certification Program',
    description: 'Our Advanced Esthetics program provides comprehensive training in facial treatments, body care, makeup application, and business management. Graduates are prepared for careers in spas, salons, and medical settings.',
    duration: '12 months',
    schedule: 'Full-time and part-time options available',
    startDates: ['January 15, 2024', 'May 20, 2024', 'September 5, 2024'],
    tuition: '$9,500 CAD',
    certifications: ['Professional Esthetician Certificate', 'Spa Therapist Certification'],
    highlights: [
      'Hands-on training with professional-grade equipment and products',
      'Internship opportunities with leading spas and medical esthetics clinics',
      'Business and client management training',
      'Portfolio development and job placement assistance'
    ],
    curriculum: [
      { module: 'Skin Analysis & Care', duration: '6 weeks', description: 'Learn to analyze skin types and conditions to provide personalized treatments' },
      { module: 'Facial Treatments', duration: '8 weeks', description: 'Master various facial techniques including chemical peels and microdermabrasion' },
      { module: 'Body Treatments', duration: '6 weeks', description: 'Develop skills in body wraps, scrubs, and specialized massage techniques' },
      { module: 'Makeup Artistry', duration: '5 weeks', description: 'Learn color theory and application techniques for different occasions' },
      { module: 'Medical Esthetics', duration: '8 weeks', description: 'Introduction to advanced procedures in medical settings' },
      { module: 'Business Operations', duration: '4 weeks', description: 'Develop entrepreneurial skills including marketing and client retention' },
      { module: 'Internship', duration: '8 weeks', description: 'Real-world experience in a professional setting' }
    ],
    careersPath: [
      'Esthetician in luxury spas and resorts',
      'Medical esthetician in dermatology clinics',
      'Makeup artist for special events and productions',
      'Spa manager or owner',
      'Product educator or representative',
      'Skincare consultant'
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  'cosmetology': {
    id: 'cosmetology',
    title: 'Master Cosmetology',
    subtitle: 'Comprehensive Beauty Arts Program',
    description: 'The Master Cosmetology program offers extensive training in hair styling, coloring, skin care, nail technology, and salon business operations. Our graduates excel in versatile beauty industry roles.',
    duration: '18 months',
    schedule: 'Full-time program with flexible practicum hours',
    startDates: ['February 1, 2024', 'June 10, 2024', 'October 15, 2024'],
    tuition: '$12,800 CAD',
    certifications: ['Master Cosmetologist License', 'Hair Color Specialist Certification'],
    highlights: [
      'Training on diverse hair types and textures',
      'Advanced color theory and application techniques',
      'Modern cutting and styling methodologies',
      'Salon management and client relations',
      'Portfolio development with professional photoshoots'
    ],
    curriculum: [
      { module: 'Hair Structure & Analysis', duration: '4 weeks', description: 'Understanding hair biology and assessment techniques' },
      { module: 'Cutting Techniques', duration: '10 weeks', description: 'Master precision cuts and contemporary styling' },
      { module: 'Color Theory & Application', duration: '12 weeks', description: 'Learn formulation, correction, and creative techniques' },
      { module: 'Texture Services', duration: '6 weeks', description: 'Perming, relaxing, and smoothing treatments' },
      { module: 'Skin Care Essentials', duration: '6 weeks', description: 'Basic facial techniques and product knowledge' },
      { module: 'Nail Technology', duration: '5 weeks', description: 'Manicure, pedicure, and nail enhancement skills' },
      { module: 'Salon Operations', duration: '6 weeks', description: 'Business planning, marketing, and retail strategies' },
      { module: 'Professional Practicum', duration: '12 weeks', description: 'Supervised practical experience' }
    ],
    careersPath: [
      'Hair stylist or colorist',
      'Salon or spa manager',
      'Platform artist or educator',
      'Image consultant',
      'Editorial stylist for magazines',
      'Salon owner or entrepreneur',
      'Product development specialist'
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  'makeup': {
    id: 'makeup',
    title: 'Professional Makeup Artistry',
    subtitle: 'Creative Makeup Design & Application',
    description: 'Our Professional Makeup Artistry program develops technical skills and artistic vision for diverse makeup applications. Students learn beauty, editorial, special effects, and bridal makeup techniques.',
    duration: '9 months',
    schedule: 'Full-time or evening/weekend options',
    startDates: ['March 1, 2024', 'July 15, 2024', 'November 10, 2024'],
    tuition: '$8,200 CAD',
    certifications: ['Professional Makeup Artist Certificate', 'Airbrush Makeup Specialist'],
    highlights: [
      'Training with professional-grade products and tools',
      'Portfolio development with professional photographers',
      'Guest lectures from industry professionals',
      'Business skills for freelance success',
      'Fashion show and photo shoot experiences'
    ],
    curriculum: [
      { module: 'Color Theory & Face Shapes', duration: '4 weeks', description: 'Fundamentals of color and facial structure analysis' },
      { module: 'Beauty Makeup Techniques', duration: '7 weeks', description: 'Classic and contemporary beauty applications' },
      { module: 'Bridal & Special Occasion', duration: '5 weeks', description: 'Long-lasting techniques for important events' },
      { module: 'Airbrush Makeup', duration: '4 weeks', description: 'Mastering airbrush applications for flawless finish' },
      { module: 'Editorial & Fashion', duration: '6 weeks', description: 'Creative applications for photography and runway' },
      { module: 'Period & Character', duration: '5 weeks', description: 'Historical and character-based designs' },
      { module: 'Special Effects Basics', duration: '4 weeks', description: 'Introduction to prosthetics and special effects' },
      { module: 'Business & Marketing', duration: '3 weeks', description: 'Building your brand and client base' },
      { module: 'Final Portfolio Project', duration: '4 weeks', description: 'Creating professional-quality portfolio work' }
    ],
    careersPath: [
      'Bridal makeup specialist',
      'Editorial makeup artist',
      'Film and television makeup artist',
      'Special effects makeup artist',
      'Cosmetic company representative',
      'Makeup educator or trainer',
      'Personal makeup consultant'
    ],
    image: 'https://images.unsplash.com/photo-1457972851104-4fd469440bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
};

const ProgramDetail = () => {
  const { programId = 'esthetics' } = useParams<{ programId: string }>();
  const program = programsData[programId as keyof typeof programsData] || programsData.esthetics;

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${program.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-rosegold/20 border border-rosegold/30 backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-wide text-white">
                {program.subtitle}
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
              {program.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Program Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-lg leading-relaxed">{program.description}</p>
            </div>

            <div className="mb-12">
              <Tabs defaultValue="curriculum" className="w-full">
                <TabsList className="w-full border-b justify-start rounded-none bg-transparent mb-6 space-x-6">
                  <TabsTrigger value="curriculum" className="data-[state=active]:border-b-2 data-[state=active]:border-rosegold rounded-none data-[state=active]:shadow-none font-medium">
                    Curriculum
                  </TabsTrigger>
                  <TabsTrigger value="careers" className="data-[state=active]:border-b-2 data-[state=active]:border-rosegold rounded-none data-[state=active]:shadow-none font-medium">
                    Career Opportunities
                  </TabsTrigger>
                  <TabsTrigger value="schedule" className="data-[state=active]:border-b-2 data-[state=active]:border-rosegold rounded-none data-[state=active]:shadow-none font-medium">
                    Schedule & Dates
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="curriculum" className="mt-0">
                  <div className="space-y-8">
                    <h2 className="text-2xl font-playfair font-semibold mb-4">Program Modules</h2>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Module</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead className="hidden md:table-cell">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {program.curriculum.map((module, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{module.module}</TableCell>
                            <TableCell>{module.duration}</TableCell>
                            <TableCell className="hidden md:table-cell">{module.description}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                <TabsContent value="careers" className="mt-0">
                  <div className="space-y-8">
                    <h2 className="text-2xl font-playfair font-semibold mb-4">Career Opportunities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {program.careersPath.map((career, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 bg-rosegold/20 p-1.5 rounded-full text-rosegold-dark">
                            <GraduationCap size={18} />
                          </div>
                          <p>{career}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-6 bg-muted/30 border border-muted rounded-lg">
                      <h3 className="flex items-center gap-2 font-semibold text-lg mb-3">
                        <Award className="text-rosegold-dark" />
                        Certifications
                      </h3>
                      <ul className="space-y-2">
                        {program.certifications.map((cert, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-rosegold"></div>
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="schedule" className="mt-0">
                  <div className="space-y-8">
                    <h2 className="text-2xl font-playfair font-semibold mb-4">Schedule Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Clock className="text-rosegold-dark h-5 w-5" />
                            Program Duration
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{program.duration}</p>
                          <p className="text-sm text-muted-foreground mt-2">{program.schedule}</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Calendar className="text-rosegold-dark h-5 w-5" />
                            Upcoming Start Dates
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {program.startDates.map((date, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-rosegold"></div>
                                {date}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="p-6 border border-rosegold/30 rounded-lg bg-rosegold/5">
                      <h3 className="font-medium mb-2">Tuition & Fees</h3>
                      <p className="text-2xl font-semibold mb-4">{program.tuition}</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Includes all course materials, professional starter kit, and examination fees.
                        Financial aid and payment plans available for qualifying students.
                      </p>
                      <Button variant="primary" size="lg">Request Financial Information</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div>
            <div className="glass-gold rounded-lg p-6 mb-8 sticky top-6">
              <h3 className="font-playfair text-xl font-semibold mb-4">Program Highlights</h3>
              <ul className="space-y-4">
                {program.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="mt-1 bg-rosegold/20 p-1 rounded-full text-rosegold-dark">
                      <Lightbulb size={16} />
                    </div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 space-y-3">
                <Button variant="primary" className="w-full" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full">
                  Request Information
                </Button>
                <Button variant="ghost" className="w-full">
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Users className="text-rosegold-dark h-5 w-5" />
                Meet Your Instructors
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Instructor" 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Lead Instructor, 15+ years experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Instructor" 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Specialist Instructor, International Award Winner</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm">
                  Our instructors are active industry professionals with extensive experience and credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Programs */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-semibold text-center mb-10">
            Related Programs You May Like
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(programsData)
              .filter(p => p.id !== programId)
              .slice(0, 2)
              .map((relatedProgram) => (
                <Card key={relatedProgram.id} className="overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedProgram.image} 
                      alt={relatedProgram.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{relatedProgram.title}</CardTitle>
                    <CardDescription>{relatedProgram.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm mb-4">
                      <BookOpen className="h-4 w-4 text-rosegold-dark" />
                      <span>{relatedProgram.duration}</span>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`/programs/${relatedProgram.id}`}>View Program</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProgramDetail;
