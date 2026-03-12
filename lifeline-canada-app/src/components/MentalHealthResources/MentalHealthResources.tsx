import React from 'react';
import { Link } from 'react-router-dom';
import { mentalHealthCards } from '../../constants/mental-health-cards';
import { MentalHealthCardsGrid } from '../Cards/MentalHealthCard';

const MentalHealthResources: React.FC = () => {
  const filteredCards = mentalHealthCards.filter((card) =>
    [1, 2, 6, 7, 9, 20].includes(card.id)
  ); // Show only the first 6 cards on the main page
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with enhanced design */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-4">
            🌟 Mental Health Support
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Can We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Help You
            </span>{' '}
            With?
          </h2>
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            <div className="w-16 h-1 bg-purple-600 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover personalized resources and expert guidance tailored to
            support your unique mental health journey
          </p>
        </div>

        <MentalHealthCardsGrid cards={filteredCards} limit={6} />

        {/* Enhanced Show More Button */}
        <div className="text-center mt-20">
          <div className="relative inline-flex group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <Link
              to="/resources"
              className="relative px-10 py-5 bg-white text-gray-900 font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white"
            >
              <span>Explore All Resources</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Enhanced total count display */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <p className="text-gray-500 font-medium">
              <span className="text-2xl font-bold text-gray-800">
                {mentalHealthCards.length}
              </span>{' '}
              specialized resources available
            </p>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Enhanced animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .grid > div {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </section>
  );
};

export default MentalHealthResources;
