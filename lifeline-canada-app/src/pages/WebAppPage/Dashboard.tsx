// pages/DashboardPage.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import MoodCheckin from '../../components/AppComponent/Dashboard/MoodCheckin';
import BreathingCard from '../../components/AppComponent/Dashboard/BreathingCard';
import MoodTrends from '../../components/AppComponent/Dashboard/MoodTrends';
import { weeklyMoodData, weekDays } from '../../navigation/appNav';

interface User {
  id: string;
  name: string;
  email: string;
}

const DashboardPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get user from location state
  const user = location.state?.user as User | undefined;

  // If no user, redirect to login
  if (!user) {
    navigate('/app?mode=login', { replace: true });
    return null;
  }

  const handleMoodSelect = (mood: string) => {
    console.log('Mood selected:', mood);
    // API call to save mood
  };

  const handleLogout = () => {
    // Navigate to login, clearing any state
    navigate('/app?mode=login', { replace: true });
  };

  return (
    <DashboardLayout user={user} onLogout={handleLogout}>
      {/* Welcome Message */}
      <div className="mb-6 md:mb-8 px-4 md:px-0 md:flex md:flex-col md:items-center md:mr-15">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-teal-800 mb-1 md:mb-2">
          Hello, {user.name.split(' ')[0]}
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
        <MoodTrends data={weeklyMoodData} labels={weekDays} />
      </div>

      {/* Saved Resources */}
    </DashboardLayout>
  );
};

export default DashboardPage;
