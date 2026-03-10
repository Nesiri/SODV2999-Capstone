import React from 'react';
import { Link } from 'react-router-dom';
import { mentalHealthCards } from '../../constants/mental-health-cards';
import { MentalHealthCardsGrid } from '../Cards/MentalHealthCard';

const MentalHealthResources: React.FC = () => {
  const filteredCards = mentalHealthCards.filter((card) =>
    [1, 2, 6, 7, 9, 20].includes(card.id)
  );

  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Simplified background elements - reduced blur and opacity for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Cards grid - simplified animation */}
        <div className="opacity-100">
          <MentalHealthCardsGrid cards={filteredCards} limit={6} />
        </div>

       {/* Show More Button - optimized */}
<div className="text-center mt-20">
  <div className="relative inline-flex group">
    <Link
      to="/resources"
      className="relative px-10 py-5 bg-gradient-to-r from-yellow-100 via-purple-100 to-blue-50 text-gray-900 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3"
    >
      <span>View More</span>
      <svg
        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
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
</div>
      </div>

      {/* Optimized styles - removed heavy animations */}
      <style>{`
        /* Simple fade-in animation - only on initial load */
        .grid > div {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Optimized scrollbar - removed gradient for better performance */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }

        /* Hardware acceleration for smooth scrolling */
        * {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
  );
};

export default MentalHealthResources;