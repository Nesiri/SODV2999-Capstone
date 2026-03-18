import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface LinkItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  link: any;
  onClick: () => void;
  showIcon?: boolean;
  showFeatured?: boolean;
  className?: string;
  animationDelay?: number;
}

export const LinkItem = ({
  link,
  onClick,
  showIcon = true,
  showFeatured = true,
  className = '',
  animationDelay = 0,
}: LinkItemProps) => (
  <Link
    to={link.path}
    onClick={onClick}
    className={`group block p-4 rounded-2xl bg-white/80 hover:bg-white backdrop-blur-sm 
      border border-gray-100 hover:border-blue-200 hover:shadow-xl 
      transition-all duration-500 hover:-translate-y-1 active:scale-[0.98]
      focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${className}`}
    style={{ animationDelay: `${animationDelay}ms` }}
  >
    <div className="flex items-center gap-4">
      {showIcon && link.icon && (
        <div
          className={`p-3 rounded-xl bg-gradient-to-br ${link.color || 'from-blue-50/80 to-indigo-50/80'} 
          group-hover:opacity-100 transition-all duration-500`}
        >
          <span className="text-lg">
            {typeof link.icon === 'string' ? link.icon : link.icon}
          </span>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800 group-hover:text-gray-900 truncate transition-colors">
            {link.name}
          </span>
          {showFeatured && link.featured && (
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          )}
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500" />
    </div>
  </Link>
);
