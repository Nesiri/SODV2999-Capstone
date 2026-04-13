// data/navigationData.tsx
import { Home, Activity, Wind, BookOpen, Settings } from 'lucide-react';
import type { NavItem } from '../types/dashboard.types';

export const mainNavItems: NavItem[] = [
  {
    id: 'dashboard',
    icon: <Home size={20} />,
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    id: 'mood',
    icon: <Activity size={20} />,
    label: 'Mood Tracker',
    path: '/dashboard/mood',
  },
  {
    id: 'breathing',
    icon: <Wind size={20} />,
    label: 'Breathing Exercises',
    path: '/dashboard/breathing',
  },
  {
    id: 'resources',
    icon: <BookOpen size={20} />,
    label: 'My Resources',
    path: '/dashboard/resources',
  },

  {
    id: 'settings',
    icon: <Settings size={20} />,
    label: 'Settings',
    path: '/dashboard/settings',
  },
];
