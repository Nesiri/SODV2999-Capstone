// components/NavLink.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  link: {
    name: string;
    path: string;
    icon?: React.ReactNode;
  };
  onClick?: () => void;
  className?: string;
}

export default function NavLink({ link, onClick }: NavLinkProps) {
  return (
    <Link
      to={link.path}
      onClick={onClick}
      {...(link.name === 'LifeLine App' || link.name === 'Companion Paws'
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className={`
        relative flex items-center gap-2
        px-4 py-3 rounded-lg
        h-[45px]

        bg-gray-50 dark:!bg-gray-50 !text-gray-600 dark:!text-gray-600 font-bold
        border border-gray-200 dark:!border-gray-200

        transition-all duration-200

        hover:border-blue-600 dark:hover:!border-blue-600 hover:text-gray-800 dark:hover:!text-gray-800
        hover:bg-gray-100 dark:hover:!bg-gray-100

      `}
    >
      {link.icon && (
        <span className="flex items-center" aria-hidden="true">
          {link.icon}
        </span>
      )}
      <span className="text-[clamp(12px,1.2vw,16px)] !text-[#5f2d85] dark:!text-[#5f2d85] whitespace-nowrap">
        {link.name}
      </span>
    </Link>
  );
}
