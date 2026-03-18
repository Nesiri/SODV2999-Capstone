import { Link } from 'react-router-dom';

interface GetInvolvedButtonProps {
  closeMenu: () => void;
}

export const GetInvolvedButton = ({ closeMenu }: GetInvolvedButtonProps) => (
  <div className="mt-2 pt-1 border-t border-gray-100/50">
    <div className="relative">
      {/* Glow effect */}
      <div
        className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-green-500/10 to-[#2b5797]/10 
        blur-xl rounded-3xl"
      />

      <Link
        to="/volunteers"
        onClick={closeMenu}
        className="group relative block w-full py-3 px-6 text-center font-bold rounded-2xl 
          bg-gradient-to-r from-green-600 to-[#2b5797]/90 
          hover:from-green-700 hover:to-[#2b5797]
          text-white shadow-2xl hover:shadow-3xl transition-all duration-500 
          hover:-translate-y-1 active:scale-[0.98] overflow-hidden"
      >
        {/* Content */}
        <div className="relative flex items-center justify-center gap-3">
          <span className="text-lg text-white">Get Involved</span>
        </div>
      </Link>
    </div>
  </div>
);