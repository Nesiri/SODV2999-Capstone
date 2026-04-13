// components/AboutUsBackground.tsx
import React from 'react';

interface AboutUsBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const AboutUsBackground: React.FC<AboutUsBackgroundProps> = ({
  children,
  className = '',
}) => {
  return (
    <main
      className={`relative w-full min-h-screen bg-gradient-to-br from-purple-50 via-purple-100/50 to-indigo-50 font-sans antialiased ${className}`}
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-bl from-purple-200/40 via-purple-300/30 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-gradient-to-tr from-pink-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-r from-purple-300/20 to-purple-400/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default AboutUsBackground;
