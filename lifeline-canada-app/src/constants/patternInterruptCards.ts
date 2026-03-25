// constants/mediaCards.ts

export interface MediaCard {
  id: number;
  title: string;
  image: string;
  path?: string; // Optional path for navigation
  category?: string; // Optional category for filtering
}

export const patternInterruptCards: MediaCard[] = [
  {
    id: 1,
    title: 'Improve Your Mood',
    image: '/assets/PatternInterruptImages/improve-your-mood-600x401.jpg',
    path: '/pattern-interrupt/improve-mood',
    category: 'mood',
  },
  {
    id: 2,
    title: 'Comedy',
    image: '/assets/PatternInterruptImages/comedy-400x266.jpeg',
    path: '/pattern-interrupt/comedy',
    category: 'entertainment',
  },
  {
    id: 3,
    title: 'Inspiring Videos',
    image: '/assets/PatternInterruptImages/Inspiring-Videos-300x200.webp',
    path: '/pattern-interrupt/inspiring-videos',
    category: 'videos',
  },
  {
    id: 4,
    title: 'Emotional Support Videos',
    image: '/assets/PatternInterruptImages/emotionalSupport-400x267.jpg',
    path: '/pattern-interrupt/emotional-support',
    category: 'videos',
  },
  {
    id: 5,
    title: 'Uplifting Music Videos',
    image: '/assets/PatternInterruptImages/upliftingMusic-400x260.jpg',
    path: '/pattern-interrupt/music',
    category: 'music',
  },
  {
    id: 6,
    title: 'Life Changing Books',
    image: '/assets/PatternInterruptImages/LifeChangingBooks-300x124.webp',
    path: '/pattern-interrupt/books',
    category: 'books',
  },
  {
    id: 7,
    title: 'Helpful Movies',
    image: '/assets/PatternInterruptImages/3wPopcorn-300x200.webp',
    path: '/pattern-interrupt/helpful-movies',
    category: 'movies',
  },
  {
    id: 8,
    title: 'Movies of Inspiration',
    image:
      '/assets/PatternInterruptImages/Best-Inspirational-Movies-300x200.webp',
    path: '/pattern-interrupt/movies-inspiration',
    category: 'movies',
  },
  {
    id: 9,
    title: 'Self Management',
    image: '/assets/PatternInterruptImages/self-care-400x225.jpg',
    path: '/pattern-interrupt/self-management',
    category: 'self-help',
  },
  {
    id: 10,
    title: 'Coping Mechanisms',
    image: '/assets/PatternInterruptImages/coping-600x431.jpg',
    path: '/pattern-interrupt/coping',
    category: 'coping',
  },
  {
    id: 11,
    title: 'Interactive Mind',
    image: '/assets/PatternInterruptImages/InteractiveMind-400x299.jpg',
    path: '/pattern-interrupt/interactive-mind',
    category: 'interactive',
  },
  {
    id: 12,
    title: 'Mental Health Apps',
    image: '/assets/PatternInterruptImages/mental-health-apps-400x200.png',
    path: '/pattern-interrupt/apps',
    category: 'apps',
  },
  {
    id: 13,
    title: 'Transform Negative Thoughts',
    image:
      '/assets/PatternInterruptImages/how-to-change-negative-thinking-400x200.jpg',
    path: '/pattern-interrupt/transform-thoughts',
    category: 'mindset',
  },
  {
    id: 14,
    title: 'Words of Wisdom',
    image:
      '/assets/PatternInterruptImages/inspirational-quote-about-hope-400x400.png',
    path: '/pattern-interrupt/wisdom',
    category: 'quotes',
  },
  {
    id: 15,
    title: 'Image Gallery',
    image: '/assets/PatternInterruptImages/ImageGall-400x402.png',
    path: '/pattern-interrupt/gallery',
    category: 'gallery',
  },
  {
    id: 16,
    title: 'Acts of Kindness',
    image: '/assets/PatternInterruptImages/bagofGroc-400x209.jpg',
    path: '/pattern-interrupt/kindness',
    category: 'kindness',
  },
];

// Optional: Grouped by category for easier filtering
export const patternInterruptCardsByCategory = {
  mood: patternInterruptCards.filter((card) => card.category === 'mood'),
  entertainment: patternInterruptCards.filter(
    (card) => card.category === 'entertainment'
  ),
  videos: patternInterruptCards.filter((card) => card.category === 'videos'),
  music: patternInterruptCards.filter((card) => card.category === 'music'),
  books: patternInterruptCards.filter((card) => card.category === 'books'),
  movies: patternInterruptCards.filter((card) => card.category === 'movies'),
  selfHelp: patternInterruptCards.filter(
    (card) => card.category === 'self-help'
  ),
  coping: patternInterruptCards.filter((card) => card.category === 'coping'),
  interactive: patternInterruptCards.filter(
    (card) => card.category === 'interactive'
  ),
  apps: patternInterruptCards.filter((card) => card.category === 'apps'),
  mindset: patternInterruptCards.filter((card) => card.category === 'mindset'),
  quotes: patternInterruptCards.filter((card) => card.category === 'quotes'),
  gallery: patternInterruptCards.filter((card) => card.category === 'gallery'),
  kindness: patternInterruptCards.filter(
    (card) => card.category === 'kindness'
  ),
};

// Optional: Get random cards for "featured" sections
export const getRandomPatternInterruptCards = (count: number): MediaCard[] => {
  const shuffled = [...patternInterruptCards].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
