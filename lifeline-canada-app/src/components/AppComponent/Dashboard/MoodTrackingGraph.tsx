// MoodTrackingGraph.tsx
import React, { useState, useMemo } from 'react';
import { Activity, BookOpen, Wind } from 'lucide-react';
import ActivityList from './ActivityList';

const MoodTrackingGraph: React.FC = () => {
   const [selectedMetric, setSelectedMetric] = useState<'mood' | 'cycles' | 'reads'>('mood');
const [timeRange, setTimeRange] = useState<'week' | 'month'>('week');

// Generate labels for weekly view (last 7 days)
const getWeeklyLabels = () => {
    const labels = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }
    return labels;
};

// Generate labels for monthly view (10 points spread over 30 days)
const getMonthlyLabels = () => {
    const labels = [];
    for (let i = 9; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - (i * 3));
        labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }
    return labels.reverse();
};

// Get chart data merged with localStorage
const chartData = useMemo(() => {
    // Sample data for weekly view (last 7 days)
    const weeklySampleData = {
        mood: [7, 6, 8, 5, 7, 9, 6],
        cycles: [3, 2, 4, 1, 3, 5, 2],
        reads: [2, 1, 3, 0, 2, 4, 1]
    };

    // Sample data for monthly view (last 30 days, showing 10 points)
    const monthlySampleData = {
        mood: [6, 7, 5, 8, 6, 9, 7, 5, 8, 6],
        cycles: [2, 3, 1, 4, 2, 5, 3, 1, 4, 2],
        reads: [1, 2, 0, 3, 1, 4, 2, 0, 3, 1]
    };
    
    let realData: { label: string; value: number }[] = [];
    
    // Get real data from localStorage
    if (selectedMetric === 'mood') {
        const saved = localStorage.getItem('moodEntries');
        const entries = saved ? JSON.parse(saved) : [];
        const moodByDate = new Map<string, number[]>();
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        entries.forEach((entry: any) => {
            const date = entry.timestamp.split('T')[0];
            if (!moodByDate.has(date)) moodByDate.set(date, []);
            moodByDate.get(date)!.push(entry.intensity);
        });
        
        const sortedDates = Array.from(moodByDate.keys()).sort();
        realData = sortedDates.map(date => ({
            label: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            value: moodByDate.get(date)!.reduce((a, b) => a + b, 0) / moodByDate.get(date)!.length
        }));
    } 
    else if (selectedMetric === 'cycles') {
        const saved = localStorage.getItem('cycle');
        const cycles = saved ? JSON.parse(saved) : {};
        const sortedDates = Object.keys(cycles).sort();
        realData = sortedDates.map(date => ({
            label: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            value: cycles[date]
        }));
    } 
    else {
        const saved = localStorage.getItem('readResources');
        const readResources = saved ? JSON.parse(saved) : { count: 0, items: [] };
        
        // For reads, we need to track by date. For now, show cumulative
        if (readResources.items && readResources.items.length > 0) {
            // Create mock date-based data from read resources
            const today = new Date();
            for (let i = 0; i < Math.min(readResources.items.length, 30); i++) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);
                realData.push({
                    label: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                    value: 1
                });
            }
            realData = realData.reverse();
        }
    }

    // Merge with sample data based on time range
    const labels = timeRange === 'week' ? getWeeklyLabels() : getMonthlyLabels();
    const sampleValues = timeRange === 'week' 
        ? weeklySampleData[selectedMetric]
        : monthlySampleData[selectedMetric];
    
    // Create merged data: combine sample with real data
    const mergedData = labels.map((label, index) => {
        // Find real data matching this label
        const realMatch = realData.find(d => d.label === label);
        const sampleValue = sampleValues[index] || 0;
        const realValue = realMatch?.value || 0;
        
        // If real data exists, use it, otherwise use sample data
        const value = realValue > 0 ? realValue : sampleValue;
        
        return {
            label,
            value,
            isReal: realValue > 0
        };
    });

    return mergedData;
}, [selectedMetric, timeRange]);

// Get points for line chart
const getLinePoints = () => {
    if (chartData.length === 0) return '';
    
    let points = '';
    for (let i = 0; i < chartData.length; i++) {
        const x = (i / (chartData.length - 1)) * 100;
        const maxVal = Math.max(...chartData.map(d => d.value), 1);
        const y = 80 - (chartData[i].value / maxVal) * 80;
        points += `${x},${y} `;
    }
    
    return points.trim();
};

const maxValue = Math.max(...chartData.map(d => d.value), 1);


    return (
      <>
      <div className="w-full max-w-full overflow-hidden bg-white rounded-2xl shadow-lg p-3 sm:p-4">
            {/* Header */}
            <div className="flex !flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="!text-sm sm:!text-base font-semibold text-slate-800">Trends</h3>
                <div className="flex gap-1">
                    {(['week', 'month'] as const).map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-2 sm:px-3 py-1 rounded !text-xs sm:!text-sm ${
                                timeRange === range
                                    ? '!bg-teal-500 text-white'
                                    : '!bg-slate-100 text-slate-600'
                            }`}
                        >
                            {range === 'week' ? 'Week' : 'Month'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Metric Selector */}
            <div className="flex gap-1 mb-4">
                {(['mood', 'cycles', 'reads'] as const).map((metric) => (
                    <button
                        key={metric}
                        onClick={() => setSelectedMetric(metric)}
                        className={`flex-1 py-1.5 sm:py-2 rounded !text-xs sm:!text-sm font-medium ${
                            selectedMetric === metric
                                ? '!bg-teal-500 text-white'
                                : '!bg-slate-100 text-slate-600'
                        }`}
                    >
                        {metric === 'mood' && <Activity size={12} className="inline mr-1" />}
                        {metric === 'cycles' && <Wind size={12} className="inline mr-1" />}
                        {metric === 'reads' && <BookOpen size={12} className="inline mr-1" />}
                        {metric}
                    </button>
                ))}
            </div>

            {/* Chart */}
            {chartData.length > 0 ? (
                <div className="relative">
                    <svg viewBox="0 0 100 80" className="w-full h-32 sm:h-40">
                        {/* Grid lines */}
                        <line x1="0" y1="0" x2="100" y2="0" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2,2" />
                        <line x1="0" y1="40" x2="100" y2="40" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2,2" />
                        <line x1="0" y1="80" x2="100" y2="80" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2,2" />
                        
                        {/* Line */}
                        <polyline
                            points={getLinePoints()}
                            fill="none"
                            stroke={selectedMetric === 'mood' ? '#14b8a6' : selectedMetric === 'cycles' ? '#8b5cf6' : '#f97316'}
                            strokeWidth="2"
                        />
                        
                        {/* Area */}
                        <polygon
                            points={`0,80 ${getLinePoints()} 100,80`}
                            fill={`${selectedMetric === 'mood' ? '#14b8a6' : selectedMetric === 'cycles' ? '#8b5cf6' : '#f97316'}20`}
                        />
                        
                        {/* Points */}
                        {chartData.map((item, i) => {
                            const x = chartData.length === 1 ? 50 : (i / (chartData.length - 1)) * 100;
                            const y = 80 - (item.value / maxValue) * 80;
                            return (
                                <circle
                                    key={i}
                                    cx={x}
                                    cy={y}
                                    r={item.isReal ? "2" : "1.5"}
                                    fill={selectedMetric === 'mood' ? '#14b8a6' : selectedMetric === 'cycles' ? '#8b5cf6' : '#f97316'}
                                    stroke={item.isReal ? "white" : "none"}
                                    strokeWidth="1"
                                    className={item.isReal ? "cursor-pointer" : ""}
                                />
                            );
                        })}
                    </svg>
                    
                    {/* X-axis labels */}
                    <div className="flex mt-2 text-[8px] sm:text-[10px] text-slate-400 overflow-x-auto">
                        {chartData.map((item, i) => (
                            <div key={i} className="flex-1 text-center truncate px-0.5" title={item.label}>
                                {item.label}
                            </div>
                        ))}
                    </div>
                    
                   
                </div>
            ) : (
                <div className="text-center py-8 sm:py-12">
                    <p className="text-xs sm:text-sm text-slate-500">No data available</p>
                </div>
            )}
        </div>

                {/* Activity List - filtered by selected metric */}
        <div className='relative top-10'>
            <ActivityList filter={selectedMetric} />
        </div>
      </>
    );
};

export default MoodTrackingGraph;