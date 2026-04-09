/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createElement } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa6';

const LEFT_LINKS = [
  { name: 'About Us', path: '/about-us' },
  { name: 'In Crisis?', path: '/incrisisneedhelp' },
  { name: 'Resources', path: '/resources' },
  { name: 'Pattern Interrupts', path: '/pattern-interrupts' },
  { name: 'The LifeLine App', path: '/app?mode=login' },
  { name: 'Companion Paws', path: 'https://companionpaws.ca/' },
];

const RIGHT_LINKS = [
  { name: 'Contact Us', path: '/contact/contact-us' },
  { name: 'Support', path: '/contact/support' },
  { name: 'Get Involved', path: '/volunteers' },
  { name: 'Join Our Newsletter', id: 'news-letter' },
  { name: 'Make a Contribution', path: '/contribute' },
];

const SOCIAL_LINKS = [
  {
    icon: createElement(FaFacebookF as any),
    url: 'https://www.facebook.com/TheLifelineCanada/',
    label: 'Facebook',
  },
  {
    icon: createElement(FaXTwitter as any),
    url: 'https://x.com/i/flow/login?redirect_after_login=%2FTheLifeLineCan',
    label: 'Twitter',
  },
  {
    icon: createElement(FaYoutube as any),
    url: 'https://www.youtube.com/channel/UCpyDFXctDhgxsYbNoX5sTyg',
    label: 'YouTube',
  },
  {
    icon: createElement(FaInstagram as any),
    url: 'https://www.instagram.com/thelifelinecanada/',
    label: 'Instagram',
  },
];

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick =
    (link: (typeof RIGHT_LINKS)[0]) => (e: React.MouseEvent) => {
      if (link.id) {
        e.preventDefault();

        if (location.pathname !== '/') {
          // If not on home page, navigate first, then scroll
          navigate('/', { replace: false });
          // Wait a tick so the new page renders
          setTimeout(() => {
            const section = document.getElementById(link.id!);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100); // 100ms delay is usually enough
        } else {
          // Already on home page
          const section = document.getElementById(link.id!);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#2b211b] via-[#3d2a21] to-[#2b1f1a] text-white pt-14 overflow-hidden">
      {/* Newsletter-style background decorations */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E6B89C' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Gradient orbs - Updated to sunset colors */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#E6B89C]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#C44536]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ED9B7A]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-10">
        {/* Left Links */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-base md:text-lg lg:text-xl font-medium">
          <h3 className="text-sm uppercase tracking-wider text-[#E6B89C]/70 font-semibold mb-2">
            Navigation
          </h3>
          {LEFT_LINKS.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="relative group transition duration-300 text-[#E6B89C] hover:text-white"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#E6B89C] to-[#C44536] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Social Icons with newsletter-style decoration */}
        <div className="flex flex-col items-center">
          <h3 className="text-sm uppercase tracking-wider text-[#E6B89C]/70 font-semibold mb-6">
            Connect
          </h3>
          <div className="flex justify-center items-start gap-4 md:gap-6">
            {SOCIAL_LINKS.map((item, index) => (
              <a
                key={index}
                href={item.url}
                rel="noopener noreferrer"
                aria-label={item.label}
                className="bg-white/10 backdrop-blur-sm text-white p-3 md:p-4 rounded-lg hover:bg-gradient-to-r hover:from-[#E6B89C] hover:to-[#C44536] hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg border border-white/10"
              >
                <span className="text-lg md:text-xl">{item.icon}</span>
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C44536] rounded-full animate-pulse"></span>
            <span className="text-xs text-white/40">Follow us for updates</span>
          </div>
        </div>

        {/* Right Links */}
        <div className="flex flex-col items-center md:items-end space-y-4 text-base md:text-lg lg:text-xl font-medium">
          <h3 className="text-sm uppercase tracking-wider text-[#E6B89C]/70 font-semibold mb-2">
            Get Involved
          </h3>
          {RIGHT_LINKS.map((link, index) => (
            <Link
              key={index}
              to={link.path ?? '#'}
              onClick={handleClick(link)}
              className="relative group transition duration-300 text-[#E6B89C] hover:text-white"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute right-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#C44536] to-[#E6B89C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter-style bottom bar */}
      <div className="relative z-10 border-t border-[#E6B89C]/20 mt-14 py-6 text-center">
        <p className="text-sm md:text-base text-[#E6B89C]/60 font-medium">
          ©2026 The LifeLine Canada Foundation. All rights reserved.
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
