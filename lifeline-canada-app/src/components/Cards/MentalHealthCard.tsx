// components/MentalHealthCard.tsx

import { Link } from 'react-router-dom';
import { memo, useMemo, useState } from 'react';
import type { MentalHealthCard as MentalHealthCardType } from '../../constants/mental-health-cards';

interface MentalHealthCardProps {
  card: MentalHealthCardType;
  index?: number;
  showCategory?: boolean;
  showIcon?: boolean;
  variant?: 'default' | 'compact' | 'featured';
}

// Optimized image component with lazy loading - MODIFIED: Added h-80
const OptimizedImage = memo(({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full h-80 bg-gray-100">
      {' '}
      {/* CHANGED: h-full → h-80 */}
      {!isLoaded && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          e.currentTarget.src =
            'https://via.placeholder.com/600x400?text=💚+Mental+Wellness';
        }}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

// Main card component with memoization
export const MentalHealthCard = memo(
  ({
    card,
    index = 0,

    variant = 'default',
  }: MentalHealthCardProps) => {
    // Memoize styles to prevent recalculation - MODIFIED: Removed aspect-square
    const styles = useMemo(() => {
      switch (variant) {
        case 'compact':
          return {
            container:
              'group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-gray-100',
            image: 'w-full h-48 object-cover',
            content: 'p-5',
            title: 'text-lg font-bold text-gray-900 mb-2 line-clamp-1',
            subtitle: 'text-gray-600 text-sm line-clamp-2',
          };
        case 'featured':
          return {
            container:
              'group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 overflow-hidden border-2 border-purple-200',
            image: 'w-full', // CHANGED: aspect-square → w-full
            content: 'p-6',
            title: 'text-2xl font-bold text-gray-900 mb-3 line-clamp-2',
            subtitle: 'text-gray-700 text-base line-clamp-3',
          };
        default:
          return {
            container:
              'group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-gray-100',
            image: 'w-full', // CHANGED: aspect-square → w-full
            content: 'p-6',
            title: 'text-xl font-bold text-gray-900 mb-2 line-clamp-2',
            subtitle: 'text-gray-600 line-clamp-2',
          };
      }
    }, [variant]);

    // Use will-change for hardware acceleration
    return (
      <Link
        to={card.link || '#'}
        className={`${styles.container} will-change-transform`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Image Container - MODIFIED: Using updated styles.image (w-full) */}
        <div className={`relative ${styles.image} overflow-hidden bg-gray-100`}>
          <OptimizedImage src={card.image[0]} alt={card.title} />

          {/* Simple gradient overlay - reduced opacity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Content - UNCHANGED */}
        <div className={styles.content}>
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.subtitle}>{card.subtitle}</p>

          {/* Simplified Learn More Link - NO BLUE */}
          <div className="flex justify-end items-center text-purple-600 font-medium mt-4 group/link">
            <svg
              className="w-4 h-4 ml-1 transition-transform duration-200 group-hover/link:translate-x-1"
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
      </Link>
    );
  }
);

MentalHealthCard.displayName = 'MentalHealthCard';

// Optimized Grid Component - UNCHANGED
export const MentalHealthCardsGrid = memo(
  ({
    cards,
    limit,
    showIcon = true,
    variant = 'default',
  }: MentalHealthCardsGridProps) => {
    const displayedCards = limit ? cards.slice(0, limit) : cards;

    // Determine grid columns based on variant
    const gridCols = useMemo(() => {
      if (variant === 'featured') {
        return 'grid grid-cols-1 gap-6';
      }
      if (variant === 'compact') {
        return 'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 m-10 sm:m-20 ';
      }
      return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }, [variant]);

    return (
      <div className={gridCols}>
        {displayedCards.map((card, index) => (
          <MentalHealthCard
            key={card.id}
            card={card}
            index={index}
            showIcon={showIcon}
            variant={variant}
          />
        ))}
      </div>
    );
  }
);

MentalHealthCardsGrid.displayName = 'MentalHealthCardsGrid';

interface MentalHealthCardsGridProps {
  cards: MentalHealthCardType[];
  limit?: number;
  showIcon?: boolean;
  variant?: 'default' | 'compact' | 'featured';
}

export default MentalHealthCard;
