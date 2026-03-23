import { useState, useEffect, useCallback } from 'react';
import {
  getAllResourceLinks,
  getAllPatternInterruptLinks,
} from '../navigation/nav';

export const useMenuState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const resourceLinks = getAllResourceLinks();
  const patternInterruptLinks = getAllPatternInterruptLinks();

  const closeMenu = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setOpenDropdown(null);
      setActiveCategory(null);
      setIsAnimating(false);
    }, 300);
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
    setIsAnimating(false);
  }, []);

  const openDropdownWithAnimation = useCallback((name: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setOpenDropdown(name);
      setActiveCategory(null);
      setIsAnimating(false);
    }, 150);
  }, []);

  const goBackToMenu = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setOpenDropdown(null);
      setActiveCategory(null);
      setIsAnimating(false);
    }, 150);
  }, []);

  const handleCategoryToggle = useCallback((category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  }, []);

  // Prevent body scroll effect
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeMenu]);

  return {
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
  };
};
