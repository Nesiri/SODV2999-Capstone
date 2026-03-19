// data/navigationData.tsx
import {
  Home,
  Activity,
  Wind,
  BookOpen,
  Bookmark,
  TrendingUp,
  Calendar,
  User,
  Settings,
} from 'lucide-react';
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
    id: 'saved',
    icon: <Bookmark size={20} />,
    label: 'Saved Items',
    path: '/dashboard/saved',
  },
  {
    id: 'progress',
    icon: <TrendingUp size={20} />,
    label: 'Progress',
    path: '/dashboard/progress',
  },
  {
    id: 'journal',
    icon: <Calendar size={20} />,
    label: 'Journal',
    path: '/dashboard/journal',
  },
  {
    id: 'profile',
    icon: <User size={20} />,
    label: 'Profile',
    path: '/dashboard/profile',
  },
  {
    id: 'settings',
    icon: <Settings size={20} />,
    label: 'Settings',
    path: '/dashboard/settings',
  },
];

export const quickResources = [
  {
    id: 'crisis',
    title: 'Crisis Support',
    link: '/crisis',
    icon: '🆘',
    color: 'bg-rose-50',
    description: 'Immediate help when needed',
  },
  {
    id: 'breathing',
    title: 'Breathing Exercise',
    link: '/breathing',
    icon: '🌬️',
    color: 'bg-blue-50',
    description: '4-7-8 calming technique',
  },
  {
    id: 'saved',
    title: 'Saved Articles',
    link: '/saved',
    icon: '📚',
    color: 'bg-amber-50',
    description: 'Your personal library',
  },
  {
    id: 'history',
    title: 'Mood History',
    link: '/mood-history',
    icon: '📊',
    color: 'bg-purple-50',
    description: 'Track your journey',
  },
];

export const weeklyMoodData = [65, 45, 70, 55, 80, 60, 75];
export const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
