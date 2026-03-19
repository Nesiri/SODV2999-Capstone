/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuToggleButton } from './MenuToggleButton';
import { MobileMenuPanel } from './MobileMenuPanel';
import { AnimatedBackdrop } from './AnimatedBackdrop';

interface HeaderMobileViewProps {
  isMenuOpen: boolean;
  openDropdown: string | null;
  activeCategory: string | null;
  isAnimating: boolean;
  resourceLinks: any[];
  patternInterruptLinks: any[];
  closeMenu: () => void;
  openMenu: () => void;
  openDropdownWithAnimation: (name: string) => void;
  goBackToMenu: () => void;
  handleCategoryToggle: (category: string) => void;
}

export const HeaderMobileView = ({
  isMenuOpen,
  openDropdown,
  activeCategory,
  isAnimating,
  resourceLinks,
  patternInterruptLinks,
  closeMenu,
  openMenu,
  openDropdownWithAnimation,
  goBackToMenu,
  handleCategoryToggle,
}: HeaderMobileViewProps) => (
  <div className=" relative bottom-5 sm:bottom-4 md:bottom-2  left-2 lg:hidden">
    <MenuToggleButton onClick={openMenu} />

    {isMenuOpen && (
      <div className="fixed inset-0 z-50 ">
        <AnimatedBackdrop isAnimating={isAnimating} onClick={closeMenu} />

        <div className="fixed inset-y-0 right-0 w-full max-w-md min-h-screen ">
          <div className="h-full relative">
            <MobileMenuPanel
              openDropdown={openDropdown}
              isAnimating={isAnimating}
              resourceLinks={resourceLinks}
              patternInterruptLinks={patternInterruptLinks}
              activeCategory={activeCategory}
              closeMenu={closeMenu}
              openDropdownWithAnimation={openDropdownWithAnimation}
              goBackToMenu={goBackToMenu}
              handleCategoryToggle={handleCategoryToggle}
            />
          </div>
        </div>
      </div>
    )}
  </div>
);
