/* eslint-disable @typescript-eslint/no-explicit-any */
import { mainNavLinks, dropdownNavLinks } from '../../../../navigation/nav';
import { MenuItems } from './MenuItems';
import { DropdownView } from './DropdownView';

interface MobileMenuPanelProps {
  openDropdown: string | null;

  resourceLinks: any[];
  patternInterruptLinks: any[];
  activeCategory: string | null;
  closeMenu: () => void;
  openDropdownWithAnimation: (name: string) => void;
  goBackToMenu: () => void;
  handleCategoryToggle: (category: string) => void;
}

export const MobileMenuPanel = ({
  openDropdown,

  resourceLinks,
  patternInterruptLinks,
  activeCategory,
  closeMenu,
  openDropdownWithAnimation,
  goBackToMenu,
  handleCategoryToggle,
}: MobileMenuPanelProps) => {
  if (openDropdown) {
    return (
      <>
        {openDropdown === 'Resources' && (
          <DropdownView
            title="Resources"
            links={resourceLinks}
            onBack={goBackToMenu}
            onLinkClick={closeMenu}
            activeCategory={activeCategory}
            onCategoryToggle={handleCategoryToggle}
          />
        )}

        {openDropdown === 'Pattern Interrupts' && (
          <DropdownView
            title="Pattern Interrupts"
            links={patternInterruptLinks}
            onBack={goBackToMenu}
            onLinkClick={closeMenu}
            activeCategory={activeCategory}
            onCategoryToggle={handleCategoryToggle}
          />
        )}

        {openDropdown === 'More' && (
          <DropdownView
            title="More"
            links={dropdownNavLinks}
            onBack={goBackToMenu}
            onLinkClick={closeMenu}
            activeCategory={null}
            onCategoryToggle={() => {}}
          />
        )}
      </>
    );
  }

  return (
    <div
      className={`fixed inset-0 relative h-screen bg-gradient-to-b from-white via-white to-gray-200 backdrop-blur-sm flex flex-col 
      transition-all duration-700 overflow-x-hidden overflow-y-hidden opacity-100 translate-x-0
      }`}
    >
      {/* Floating Close Icon */}
      <div className="absolute top-4 right-4 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 !text-[#5f2d85] bg-gradient-to-b from-gray-100 via-yellow-200 to-purple-200 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#5f2d85"
          strokeWidth={2}
          onClick={closeMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div className="flex-1">
        <MenuItems
          mainNavLinks={mainNavLinks}
          onDropdownClick={openDropdownWithAnimation}
          closeMenu={closeMenu}
        />
      </div>
    </div>
  );
};
