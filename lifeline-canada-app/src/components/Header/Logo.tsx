import { Link } from 'react-router-dom';
import logoImage from '../../assets/1LLlogoWDMK.png';

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center group relative"
    >
      {/* Soft Hover Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#a8c9e0]/20 via-[#b8d4e8]/20 to-[#c8e0f0]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

      <img
        src={logoImage}
        alt="The LifeLine Canada Foundation"
        className="relative w-90 h-12 sm:h-16  object-contain bottom-5 sm:bottom-0"
      />
    </Link>
  );
}