// types/dashboard.types.ts
export interface User {
  name: string;
  email: string;
  avatar?: string;
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
