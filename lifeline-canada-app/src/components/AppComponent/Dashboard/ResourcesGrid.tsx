// components/dashboard/ResourcesGrid.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { ResourceItem } from '../../../types/dashboard.types';

interface ResourcesGridProps {
  resources: ResourceItem[];
  title?: string;
  viewAllLink?: string;
}

const ResourcesGrid: React.FC<ResourcesGridProps> = ({
  resources,
  title = 'Your Saved Resources',
  viewAllLink = '/resources',
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        <Link
          to={viewAllLink}
          className="text-sm text-amber-600 hover:text-amber-700"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {resources.map((resource) => (
          <Link
            key={resource.id}
            to={resource.link}
            className={`${resource.color} p-4 rounded-xl hover:shadow-md transition-shadow group`}
          >
            <span className="text-2xl mb-2 block">{resource.icon}</span>
            <h3 className="font-medium text-gray-800 group-hover:text-amber-600 transition-colors">
              {resource.title}
            </h3>
            {resource.description && (
              <p className="text-xs text-gray-500 mt-1">
                {resource.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourcesGrid;
