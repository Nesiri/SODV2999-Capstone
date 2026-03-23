// components/dashboard/MoodTrends.tsx
import React from 'react';
import { Activity } from 'lucide-react';

interface MoodTrendsProps {
  data: number[];
  labels: string[];
  title?: string;
}

const MoodTrends: React.FC<MoodTrendsProps> = ({
  data,
  labels,
  title = 'Mood Trends',
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-amber-100">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
          <Activity className="w-6 h-6 text-amber-600" />
        </div>
        <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
          This Week
        </span>
      </div>
      <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
      <div className="flex items-end gap-1 h-20 mb-4">
        {data.map((height, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full bg-amber-200 rounded-t-lg transition-all hover:bg-amber-300"
              style={{ height: `${height}%` }}
            />
            <span className="text-xs text-gray-500">{labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodTrends;
