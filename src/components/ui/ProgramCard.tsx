
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProgramCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  className?: string;
  variant?: 'default' | 'featured';
}

const ProgramCard = ({
  title,
  description,
  imageSrc,
  link,
  className,
  variant = 'default'
}: ProgramCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-500",
        variant === 'featured' ? 'shadow-elegant' : 'shadow-soft',
        "hover:shadow-card hover:-translate-y-1",
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 z-10"></div>
      
      {/* Image */}
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      
      {/* Gold Border Animation on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 border-2 border-gold/50 rounded-xl scale-90 group-hover:scale-95 transition-all duration-500 z-0"></div>
      
      {/* Content */}
      <div className="relative flex flex-col h-full p-6 md:p-8 z-20">
        <div className="mt-auto">
          <h3 className={cn(
            "font-playfair font-bold text-white mb-2 text-shadow-sm",
            variant === 'featured' ? "text-2xl" : "text-xl"
          )}>
            {title}
          </h3>
          <p className="text-white/90 text-sm mb-4 line-clamp-2 text-shadow-sm max-w-sm">
            {description}
          </p>
          <Link 
            to={link} 
            className="inline-flex items-center font-medium text-white hover:text-gold/90 transition-colors"
          >
            <span className="mr-1">Learn more</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      {/* Add badge for featured variant */}
      {variant === 'featured' && (
        <div className="absolute top-4 left-4 bg-gold/90 text-white text-xs font-medium py-1 px-2 rounded">
          Featured Program
        </div>
      )}
    </div>
  );
};

export default ProgramCard;
