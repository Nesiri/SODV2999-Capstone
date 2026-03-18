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
  <div className="space-y-3 bg-gradient-to-r from-indigo-gray-200 via-gray-500 to-purple-200">
    {mainNavLinks.map((link, index) => (
      <MenuItem
        key={link.path}
        link={link}
        index={index}
        onDropdownClick={onDropdownClick}
        closeMenu={closeMenu}
      />
    ))}

    {/* More Options Button */}
    <div style={{ animationDelay: `${mainNavLinks.length * 70}ms` }}>
      <button
        onClick={() => onDropdownClick('More')}
        className="group w-full flex items-center gap-4 p-5 rounded-2xl 
         bg-gradient-to-b from-blue-200 via-gray-200 to-pink-100
          hover:from-purple-50/80 hover:to-pink-50/80 backdrop-blur-sm 
          border border-gray-100 hover:border-purple-200 hover:shadow-xl 
          transition-all duration-500 hover:-translate-y-1 active:scale-[0.98]
          focus:outline-none focus:ring-2 focus:ring-purple-500/30"
      >
        <div className="p-3.5  group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-500">
          <span className="text-purple-900 group-hover:scale-210 transition-transform duration-500">
            ⋯
          </span>
        </div>
        <div className="flex-1 text-left">
          <span className="font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
            More
          </span>
        </div>
        <ChevronRight
          className="w-5 h-5 text-gray-400 group-hover:text-purple-600 
          group-hover:translate-x-2 transition-all duration-500"
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
          bg-gradient-to-b from-blue-200 via-gray-200 to-pink-100 hover:from-blue-50/80 hover:to-indigo-50/80
          backdrop-blur-sm border border-gray-100 hover:border-blue-200 
          hover:shadow-xl transition-all duration-500 hover:-translate-y-1 
          active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/30"
      >
        <div
          className={`p-3.5 rounded-xl ${
            link.emergency
              ? 'bg-gradient-to-br from-red-50/80 to-orange-50/80 group-hover:from-red-100 group-hover:to-orange-100'
              : 'bg-gradient-to-br from-blue-50/80 to-indigo-50/80 group-hover:from-blue-100 group-hover:to-indigo-100'
          } transition-all duration-500`}
        >
          <span
            className={`${link.emergency ? 'text-red-600' : 'text-blue-600'} 
            group-hover:scale-110 transition-transform duration-500`}
          >
            {link.icon || '📚'}
          </span>
        </div>
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2">
            <span
              className={`font-bold ${
                link.emergency
                  ? 'text-red-700 group-hover:text-red-800'
                  : 'text-gray-800 group-hover:text-gray-900'
              } transition-colors`}
            >
              {link.name}
            </span>
            {link.emergency && (
              <span
                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold 
                 bg-gradient-to-r from-indigo-200 via-blue-500 to-purple-200 text-red-700 
                rounded-full border border-red-200"
              >
                <Zap className="w-3 h-3" />
                EMERGENCY
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">Explore all options</p>
        </div>
        <ChevronRight
          className="w-5 h-5 text-gray-400 group-hover:text-blue-600 
          group-hover:translate-x-2 transition-all duration-500"
        />
      </button>
    ) : (
      <Link
        to={link.path}
        onClick={closeMenu}
        className="group flex items-center gap-4 p-5 rounded-2xl 
         bg-gradient-to-b from-blue-200 via-gray-200 to-pink-100 hover:to-indigo-50/80
          backdrop-blur-sm border border-gray-100 hover:border-blue-200 
          hover:shadow-xl transition-all duration-500 hover:-translate-y-1 
          active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/30"
      >
        <div
          className="p-3.5 rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 
          group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-500"
        >
          <span className="text-blue-600 group-hover:scale-110 transition-transform duration-500">
            {link.icon || '📱'}
          </span>
        </div>
        <div className="flex-1">
          <span className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
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
