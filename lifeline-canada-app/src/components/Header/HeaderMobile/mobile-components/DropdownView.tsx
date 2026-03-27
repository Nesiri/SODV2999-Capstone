import { ChevronRight } from 'lucide-react';
import { groupLinksByCategory } from '../../../../utils/menuUtils';
import { CategoryAccordion } from './CategoryAccordion';
import { LinkItem } from './LinkItem';

interface DropdownViewProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links: any[];
  onBack: () => void;
  onLinkClick: () => void;
  activeCategory: string | null;
  onCategoryToggle: (category: string) => void;
  isAnimating: boolean;
}

export const DropdownView = ({
  links,
  onBack,
  onLinkClick,
  activeCategory,
  onCategoryToggle,
  isAnimating,
}: DropdownViewProps) => {
  const groupedLinks = groupLinksByCategory(links);
  const categories = Object.keys(groupedLinks);
  const isSingleCategory =(categories.length === 1 && categories[0] === 'General');

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-b from-white via-indigo to-gray-200 backdrop-blur-sm flex flex-col 
      transition-all duration-500 ${isAnimating ? 'opacity-0 -translate-x-20' : 'opacity-100 translate-x-0'}`}
    >
      {/* Back Arrow on Top-Left */}
      <div
        className="absolute top-2 left-4 z-20 text-gray-700 bg-gradient-to-b from-white via-blue-700 to-white cursor-pointer"
        onClick={onBack}
        aria-label="Go back"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 rotate-180 hover:text-blue-600 transition-colors duration-300" />
      </div>

      {/* Content centered from top */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center pt-4 ">
        {isSingleCategory ? (
          <div className="space-y-3 w-full max-w-md">
            {links.map((link, index) => (
              <LinkItem
                key={link.path}
                link={link}
                onClick={onLinkClick}
                animationDelay={index * 50}
              />
            ))}
          </div>
        ) : (
          <div className="w-full max-w-md ">
            <CategoryAccordion
              groupedLinks={groupedLinks}
              activeCategory={activeCategory}
              onCategoryToggle={onCategoryToggle}
              onLinkClick={onLinkClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};
