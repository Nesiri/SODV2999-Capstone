// components/ResourcesDropdown.tsx
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ResourceLink {
  name: string;
  path: string;
  icon?: string | React.ReactNode;
  category?: string;
  featured?: boolean;
  emergency?: boolean;
}

interface CategoryGroup {
  category: string;
  links: ResourceLink[];
}

interface ResourcesDropdownProps {
  resourceLinks: ResourceLink[];
  triggerText: string;
  triggerPath: string;
  emergency?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

function useDelayedClose(initialState = false, delay = 300) {
  const [isOpen, setIsOpen] = useState(initialState);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const close = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { isOpen, open, close, setIsOpen };
}

export default function ResourcesDropdown({
  resourceLinks,
  triggerText,
  triggerPath,
  emergency = false,
  icon = null,
  className = '',
}: ResourcesDropdownProps) {
  const { isOpen, open, close, setIsOpen } = useDelayedClose(false, 300);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  // Group links by category
  const groupedByCategory: CategoryGroup[] = resourceLinks.reduce(
    (groups: CategoryGroup[], link) => {
      const category = link.category || 'Uncategorized';
      const existingGroup = groups.find((g) => g.category === category);

      if (existingGroup) {
        existingGroup.links.push(link);
      } else {
        groups.push({
          category,
          links: [link],
        });
      }

      return groups;
    },
    []
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setActiveCategory(null);
    }
  };

  const handleButtonClick = () => {
    setIsOpen(false);
    setActiveCategory(null);
    navigate(triggerPath);
  };

  const handleMouseEnter = () => {
    open();
    // Set first category as active when opening
    if (groupedByCategory.length > 0 && !activeCategory) {
      setActiveCategory(groupedByCategory[0].category);
    }
  };

  const handleMouseLeave = () => {
    close();
  };

  const handleCategoryMouseEnter = (category: string) => {
    setActiveCategory(category);
  };

  const handleDropdownMouseLeave = () => {
    close();
    setActiveCategory(null);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveCategory(null);
  };

  return (
    <div
      className={`relative ${className}`}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Button */}
      <button
        onClick={handleButtonClick}
        className={`
          relative flex items-center px-4 py-2 font-medium 
          transition-colors duration-200 focus:outline-none
          ${
            emergency
              ? 'text-red-600 hover:text-red-700'
              : 'text-gray-800 hover:text-blue-600'
          }
        `}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {icon && (
          <span className="mr-2" aria-hidden="true">
            {icon}
          </span>
        )}
        {triggerText}
        <ChevronDown
          className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Hover Dropdown */}
      {isOpen && (
        <div
          className="absolute left-0 top-full mt-1 z-50 w-[600px] bg-white 
                   border border-gray-200 shadow-xl rounded-lg overflow-hidden
                   animate-in slide-in-from-top-2 fade-in duration-150"
          onMouseEnter={open}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div className="flex bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden border border-gray-100 max-w-2xl min-h-[320px]">
            {/* Left Categories - Slimmer */}
            <div className="w-[160px] bg-gradient-to-b from-blue-200 via-gray-200 to-pink-100 border-r border-gray-200/50">
              <div className="p-3 border-b border-gray-200/60 bg-gradient-to-r from-white to-gray-50">
                <h3 className="text-xs font-semibold text-gray-800 tracking-wide uppercase">
                  Categories
                </h3>
              </div>
              <div className="p-1.5 overflow-y-auto max-h-[280px]">
                {groupedByCategory.map((group) => (
                  <button
                    key={group.category}
                    onMouseEnter={() => handleCategoryMouseEnter(group.category)}
                    className={`
                      w-full text-left px-3 py-2 rounded mb-1
                      transition-all duration-150 ease-out
                      ${
                        activeCategory === group.category
                          ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm text-blue-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/70 border border-transparent hover:border-gray-200'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-medium text-xs truncate ${
                          activeCategory === group.category 
                            ? 'text-blue-700' 
                            : 'text-gray-700'
                        }`}
                      >
                        {group.category}
                      </span>
                      <span
                        className={`
                          text-[10px] px-1.5 py-0.5 rounded-full shrink-0
                          ${
                            activeCategory === group.category
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-gray-100 text-gray-500'
                          }
                        `}
                      >
                        {group.links.length}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content - Compact */}
            <div className="flex-1 bg-gradient-to-br from-white via-gray-500/30 to-white min-w-0">
              {activeCategory && (
                <div className="p-4 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-800 truncate">
                      {activeCategory}
                    </h4>
                    <span className="text-xs text-gray-400 px-2.5 py-0.5 bg-gray-100 rounded-full shrink-0">
                      {groupedByCategory.find(
                        (g) => g.category === activeCategory
                      )?.links.length || 0}{' '}
                      items
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 overflow-y-auto max-h-[300px] pr-1">
                    {groupedByCategory
                      .find((g) => g.category === activeCategory)
                      ?.links.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="group px-3 py-2.5 rounded-lg border border-gray-100 
                                   hover:border-blue-200 hover:shadow-sm 
                                   bg-gradient-to-r from-white to-gray-50/50
                                   hover:from-blue-50/30 hover:to-white
                                   transition-all duration-150"
                          onClick={handleLinkClick}
                        >
                          <div className="flex items-center min-w-0">
                            {link.icon && (
                              <span
                                className="mr-2 text-gray-500 group-hover:text-blue-500 
                                           transition-colors duration-150 shrink-0 text-sm"
                              >
                                {link.icon}
                              </span>
                            )}
                            <div className="flex-1 min-w-0">
                              <span
                                className="text-xs text-gray-700 group-hover:text-gray-900 
                                           font-medium block truncate"
                                title={link.name}
                              >
                                {link.name}
                              </span>
                            </div>
                            {link.featured && (
                              <span
                                className="ml-1.5 text-[10px] font-medium text-amber-600 
                                           bg-amber-50 px-1.5 py-0.5 rounded-full shrink-0"
                              >
                                ★
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
