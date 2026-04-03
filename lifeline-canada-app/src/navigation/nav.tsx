import { Users, AlertCircle, Zap } from 'lucide-react';
import React from 'react';

/* =========================
   RESOURCES (MEGA MENU)
========================= */

export const resourceCategories = [
  {
    category: 'Mental Health Topics',
    links: [
      {
        name: 'Coping with Suicidal Thoughts',
        path: '/resources/suicidal-thoughts',
        icon: '🛡️',
        color: 'from-blue-400 to-cyan-400',
      },
      {
        name: 'How Can I Help Someone?',
        path: '/resources/how-to-help',
        icon: '🤝',
        color: 'from-emerald-400 to-green-400',
      },
      {
        name: 'Warning Signs',
        path: '/resources/warning-signs',
        icon: '⚠️',
        color: 'from-amber-400 to-orange-400',
      },
      {
        name: 'PTSD',
        path: '/resources/ptsd',
        icon: '🌀',
        color: 'from-purple-400 to-violet-400',
      },
      {
        name: 'Grief Support',
        path: '/resources/grief',
        icon: '💔',
        color: 'from-rose-400 to-pink-400',
      },
      {
        name: 'Depression',
        path: '/resources/depression',
        icon: '☁️',
        color: 'from-slate-400 to-gray-400',
      },
      {
        name: 'Anxiety',
        path: '/resources/anxiety',
        icon: '😰',
        color: 'from-yellow-400 to-amber-400',
      },
      {
        name: 'Addiction',
        path: '/resources/addiction',
        icon: '🚫',
        color: 'from-red-400 to-rose-400',
      },
      {
        name: 'Self Management',
        path: '/resources/self-management',
        icon: '🧠',
        color: 'from-indigo-400 to-blue-400',
      },
      {
        name: 'E-Counselling',
        path: '/resources/e-counselling',
        icon: '💬',
        color: 'from-teal-400 to-emerald-400',
      },
      {
        name: 'Search for a Professional',
        path: '/resources/search-professional',
        icon: '🔎',
        color: 'from-gray-400 to-slate-400',
      },
    ],
  },
  {
    category: 'Survivors',
    links: [
      {
        name: 'Attempt Survivors',
        path: '/resources/attempt-survivors',
        icon: '🧍',
        color: 'from-blue-400 to-cyan-400',
      },
      {
        name: 'Survivors of Suicide Loss',
        path: '/resources/suicide-loss',
        icon: '🕊️',
        color: 'from-purple-400 to-violet-400',
      },
      {
        name: 'Bereaved Support',
        path: '/resources/bereaved-support',
        icon: '🤍',
        color: 'from-pink-400 to-rose-400',
      },
      {
        name: 'After a Suicide Loss',
        path: '/resources/after-suicide-loss',
        icon: '💐',
        color: 'from-emerald-400 to-green-400',
      },
    ],
  },
  {
    category: 'Communities',
    links: [
      {
        name: 'Teens & Youth',
        path: '/resources/teens-youth',
        icon: '🧑‍🎓',
        color: 'from-blue-400 to-indigo-400',
      },
      {
        name: 'Parents',
        path: '/resources/parents',
        icon: '👨‍👩‍👧',
        color: 'from-pink-400 to-rose-400',
      },
      {
        name: 'College Students',
        path: '/resources/college-students',
        icon: '🎓',
        color: 'from-purple-400 to-violet-400',
      },
      {
        name: 'Indigenous',
        path: '/resources/indigenous',
        icon: '🪶',
        color: 'from-amber-400 to-orange-400',
      },
      {
        name: 'LGBTQ2S',
        path: '/resources/lgbtq2s',
        icon: '🏳️‍🌈',
        color: 'from-red-400 to-pink-400',
      },
      {
        name: 'Men',
        path: '/resources/men',
        icon: '👨',
        color: 'from-blue-400 to-cyan-400',
      },
      {
        name: 'Seniors',
        path: '/resources/seniors',
        icon: '👴',
        color: 'from-gray-400 to-slate-400',
      },
      {
        name: 'Veterans & Military',
        path: '/resources/veterans',
        icon: '🎖️',
        color: 'from-yellow-400 to-amber-400',
      },
      {
        name: 'Refugees',
        path: '/resources/refugees',
        icon: '🌍',
        color: 'from-emerald-400 to-teal-400',
      },
    ],
  },
  {
    category: 'Professionals',
    links: [
      {
        name: 'Educators',
        path: '/resources/educators',
        icon: '📚',
        color: 'from-purple-400 to-violet-400',
      },
      {
        name: 'Health Professionals',
        path: '/resources/health-professionals',
        icon: '🩺',
        color: 'from-red-400 to-rose-400',
      },
      {
        name: 'First Responders',
        path: '/resources/first-responders',
        icon: '🚑',
        color: 'from-blue-400 to-cyan-400',
      },
      {
        name: 'Care Givers',
        path: '/resources/care-givers',
        icon: '🤲',
        color: 'from-emerald-400 to-green-400',
      },
      {
        name: 'Media Professionals',
        path: '/resources/media-professionals',
        icon: '🎤',
        color: 'from-yellow-400 to-amber-400',
      },
    ],
  },
  {
    category: 'Other',
    links: [
      {
        name: 'Myths & Facts',
        path: '/resources/myths-facts',
        icon: '📊',
        color: 'from-indigo-400 to-purple-400',
      },
    ],
  },
];

/* =========================
   PATTERN INTERRUPTS
========================= */

export const patternInterrupts = [
  {
    category: 'Mood & Inspiration',
    links: [
      { name: 'Improve Your Mood', path: '/pattern-interrupt/improve-mood' },
      { name: 'Comedy', path: '/pattern-interrupt/comedy' },
      { name: 'Inspiring Videos', path: '/pattern-interrupt/inspiring-videos' },
      { name: 'Emotional Support Videos', path: '/pattern-interrupt/emotional-support' },
      { name: 'Uplifting Music Videos', path: '/pattern-interrupt/music' },
      { name: 'Life Changing Books', path: '/pattern-interrupt/books' },
      { name: 'Movies of Inspiration', path: '/pattern-interrupt/movies-inspiration' },
      { name: 'Helpful Movies', path: '/pattern-interrupt/helpful-movies' },
    ],
  },
  {
    category: 'Self Help & Tools',
    links: [
      { name: 'Self Management', path: '/pattern-interrupt/self-management' },
      { name: 'Coping Mechanisms', path: '/pattern-interrupt/coping' },
      { name: 'Interactive Mind', path: 'pattern-interrupt/interactive-mind' },
      { name: 'Mental Health Apps', path: '/pattern-interrupt/apps' },
      {
        name: 'Transform Negative Thoughts',
        path: '/pattern-interrupt/transform-thoughts',
      },
      { name: 'Words of Wisdom', path: '/pattern-interrupt/wisdom' },
      { name: 'Image Gallery', path: '/pattern-interrupt/gallery' },
      { name: 'Acts of Kindness', path: '/pattern-interrupt/kindness' },
    ],
  },
];

/* =========================
   MAIN NAV (4 PRIMARY NAV ITEMS)
========================= */

export const mainNavLinks = [
  {
    name: 'In Crisis?',
    path: '/incrisisneedhelp',
    emergency: true,
    icon: React.createElement(AlertCircle, { className: 'w-4 h-4' }),
  },
  {
    name: 'Resources',
    path: '/resources',
    hasMegaMenu: true,
  },
  {
    name: 'Pattern Interrupts',
    path: '/pattern-interrupts',
    hasMegaMenu: true,
  },
  {
    name: 'LifeLine App',
    path: '/app?mode=login',
    icon: React.createElement(Zap, { className: 'w-4 h-4' }),
  },
   {
  name: 'Companion Paws',
  path: 'https://companionpaws.ca/',
  icon: '🐕'
}
];

/* =========================
   DROPDOWN NAV ITEMS
========================= */

export const dropdownNavLinks = [
  {
    name: 'About',
    path: '/about-us',
    icon: React.createElement(Users, { className: 'w-4 h-4' }),
  },
   {
    name: 'Contact',
    path: '/contact-us',
    icon: '✉️', // Phone contact
  },
     {
    name: 'Get Involved',
    path: '/volunteers',
    icon: '🙋',
  },


  {
    name: 'Email Support',
    path: '/support',
    icon: '✉️', // Email
  },
   {
    name: 'Contribute',
    path: '/contribute',
    icon: '❤️',
  },
  {
    name: 'EN/FR',
    path: '#', ///english-french
    icon: '🌐', // Language / Global
  },
  {
    name: 'Site Map',
    path: '/site-map',
    icon: '🗺️', // Map
  },
];

/* =========================
   HELPER FUNCTIONS
========================= */

// Helper functions for Pattern Interrupts
const getIconForPatternLink = (name: string): string => {
  const iconMap: Record<string, string> = {
    'Improve Your Mood': '😊',
    Comedy: '😂',
    'Inspiring Videos': '🌟',
    'Emotional Support Videos': '💖',
    'Uplifting Music Videos': '🎵',
    'Life Changing Books': '📚',
    'Movies of Inspiration': '🎬',
    'Helpful Movies': '🎥',
    'Self Management': '🧘',
    'Coping Mechanisms': '🛡️',
    'Interactive Mind': '🧩',
    'Mental Health Apps': '📱',
    'Transform Negative Thoughts': '🔄',
    'Words of Wisdom': '💭',
    'Image Gallery': '🖼️',
    'Acts of Kindness': '❤️',
  };
  return iconMap[name] || '✨';
};

const getColorForPatternLink = (name: string): string => {
  const colorMap: Record<string, string> = {
    'Improve Your Mood': 'from-yellow-400 to-amber-400',
    Comedy: 'from-orange-400 to-red-400',
    'Inspiring Videos': 'from-purple-400 to-pink-400',
    'Emotional Support Videos': 'from-pink-400 to-rose-400',
    'Uplifting Music Videos': 'from-blue-400 to-cyan-400',
    'Life Changing Books': 'from-emerald-400 to-green-400',
    'Movies of Inspiration': 'from-violet-400 to-purple-400',
    'Helpful Movies': 'from-indigo-400 to-blue-400',
    'Self Management': 'from-teal-400 to-emerald-400',
    'Coping Mechanisms': 'from-blue-400 to-indigo-400',
    'Interactive Mind': 'from-purple-400 to-pink-400',
    'Mental Health Apps': 'from-green-400 to-teal-400',
    'Transform Negative Thoughts': 'from-red-400 to-orange-400',
    'Words of Wisdom': 'from-yellow-400 to-amber-400',
    'Image Gallery': 'from-pink-400 to-rose-400',
    'Acts of Kindness': 'from-red-400 to-pink-400',
  };
  return colorMap[name] || 'from-gray-400 to-slate-400';
};

// Helper to flatten resource categories
export const getAllResourceLinks = () => {
  const allLinks: Array<{
    name: string;
    path: string;
    icon: string;
    color: string;
    category?: string;
    featured?: boolean;
  }> = [];

  resourceCategories.forEach((category) => {
    category.links.forEach((link) => {
      allLinks.push({
        ...link,
        category: category.category,
        featured:
          category.category === 'Mental Health Topics' &&
          [
            'Coping with Suicidal Thoughts',
            'How Can I Help Someone?',
            'Warning Signs',
          ].includes(link.name),
      });
    });
  });

  return allLinks;
};

// Helper to flatten pattern interrupts
export const getAllPatternInterruptLinks = () => {
  const allLinks: Array<{
    name: string;
    path: string;
    icon: string;
    color: string;
    category?: string;
    featured?: boolean;
  }> = [];

  patternInterrupts.forEach((category) => {
    category.links.forEach((link) => {
      allLinks.push({
        ...link,
        icon: getIconForPatternLink(link.name),
        color: getColorForPatternLink(link.name),
        category: category.category,
        featured: [
          'Improve Your Mood',
          'Self Management',
          'Coping Mechanisms',
        ].includes(link.name),
      });
    });
  });

  return allLinks;
};

// Utility function to get all nav items (for mobile navigation)
export const getAllNavLinks = () => {
  return [...mainNavLinks, ...dropdownNavLinks];
};
