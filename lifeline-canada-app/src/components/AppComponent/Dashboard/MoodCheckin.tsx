// components/dashboard/MoodCheckin.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MoodOption {
  value: string;
  label: string;
  emoji: string;
  description: string;
  category: 'pleasant' | 'neutral' | 'challenging';
}

interface MoodCheckinProps {
  onMoodSelect?: (moodData: string) => void;
  lastCheckin?: string;
}

// Professional mood options based on emotion research
const moodOptions: MoodOption[] = [
  {
    value: 'peaceful',
    label: 'Peaceful',
    emoji: '😌',
    description: 'Calm and centered',
    category: 'pleasant',
  },
  {
    value: 'content',
    label: 'Content',
    emoji: '✨',
    description: 'At ease with things',
    category: 'pleasant',
  },
  {
    value: 'hopeful',
    label: 'Hopeful',
    emoji: '🌟',
    description: 'Looking forward to something',
    category: 'pleasant',
  },
  {
    value: 'present',
    label: 'Present',
    emoji: '💫',
    description: 'Just being in the moment',
    category: 'neutral',
  },
  {
    value: 'weary',
    label: 'Weary',
    emoji: '😮‍💨',
    description: 'Mental or emotional exhaustion',
    category: 'challenging',
  },
  {
    value: 'anxious',
    label: 'Anxious',
    emoji: '🫀',
    description: 'Uneasy or worried',
    category: 'challenging',
  },
  {
    value: 'heavy',
    label: 'Heavy',
    emoji: '🌧️',
    description: 'Carrying something difficult',
    category: 'challenging',
  },
  {
    value: 'irritable',
    label: 'Irritable',
    emoji: '⚡',
    description: 'Easily frustrated',
    category: 'challenging',
  },
];

const MoodCheckin: React.FC<MoodCheckinProps> = ({
  onMoodSelect,
  lastCheckin,
}) => {
  const [selectedMood, setSelectedMood] = useState<MoodOption | null>(null);
  const [showJournal, setShowJournal] = useState(false);
  const [note, setNote] = useState('');
  const [intensity, setIntensity] = useState(5);
  const [isSaved, setIsSaved] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for touch optimizations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMoodClick = (mood: MoodOption) => {
    setSelectedMood(mood);
    setShowJournal(true);
    setIsSaved(false);
    // Smooth scroll to journal on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        document.getElementById('journal-section')?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 100);
    }
  };

 const handleSave = () => {
    if (!selectedMood) return;

    const moodData = {
        mood: selectedMood.value,
        moodLabel: selectedMood.label,
        moodEmoji: selectedMood.emoji,
        category: selectedMood.category,
        intensity: intensity,
        note: note.trim(),
        timestamp: new Date().toISOString(),
       
    };

    // Save to localStorage
    try {
        // Get existing mood entries
        const existingMoods = localStorage.getItem('moodEntries');
        let moodEntries = [];
        
        if (existingMoods) {
            moodEntries = JSON.parse(existingMoods);
        }
        
        // Add new mood entry
        moodEntries.push(moodData);
        
        // Save back to localStorage
        localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
        
        // Optional: Save today's mood separately for quick access
        const today = new Date().toISOString().split('T')[0];
        localStorage.setItem(`mood_${today}`, JSON.stringify(moodData));
        
        console.log('Mood saved:', moodData);
    } catch (error) {
        console.error('Error saving mood to localStorage:', error);
    }

    onMoodSelect?.(JSON.stringify(moodData));
    setIsSaved(true);

    setTimeout(() => {
        setShowJournal(false);
        setNote('');
        setSelectedMood(null);
        setIntensity(5);
        setIsSaved(false);
    }, 2000);
};

  const handleClose = () => {
    setShowJournal(false);
    setNote('');
    setSelectedMood(null);
    setIntensity(5);
  };

  const getAffirmation = (category: string) => {
    switch (category) {
      case 'pleasant':
        return "It's wonderful to savor these moments. They matter.";
      case 'challenging':
        return "This feeling is temporary, and it's okay to feel this way. You're not alone.";
      default:
        return "Whatever you're feeling is valid and welcome here.";
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes breathe {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.2); opacity: 0.5; }
          }
          
          /* Better touch targets for mobile */
          @media (max-width: 640px) {
            button, 
            [role="button"],
            input[type="range"] {
              min-height: 44px;
              min-width: 44px;
            }
            
            /* Prevent zoom on input focus for iOS */
            input, textarea, select {
              font-size: 16px !important;
            }
          }
        `}
      </style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50/20 to-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-indigo-100/50 p-4 sm:p-6 md:p-8"
      >
        {/* Gentle breathing background - responsive size */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 rounded-full blur-2xl sm:blur-3xl"
            style={{ animation: 'breathe 8s ease-in-out infinite' }}
          />
        </div>

        {/* Header with validation - responsive text */}
        <div className="relative mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-light text-slate-700 tracking-wide mb-1 sm:mb-2">
            How are you feeling?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-light italic">
            There are no wrong answers—only your truth in this moment.
          </p>
          {lastCheckin && !showJournal && (
            <p className="text-xs text-slate-400 mt-2 sm:mt-3 font-light">
              Last check-in: {lastCheckin}
            </p>
          )}
        </div>

        {/* Mood options - responsive grid with better touch targets */}
        <div className="space-y-4 sm:space-y-6 relative">
          {/* Pleasant feelings */}
          <div>
            <h3 className="text-xs text-slate-400 uppercase tracking-wider mb-2 sm:mb-3 font-light px-1">
              Pleasant feelings
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {moodOptions
                .filter((m) => m.category === 'pleasant')
                .map((mood, index) => (
                  <MoodButton
                    key={mood.value}
                    mood={mood}
                    index={index}
                    isSelected={selectedMood?.value === mood.value}
                    isDisabled={showJournal}
                    onClick={() => handleMoodClick(mood)}
                    isMobile={isMobile}
                  />
                ))}
            </div>
          </div>

          {/* Neutral feelings */}
          <div>
            <h3 className="text-xs text-slate-400 uppercase tracking-wider mb-2 sm:mb-3 font-light px-1">
              Neutral
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {moodOptions
                .filter((m) => m.category === 'neutral')
                .map((mood, index) => (
                  <MoodButton
                    key={mood.value}
                    mood={mood}
                    index={index}
                    isSelected={selectedMood?.value === mood.value}
                    isDisabled={showJournal}
                    onClick={() => handleMoodClick(mood)}
                    isMobile={isMobile}
                  />
                ))}
            </div>
          </div>

          {/* Challenging feelings */}
          <div>
            <h3 className="text-xs text-slate-400 uppercase tracking-wider mb-2 sm:mb-3 font-light px-1">
              Challenging feelings
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {moodOptions
                .filter((m) => m.category === 'challenging')
                .map((mood, index) => (
                  <MoodButton
                    key={mood.value}
                    mood={mood}
                    index={index}
                    isSelected={selectedMood?.value === mood.value}
                    isDisabled={showJournal}
                    onClick={() => handleMoodClick(mood)}
                    isMobile={isMobile}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Journal section - with mobile optimizations */}
        <AnimatePresence mode="wait">
          {showJournal && selectedMood && (
            <motion.div
              id="journal-section"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative mt-6 sm:mt-8 overflow-hidden"
            >
              <div className="relative bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-indigo-100 p-4 sm:p-6">
                {/* Therapeutic affirmation - responsive text */}
                <p className="text-xs sm:text-sm text-indigo-600 mb-3 sm:mb-4 font-light italic">
                  {getAffirmation(selectedMood.category)}
                </p>

                {/* Intensity slider - mobile friendly */}
                <div className="mb-4 sm:mb-5">
                  <label className="block text-xs text-slate-500 mb-2 font-light">
                    How intense is this feeling? ({intensity + '/' + 10})
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={intensity}
                    onChange={(e) => setIntensity(parseInt(e.target.value))}
                    className="w-full h-2 sm:h-1 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-400 touch-pan-y"
                    style={{
                      WebkitAppearance: 'none',
                      height: isMobile ? '32px' : '8px',
                    }}
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1 px-1">
                    <span>Gentle</span>
                    <span>Intense</span>
                  </div>
                </div>

                <div className="pl-3 sm:pl-4 border-l-2 border-indigo-200">
                  <label className="block text-xs text-indigo-400 uppercase tracking-wider mb-2 font-light">
                    Would you like to reflect?
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="What's contributing to this feeling? Noticing is enough..."
                    className="w-full p-3 sm:p-4 text-sm bg-white/80 border border-indigo-100 rounded-lg sm:rounded-xl focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 transition-all duration-300 placeholder:text-slate-400 font-light resize-none"
                    rows={isMobile ? 2 : 3}
                    autoFocus={!isMobile} // Only auto-focus on desktop
                  />

                  {/* Mobile-optimized button layout */}
                  <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 mt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleClose}
                      className="px-4 sm:px-5 py-3 sm:py-2 text-xs text-slate-500 hover:text-slate-700 transition-colors font-light border border-slate-200 sm:border-0 rounded-lg sm:rounded-none"
                    >
                      Not right now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSave}
                      disabled={isSaved}
                      className="relative px-5 sm:px-6 py-3 sm:py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-sm hover:shadow font-light overflow-hidden touch-manipulation"
                    >
                      <span className="relative z-10">
                        {isSaved ? '✨ Saved' : 'Check in with kindness'}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Self-compassion reminder - responsive */}
        {!showJournal && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xs text-center text-slate-400 mt-6 sm:mt-8 font-light italic px-2"
          >
            "Feelings are just visitors. Let them come and go." — Rumi
          </motion.p>
        )}
      </motion.div>
    </>
  );
};

// Extracted MoodButton component with mobile optimizations
const MoodButton: React.FC<{
  mood: MoodOption;
  index: number;
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
  isMobile: boolean;
}> = ({ mood, index, isSelected, isDisabled, onClick, isMobile }) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    onClick={onClick}
    disabled={isDisabled}
    className={`
      group relative p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 text-left touch-manipulation
      ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'active:scale-95 sm:hover:scale-100 sm:hover:shadow-md cursor-pointer'}
      ${
        isSelected
          ? 'bg-gradient-to-br from-indigo-50 to-purple-50 ring-2 ring-indigo-200/70 ring-offset-2'
          : 'bg-white/70 backdrop-blur-sm active:bg-white sm:hover:bg-white border border-indigo-100/50'
      }
    `}
    style={{
      minHeight: isMobile ? '80px' : 'auto',
      WebkitTapHighlightColor: 'transparent', // Remove tap highlight on iOS
    }}
  >
    <div className="relative">
      <span className="text-xl sm:text-2xl block mb-1 sm:mb-2">
        {mood.emoji}
      </span>
      <span className="text-xs sm:text-sm font-medium text-slate-700 block">
        {mood.label}
      </span>
      {/* Hide description on very small screens to save space */}
      <span className="hidden sm:block text-xs text-slate-400 font-light mt-1">
        {mood.description}
      </span>
    </div>
  </motion.button>
);

export default MoodCheckin;
