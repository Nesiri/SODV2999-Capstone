import React, { useState, useEffect } from 'react';
import therapyDog from '../../assets/company-paws-130-800x889.png';

const CompanionPawsCanada: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const programs = [
    {
      id: 1,
      title: 'Personal Therapy Dog Adoption',
      link: 'https://companionpaws.ca/personal-therapy-dog-adoption/',
      description:
        'Find your perfect companion for emotional support and daily wellness.',
      icon: '🐕',
      color: 'from-[#89009B] to-purple-800',
      bgColor: 'bg-purple-50',
      features: [
        '1-on-1 matching',
        'Basic training included',
        'Lifetime support guidance',
      ],
    },
    {
      id: 2,
      title: 'Assisted Therapy Dog Adoption',
      link: 'https://companionpaws.ca/assisted-therapy-dog-adoption/',
      description:
        'Specially trained therapy dogs for hospitals, schools, and care facilities.',
      icon: '🦮',
      color: 'from-[#89009B] to-purple-800',
      bgColor: 'bg-purple-50',
      features: [
        'Certified therapy dogs',
        'Facility integration training',
        'Ongoing evaluations',
      ],
    },
    {
      id: 3,
      title: 'Certify Your Own Therapy Dog',
      link: 'https://companionpaws.ca/certify-your-own-dog/',
      description:
        'Turn your beloved pet into a certified therapy dog through guided training.',
      icon: '🐾',
      color: 'from-[#89009B] to-purple-800',
      bgColor: 'bg-purple-50',
      features: [
        'Professional training program',
        'Certification exam',
        'Continuing education',
      ],
    },
    {
      id: 4,
      title: 'Visiting Therapy Dog Requests',
      link: 'https://companionpaws.ca/visiting-therapy-dog-requests/',
      description:
        'Request certified therapy dog visits for events, schools, or healthcare settings.',
      icon: '🏥',
      color: 'from-[#89009B] to-purple-800',
      bgColor: 'bg-purple-50',
      features: [
        'Scheduled visits',
        'Group or 1-on-1 sessions',
        'Community outreach programs',
      ],
    },
    {
      id: 5,
      title: 'Therapy Dog Training',
      link: 'https://companionpaws.ca/therapy-dog-training/',
      description:
        'Comprehensive training programs for future therapy dogs and handlers.',
      icon: '🎓',
      color: 'from-[#89009B] to-purple-800',
      bgColor: 'bg-purple-50',
      features: [
        'Obedience training',
        'Behavior assessment',
        'Handler coaching',
      ],
    },
    {
      id: 6,
      title: 'Animal-Assisted Therapy',
      link: 'https://companionpaws.ca/animal-assisted-therapy/',
      description:
        'Structured therapy programs incorporating animals for emotional healing.',
      icon: '❤️',
      color: 'from-[#89009B] to-purple-800',
      bgColor: 'bg-purple-50',
      features: [
        'Licensed professionals',
        'Individual & group sessions',
        'Evidence-based approach',
      ],
    },
  ];

  return (
    <>
      <style>{`
        /* Companion Paws specific animations */
        .cp-float-slow {
          animation: cp-float-keyframes 12s ease-in-out infinite;
        }
        
        .cp-blob {
          animation: cp-blob-keyframes 7s infinite;
        }
        
        .cp-pulse {
          animation: cp-pulse-keyframes 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .cp-delay-300 {
          animation-delay: 300ms;
        }
        
        .cp-delay-600 {
          animation-delay: 600ms;
        }
        
        .cp-delay-900 {
          animation-delay: 900ms;
        }
        
        .cp-delay-2000 {
          animation-delay: 2s;
        }
        
        .cp-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes cp-float-keyframes {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        
        @keyframes cp-blob-keyframes {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes cp-pulse-keyframes {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          .cp-blob {
            opacity: 0.1;
          }
          
          .cp-float-slow {
            opacity: 0.3;
          }
        }
      `}</style>

      <section className="relative w-[95vw] sm:w-full py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100">
        {/* Animated background elements - reduced opacity on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating paw prints - hidden on very small screens */}
          <div className="hidden sm:block absolute top-20 left-10 opacity-5 cp-float-slow">
            <svg
              className="w-16 sm:w-20 md:w-24 h-auto text-[#89009B]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5.5 7.5C6.33 7.5 7 8.17 7 9c0 .83-.67 1.5-1.5 1.5S4 9.83 4 9c0-.83.67-1.5 1.5-1.5zm13 0c.83 0 1.5.67 1.5 1.5 0 .83-.67 1.5-1.5 1.5S17 9.83 17 9c0-.83.67-1.5 1.5-1.5zm-6.5 9c1.5 0 3 1.5 3 3s-1.5 3-3 3-3-1.5-3-3 1.5-3 3-3zm-6-6c.83 0 1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5 5.67 10 6.5 10zm11 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" />
            </svg>
          </div>
          <div className="hidden sm:block absolute bottom-20 right-10 opacity-5 cp-float-slow cp-delay-2000">
            <svg
              className="w-24 sm:w-28 md:w-32 h-auto text-[#89009B]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5.5 7.5C6.33 7.5 7 8.17 7 9c0 .83-.67 1.5-1.5 1.5S4 9.83 4 9c0-.83.67-1.5 1.5-1.5zm13 0c.83 0 1.5.67 1.5 1.5 0 .83-.67 1.5-1.5 1.5S17 9.83 17 9c0-.83.67-1.5 1.5-1.5zm-6.5 9c1.5 0 3 1.5 3 3s-1.5 3-3 3-3-1.5-3-3 1.5-3 3-3zm-6-6c.83 0 1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5 5.67 10 6.5 10zm11 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" />
            </svg>
          </div>

          {/* Gradient orbs - smaller on mobile */}
          <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-10 sm:opacity-20 cp-blob"></div>
          <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-[#89009B] rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-10 sm:opacity-20 cp-blob cp-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-10 sm:opacity-20 cp-blob cp-delay-4000"></div>
        </div>

        {/* Canadian map background - hidden on mobile */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5 hidden lg:block">
          <svg
            className="w-72 xl:w-96 h-auto text-[#89009B]"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50 10 L60 20 L70 15 L80 25 L75 35 L85 45 L75 55 L80 65 L70 70 L60 65 L50 75 L40 65 L30 70 L20 65 L25 55 L15 45 L25 35 L20 25 L30 15 L40 20 L50 10Z" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - mobile optimized */}
          <div
            className={`text-center mb-10 sm:mb-12 md:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            {/* Logo/badge */}
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#89009B] to-purple-800 rounded-full blur-xl sm:blur-2xl opacity-30 cp-pulse"></div>
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#89009B] to-purple-800 rounded-full flex items-center justify-center shadow-xl sm:shadow-2xl">
                <span className="text-2xl sm:text-3xl md:text-4xl">🐕</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-[#89009B] to-purple-800 text-transparent bg-clip-text">
                Companion Paws
              </span>
            </h1>

            <div className="flex justify-center gap-2 mb-6 sm:mb-8">
              <div className="w-12 sm:w-14 md:w-16 h-1 bg-[#89009B] rounded-full"></div>
              <div className="w-12 sm:w-14 md:w-16 h-1 bg-purple-600 rounded-full"></div>
              <div className="w-12 sm:w-14 md:w-16 h-1 bg-[#89009B] rounded-full"></div>
            </div>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              <span className="text-[#89009B] font-semibold">
                Certifying compassion.
              </span>{' '}
              <span className="text-[#89009B] font-semibold">
                Rescuing hope.
              </span>{' '}
              <span className="text-[#89009B] font-semibold">
                Supporting Canadians in need.
              </span>
            </p>
          </div>

          {/* Main content grid - stack on mobile */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-16 lg:mb-20">
            {/* Left column - Programs (shows first on mobile) */}
            <div
              className={`w-full order-2 lg:order-1 space-y-6 sm:space-y-8 transform transition-all duration-1000 cp-delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
            >
              <div className="inline-block">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 text-[#89009B] rounded-full text-xs sm:text-sm font-semibold">
                  🐾 Our Programs
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Healing Hearts,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89009B] to-purple-800 block sm:inline">
                  One Paw
                </span>{' '}
                at a Time
              </h2>

              {/* Program cards - responsive */}
              <div className="space-y-3 sm:space-y-4">
                {programs.slice(0, 3).map((program) => (
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={program.id}
                    className={`group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl sm:hover:shadow-2xl cursor-pointer block ${program.bgColor}`}
                    onMouseEnter={() => setActiveProgram(program.id)}
                    onMouseLeave={() => setActiveProgram(null)}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    <div className="relative p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${program.color} flex items-center justify-center text-xl sm:text-2xl shadow-md sm:shadow-lg transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                        >
                          {program.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#89009B] group-hover:to-purple-800 transition-all duration-300">
                            {program.title}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                            {program.description}
                          </p>

                          {/* Features - show on hover/tap */}
                          <div
                            className={`flex flex-wrap gap-1.5 sm:gap-2 overflow-hidden transition-all duration-500 ${activeProgram === program.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                          >
                            {program.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white rounded-full text-[10px] sm:text-xs font-medium text-gray-600 shadow-sm"
                              >
                                ✓ {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Arrow indicator - touch friendly */}
                        <div
                          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white shadow-md flex items-center justify-center transform transition-all duration-300 flex-shrink-0 ${activeProgram === program.id ? 'translate-x-1 bg-gradient-to-r from-[#89009B] to-purple-800' : ''}`}
                        >
                          <svg
                            className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 ${activeProgram === program.id ? 'text-white' : 'text-gray-400'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* View all programs link - mobile friendly */}
              <div className="text-center sm:text-left mt-4">
                <a
                  href="https://companionpaws.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-[#89009B] font-semibold text-sm sm:text-base inline-flex items-center gap-1 group"
                >
                  <span>View all 6 programs</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              {/* Availability badge - responsive */}
              <div className="flex items-center gap-2 sm:gap-3 mt-6 sm:mt-8 p-3 sm:p-4 bg-gradient-to-r from-purple-100/50 to-purple-200/50 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#89009B] rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                      />
                    </svg>
                  </div>
                  <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">
                  Available in{' '}
                  <span className="font-bold text-[#89009B]">
                    all provinces
                  </span>{' '}
                  across Canada
                </p>
              </div>
            </div>

            {/* Right column - Image & CTA (shows second on mobile) - REMOVED caption box and stats */}
            <div
              className={`w-full order-1 lg:order-2 relative transform transition-all duration-1000 cp-delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            >
              {/* Main image card */}
              <div className="relative group max-w-md mx-auto lg:max-w-full">
                {/* Decorative elements - smaller on mobile */}
                <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-purple-200 rounded-full opacity-30 sm:opacity-50 blur-xl sm:blur-2xl cp-pulse"></div>
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-[#89009B] rounded-full opacity-30 sm:opacity-50 blur-xl sm:blur-2xl cp-pulse cp-delay-2000"></div>

                {/* Image container - removed overlay caption box */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl sm:shadow-3xl transform group-hover:scale-[1.02] transition-transform duration-700">
                  <img
                    src={therapyDog}
                    alt="Therapy dog with happy owner"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - mobile optimized */}
          <div
            className={`relative mt-16 sm:mt-20 lg:mt-32 text-center transform transition-all duration-1000 cp-delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#89009B] to-purple-800 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-20"></div>

            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl sm:shadow-3xl border border-white/50">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Ready to Start Your Journey?
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
                  All information and the steps involved are available at our
                  website.
                </p>

                {/* Website link - Consistent Purple Button */}
                <div className="relative inline-block group w-full sm:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#89009B] to-purple-800 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <a
                    href="https://companionpaws.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#89009B] to-purple-800 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                  >
                    <span className="text-lg sm:text-xl">🐾</span>
                    <span className="font-black text-white text-sm sm:text-base md:text-lg lg:text-xl">
                      COMPANIONPAWS.CA
                    </span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:translate-x-2 transition-transform flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>

                {/* Trust badges - stacked on mobile */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#89009B]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-xs sm:text-sm">
                      Verified Organization
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#89009B]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-xs sm:text-sm">
                      Nationwide Coverage
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanionPawsCanada;