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
}

export const DropdownView = ({
  links,
  onBack,
  onLinkClick,
  activeCategory,
  onCategoryToggle,
}: DropdownViewProps) => {
  const groupedLinks = groupLinksByCategory(links);
  const categories = Object.keys(groupedLinks);
  const isSingleCategory =
    categories.length === 1 && categories[0] === 'General';

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br from-gray-50 to-white flex flex-col 
      transition-all duration-500 opacity-100 translate-x-0}`}
    >
      {/* Back Arrow on Top-Left - White block style */}
      <div
        className="absolute top-4 left-4 z-20 bg-white rounded-lg shadow-md border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer"
        onClick={onBack}
        aria-label="Go back"
      >
        <div className="p-2">
          <ChevronRight className="w-5 h-5 text-gray-600 rotate-180 hover:text-blue-600 transition-colors duration-300" />
        </div>
      </div>

      {/* Content centered from top */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center pt-16 px-4">
        {isSingleCategory ? (
          <div className="space-y-3 w-full max-w-md">
            {links.map((link) => (
              <LinkItem key={link.path} link={link} onClick={onLinkClick} className='!text-[#89009B] '/>
            ))}
          </div>
        ) : (
          <div className="w-full max-w-md">
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
