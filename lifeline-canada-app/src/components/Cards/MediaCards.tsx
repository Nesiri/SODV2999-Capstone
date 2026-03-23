import React, { useState, memo, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { MediaCard } from '../../constants/patternInterruptCards';

interface MediaCardsSectionProps {
  cards: MediaCard[];
  title?: string;
  description?: string;
  basePath?: string;
}

// Categories that should show play icon
const PLAYABLE_CATEGORIES = ['videos', 'music', 'movies', 'entertainment'];

// Get appropriate icon based on category - MEMOIZED outside component
const getCategoryIcon = (category: string = '') => {
  if (PLAYABLE_CATEGORIES.includes(category)) {
    return (
      <svg
        className="w-5 h-5 text-purple-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  }

  // Default icon for non-playable categories
  return (
    <svg
      className="w-5 h-5 text-purple-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
};

// Get overlay icon for hover effect - MEMOIZED outside component
const getHoverOverlayIcon = (category: string = '') => {
  if (PLAYABLE_CATEGORIES.includes(category)) {
    return (
      <svg
        className="w-8 h-8 text-purple-600 translate-x-0.5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    );
  }

  // Book/read icon for books and similar categories
  if (category === 'books') {
    return (
      <svg
        className="w-8 h-8 text-purple-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  }

  // Image/gallery icon
  if (category === 'gallery') {
    return (
      <svg
        className="w-8 h-8 text-purple-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }

  // Heart icon for kindness, mood etc
  if (category === 'kindness' || category === 'mood') {
    return (
      <svg
        className="w-8 h-8 text-purple-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    );
  }

  // Default explore icon
  return (
    <svg
      className="w-8 h-8 text-purple-600"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  );
};

// OPTIMIZED Image component with lazy loading and async decoding
const OptimizedCardImage = memo(
  ({
    src,
    alt,
    onLoad,
    isLoaded,
  }: {
    src: string;
    alt: string;
    onLoad: () => void;
    isLoaded: boolean;
  }) => {
    return (
      <>
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        )}
        <img
          src={src.startsWith('/') ? src : `/${src}`}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`
          absolute inset-0 w-full h-full object-cover
          transition-all duration-700 ease-out
          group-hover:scale-110 group-hover:rotate-1
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
          onLoad={onLoad}
          onError={(e) => {
            e.currentTarget.src =
              'https://via.placeholder.com/400x300?text=💚+Mental+Wellness';
          }}
        />
      </>
    );
  }
);

OptimizedCardImage.displayName = 'OptimizedCardImage';

// MEMOIZED CARD COMPONENT - prevents re-renders of other cards
const MediaCardItem = memo(
  ({
    card,
    index,
    basePath,
    isHovered,
    onHoverStart,
    onHoverEnd,
    isImageLoaded,
    onImageLoad,
  }: {
    card: MediaCard;
    index: number;
    basePath: string;
    isHovered: boolean;
    onHoverStart: () => void;
    onHoverEnd: () => void;
    isImageLoaded: boolean;
    onImageLoad: () => void;
  }) => {
    // Memoize generated slug
    const cardPath = useMemo(() => {
      const slug = card.title
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-');
      return card.path || `${basePath}/${slug}`;
    }, [card.path, card.title, basePath]);

    // Memoize category icon
    const categoryIcon = useMemo(
      () => getCategoryIcon(card.category),
      [card.category]
    );
    const hoverIcon = useMemo(
      () => getHoverOverlayIcon(card.category),
      [card.category]
    );

    // Memoize image source
    const imageSrc = useMemo(
      () => (card.image.startsWith('/') ? card.image : `/${card.image}`),
      [card.image]
    );

    return (
      <Link
        to={cardPath}
        className="group relative block no-underline will-change-transform contain-content"
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div
          className={`
          relative w-full max-w-[320px] mx-auto bg-white/80 backdrop-blur-sm rounded-2xl 
          shadow-xl hover:shadow-2xl 
          transition-all duration-500 ease-out
          transform-gpu hover:scale-105 hover:-translate-y-2
          border border-white/50
          overflow-hidden
          ${isHovered ? 'ring-4 ring-purple-500/30' : ''}
        `}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-rose-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/10 group-hover:to-rose-600/10 transition-all duration-500" />

          {/* Image Container */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
            <OptimizedCardImage
              src={imageSrc}
              alt={card.title}
              isLoaded={isImageLoaded}
              onLoad={onImageLoad}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Category-specific Icon */}
            <div className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
              {categoryIcon}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-90">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                {hoverIcon}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-6 h-[140px] flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
              {card.title}
            </h3>

            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-3 transform origin-left group-hover:scale-x-150 transition-transform duration-300" />

            <div className="flex items-center justify-between text-sm mt-auto">
              <span className="text-gray-500 capitalize">
                {card.category?.replace('-', ' ')}
              </span>
              <span className="text-purple-600 font-semibold flex items-center gap-1">
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
              </span>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-200/50 rounded-tl-xl group-hover:border-purple-400 transition-colors duration-500" />
          </div>
          <div className="absolute bottom-0 right-0 w-12 h-12">
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-200/50 rounded-br-xl group-hover:border-pink-400 transition-colors duration-500" />
          </div>
        </div>
      </Link>
    );
  }
);

MediaCardItem.displayName = 'MediaCardItem';

// MAIN COMPONENT
const MediaCardsSection: React.FC<MediaCardsSectionProps> = ({
  cards,
  title = 'Pattern Interrupt Media Library',
  description = 'Explore our collection of uplifting content designed to help you break negative patterns and improve your mental well-being.',
  basePath = '/pattern-interrupt',
}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Memoize handlers to prevent function recreation
  const handleHoverStart = useCallback(
    (id: number) => () => setHoveredId(id),
    []
  );
  const handleHoverEnd = useCallback(() => setHoveredId(null), []);
  const handleImageLoad = useCallback(
    (id: number) => () => {
      setLoadedImages((prev) => new Set(prev).add(id));
    },
    []
  );

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-pink-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl animate-pulse" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(147 51 234 / 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"
            style={{
              top: `${(i * 5) % 100}%`,
              left: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-purple-100 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm font-medium text-purple-700">
              Break the Pattern
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-300 to-purple-600">
              {title}
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mt-8" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <MediaCardItem
              key={card.id}
              card={card}
              index={index}
              basePath={basePath}
              isHovered={hoveredId === card.id}
              onHoverStart={handleHoverStart(card.id)}
              onHoverEnd={handleHoverEnd}
              isImageLoaded={loadedImages.has(card.id)}
              onImageLoad={handleImageLoad(card.id)}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .contain-content {
          contain: content;
        }
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default memo(MediaCardsSection);
