
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  avatarSrc,
  className
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 md:p-8 rounded-xl shadow-soft transition-all duration-300 hover:shadow-elegant relative",
      "before:absolute before:top-0 before:left-0 before:w-0 hover:before:w-full before:h-1 before:bg-gold-gradient before:transition-all before:duration-500",
      className
    )}>
      {/* Quote SVG */}
      <svg 
        className="h-8 w-8 text-gold/20 mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
      </svg>
      
      {/* Testimonial Content */}
      <blockquote className="text-gray-700 italic mb-6">
        "{quote}"
      </blockquote>
      
      {/* Author Info */}
      <div className="flex items-center mt-4">
        {avatarSrc && (
          <div className="mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-gold/30">
            <img 
              src={avatarSrc} 
              alt={author} 
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gold">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
