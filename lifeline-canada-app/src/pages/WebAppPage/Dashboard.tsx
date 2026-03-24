// pages/DashboardPage.tsx
import React from 'react';
import { useAuth } from '../../hooks/useAuth'; // Import useAuth
import MoodCheckin from '../../components/AppComponent/Dashboard/MoodCheckin';
import BreathingCard from '../../components/AppComponent/Dashboard/BreathingCard';



const DashboardPage: React.FC = () => {
  const { user } = useAuth(); // Get user from auth context

  const handleMoodSelect = (mood: string) => {
    console.log('Mood selected:', mood);
    // API call to save mood
  };

  return (
    <>
      {/* Welcome Message */}
      <div className="mb-6 md:mb-8 px-4 md:px-0 md:flex md:flex-col md:items-center md:mr-15">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-teal-800 mb-1 md:mb-2">
          Hello, {user?.name?.split(' ')[0] || 'there'}
          <span className="inline-block ml-1 text-teal-400">✦</span>
        </h1>
        <p className="text-teal-600/80 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl">
          Take a gentle breath. You're exactly where you need to be.
        </p>
      </div>

      {/* Mood Check-in */}
      <div className="mb-8">
        <MoodCheckin onMoodSelect={handleMoodSelect} />
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <BreathingCard />
   
      </div>

      {/* Saved Resources - will be added later */}
    </>
  );
};

export default DashboardPage;