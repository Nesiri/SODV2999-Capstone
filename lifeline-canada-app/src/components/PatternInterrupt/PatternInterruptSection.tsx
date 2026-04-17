import React, { useState, useEffect, useRef, useMemo } from 'react';
import patternInterruptImg from '../../assets/PattInturrMain.png';

// Simple seeded random function for stable values
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const PatternInterruptSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Generate stable particle positions once using useMemo
  const floatingParticles = useMemo(
    () =>
      [...Array(30)].map((_, i) => {
        const seed1 = i * 100 + 1;
        const seed2 = i * 100 + 2;
        const seed3 = i * 100 + 3;

        return {
          top: `${seededRandom(seed1) * 100}%`,
          left: `${seededRandom(seed2) * 100}%`,
          delay: `${i * 0.2}s`,
          duration: `${3 + seededRandom(seed3) * 7}s`,
        };
      }),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#5f2d85] to-[#5f2d85]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#5f2d85]/40 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#5f2d85]/40 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C77DDF]/30 rounded-full blur-3xl animate-pulse" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 0v60M0 30h60' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating particles - using pre-generated values */}
        {floatingParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 !bg-white/40 rounded-full animate-float"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
          {/* Left Side - Text Content */}
          <div
            className={`
              transform transition-all duration-1000 delay-300
              ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}
            `}
          >
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 !bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5f2d85] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C77DDF]"></span>
              </span>
              <span className="text-sm font-medium text-white/90 tracking-wide">
                BREAK FREE FROM NEGATIVE CYCLES
              </span>
            </div>

            {/* Main heading with gradient - using your purple colors */}
            <h1 className="relative mb-8">
              <span className="text-4xl sm:text-5xl font-black tracking-tight bg-clip-text text-transparent !bg-white/90">
                Pattern
              </span>
              <br />
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-white relative">
                Interruptions
                {/* Decorative underline - using your purple colors */}
                <span className="absolute -bottom-4 left-0 w-32 h-1.5 bg-gradient-to-r from-[#5f2d85] to-[#C77DDF] rounded-full" />
              </span>
            </h1>

            {/* Feature cards */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 !bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:!bg-white/20 transition-all duration-300">
                  <svg
                    className="w-6 h-6 !text-[#5f2d85]"
                    fill="none"
                    stroke="#f8f4fc"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="!text-xl font-bold text-white mb-2">
                    Break Negative Habits
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    A Pattern Interrupt is a way to alter our mental, emotional,
                    or behavioral state in order to break negative habits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 !bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:!bg-white/20 transition-all duration-300">
                  <svg
                    className="w-6 h-6 !text-[#5f2d85]"
                    fill="none"
                    stroke="#f8f4fc"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="!text-xl font-bold text-white mb-2">
                    Regain Control
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Pattern interrupts offer an effective way to break negative
                    cycles and regain control over our actions, thoughts, and
                    emotions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 !bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:!bg-white/20 transition-all duration-300">
                  <svg
                    className="w-6 h-6 !text-[#5f2d85]"
                    fill="none"
                    stroke="#f8f4fc"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="!text-xl font-bold text-white mb-2">
                    Create New Pathways
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    By recognizing our patterns, we can intervene and create new
                    pathways for more productive thoughts, behaviors, and
                    emotions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image with Effects */}
          <div
            className={`
              relative transform transition-all duration-1000 delay-500
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
            `}
          >
            {/* Main image container */}
            <div className="relative group">
              {/* Glow effect - using your purple colors */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-700" />

              {/* Image frame */}
              <div className="relative rounded-3xl overflow-hidden">
                {/* Image */}
                <img
                  src={patternInterruptImg}
                  alt="Pattern interruption domino concept"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradient - using your purple colors */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5f2d85]/80 via-transparent to-transparent" />

                {/* Animated dots */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-ping" />
                    <div className="absolute inset-2 border-2 border-white/50 rounded-full animate-pulse" />
                    <div className="absolute inset-4 !bg-white/20 rounded-full backdrop-blur-sm" />
                  </div>
                </div>
              </div>

              {/* Decorative corner accents - using your purple colors */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#5f2d85]/50 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-[#C77DDF]/50 rounded-br-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.08); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default PatternInterruptSection;
