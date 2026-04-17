/* eslint-disable @typescript-eslint/no-explicit-any */
// BreathingExercises.tsx
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  X,
  Wind,
  Heart,
  Moon,
  Activity,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Sliders,
} from 'lucide-react';

type BreathingPhase = 'inhale' | 'exhale' | 'rest' | 'hold';
type BreathingPattern = '478' | 'box' | 'calm' | 'custom';
type PatternStyle = 'box' | 'linear';

interface PatternConfig {
  inhale: number;
  exhale: number;
  rest: number;
  hold?: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  patternStyle?: PatternStyle;
}

interface CustomConfig {
  inhale: number;
  exhale: number;
  rest: number;
  hold: number;
  patternStyle: PatternStyle;
  color: string;
  customColor?: string;
  fromColor?: string;
}

const BreathingExercises: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<BreathingPhase>('inhale');
  const [count, setCount] = useState(4);
  const [cycles, setCycles] = useState(0);
  const [selectedPattern, setSelectedPattern] =
    useState<BreathingPattern>('478');
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customConfig, setCustomConfig] = useState<CustomConfig>({
    inhale: 4,
    exhale: 4,
    rest: 4,
    hold: 4,
    patternStyle: 'box',
    color: 'from-emerald-400 to-teal-500',
    customColor: '#10b981',
    fromColor: 'emerald-400',
  });
  const [tempCustomConfig, setTempCustomConfig] =
    useState<CustomConfig>(customConfig);

  const phaseIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const circleContainerRef = useRef<HTMLDivElement>(null);

  const patterns = useMemo(
    (): Record<BreathingPattern, PatternConfig> => ({
      '478': {
        inhale: 4,
        exhale: 8,
        rest: 0,
        name: '4-8 Calming',
        description: 'Deep relaxation and stress relief',
        icon: <Moon size={20} />,
        color: 'from-indigo-400 to-purple-500',
        patternStyle: 'linear',
      },
      box: {
        inhale: 4,
        exhale: 4,
        rest: 4,
        hold: 4,
        name: 'Balanced Breathing',
        description: 'Focus and clarity',
        icon: <Activity size={20} />,
        color: 'from-emerald-400 to-teal-500',
        patternStyle: 'box',
      },
      calm: {
        inhale: 5,
        exhale: 5,
        rest: 3,
        name: 'Gentle Waves',
        description: 'Natural rhythm',
        icon: <Wind size={20} />,
        color: 'from-sky-400 to-blue-500',
        patternStyle: 'linear',
      },
      custom: {
        inhale: customConfig.inhale,
        exhale: customConfig.exhale,
        rest: customConfig.rest,
        hold: customConfig.hold,
        name: 'Custom',
        description: 'Your personal rhythm',
        icon: <Sliders size={20} />,
        color: customConfig.color,
        patternStyle: customConfig.patternStyle,
      },
    }),
    [customConfig]
  );

  const currentPattern = useMemo(() => {
    return selectedPattern === 'custom'
      ? { ...patterns.custom, ...customConfig }
      : patterns[selectedPattern];
  }, [selectedPattern, customConfig, patterns]);

  // Get the sequence of phases based on pattern style
  const getPhaseSequence = useCallback((): BreathingPhase[] => {
    if (currentPattern.patternStyle === 'box') {
      return ['inhale', 'hold', 'exhale', 'hold'];
    }
    return ['inhale', 'exhale', 'rest'];
  }, [currentPattern.patternStyle]);

  const getPhaseText = () => {
    const texts = {
      inhale: 'Breathe In',
      exhale: 'Breathe Out',
      rest: 'Rest',
      hold: 'Hold',
    };
    return texts[phase];
  };

  const getPhaseInstruction = () => {
    const instructions = {
      inhale: 'Fill your lungs with peace and calm',
      exhale: 'Release tension, let it flow away',
      rest: 'Welcome stillness into your being',
      hold: 'Pause and embrace the moment',
    };
    return instructions[phase];
  };

  // Reduced scale limits to prevent overlapping with UI elements
  const getCircleScale = () => {
    const duration =
      (currentPattern[phase as keyof PatternConfig] as number) || 0;
    const progress = 1 - count / duration;

    switch (phase) {
      case 'inhale':
        // Start from small dot (0.3) and grow to moderate size (1.2)
        return 0.3 + progress * 0.9;
      case 'exhale':
        // Start from max (1.2) and shrink to small (0.4)
        return 1.2 - progress * 0.8;
      case 'hold':
        // Stay at moderate size during hold
        return 1.1;
      case 'rest':
        // Stay at small size (0.4) during rest
        return 0.4;
      default:
        return 1;
    }
  };

  const runBreathingCycle = useCallback(() => {
    const phases = getPhaseSequence();
    let phaseIndex = 0;

    const updatePhase = () => {
      const currentPhase = phases[phaseIndex];
      setPhase(currentPhase);
      const duration = currentPattern[
        currentPhase as keyof PatternConfig
      ] as number;
      setCount(duration);

      phaseIndex = (phaseIndex + 1) % phases.length;
      if (phaseIndex === 0) {
        setCycles((prev) => prev + 1);
      }

      phaseIntervalRef.current = setTimeout(updatePhase, duration * 1000);
    };

    updatePhase();

    return () => {
      if (phaseIntervalRef.current) {
        clearTimeout(phaseIntervalRef.current);
      }
    };
  }, [currentPattern, getPhaseSequence]);

  useEffect(() => {
    if (isActive) {
      runBreathingCycle();
    }
    return () => {
      if (phaseIntervalRef.current) {
        clearTimeout(phaseIntervalRef.current);
      }
    };
  }, [isActive, runBreathingCycle]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCount((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, phase]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setCycles(0);
    const phases = getPhaseSequence();
    setPhase(phases[0]);
    const initialDuration = currentPattern[
      phases[0] as keyof PatternConfig
    ] as number;
    setCount(initialDuration);
    if (phaseIntervalRef.current) {
      clearTimeout(phaseIntervalRef.current);
    }
  };

  const handlePatternChange = (pattern: BreathingPattern) => {
    if (pattern === 'custom') {
      setShowCustomModal(true);
      setTempCustomConfig(customConfig);
      return;
    }

    setSelectedPattern(pattern);
    setIsActive(false);
    setCycles(0);
    const phases = getPhaseSequence();
    setPhase(phases[0]);
    const initialDuration = patterns[pattern][
      phases[0] as keyof PatternConfig
    ] as number;
    setCount(initialDuration);
  };

  const handleSaveCustomPattern = () => {
    setCustomConfig(tempCustomConfig);
    setSelectedPattern('custom');
    setIsActive(false);
    setCycles(0);
    const phases =
      tempCustomConfig.patternStyle === 'box'
        ? (['inhale', 'hold', 'exhale', 'hold'] as BreathingPhase[])
        : (['inhale', 'exhale', 'rest'] as BreathingPhase[]);
    setPhase(phases[0]);
    const initialDuration = tempCustomConfig[
      phases[0] as keyof CustomConfig
    ] as number;
    setCount(initialDuration);
    setShowCustomModal(false);
  };

  const handleCancelCustom = () => {
    setShowCustomModal(false);
  };

  const updateTempConfig = (key: keyof CustomConfig, value: any) => {
    setTempCustomConfig((prev) => ({ ...prev, [key]: value }));
  };

  // Helper function to adjust color brightness
  const adjustColor = (color: string) => {
    return color;
  };
  // Add this useEffect near your other useEffects (around line 200)
  useEffect(() => {
    // Save cycle count to localStorage whenever a cycle completes
    if (cycles > 0) {
      const today = new Date().toISOString().split('T')[0];
      const existingCycles = localStorage.getItem('cycle');

      const breathingData: { [key: string]: number } = existingCycles
        ? JSON.parse(existingCycles)
        : {};

      // Increment today's count by 1 for each completed cycle
      breathingData[today] = (breathingData[today] || 0) + 1;

      localStorage.setItem('cycle', JSON.stringify(breathingData));
      console.log({ existingCycles });
    }
  }, [cycles]); // Dependency on cycles

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 flex items-center justify-center p-4 relative overflow-x-hidden overflow-y-auto">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 !bg-white/60 backdrop-blur-sm rounded-full mb-4 shadow-sm">
            <Heart size={16} className="text-rose-500" />
            <span className="!text-sm text-slate-600">Mindful Breathing</span>
          </div>
          <h1 className="!text-2xl sm:!text-4xl font-light bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
            Find Your Rhythm
          </h1>
          <p className="!text-slate-500 max-w-md mx-auto">
            Take a moment to breathe deeply and reconnect with yourself
          </p>
        </motion.div>

        {/* Pattern Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6"
        >
          {(Object.keys(patterns) as BreathingPattern[]).map((key) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePatternChange(key)}
              className={`
        relative group p-2 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 text-left
        ${
          selectedPattern === key && key !== 'custom'
            ? `bg-gradient-to-r ${patterns[key].color} shadow-lg text-white`
            : selectedPattern === 'custom' && key === 'custom'
              ? `bg-gradient-to-r ${patterns[key].color} shadow-lg text-white`
              : '!bg-white/60 backdrop-blur-sm hover:!bg-white/80 text-slate-700'
        }
      `}
            >
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                <div
                  className={`
          p-1 sm:p-1.5 rounded-lg transition-colors
          ${selectedPattern === key || (selectedPattern === 'custom' && key === 'custom') ? '!bg-white/20' : 'bg-slate-100'}
        `}
                >
                  {patterns[key].icon}
                </div>
                <span className="font-medium text-xs sm:text-sm">
                  {patterns[key].name}
                </span>
              </div>
              <p
                className={`
        !text-[10px] sm:!text-xs transition-colors
        ${selectedPattern === key || (selectedPattern === 'custom' && key === 'custom') ? 'text-white/80' : 'text-slate-500'}
      `}
              >
                {patterns[key].description}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Breathing Circle Container with overflow handling */}
        <div
          ref={circleContainerRef}
          className="relative flex flex-col items-center justify-center my-4"
          style={{ minHeight: '320px' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              {/* Outer Glow */}
              <motion.div
                className={`
                  absolute inset-0 rounded-full blur-2xl transition-all duration-1000 pointer-events-none
                  ${isActive ? `bg-gradient-to-r ${currentPattern.color} opacity-50` : 'opacity-0'}
                `}
                animate={{
                  scale: isActive ? getCircleScale() : 1,
                }}
                transition={{
                  duration: 0.1,
                  ease: 'linear',
                }}
                style={
                  selectedPattern === 'custom' && customConfig.customColor
                    ? {
                        background: `linear-gradient(to right, ${adjustColor(customConfig.customColor)}, ${customConfig.customColor})`,
                      }
                    : undefined
                }
              />

              {/* Breathing Circle */}
              <motion.div
                animate={{
                  scale: getCircleScale(),
                }}
                transition={{
                  duration: 0.1,
                  ease: 'linear',
                }}
                className={`
                  relative w-56 h-56 md:w-72 md:h-72 rounded-full 
                  bg-gradient-to-br ${selectedPattern === 'custom' && customConfig.customColor ? '' : currentPattern.color}
                  shadow-2xl flex items-center justify-center cursor-pointer
                  transition-all duration-300 z-20
                `}
                onClick={handleStartPause}
                style={
                  selectedPattern === 'custom' && customConfig.customColor
                    ? {
                        background: `linear-gradient(135deg, ${adjustColor(customConfig.customColor)} 0%, ${customConfig.customColor} 100%)`,
                      }
                    : undefined
                }
              >
                {/* Inner Ring */}
                <div className="absolute inset-4 rounded-full !bg-white/10 backdrop-blur-sm" />

                {/* Content */}
                <div className="text-center z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${phase}-${count}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="text-white"
                    >
                      <div className="!text-4xl md:text-5xl font-light mb-2 font-mono">
                        {count}
                      </div>
                      <div className="text-lg md:!text-xl font-medium mb-1">
                        {getPhaseText()}
                      </div>
                      <div className="text-xs md:text-sm opacity-90 max-w-[160px] mx-auto">
                        {getPhaseInstruction()}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 justify-center my-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartPause}
            className={`
    px-4 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300
    text-sm sm:text-base flex items-center gap-1.5 sm:gap-2 shadow-lg z-20 relative
    ${
      isActive
        ? '!bg-rose-500 hover:bg-rose-600 text-white'
        : '!bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white'
    }
  `}
          >
            {isActive ? (
              <Pause size={16} className="sm:w-5 sm:h-5" />
            ) : (
              <Play size={16} className="sm:w-5 sm:h-5" />
            )}
            <span className="hidden xs:inline">
              {isActive ? 'Pause' : 'Start Breathing'}
            </span>
            <span className="hidden">{isActive ? 'Pause' : 'Start'}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="px-3 sm:px-6 py-2 sm:py-3 rounded-full !bg-white/60 backdrop-blur-sm !text-slate-700 hover:!bg-white/80 transition-all shadow-sm flex items-center gap-1.5 sm:gap-2 z-20 relative text-sm sm:text-base"
          >
            <RotateCcw size={14} className="sm:w-[18px] sm:h-[18px]" />
            <span className="hidden xs:inline">Reset</span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 !bg-white/60 backdrop-blur-sm rounded-full shadow-sm">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-teal-500" />
              <span className="text-slate-600">
                <span className="font-normal text-slate-800">{cycles}</span>{' '}
                complete {cycles === 1 ? 'cycle' : 'cycles'}
              </span>
            </div>
            <div className="w-px h-4 bg-slate-300" />
          </div>
        </motion.div>

        {/* Custom Pattern Modal */}
        <AnimatePresence>
          {showCustomModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4"
              onClick={handleCancelCustom}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="!bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-light text-slate-800">
                      Custom Pattern
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Set your own breathing rhythm
                    </p>
                  </div>
                  <button
                    onClick={handleCancelCustom}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-5">
                  {/* Pattern Type Toggle */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pattern Style
                    </label>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          if (tempCustomConfig.patternStyle !== 'box') {
                            setTempCustomConfig((prev) => ({
                              ...prev,
                              patternStyle: 'box',
                            }));
                          }
                        }}
                        className={`flex-1 px-4 py-2 rounded-xl transition-all ${
                          tempCustomConfig.patternStyle === 'box'
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        Box Pattern
                      </button>
                      <button
                        onClick={() => {
                          if (tempCustomConfig.patternStyle !== 'linear') {
                            setTempCustomConfig((prev) => ({
                              ...prev,
                              patternStyle: 'linear',
                            }));
                          }
                        }}
                        className={`flex-1 px-4 py-2 rounded-xl transition-all ${
                          tempCustomConfig.patternStyle === 'linear'
                            ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        Linear Pattern
                      </button>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      {tempCustomConfig.patternStyle === 'box'
                        ? 'Inhale, hold, exhale, hold - balanced breathing'
                        : 'Inhale, exhale, rest - natural flow'}
                    </p>
                  </div>

                  {/* Phase Durations */}
                  {(tempCustomConfig.patternStyle === 'box'
                    ? (['inhale', 'hold', 'exhale', 'hold'] as const)
                    : (['inhale', 'exhale', 'rest'] as const)
                  ).map((phaseType) => (
                    <div key={phaseType}>
                      <label className="block text-sm font-medium text-slate-700 mb-2 capitalize">
                        {phaseType} Duration
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateTempConfig(
                              phaseType,
                              Math.max(
                                1,
                                (tempCustomConfig as any)[phaseType] - 1
                              )
                            )
                          }
                          className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                        >
                          <ChevronDown size={18} />
                        </button>
                        <div className="flex-1 text-center">
                          <span className="text-3xl font-light text-slate-800">
                            {(tempCustomConfig as any)[phaseType]}
                          </span>
                          <span className="text-sm text-slate-500 ml-1">
                            seconds
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            updateTempConfig(
                              phaseType,
                              Math.min(
                                30,
                                (tempCustomConfig as any)[phaseType] + 1
                              )
                            )
                          }
                          className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                        >
                          <ChevronUp size={18} />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Color Picker */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Custom Color
                    </label>
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      {[
                        {
                          from: 'from-rose-400',
                          to: 'to-orange-500',
                          name: 'Sunset',
                          color: '#f43f5e',
                        },
                        {
                          from: 'from-emerald-400',
                          to: 'to-teal-500',
                          name: 'Ocean',
                          color: '#10b981',
                        },
                        {
                          from: 'from-indigo-400',
                          to: 'to-purple-500',
                          name: 'Twilight',
                          color: '#6366f1',
                        },
                        {
                          from: 'from-sky-400',
                          to: 'to-blue-500',
                          name: 'Sky',
                          color: '#38bdf8',
                        },
                        {
                          from: 'from-fuchsia-400',
                          to: 'to-pink-500',
                          name: 'Candy',
                          color: '#e879f9',
                        },
                        {
                          from: 'from-amber-400',
                          to: 'to-yellow-500',
                          name: 'Sunshine',
                          color: '#fbbf24',
                        },
                        {
                          from: 'from-violet-400',
                          to: 'to-purple-500',
                          name: 'Lavender',
                          color: '#8b5cf6',
                        },
                        {
                          from: 'from-teal-400',
                          to: 'to-cyan-500',
                          name: 'Mint',
                          color: '#14b8a6',
                        },
                      ].map((color) => (
                        <button
                          key={color.name}
                          onClick={() =>
                            setTempCustomConfig((prev) => ({
                              ...prev,
                              customColor: color.color,
                              color: `${color.from} ${color.to}`,
                              fromColor: color.from.replace('from-', ''),
                            }))
                          }
                          className={`h-12 rounded-xl bg-gradient-to-r ${color.from} ${color.to} transition-all ${
                            tempCustomConfig.customColor === color.color
                              ? 'ring-2 ring-offset-2 ring-slate-400 scale-105'
                              : 'hover:scale-105'
                          }`}
                          title={color.name}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={tempCustomConfig.customColor || '#10b981'}
                        onChange={(e) =>
                          setTempCustomConfig((prev) => ({
                            ...prev,
                            customColor: e.target.value,
                            color: `from-${prev.fromColor || 'emerald-400'} to-${e.target.value.slice(1)}`,
                          }))
                        }
                        className="w-10 h-10 rounded-lg cursor-pointer border border-slate-200"
                      />
                      <input
                        type="text"
                        value={tempCustomConfig.customColor || ''}
                        onChange={(e) =>
                          setTempCustomConfig((prev) => ({
                            ...prev,
                            customColor: e.target.value,
                            color: `from-${prev.fromColor || 'emerald-400'} to-${e.target.value.slice(1)}`,
                          }))
                        }
                        placeholder="Hex color code"
                        className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={handleCancelCustom}
                    className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveCustomPattern}
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                  >
                    Apply Pattern
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Motivational Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6"
        >
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
            <Sparkles size={12} />
            Each breath is a fresh start
            <Sparkles size={12} />
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BreathingExercises;
