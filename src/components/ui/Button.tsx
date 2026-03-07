import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'outline';
}

const variants: Record<string, string> = {
  primary:
    'bg-blue/10 text-blue border border-blue/30 hover:bg-blue/20 hover:border-blue/50',
  gold: 'bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20 hover:border-gold/50',
  outline:
    'bg-transparent text-muted border border-white/10 hover:bg-white/5 hover:text-white',
};

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
