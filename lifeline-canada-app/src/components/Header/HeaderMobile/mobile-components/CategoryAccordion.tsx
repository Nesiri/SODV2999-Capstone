import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCategoryIcon } from '../../../../utils/menuUtils';

interface CategoryAccordionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  groupedLinks: Record<string, any[]>;
  activeCategory: string | null;
  onCategoryToggle: (category: string) => void;
  onLinkClick: () => void;
}

export const CategoryAccordion = ({
  groupedLinks,
  activeCategory,
  onCategoryToggle,
  onLinkClick,
}: CategoryAccordionProps) => {
  const categories = Object.keys(groupedLinks);

  return (
    <div className="space-y-4">
      {categories.map((category, index) => (
        <div
          key={category}
          className="rounded-2xl overflow-hidden border border-gray-200 
            backdrop-blur-sm hover:border-blue-300 transition-all duration-500"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Category Button */}
          <button
            onClick={() => onCategoryToggle(category)}
            className="w-full flex items-center justify-between p-5 
             bg-gradient-to-b from-blue-200 via-gray-200 to-pink-100 hover:from-blue-50/50 hover:to-indigo-50/30
              transition-all duration-500 group"
          >
            <div className="flex items-center gap-3">
              <div
                className="p-2.5 rounded-lg bg-gradient-to-br from-white to-gray-50 
                group-hover:from-blue-100/30 group-hover:to-indigo-100/30"
              >
                <span className="text-lg">{getCategoryIcon(category)}</span>
              </div>
              <div className="text-left">
                <span className="font-bold text-gray-900 group-hover:text-blue-700">
                  {category}
                </span>
                <p className="text-sm text-gray-500 mt-0.5">
                  {groupedLinks[category].length} items
                </p>
              </div>
            </div>
            <ChevronRight
              className={`w-5 h-5 text-gray-400 transition-all duration-500
                ${activeCategory === category ? 'rotate-90 text-blue-600' : 'group-hover:text-blue-500'}`}
            />
          </button>

          {/* Links */}
          {activeCategory === category && (
            <div className="p-4 bg-gradient-to-b from-white to-gray-50/30 space-y-2">
              {groupedLinks[category].map((link, linkIndex) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onLinkClick}
                  className="group/link flex items-center gap-3 p-3.5 rounded-lg
                    border border-gray-200 hover:border-blue-300 hover:bg-white hover:shadow-md
                    transition-all duration-300"
                  style={{ animationDelay: `${linkIndex * 30}ms` }}
                >
                  {link.icon && (
                    <span className="text-lg">
                      {typeof link.icon === 'string' ? link.icon : link.icon}
                    </span>
                  )}
                  <span className="text-gray-700 group-hover/link:text-gray-900 flex-1">
                    {link.name}
                  </span>
                  <ArrowRight
                    className="w-3.5 h-3.5 text-gray-400 opacity-0 
                    group-hover/link:opacity-100 group-hover/link:translate-x-1 
                    transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
