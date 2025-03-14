
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold/50 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group";
  
  const variants = {
    primary: "bg-gold hover:bg-gold-dark text-white shadow-soft",
    secondary: "bg-rosegold hover:bg-rosegold-dark text-black shadow-soft",
    outline: "border border-gold/80 text-gold-dark hover:bg-gold/10",
    ghost: "bg-transparent hover:bg-muted text-gold-dark",
    link: "bg-transparent underline-offset-4 hover:underline text-gold-dark p-0 font-normal",
  };
  
  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  // Shimmer effect overlay
  const shimmerEffect = variant !== 'ghost' && variant !== 'link' ? 
    "after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-700" : "";

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        shimmerEffect,
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center bg-inherit">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        </span>
      )}
      <span className={isLoading ? "opacity-0" : ""}>{children}</span>
    </button>
  );
};

export default Button;
