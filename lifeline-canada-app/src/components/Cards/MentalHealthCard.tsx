// components/MentalHealthCard.tsx

import { Link } from 'react-router-dom';
import type { MentalHealthCard as MentalHealthCardType } from '../../constants/mental-health-cards';

interface MentalHealthCardProps {
  card: MentalHealthCardType;
  index?: number;
  showCategory?: boolean;
  showIcon?: boolean;
  variant?: 'default' | 'compact' | 'featured';
}

const formatCategory = (category?: string): string => {
  if (!category) return 'General';
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

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

export const MentalHealthCard = ({
  card,
  index = 0,
  showCategory = true,
  showIcon = true,
  variant = 'default',
}: MentalHealthCardProps) => {
  const getCardStyles = () => {
    switch (variant) {
      case 'compact':
        return {
          container:
            'group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1 border border-gray-100/50',
          image: 'h-40',
          content: 'p-6',
          title:
            'text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300',
          subtitle: 'text-gray-600 leading-relaxed mb-4 text-sm',
        };
      case 'featured':
        return {
          container:
            'group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border-2 border-blue-100/50',
          image: 'h-64',
          content: 'p-10',
          title:
            'text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300',
          subtitle: 'text-gray-700 leading-relaxed mb-8 text-lg',
        };
      default:
        return {
          container:
            'group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100/50',
          image: 'h-56',
          content: 'p-8',
          title:
            'text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300',
          subtitle: 'text-gray-600 leading-relaxed mb-6',
        };
    }
  };

  const styles = getCardStyles();

  return (
    <Link
      to={card.link || '#'}
      className={styles.container}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Card gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Image Container with floating effect */}
      <div className={`relative ${styles.image} overflow-hidden`}>
        <img
          src={card.image[0]}
          alt={card.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src =
              'https://via.placeholder.com/600x400?text=💚+Mental+Wellness';
          }}
        />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

        {/* Category Tag with modern design */}
        {showCategory && (
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-sm font-semibold rounded-full text-gray-800 shadow-lg border border-white/50 transform group-hover:scale-105 transition-transform duration-300">
              {formatCategory(card.category)}
            </span>
          </div>
        )}

        {/* Icon indicator */}
        {showIcon && (
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {getIconByCategory(card.category)}
            </svg>
          </div>
        )}
      </div>

      {/* Content with modern typography */}
      <div className={styles.content}>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.subtitle}>{card.subtitle}</p>

        {/* Enhanced Learn More Link */}
        <div className="flex items-center text-blue-600 font-semibold group/link">
          <span className="relative">
            Access Resources
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover/link:w-full transition-all duration-300"></span>
          </span>
          <svg
            className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-600/10 to-purple-600/10 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Link>
  );
};

// Optional: Cards Grid Component for easy usage
interface MentalHealthCardsGridProps {
  cards: MentalHealthCardType[];
  limit?: number;
  showCategory?: boolean;
  showIcon?: boolean;
  variant?: 'default' | 'compact' | 'featured';
  columns?: {
    default?: number;
    md?: number;
    lg?: number;
  };
}

export const MentalHealthCardsGrid = ({
  cards,
  limit,
  showCategory = true,
  showIcon = true,
  variant = 'default',
  columns = { default: 1, md: 2, lg: 3 },
}: MentalHealthCardsGridProps) => {
  const getGridCols = () => {
    return `grid grid-cols-${columns.default} md:grid-cols-${columns.md} lg:grid-cols-${columns.lg} gap-8`;
  };

  const displayedCards = limit ? cards.slice(0, limit) : cards;

  return (
    <div className={getGridCols()}>
      {displayedCards.map((card, index) => (
        <MentalHealthCard
          key={card.id}
          card={card}
          index={index}
          showCategory={showCategory}
          showIcon={showIcon}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default MentalHealthCard;
