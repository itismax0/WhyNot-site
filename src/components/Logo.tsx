import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 48, animated = true }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} id="app-logo-wrapper">
      <svg
        width={size}
        height={size}
        viewBox="0 0 527 527"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${animated ? 'hover:scale-105 transition-transform duration-300' : ''}`}
        id="app-logo-svg"
      >
        <path
          d="M180.984 527L41.8079 267.847H0V259.103H384.523V267.847H353.167L307.508 348.286L364.169 455.654H366.37L469.239 267.847H412.578V259.103H527V267.847H487.392L346.016 527H329.513L264.6 406.342L197.487 527H180.984ZM216.741 455.654H218.942L255.799 389.554L190.336 267.847H115.522L216.741 455.654ZM298.707 332.198L333.913 267.847H264.05L298.707 332.198Z"
          fill="currentColor"
        />
        <path
          d="M180.984 0L41.8079 259.153H0V267.897H384.523V259.153H353.167L307.508 178.714L364.169 71.3458H366.37L469.239 259.153H412.578V267.897H527V259.153H487.392L346.016 0H329.513L264.6 120.658L197.487 0H180.984ZM216.741 71.3458H218.942L255.799 137.446L190.336 259.153H115.522L216.741 71.3458ZM298.707 194.802L333.913 259.153H264.05L298.707 194.802Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Logo;
