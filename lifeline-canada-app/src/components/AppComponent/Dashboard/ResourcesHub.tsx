// components/AppComponent/Dashboard/ResourcesHub.tsx
import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Heart,
  BookOpen,
  X,
  ChevronLeft,
  ChevronRight,
  Compass,
  Feather,
  Eye,
  CheckCircle,
} from 'lucide-react';
import {
  getAllResourceLinks,
  getAllPatternInterruptLinks,
} from '../../../navigation/nav';

interface ReadResource {
  path: string;
  name: string;
  date: string;
  timestamp: number;
}

const ResourcesHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [savedView, setSavedView] = useState(false);
  const [savedResources, setSavedResources] = useState<Set<string>>(new Set());
  const [readResources, setReadResources] = useState<Map<string, ReadResource>>(
    new Map()
  );
  const [showSavedToast, setShowSavedToast] = useState(false);
  const [showReadToast, setShowReadToast] = useState(false);
  const [lastSavedResource, setLastSavedResource] = useState<string>('');
  const [lastReadResource, setLastReadResource] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  // Combine all resources from both categories (memoized once)
  const allResources = useMemo(() => {
    const resources = getAllResourceLinks();
    const patterns = getAllPatternInterruptLinks();
    return [...resources, ...patterns];
  }, []);

  // Load saved and read resources from localStorage on mount
  useEffect(() => {
    const loadSavedResources = async () => {
      try {
        const saved = localStorage.getItem('savedResources');
        if (saved) {
          const savedPaths = JSON.parse(saved);
          setSavedResources(new Set(savedPaths));
        }

        const read = localStorage.getItem('readResources');
        if (read) {
          const readData = JSON.parse(read);
          const readMap = new Map<string, ReadResource>();
          readData.forEach((item: ReadResource) => {
            readMap.set(item.path, item);
          });
          setReadResources(readMap);
        }
      } catch (error) {
        console.error('Error loading resources:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSavedResources();

    // Handle responsive items per page
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(4);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(6);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(8);
      } else {
        setItemsPerPage(9);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Save to localStorage with debounce
  useEffect(() => {
    if (!isLoading) {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      debounceTimer.current = setTimeout(() => {
        localStorage.setItem(
          'savedResources',
          JSON.stringify(Array.from(savedResources))
        );

        // Save read resources as array with full details
        const readArray = Array.from(readResources.values());
        localStorage.setItem('readResources', JSON.stringify(readArray));

        // Dispatch custom event for ActivityList to update
        window.dispatchEvent(new CustomEvent('dataUpdated'));
      }, 300);
    }

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [savedResources, readResources, isLoading]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, savedView]);

  // Get unique categories with counts (memoized) - removed numbers from categories
  const categories = useMemo(() => {
    const catMap = new Map<string, number>();
    allResources.forEach((r) => {
      if (r.category) {
        catMap.set(r.category, (catMap.get(r.category) || 0) + 1);
      }
    });
    const cats = Array.from(catMap.entries()).map(([name, count]) => ({
      name,
      count,
    }));
    return [{ name: 'all', count: allResources.length }, ...cats];
  }, [allResources]);

  // Direct filtering without cache - just use useMemo
  const filteredResources = useMemo(() => {
    let filtered = allResources;

    if (savedView) {
      filtered = filtered.filter((r) => savedResources.has(r.path));
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((r) => r.category === selectedCategory);
    }

    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter((r) =>
        r.name.toLowerCase().includes(lowerSearchTerm)
      );
    }

    return filtered;
  }, [allResources, savedView, savedResources, selectedCategory, searchTerm]);

  // Pagination
  const paginatedResources = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredResources.slice(startIndex, endIndex);
  }, [filteredResources, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleSave = useCallback((path: string, name: string) => {
    setSavedResources((prev) => {
      const newSet = new Set(prev);
      const isSaving = !newSet.has(path);

      if (isSaving) {
        newSet.add(path);
        setLastSavedResource(name);
        setShowSavedToast(true);
        setTimeout(() => setShowSavedToast(false), 2000);
      } else {
        newSet.delete(path);
      }

      return newSet;
    });
  }, []);

  const markAsRead = useCallback((path: string, name: string) => {
    setReadResources((prev) => {
      const newMap = new Map(prev);
      const isMarkingRead = !newMap.has(path);

      if (isMarkingRead) {
        // Save resource with name and current date
        const readResource: ReadResource = {
          path: path,
          name: name,
          date: new Date().toISOString(),
          timestamp: Date.now(),
        };
        newMap.set(path, readResource);
        setLastReadResource(name);
        setShowReadToast(true);
        setTimeout(() => setShowReadToast(false), 2000);
      } else {
        newMap.delete(path);
      }

      return newMap;
    });
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleSavedViewToggle = useCallback(() => {
    setSavedView((prev) => !prev);
  }, []);

  const scrollCategories = useCallback((direction: 'left' | 'right') => {
    if (categoryScrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      categoryScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }, []);

  const getCategoryColor = useCallback((category?: string) => {
    const colors: Record<string, string> = {
      'Mental Health Topics': 'from-blue-400 to-cyan-400',
      Survivors: 'from-purple-400 to-pink-400',
      Communities: 'from-emerald-400 to-teal-400',
      Professionals: 'from-indigo-400 to-blue-400',
      insights: 'from-gray-400 to-slate-400',
      'Mood & Inspiration': 'from-amber-400 to-orange-400',
      'Self Help & Tools': 'from-teal-400 to-emerald-400',
    };
    return colors[category || ''] || 'from-teal-400 to-emerald-400';
  }, []);

  // Pre-compute stats to avoid recalculation
  const stats = useMemo(
    () => ({
      total: allResources.length,
      saved: savedResources.size,
      read: readResources.size,
    }),
    [allResources, savedResources, readResources]
  );

  // Calming gradient backgrounds for cards
  const getCardGradient = (featured: boolean, isHovered: boolean) => {
    if (featured) {
      return isHovered
        ? 'bg-gradient-to-br from-white via-amber-50/30 to-amber-100/20'
        : 'bg-gradient-to-br from-white to-amber-50/10';
    }
    return isHovered
      ? 'bg-gradient-to-br from-white via-teal-50/20 to-emerald-50/20'
      : '!bg-white';
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
          <p className="text-slate-500">Loading resources...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-8 relative">
      {/* Toast Notification for Saved */}
      <AnimatePresence>
        {showSavedToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-4 left-3 right-3 sm:left-auto sm:right-6 z-50 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
          >
            <Heart size={14} fill="white" className="sm:w-4 sm:h-4" />
            <span className="truncate text-sm sm:text-base">
              Saved "{lastSavedResource}" to your library
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification for Read */}
      <AnimatePresence>
        {showReadToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-20 left-3 right-3 sm:left-auto sm:right-6 z-50 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
          >
            <CheckCircle size={14} className="sm:w-4 sm:h-4" />
            <span className="truncate text-sm sm:text-base">
              Marked "{lastReadResource}" as read
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section - Mobile Responsive */}
      <div className="mb-6 sm:mb-8 md:mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-full mb-2 sm:mb-3 md:mb-4"
        >
          <Feather
            size={12}
            className="text-teal-600 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
          />
          <span className="text-[11px] sm:text-xs md:text-sm text-teal-600 font-medium">
            Gentle Guidance
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl xl:text-5xl font-light text-slate-800 mb-1.5 sm:mb-2 md:mb-4 px-2"
        >
          Nurture Your{' '}
          <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent block sm:inline">
            Inner Peace
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm md:text-base text-slate-500 max-w-2xl mx-auto px-3 sm:px-4"
        >
          Take a deep breath. Here you'll find gentle resources and tools to
          support your mental wellness journey
        </motion.p>
      </div>

      {/* Stats Cards - Added Read counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8"
      >
        <div className="bg-gradient-to-br from-teal-50/50 to-emerald-50/50 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 border border-teal-100/50 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm text-teal-600 mb-0.5 sm:mb-1">
                Resources Available
              </p>
              <p className="!text-xl sm:text-2xl md:text-3xl font-light text-slate-800">
                {stats.total}
              </p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 !bg-white/60 rounded-lg sm:rounded-xl flex items-center justify-center">
              <BookOpen
                size={16}
                className="text-teal-500 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-50/50 to-pink-50/50 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 border border-rose-100/50 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm text-rose-600 mb-0.5 sm:mb-1">
                Saved for Later
              </p>
              <p className="!text-xl sm:text-2xl md:text-3xl font-light text-slate-800">
                {stats.saved}
              </p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 !bg-white/60 rounded-lg sm:rounded-xl flex items-center justify-center">
              <Heart
                size={16}
                className="text-rose-400 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 border border-indigo-100/50 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm text-indigo-600 mb-0.5 sm:mb-1">
                Marked as Read
              </p>
              <p className="!text-xl sm:text-2xl md:text-3xl font-light text-slate-800">
                {stats.read}
              </p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 !bg-white/60 rounded-lg sm:rounded-xl flex items-center justify-center">
              <Eye
                size={16}
                className="text-indigo-400 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Search and Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-4 sm:mb-6 md:mb-8 space-y-2 sm:space-y-3 md:space-y-4"
      >
        {/* Search Input */}
        <div className="relative">
          <Search
            className="absolute left-2.5 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search by title or topic..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-8 sm:pl-9 md:pl-12 pr-8 sm:pr-9 md:pr-12 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl !bg-white/80 backdrop-blur-sm border border-slate-200 
                       focus:border-teal-300 focus:ring-2 sm:focus:ring-4 focus:ring-teal-100 focus:outline-none
                       transition-all duration-300 text-slate-700 placeholder:text-slate-400 text-sm sm:text-base"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-2.5 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Mobile Category Dropdown */}
        <div className="sm:hidden">
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-3 py-2.5 !bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg text-slate-600 appearance-none cursor-pointer focus:border-teal-300 focus:ring-2 focus:ring-teal-100 focus:outline-none transition-all text-sm"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.75rem center',
              backgroundSize: '0.875rem',
            }}
          >
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name === 'all' ? 'All Categories' : cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Categories with Scroll */}
        <div className="hidden sm:block">
          <div className="relative flex items-center justify-center gap-1">
            {categories.length > 5 && (
              <button
                onClick={() => scrollCategories('left')}
                className="flex-shrink-0 !bg-white/80 backdrop-blur-sm rounded-full shadow-sm p-1.5 hover:bg-slate-50 transition-colors border border-slate-200"
                aria-label="Scroll categories left"
              >
                <ChevronLeft size={18} />
              </button>
            )}

            <div
              ref={categoryScrollRef}
              className="flex flex-nowrap gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide py-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryChange(cat.name)}
                  className={`
                    group relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0
                    ${
                      selectedCategory === cat.name
                        ? `bg-gradient-to-r ${getCategoryColor(cat.name === 'all' ? undefined : cat.name)} text-white shadow-md`
                        : '!bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-slate-50 border border-slate-200'
                    }
                  `}
                >
                  {cat.name === 'all' ? 'All' : cat.name}
                </button>
              ))}
            </div>

            {categories.length > 5 && (
              <button
                onClick={() => scrollCategories('right')}
                className="flex-shrink-0 !bg-white/80 backdrop-blur-sm rounded-full shadow-sm p-1.5 hover:bg-slate-50 transition-colors border border-slate-200"
                aria-label="Scroll categories right"
              >
                <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Filter Actions */}
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <button
            onClick={handleSavedViewToggle}
            className={`
              flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm
              ${
                savedView
                  ? '!bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-md'
                  : '!bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-slate-50 border border-slate-200'
              }
            `}
          >
            <Heart size={12} fill={savedView ? 'white' : 'none'} />
            <span>Saved Only</span>
          </button>
        </div>
      </motion.div>

      {/* Resources Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${savedView}-${selectedCategory}-${searchTerm}-${currentPage}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {paginatedResources.map((resource, index) => {
            const isRead = readResources.has(resource.path);
            const isSaved = savedResources.has(resource.path);

            return (
              <motion.div
                key={resource.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                onHoverStart={() => setHoveredCard(resource.path)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group h-full cursor-pointer"
                onClick={() =>
                  (window.location.href = resource.path.startsWith('/')
                    ? resource.path
                    : '/' + resource.path)
                }
              >
                <div
                  className={`
                  relative h-full flex flex-col rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 
                  border border-slate-100 overflow-hidden
                  ${getCardGradient(resource.featured || false, hoveredCard === resource.path)}
                  ${isRead ? 'ring-1 ring-indigo-200 bg-indigo-50/5' : ''}
                `}
                >
                  {/* Read indicator overlay */}
                  {isRead && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-indigo-100 rounded-full p-1">
                        <CheckCircle size={14} className="!text-indigo-600" />
                      </div>
                    </div>
                  )}

                  {/* Calming Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 !bg-gradient-to-br from-teal-50/30 to-emerald-50/30" />
                  </div>

                  {/* Subtle Border Glow */}
                  <div
                    className={`
                    absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none transition-opacity duration-300
                    ${hoveredCard === resource.path ? 'ring-2 ring-teal-300/50 ring-offset-1' : ''}
                  `}
                  />

                  {/* Header Section */}
                  <div className="relative p-4 sm:p-5 md:p-6 pb-2 sm:pb-3">
                    <div className="flex items-start justify-between">
                      <motion.div
                        className={`
                          w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:!text-4xl
                          bg-gradient-to-br ${resource.color || getCategoryColor(resource.category)}
                          shadow-md group-hover:scale-110 transition-all duration-500
                          ${isRead ? 'opacity-75' : ''}
                        `}
                        whileHover={{
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 },
                        }}
                      >
                        {resource.icon}
                      </motion.div>
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSave(resource.path, resource.name);
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={`
                          p-1.5 sm:p-2 rounded-full transition-all duration-300
                          ${
                            isSaved
                              ? 'bg-rose-100 text-rose-500 hover:bg-rose-200'
                              : 'bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500'
                          }
                        `}
                      >
                        <Heart size={16} fill={isSaved ? '#5f2d85' : 'none'} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative flex-1 px-4 sm:px-5 md:px-6 pb-3 sm:pb-4">
                    <h3
                      className={`text-base sm:text-lg md:!text-xl font-medium mb-2 group-hover:text-teal-700 transition-colors line-clamp-2 min-h-[3.5rem] ${isRead ? 'text-slate-600' : 'text-slate-800'}`}
                    >
                      {resource.name}
                    </h3>
                  </div>

                  {/* Action Buttons */}
                  <div className="relative px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 mt-auto">
                    <div className="flex gap-2">
                      {savedView && isSaved && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsRead(resource.path, resource.name);
                          }}
                          className={`
                            flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300
                            ${
                              isRead
                                ? '!bg-indigo-100 text-indigo-700 cursor-default'
                                : '!bg-indigo-500 !text-white shadow-md hover:shadow-lg'
                            }
                          `}
                        >
                          {isRead ? (
                            <>
                              <CheckCircle size={12} />
                              <span>Read</span>
                            </>
                          ) : (
                            <>
                              <Eye size={12} />
                              <span>Mark as Read</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 sm:mt-10 md:mt-12 flex justify-center items-center gap-1.5 sm:gap-2"
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`
              p-1.5 sm:p-2 rounded-lg transition-all duration-300
              ${
                currentPage === 1
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : '!bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-600 border border-slate-200'
              }
            `}
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-1 sm:gap-2">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`
                    w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm
                    ${
                      currentPage === pageNum
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md'
                        : '!bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                    }
                  `}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`
              p-1.5 sm:p-2 rounded-lg transition-all duration-300
              ${
                currentPage === totalPages
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : '!bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-600 border border-slate-200'
              }
            `}
          >
            <ChevronRight size={16} />
          </button>
        </motion.div>
      )}

      {/* Empty State */}
      {filteredResources.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 sm:py-16 md:py-24"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-slate-100 to-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
            {savedView ? (
              <Heart size={28} className="text-slate-400" />
            ) : (
              <Compass size={28} className="text-slate-400" />
            )}
          </div>
          <h3 className="text-lg sm:!text-xl md:text-2xl font-light text-slate-600 mb-2 sm:mb-3">
            {savedView ? 'Your collection is resting' : 'Gently wandering...'}
          </h3>
          <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto px-4">
            {savedView
              ? 'Save resources that speak to your heart by clicking the ♡ icon'
              : 'Take a moment to breathe. Try a different search or explore all categories'}
          </p>
          {savedView && stats.saved === 0 && (
            <button
              onClick={handleSavedViewToggle}
              className="mt-5 sm:mt-6 px-5 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full hover:shadow-lg transition-all text-sm sm:text-base"
            >
              Return to All Resources
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ResourcesHub;
