// components/ResourcesDropdown.tsx
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ResourceLink {
  name: string;
  path: string;
  icon?: string | React.ReactNode;
  category?: string;
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
  icon?: React.ReactNode;
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
  icon = null,
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
      className={`relative `}
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
          text-gray-800 hover:text-[#89009B]
        `}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {icon && (
          <span className="mr-2" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="text-[clamp(12px,1.2vw,16px)] !text-[#89009B] whitespace-nowrap">
          {triggerText}
        </span>
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
            <div className="w-[160px] bg-gradient-to-b from-purple-200 via-gray-200 to-purple-100 border-r border-gray-200/50">
              <div className="p-3 border-b border-gray-200/60 bg-gradient-to-r from-white to-gray-50"></div>
              <div className="p-1.5 overflow-y-auto max-h-[280px]">
                {groupedByCategory.map((group) => (
                  <button
                    key={group.category}
                    onMouseEnter={() =>
                      handleCategoryMouseEnter(group.category)
                    }
                    className={`
                      w-full text-left px-3 py-2 rounded mb-1
                      transition-all duration-150 ease-out
                      ${
                        activeCategory === group.category
                          ? '!bg-gradient-to-r from-purple-50 to-purple-50 border border-purple-100 shadow-sm text-[#89009B]'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/70 border border-transparent hover:border-gray-200'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-medium text-xs truncate ${
                          activeCategory === group.category
                            ? '!text-[#89009B]'
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
                              ? '!bg-purple-100 text-[#89009B]'
                              : 'bg-gray-100 text-gray-500'
                          }
                        `}
                      ></span>
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
                    <h4 className="text-sm font-semibold !text-[#89009B]  truncate">
                      {activeCategory}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 overflow-y-auto max-h-[300px] pr-1">
                    {groupedByCategory
                      .find((g) => g.category === activeCategory)
                      ?.links.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="group px-3 py-2.5 rounded-lg border border-gray-100 
                                   hover:border-purple-200 hover:shadow-sm 
                                   bg-gradient-to-r from-white to-gray-50/50
                                   hover:from-purple-50/30 hover:to-white
                                   transition-all duration-150"
                          onClick={handleLinkClick}
                        >
                          <div className="flex items-center min-w-0">
                            {link.icon && (
                              <span
                                className="mr-2 text-gray-500 group-hover:text-[#89009B] 
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
