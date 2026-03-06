interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ className = '', size = 'medium' }: LogoProps) {
  const sizeClasses = {
    small: 'h-10 w-10',
    medium: 'h-14 w-14',
    large: 'h-16 w-16'
  };

  return (
    <img 
      src="/images/egl-logo.jpeg" 
      alt="EGL Logo" 
      className={`${sizeClasses[size]} ${className} object-contain`}
    />
  );
}
