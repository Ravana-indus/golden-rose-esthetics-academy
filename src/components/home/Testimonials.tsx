
import React, { useEffect, useRef, useState } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The instructors at Canadian Masters Academy transformed my understanding of skincare. Their expertise and personalized approach helped me develop my skills and confidence.",
    author: "Sarah Johnson",
    role: "Graduated 2022, Skin Care Specialist",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    quote: "The hands-on experience and industry connections provided by the academy were invaluable. I secured a position at a prestigious spa before graduation.",
    author: "Michael Chen",
    role: "Graduated 2021, Esthetics Diploma",
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    quote: "The advanced techniques I learned set me apart in the industry. I now own my own successful esthetics business thanks to the comprehensive education I received.",
    author: "Emily Rodriguez",
    role: "Graduated 2020, Advanced Esthetics",
    avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 4,
    quote: "As a makeup artist, the specialized training I received has allowed me to work with top photographers and fashion designers across Canada.",
    author: "David Thompson",
    role: "Graduated 2022, Makeup Artistry",
    avatarSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 5,
    quote: "The business management component of my program gave me the skills to launch my own successful mobile esthetics service within months of graduating.",
    author: "Olivia Kim",
    role: "Graduated 2021, Business Management",
    avatarSrc: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Calculate max scroll width
  useEffect(() => {
    if (scrollRef.current) {
      const updateMaxScroll = () => {
        setMaxScroll(scrollRef.current ? scrollRef.current.scrollWidth - scrollRef.current.clientWidth : 0);
      };
      
      updateMaxScroll();
      window.addEventListener('resize', updateMaxScroll);
      
      return () => window.removeEventListener('resize', updateMaxScroll);
    }
  }, []);

  // Handle scroll buttons
  const scrollLeft = () => {
    if (scrollRef.current) {
      const newPosition = Math.max(0, scrollPosition - 300);
      scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const newPosition = Math.min(maxScroll, scrollPosition + 300);
      scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  // Update scroll position on scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-rosegold/20 text-rosegold-dark mb-4">
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            What Our <span className="text-gold">Graduates</span> Say
          </h2>
          <p className="text-gray-600">
            Hear from our alumni about how Canadian Masters Academy transformed their careers 
            and helped them achieve their professional goals.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <div className="hidden md:flex absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={scrollLeft}
              disabled={scrollPosition <= 0}
              className={`h-10 w-10 rounded-full flex items-center justify-center ${
                scrollPosition <= 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white shadow-elegant hover:bg-gold/5 text-gold'
              } transition-colors`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={scrollRight}
              disabled={scrollPosition >= maxScroll}
              className={`h-10 w-10 rounded-full flex items-center justify-center ${
                scrollPosition >= maxScroll
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white shadow-elegant hover:bg-gold/5 text-gold'
              } transition-colors`}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Testimonials Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6"
            onScroll={handleScroll}
          >
            <div className="flex gap-6">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-[300px] md:min-w-[400px] snap-start"
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    avatarSrc={testimonial.avatarSrc}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicators (Dots) for Mobile */}
          <div className="md:hidden flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => {
              // Calculate approximate position for this dot
              const dotPosition = index * (maxScroll / (testimonials.length - 1));
              const isActive = 
                index === testimonials.length - 1 
                  ? scrollPosition >= maxScroll * 0.9
                  : scrollPosition >= dotPosition - 30 && scrollPosition <= dotPosition + 30;
                
              return (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    isActive ? 'bg-gold w-4' : 'bg-gray-300'
                  }`}
                  onClick={() => {
                    if (scrollRef.current) {
                      const newPosition = dotPosition;
                      scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
                      setScrollPosition(newPosition);
                    }
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
