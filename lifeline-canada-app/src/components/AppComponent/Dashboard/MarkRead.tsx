// components/AppComponent/Dashboard/MarkRead.tsx
import { useState } from 'react';

interface MarkAsReadButtonProps {
    resourcePath: string;
    resourceName: string;
    onMarked?: (count: number) => void;
}

export const MarkAsReadButton: React.FC<MarkAsReadButtonProps> = ({ 
    resourcePath, 
    resourceName,
    onMarked 
}) => {
    const getIdentifier = () => resourcePath || resourceName;

    const [isRead, setIsRead] = useState(() => {
        const identifier = getIdentifier();
        const data = localStorage.getItem("readResources");

        if (!data) return false;

        const parsed = JSON.parse(data);
        return parsed.items?.includes(identifier);
    });

    const handleMarkAsRead = () => {
        const identifier = getIdentifier();
        if (!identifier) return;

        const existing = localStorage.getItem("readResources");
        console.log({existing})
        const parsed = existing 
            ? JSON.parse(existing) 
            : { count: 0, items: [] };

        // Already counted → do nothing
        if (parsed.items.includes(identifier)) {
            return;
        }

        // New resource → increment
        parsed.items.push(identifier);
        parsed.count += 1;

        localStorage.setItem("readResources", JSON.stringify(parsed));
        
        // Group by date with name and url
        const date = new Date().toISOString().split('T')[0];
        const groups = JSON.parse(localStorage.getItem("resourceGroups") || "{}");
        
        if (!groups[date]) groups[date] = [];
        groups[date].push({ name: resourceName, url: resourcePath });
        
        localStorage.setItem("resourceGroups", JSON.stringify(groups));
        
        setIsRead(true);

        if (onMarked) onMarked(parsed.count);
    };


    if (isRead) {
        return (
            <span className="relative left-5 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-green-50 text-green-600">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    style={{ width: '0.875rem', height: '0.875rem' }}
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M4.5 12.75l6 6 9-13.5" 
                    />
                </svg>
                <span>Read today</span>
            </span>
        );
    }

    return (
        <button 
            onClick={handleMarkAsRead}
            className="relative left-5 sm:left-15 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 bg-teal-50 hover:bg-teal-100 text-teal-600 hover:text-teal-700 border border-teal-200"
            title={`Mark "${resourceName}" as read`}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                style={{ width: '0.875rem', height: '0.875rem' }}
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" 
                />
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                />
            </svg>
          
        </button>
    );
};