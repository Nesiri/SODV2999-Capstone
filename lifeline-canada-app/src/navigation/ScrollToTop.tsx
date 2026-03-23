// components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // Use 'smooth' for animated scrolling
    });
  }, [pathname]); // Trigger when route changes

  return null;
};

export default ScrollToTop;
