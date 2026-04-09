import { ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuItemsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainNavLinks: any[];
  onDropdownClick: (name: string) => void;
  closeMenu: () => void;
}

export const MenuItems = ({
  mainNavLinks,
  onDropdownClick,
  closeMenu,
}: MenuItemsProps) => (
  <div className="space-y-3">
    {mainNavLinks.map((link, index) => (
      <MenuItem
        key={link.path}
        link={link}
        index={index}
        onDropdownClick={onDropdownClick}
        closeMenu={closeMenu}
      />
    ))}

    {/* More Options Button - MoreDropdown style */}
    <div style={{ animationDelay: `${mainNavLinks.length * 70}ms` }}>
      <button
        onClick={() => onDropdownClick('More')}
        className="group w-full flex items-center gap-4 p-5 rounded-2xl 
          bg-gradient-to-br from-pink-90 via-gray-100 to-white 
          backdrop-blur-sm border border-gray-200 hover:border-pink-300 
  
          focus:outline-none focus:ring-2 focus:ring-pink-500/30"
      >
        <div className="p-3.5 rounded-xl bg-gradient-to-br from-pink-90 via-gray-100 to-white  transition-all duration-300">
          <span className="text-gray-600 transition-all duration-300 text-2xl">
            ⋯
          </span>
        </div>
        <div className="flex-1 text-left">
          <span className="font-bold text-gray-800  transition-colors">
            More
          </span>
        </div>
        <ChevronRight
          className="w-5 h-5 text-gray-400  
           transition-all duration-300"
        />
      </button>
    </div>
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MenuItem = ({ link, index, onDropdownClick, closeMenu }: any) => (
  <div style={{ animationDelay: `${index * 70}ms` }}>
    {link.hasMegaMenu ? (
      <button
        onClick={() => onDropdownClick(link.name)}
        className="group w-full flex items-center gap-4 p-5 rounded-2xl 
          bg-gradient-to-br from-pink-90 via-gray-100 to-white  
          backdrop-blur-sm border border-gray-200 hover:border-pink-300 
          active:scale-[0.98]"
      >
        <div
          className={`p-3.5 rounded-xl transition-all duration-300 bg-gradient-to-br from-red-100 via-orange-100 to-red-50 '
              from-pink-100 via-gray-100 to-white 
          `}
        >
          <span
            className={`text-2xl
              text-gray-600
             group-hover:scale-110 transition-transform duration-300 
            `}
          >
            {link.icon || '📚'}
          </span>
        </div>
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2">
            <span
              className={`font-bold
                
                  text-gray-800 group-hover:text-pink-600
               transition-colors`}
            >
              {link.name}
            </span>
          </div>
         
        </div>
        <ChevronRight
          className="w-5 h-5 text-gray-400 group-hover:text-pink-600 
          group-hover:translate-x-2 transition-all duration-300"
        />
      </button>
    ) : (
      <Link
        to={link.path}
        onClick={closeMenu}
        className="group flex items-center gap-4 p-5 rounded-2xl 
         bg-gradient-to-br from-pink-90 via-gray-100 to-white 
          backdrop-blur-sm border border-gray-200 hover:border-pink-300 
          
          active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-pink-500/30"
      >
        <div
          className="p-3.5 rounded-xl bg-gradient-to-br from-pink-100 via-gray-100 to-white group-hover:from-pink-200 group-hover:via-gray-200 group-hover:to-pink-50 transition-all duration-300"
        >
          <span className="text-2xl text-gray-600 group-hover:text-pink-600 group-hover:scale-110 transition-all duration-300">
            {link.icon || '📱'}
          </span>
        </div>
        <div className="flex-1">
          <span className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
            {link.name}
          </span>
          {link.emergency && (
            <div className="mt-2">
              <span
                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold 
                bg-gradient-to-r from-red-100 to-orange-100 text-red-700 
                rounded-full border border-red-200"
              >
                <Zap className="w-3 h-3" />
                EMERGENCY ACCESS
              </span>
            </div>
          )}
        </div>
      </Link>
    )}
  </div>
);