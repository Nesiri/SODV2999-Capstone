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

// Memoize icon selection to prevent recalculation
const getIconByCategory = (category?: string) => {
  switch (category) {
    case 'depression':
    case 'anxiety':
    case 'ptsd':
    case 'addiction':
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      );
    case 'crisis':
    case 'counselling':
    case 'professional-help':
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      );
    case 'grief':
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      );
    case 'self-help':
    case 'education':
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      );
    default:
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      );
  }
};

// Optimized image component with lazy loading - MODIFIED: Added h-80
const OptimizedImage = memo(({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="w-full h-80 bg-gray-100"> {/* CHANGED: h-full → h-80 */}
      {!isLoaded && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
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
export const MentalHealthCard = memo(({
  card,
  index = 0,
  showIcon = true,
  variant = 'default',
}: MentalHealthCardProps) => {
  // Memoize styles to prevent recalculation - MODIFIED: Removed aspect-square
  const styles = useMemo(() => {
    switch (variant) {
      case 'compact':
        return {
          container: 'group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-gray-100',
          image: 'w-full', // CHANGED: aspect-square → w-full
          content: 'p-5',
          title: 'text-lg font-bold text-gray-900 mb-2 line-clamp-1',
          subtitle: 'text-gray-600 text-sm line-clamp-2',
        };
      case 'featured':
        return {
          container: 'group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 overflow-hidden border-2 border-blue-100',
          image: 'w-full', // CHANGED: aspect-square → w-full
          content: 'p-6',
          title: 'text-2xl font-bold text-gray-900 mb-3 line-clamp-2',
          subtitle: 'text-gray-700 text-base line-clamp-3',
        };
      default:
        return {
          container: 'group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-gray-100',
          image: 'w-full', // CHANGED: aspect-square → w-full
          content: 'p-6',
          title: 'text-xl font-bold text-gray-900 mb-2 line-clamp-2',
          subtitle: 'text-gray-600 line-clamp-2',
        };
    }
  }, [variant]);

  // Memoize the icon to prevent recalculation
  const icon = useMemo(() => showIcon && getIconByCategory(card.category), [showIcon, card.category]);

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

        {/* Icon indicator - simplified animation */}
        {showIcon && (
          <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md">
            <svg
              className="w-4 h-4 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {icon}
            </svg>
          </div>
        )}
      </div>

      {/* Content - UNCHANGED */}
      <div className={styles.content}>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.subtitle}>{card.subtitle}</p>

       {/* Simplified Learn More Link - UNCHANGED */}
<div className="flex justify-end items-center text-blue-600 font-medium mt-4 group/link">
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
});

MentalHealthCard.displayName = 'MentalHealthCard';

// Optimized Grid Component - UNCHANGED
export const MentalHealthCardsGrid = memo(({
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
      return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4';
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
});

MentalHealthCardsGrid.displayName = 'MentalHealthCardsGrid';

interface MentalHealthCardsGridProps {
  cards: MentalHealthCardType[];
  limit?: number;
  showIcon?: boolean;
  variant?: 'default' | 'compact' | 'featured';
}

export default MentalHealthCard;