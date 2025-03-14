
import React, { useEffect, useRef } from 'react';
import ProgramCard from '../ui/ProgramCard';
import Button from '../common/Button';

const FeaturedPrograms = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.remove('translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.program-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const programs = [
    {
      id: 1,
      title: 'Complete Esthetics Diploma',
      description: 'Our comprehensive diploma program covers all aspects of esthetics, preparing you for a successful career in the beauty industry.',
      imageSrc: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      link: '/programs/diploma',
      variant: 'featured' as const
    },
    {
      id: 2,
      title: 'Skin Care Specialist',
      description: 'Become an expert in skin analysis, treatments, and advanced care techniques.',
      imageSrc: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      link: '/programs/certificates',
      variant: 'default' as const
    },
    {
      id: 3,
      title: 'Makeup Artistry',
      description: 'Master the art of makeup application for various occasions and industries.',
      imageSrc: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80',
      link: '/programs/certificates',
      variant: 'default' as const
    },
    {
      id: 4,
      title: 'Advanced Esthetics',
      description: 'Take your skills to the next level with our advanced techniques and specialist training.',
      imageSrc: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
      link: '/programs/advanced',
      variant: 'default' as const
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-6 bg-royal-light">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
            <span className="text-sm font-medium">Discover Your Path</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Programs Designed for <span className="text-gold">Excellence</span>
          </h2>
          <p className="text-gray-600">
            Our curriculum blends traditional techniques with cutting-edge innovations, 
            preparing you for a successful career in the beauty industry.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              className={`program-card opacity-0 translate-y-10`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProgramCard 
                title={program.title}
                description={program.description}
                imageSrc={program.imageSrc}
                link={program.link}
                variant={program.variant}
                className="h-80"
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
