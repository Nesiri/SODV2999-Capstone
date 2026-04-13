// types/dashboard.types.ts
import type { User } from './auth.types';

export interface DashboardLayoutProps {
  user: User; // User can have optional name
  onLogout: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  navItems: NavItem[];
  onLogout: () => void;
}

export interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  path: string;
  badge?: number;
}

export interface ResourceItem {
  id: string;
  title: string;
  link: string;
  icon: string;
  color: string;
  description?: string;
}
