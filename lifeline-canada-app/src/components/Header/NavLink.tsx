// components/NavLink.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // or your router's Link

interface NavLinkProps {
  link: {
    name: string;
    path: string;
    icon?: React.ReactNode;
    emergency?: boolean;
  };
  onClick?: () => void;
  className?: string;
}

export default function NavLink({
  link,
  onClick,
  className = '',
}: NavLinkProps) {
  return (
    <Link
      to={link.path}
      onClick={onClick}
      className={`flex items-center ${className} ${
        link.emergency
          ? 'text-red-600 hover:text-red-700'
          : 'text-gray-700 hover:text-blue-600'
      } transition-colors duration-150`}
    >
      {link.icon && <span className="mr-2">{link.icon}</span>}
      {link.name}
    </Link>
  );
}
