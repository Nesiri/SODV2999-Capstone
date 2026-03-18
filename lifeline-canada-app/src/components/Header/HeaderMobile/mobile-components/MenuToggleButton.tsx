import { Menu } from 'lucide-react';

interface MenuToggleButtonProps {
  onClick: () => void;
}

export const MenuToggleButton = ({ onClick }: MenuToggleButtonProps) => (
  <button
    onClick={onClick}
    className="relative p-3 ml-5 bg-gray-100 hover:bg-gray-200 
      rounded-md transition-colors duration-200 
      border border-gray-300 focus:outline-none focus:ring-2 
      focus:ring-gray-400/50"
    aria-label="Open menu"
  >
    <Menu className="w-5 h-5 text-gray-700" />
  </button>
);