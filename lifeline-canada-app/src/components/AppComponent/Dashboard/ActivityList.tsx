/* eslint-disable @typescript-eslint/no-explicit-any */
// ActivityList.tsx
import React, { useState} from 'react';
import { BookOpen, Wind, Smile, ExternalLink, Calendar, Activity } from 'lucide-react';

interface ActivityItem {
  id: string;
  date: string;
  timestamp: string;
  type: 'mood' | 'cycles' | 'reads';
  data: any;
}

interface ActivityListProps {
  filter: 'mood' | 'cycles' | 'reads';
}

const ActivityList: React.FC<ActivityListProps> = ({ filter }) => {
  const [activities, ] = useState<ActivityItem[]>(() => {
    const allActivities: ActivityItem[] = [];

    // Load mood entries
    const moodSaved = localStorage.getItem('moodEntries');
    if (moodSaved) {
      const moodEntries = JSON.parse(moodSaved);
      moodEntries.forEach((entry: any, index: number) => {
        allActivities.push({
          id: `mood-${Date.now()}-${index}`,
          date: entry.date || new Date(entry.timestamp).toLocaleDateString(),
          timestamp: entry.timestamp,
          type: 'mood',
          data: entry
        });
      });
    }

    // Load cycle entries
    const cycleSaved = localStorage.getItem('cycle');
    if (cycleSaved) {
      const cycleEntries = JSON.parse(cycleSaved);
      Object.entries(cycleEntries).forEach(([date, value], index) => {
        allActivities.push({
          id: `cycle-${Date.now()}-${index}`,
          date: date,
          timestamp: date,
          type: 'cycles',
          data: { date, cycles: value }
        });
      });
    }

    // Load read resources from resourceGroups
    const resourceGroups = localStorage.getItem('resourceGroups');
    if (resourceGroups) {
      const groups = JSON.parse(resourceGroups);
      Object.entries(groups).forEach(([date, items]: [string, any]) => {
        if (Array.isArray(items)) {
          items.forEach((item: any, index: number) => {
            allActivities.push({
              id: `read-${date}-${index}`,
              date: new Date(date).toLocaleDateString(),
              timestamp: new Date(date).getTime().toString(),
              type: 'reads',
              data: {
                name: item.name,
                url: item.url,
                date: date
              }
            });
          });
        }
      });
    }

    // Also load from readResources for backward compatibility
    const readSaved = localStorage.getItem('readResources');
    if (readSaved) {
      const readResources = JSON.parse(readSaved);
      if (readResources.items && readResources.items.length > 0) {
        readResources.items.forEach((item: any, index: number) => {
          // Avoid duplicates if already added from resourceGroups
          const exists = allActivities.some(act => 
            act.type === 'reads' && 
            act.data.name === (item.name || item.title) && 
            act.data.url === item.url
          );
          if (!exists) {
            allActivities.push({
              id: `read-${Date.now()}-${index}`,
              date: item.date || new Date(item.timestamp).toLocaleDateString(),
              timestamp: item.timestamp || Date.now().toString(),
              type: 'reads',
              data: item
            });
          }
        });
      }
    }

    // Sort by timestamp (newest first)
    allActivities.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp));
    
    return allActivities;
  });

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'mood':
        return <Smile size={16} className="text-teal-500" />;
      case 'cycles':
        return <Wind size={16} className="text-purple-500" />;
      case 'reads':
        return <BookOpen size={16} className="text-orange-500" />;
      default:
        return <Activity size={16} className="text-slate-500" />;
    }
  };

  const renderMoodContent = (data: any) => {
    return (
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{data.moodEmoji || '😐'}</span>
          <span className="font-medium text-slate-800">{data.moodLabel || data.mood}</span>
          <span className="text-sm text-slate-500">Intensity: {data.intensity}/10</span>
        </div>
        {data.note && (
          <p className="text-sm text-slate-600 mt-1">{data.note}</p>
        )}
        {data.category && (
          <span className="inline-block text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
            {data.category}
          </span>
        )}
      </div>
    );
  };

  const renderCyclesContent = (data: any) => {
    return (
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-medium text-slate-800">{data.cycles} breaths</span>
          <span className="text-sm text-slate-500">breathing cycles</span>
        </div>
      </div>
    );
  };

  const renderReadsContent = (data: any) => {
    return (
      <div className="space-y-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium text-slate-800">{data.name || data.title || 'Resource'}</span>
          {data.url && (
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-teal-500 hover:text-teal-600"
            >
              View <ExternalLink size={10} />
            </a>
          )}
        </div>
        {data.date && (
          <p className="text-xs text-slate-400">Added on: {new Date(data.date).toLocaleDateString()}</p>
        )}
      </div>
    );
  };

  const filteredActivities = activities.filter(activity => activity.type === filter);

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-sm sm:text-base font-semibold text-slate-800">
          {filter.charAt(0).toUpperCase() + filter.slice(1)} History
        </h3>
      </div>

      {/* Activity List */}
      {filteredActivities.length > 0 ? (
        <div className="space-y-3 max-h-[500px] overflow-y-auto">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="border border-slate-200 rounded-lg p-3 hover:shadow-md transition-shadow"
            >
              {/* Date and Type */}
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  {getActivityIcon(activity.type)}
                  <span className="text-xs font-medium text-slate-500 uppercase">
                    {activity.type}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar size={12} />
                  <span>{formatDate(activity.date)}</span>
                </div>
              </div>

              {/* Content */}
              <div>
                {activity.type === 'mood' && renderMoodContent(activity.data)}
                {activity.type === 'cycles' && renderCyclesContent(activity.data)}
                {activity.type === 'reads' && renderReadsContent(activity.data)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 sm:py-12">
          <Activity size={32} className="mx-auto text-slate-300 mb-2" />
          <p className="text-xs sm:text-sm text-slate-500">No {filter} activities recorded yet</p>
          <p className="text-xs text-slate-400 mt-1">Start tracking your {filter} activities!</p>
        </div>
      )}
    </div>
  );
};

export default ActivityList;