// components/Header/index.tsx
import { useState, useEffect } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import Logo from './Logo';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed sm:sticky top-0 z-50 w-full">
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, #e6d9f0 0%, transparent 60%), 
                  radial-gradient(circle at 80% 70%, #d4c2e6 0%, transparent 60%)`,
          }}
        ></div>
      </div>

      <div className="relative bg-[#f5f0fa]/70 backdrop-blur-xl border-b border-[#d9c9f0]/30 max-h-16 sm:max-h-30">
        <div className="flex h-26 w-full items-center justify-between px-6">
          <Logo />
          <nav className="flex items-center">
            {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
          </nav>
        </div>
      </div>
    </header>
  );
}
