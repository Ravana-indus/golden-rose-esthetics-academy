
import React, { useEffect, useRef } from 'react';
import Button from '../common/Button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add an intersection observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Gold Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={heroRef} className="max-w-3xl opacity-0 transition-opacity duration-1000 ease-out">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold backdrop-blur-sm">
            <p className="text-sm font-medium uppercase tracking-wide">
              Elevate Your Aesthetic Career
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            <span className="block">Transform Your Passion into</span> 
            <span className="bg-clip-text text-transparent bg-gold-gradient">Professional Mastery</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Canadian Masters Academy offers premier education in esthetics and cosmetology, 
            blending traditional techniques with cutting-edge innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Explore Programs
            </Button>
            <Button variant="outline" size="lg">
              Request Information
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
