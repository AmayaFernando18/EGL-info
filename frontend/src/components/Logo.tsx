interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ className = '', size = 'medium' }: LogoProps) {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-10 w-10',
    large: 'h-12 w-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      {/* Circular Badge Background */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer Circle - Maroon */}
        <circle cx="50" cy="50" r="48" fill="#8B1F41" />
        
        {/* Inner Circle - Orange/Yellow Gradient */}
        <defs>
          <radialGradient id="sunGradient">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF8C00" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="35" r="28" fill="url(#sunGradient)" />
        
        {/* Lightning Bolts */}
        <path d="M 35 25 L 32 35 L 37 35 L 34 45" stroke="#FFD700" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 45 20 L 42 30 L 47 30 L 44 40" stroke="#FFD700" strokeWidth="2" fill="none" strokeLinecap="round"/>
        
        {/* Power Plant Silhouette */}
        <rect x="25" y="50" width="8" height="15" fill="#641830" />
        <rect x="35" y="45" width="8" height="20" fill="#641830" />
        <rect x="45" y="48" width="8" height="17" fill="#641830" />
        
        {/* Transmission Tower */}
        <g transform="translate(58, 35)">
          <line x1="5" y1="0" x2="5" y2="28" stroke="#641830" strokeWidth="1.5"/>
          <line x1="0" y1="8" x2="10" y2="8" stroke="#641830" strokeWidth="1"/>
          <line x1="1" y1="15" x2="9" y2="15" stroke="#641830" strokeWidth="1"/>
          <line x1="2" y1="22" x2="8" y2="22" stroke="#641830" strokeWidth="1"/>
          <line x1="5" y1="0" x2="0" y2="8" stroke="#641830" strokeWidth="1"/>
          <line x1="5" y1="0" x2="10" y2="8" stroke="#641830" strokeWidth="1"/>
        </g>
        
        {/* Decorative Arc */}
        <path d="M 15 70 Q 50 60 85 70" stroke="#FFD700" strokeWidth="2.5" fill="none"/>
        <path d="M 18 75 Q 50 67 82 75" stroke="#FFD700" strokeWidth="1.5" fill="none"/>
      </svg>
    </div>
  );
}
