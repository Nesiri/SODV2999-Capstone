/* eslint-disable @typescript-eslint/no-explicit-any */
import { mainNavLinks, dropdownNavLinks } from '../../../../navigation/nav';
import { MenuItems } from './MenuItems';
import { DropdownView } from './DropdownView';
import { Link } from 'react-router-dom';
import { GetInvolvedButton } from './GetInvolvedButton';
import { MakeContributionButton } from './makeContribution';

interface MobileMenuPanelProps {
  openDropdown: string | null;
  isAnimating: boolean;
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
  isAnimating,
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
            isAnimating={isAnimating}
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
            isAnimating={isAnimating}
          />
        )}

        {openDropdown === 'More' && (
          <MoreDropdownView
            onBack={goBackToMenu}
            closeMenu={closeMenu}
            isAnimating={isAnimating}
          />
        )}
      </>
    );
  }

  return (
    <div
      className={`fixed inset-0 relative bg-gradient-to-b from-white via-white to-gray-50 backdrop-blur-sm flex flex-col 
      transition-all duration-700 overflow-x-hidden overflow-y-hidden ${
        isAnimating ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
      }`}
    >
      {/* Floating Close Icon */}
      <div className="absolute top-4 right-4 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-red-700 bg-gradient-to-b from-gray-100 via-yellow-200 to-purple-200 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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
        <MakeContributionButton closeMenu={() => {}} />
        <GetInvolvedButton
          closeMenu={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </div>
  );
};

// ===============================
// More Dropdown View
// ===============================

const MoreDropdownView = ({ onBack, closeMenu, isAnimating }: any) => {
  return (
    <div
      className={`absolute inset-0 relative bg-gradient-to-r from-gray-200 via-blue-200 to-purple-50  backdrop-blur-sm flex flex-col 
      transition-all duration-500 overflow-x-hidden overflow-y-hidden ${
        isAnimating ? 'opacity-0 -translate-x-20' : 'opacity-100 translate-x-0'
      }`}
    >
      {/* Floating Go Back Button - Pure Icon */}
      <div className="absolute top-3 left-2 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue-700 bg-gradient-to-b from-gray-200 via-yellow-200 to-purple-300 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={onBack}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="flex-2 px-10 pt-5">
        <div className="grid grid-cols-2">
          {dropdownNavLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className="flex items-center 
          py-2
          transition-all duration-200
          active:scale-95"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              {link.icon && (
                <span className="text-base text-gray-600 flex-shrink-0">
                  {typeof link.icon === 'string' ? link.icon : link.icon}
                </span>
              )}

              <span className="text-xs font-medium text-gray-700 leading-tight">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
