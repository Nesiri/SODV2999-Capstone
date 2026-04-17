// MoodTrackingGraph.tsx
import React, { useState, useMemo, useEffect } from 'react';
import {
  Activity,
  BookOpen,
  Wind,
  TrendingUp,
  TrendingDown,
  Minus,
  Calendar,
  Heart,
} from 'lucide-react';

interface ReadResource {
  path: string;
  name: string;
  date: string;
  timestamp: number;
}

const MoodTrackingGraph: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<
    'mood' | 'cycles' | 'reads'
  >('mood');
  const [timeRange, setTimeRange] = useState<'week' | 'month'>('week');
  const [readResources, setReadResources] = useState<ReadResource[]>([]);

  // Load read resources from localStorage
  useEffect(() => {
    const loadReadResources = () => {
      try {
        const saved = localStorage.getItem('readResources');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            setReadResources(parsed);
          }
        }
      } catch (error) {
        console.error('Error loading read resources:', error);
      }
    };

    loadReadResources();

    // Listen for storage changes
    const handleStorageChange = () => {
      loadReadResources();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('dataUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('dataUpdated', handleStorageChange);
    };
  }, []);

  // Helper: Get current week dates (Monday to Sunday)
  const getCurrentWeekDates = useMemo(() => {
    const now = new Date();
    const currentDay = now.getDay();
    const daysToMonday = currentDay === 0 ? 6 : currentDay - 1;
    const monday = new Date(now);
    monday.setDate(now.getDate() - daysToMonday);
    monday.setHours(0, 0, 0, 0);

    const weekDates = [];
    const dayNames = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      weekDates.push({
        date: date,
        label: dayNames[i],
        dateStr: date.toISOString().split('T')[0],
      });
    }
    return weekDates;
  }, []);

  // Helper: Get current month dates
  const getCurrentMonthDates = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const monthDates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      monthDates.push({
        date: date,
        label: `${monthNames[month]} ${i}`,
        dateStr: date.toISOString().split('T')[0],
      });
    }
    return monthDates;
  }, []);

  const currentViewData = useMemo(() => {
    return timeRange === 'week' ? getCurrentWeekDates : getCurrentMonthDates;
  }, [timeRange, getCurrentWeekDates, getCurrentMonthDates]);

  // Get real data from localStorage
  const realDataMap = useMemo(() => {
    const dataMap = new Map<string, number>();

    if (selectedMetric === 'mood') {
      const saved = localStorage.getItem('moodEntries');
      if (saved) {
        const entries = JSON.parse(saved);
        const moodByDate = new Map<string, number[]>();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        entries.forEach((entry: any) => {
          const date = entry.timestamp.split('T')[0];
          if (!moodByDate.has(date)) moodByDate.set(date, []);
          moodByDate.get(date)!.push(entry.intensity);
        });
        moodByDate.forEach((values, date) => {
          const average = values.reduce((a, b) => a + b, 0) / values.length;
          dataMap.set(date, average);
        });
      }
    } else if (selectedMetric === 'cycles') {
      const saved = localStorage.getItem('cycle');
      if (saved) {
        const cycles = JSON.parse(saved);
        Object.entries(cycles).forEach(([date, value]) => {
          dataMap.set(date, value as number);
        });
      }
    } else if (selectedMetric === 'reads') {
      // Use the readResources state directly
      const readsByDate = new Map<string, number>();

      readResources.forEach((item: ReadResource) => {
        if (item && item.date) {
          const date = item.date.split('T')[0];
          readsByDate.set(date, (readsByDate.get(date) || 0) + 1);
        }
      });

      readsByDate.forEach((count, date) => {
        dataMap.set(date, count);
      });
    }
    return dataMap;
  }, [selectedMetric, readResources]);

  // Calculate statistics and insights
  const statistics = useMemo(() => {
    const values: number[] = [];
    currentViewData.forEach((item) => {
      const val = realDataMap.get(item.dateStr);
      if (val !== undefined && val > 0) values.push(val);
    });

    if (values.length === 0) {
      return {
        average: 0,
        trend: 'neutral',
        best: 0,
        worst: 0,
        hasData: false,
        insight: 'No data yet. Start tracking to see your progress! 🌱',
      };
    }

    const average = values.reduce((a, b) => a + b, 0) / values.length;
    const best = Math.max(...values);
    const worst = Math.min(...values);

    const midPoint = Math.floor(values.length / 2);
    const firstHalf = values.slice(0, midPoint);
    const secondHalf = values.slice(midPoint);
    const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;

    let trend = 'neutral';
    if (secondAvg > firstAvg + 0.5) trend = 'up';
    else if (secondAvg < firstAvg - 0.5) trend = 'down';

    let insight = '';
    if (selectedMetric === 'mood') {
      if (trend === 'up')
        insight = "Your mood has been lifting. That's wonderful progress! ✨";
      else if (trend === 'down')
        insight =
          "You've been having a tough time. Remember to be gentle with yourself. 💙";
      else
        insight =
          'Your mood has been stable. Consistency is a beautiful thing. 🌿';
    } else if (selectedMetric === 'cycles') {
      if (trend === 'up')
        insight = "You're practicing more breathing exercises. Keep going! 🫁";
      else if (trend === 'down')
        insight =
          'Taking time to breathe is important. Try for just 1 minute today. 🌬️';
      else
        insight =
          "You're maintaining a consistent practice. Every breath counts! 💚";
    } else {
      if (trend === 'up')
        insight =
          "You've been exploring more resources. Learning is healing! 📚";
      else if (trend === 'down')
        insight =
          'Take a moment to read something nurturing today. You deserve it. 🤍';
      else
        insight =
          "You're steadily engaging with supportive content. Beautiful work! 🌸";
    }

    return { average, trend, best, worst, hasData: true, insight };
  }, [currentViewData, realDataMap, selectedMetric]);

  // Get emoji representation for mood
  const getMoodEmoji = (value: number) => {
    if (value >= 8) return '😊';
    if (value >= 6) return '🙂';
    if (value >= 4) return '😐';
    if (value >= 2) return '😔';
    return '😢';
  };

  const getTrendIcon = () => {
    if (statistics.trend === 'up')
      return <TrendingUp size={20} className="!text-[#5f2d85]" />;
    if (statistics.trend === 'down')
      return <TrendingDown size={20} className="!text-[#5f2d85]" />;
    return <Minus size={20} className="!text-slate-500" />;
  };

  const getTrendText = () => {
    if (statistics.trend === 'up') return 'Improving';
    if (statistics.trend === 'down') return 'Gently declining';
    return 'Stable';
  };

  return (
    <>
      <div className="w-full max-w-full overflow-hidden !bg-white rounded-2xl shadow-lg p-3 sm:p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <h3 className="!text-sm sm:!text-base !font-normal !text-slate-800">
            Your Journey
          </h3>
          <div className="flex gap-1">
            {(['week', 'month'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-2 sm:px-3 py-1 rounded !text-xs sm:!text-sm transition-all ${
                  timeRange === range
                    ? '!bg-[#5f2d85] !text-white shadow-sm'
                    : '!bg-slate-100 !text-slate-700 hover:!bg-slate-200'
                }`}
              >
                {range === 'week' ? 'This Week' : 'This Month'}
              </button>
            ))}
          </div>
        </div>

        {/* Metric Selector */}
        <div className="flex gap-1 mb-6">
          {(['mood', 'cycles', 'reads'] as const).map((metric) => (
            <button
              key={metric}
              onClick={() => setSelectedMetric(metric)}
              className={`flex-1 py-2 rounded-lg !text-xs sm:!text-sm !font-medium transition-all ${
                selectedMetric === metric
                  ? '!bg-[#5f2d85] !text-white shadow-sm'
                  : '!bg-slate-100 !text-slate-700 hover:!bg-slate-200'
              }`}
            >
              {metric === 'mood' && (
                <Activity size={14} className="inline mr-1" />
              )}
              {metric === 'cycles' && (
                <Wind size={14} className="inline mr-1" />
              )}
              {metric === 'reads' && (
                <BookOpen size={14} className="inline mr-1" />
              )}
              {metric === 'mood'
                ? 'Mood'
                : metric === 'cycles'
                  ? 'Breathing'
                  : 'Reading'}
            </button>
          ))}
        </div>

        {/* Gentle Insights Card */}
        {statistics.hasData ? (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="!bg-gradient-to-br from-[#5f2d85]/10 to-[#7b3fa0]/10 rounded-xl p-3 text-center">
                <p className="!text-xs !text-slate-600 mb-1">Average</p>
                <p className="!text-2xl !font-light !text-slate-800">
                  {selectedMetric === 'mood'
                    ? statistics.average.toFixed(1)
                    : Math.round(statistics.average)}
                </p>
                {selectedMetric === 'mood' && (
                  <span className="!text-2xl ml-1">
                    {getMoodEmoji(statistics.average)}
                  </span>
                )}
                {selectedMetric === 'cycles' && (
                  <span className="!text-xs !text-slate-600"> breaths/day</span>
                )}
                {selectedMetric === 'reads' && (
                  <span className="!text-xs !text-slate-600"> resources</span>
                )}
              </div>

              <div className="!bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-3 text-center">
                <p className="!text-xs !text-slate-600 mb-1">Trend</p>
                <div className="flex items-center justify-center gap-1">
                  {getTrendIcon()}
                  <span className="!text-sm !font-medium !text-slate-800">
                    {getTrendText()}
                  </span>
                </div>
              </div>
            </div>

            {/* Compassionate Insight */}
            <div className="!bg-[#5f2d85]/10 rounded-xl p-4 mb-4 border !border-[#5f2d85]/20">
              <div className="flex items-start gap-2">
                <Heart
                  size={16}
                  className="!text-[#5f2d85] mt-0.5 flex-shrink-0"
                />
                <p className="!text-xs sm:!text-sm !text-slate-700 leading-relaxed">
                  {statistics.insight}
                </p>
              </div>
            </div>

            {/* Simple Day-by-Day View */}
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
              <p className="!text-xs !font-medium !text-slate-600 mb-2">
                {timeRange === 'week' ? 'Daily overview' : 'Key moments'}
              </p>

              {currentViewData
                .slice(0, timeRange === 'week' ? 7 : 10)
                .map((item) => {
                  const value = realDataMap.get(item.dateStr);
                  const hasData = value !== undefined && value > 0;

                  if (!hasData && timeRange === 'month') return null;

                  return (
                    <div
                      key={item.dateStr}
                      className="flex items-center justify-between py-2 border-b !border-slate-200"
                    >
                      <span className="!text-xs sm:!text-sm !text-slate-700 w-24 sm:w-32">
                        {item.label}
                      </span>

                      {hasData ? (
                        <div className="flex-1 flex items-center gap-2">
                          <div className="flex-1 h-2 !bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${
                                selectedMetric === 'mood'
                                  ? '!bg-[#5f2d85]'
                                  : selectedMetric === 'cycles'
                                    ? '!bg-[#5f2d85]'
                                    : '!bg-[#5f2d85]'
                              }`}
                              style={{
                                width: `${Math.min(100, (value / (selectedMetric === 'mood' ? 10 : 20)) * 100)}% 
                            `,
                              }}
                            />
                          </div>
                          <span className="!text-sm !font-medium !text-slate-800 min-w-[40px] text-right">
                            {selectedMetric === 'mood'
                              ? value.toFixed(1)
                              : Math.round(value)}
                          </span>
                          {selectedMetric === 'mood' && (
                            <span className="!text-lg">
                              {getMoodEmoji(value)}
                            </span>
                          )}
                          {selectedMetric === 'cycles' && value > 0 && (
                            <span className="!text-xs !text-slate-600">
                              breaths
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="flex-1 text-right">
                          <span className="!text-xs !text-slate-500">
                            — No data
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            {/* Gentle Reminder */}
            <div className="mt-4 pt-3 border-t !border-slate-200">
              <p className="!text-[10px] text-center !text-slate-500">
                {selectedMetric === 'mood' &&
                  "Every feeling is valid. There's no 'right' way to feel."}
                {selectedMetric === 'cycles' &&
                  'Even one breath of mindfulness makes a difference.'}
                {selectedMetric === 'reads' &&
                  'Every resource you explore is a step toward healing.'}
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 !bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar size={32} className="!text-slate-400" />
            </div>
            <p className="!text-sm !text-slate-700 mb-2">
              No data yet this {timeRange}
            </p>
            <p className="!text-xs !text-slate-500">
              {selectedMetric === 'mood' &&
                'Track your mood to see patterns and insights.'}
              {selectedMetric === 'cycles' &&
                'Practice breathing exercises to build consistency.'}
              {selectedMetric === 'reads' &&
                'Save and read resources to track your learning journey.'}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default MoodTrackingGraph;