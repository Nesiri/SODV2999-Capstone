// layouts/DashboardLayout.tsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/AppComponent/Dashboard/Sidebar';
import Header from '../components/AppComponent/Dashboard/Header';
import Footer from '../components/AppComponent/Dashboard/Footer';
import { mainNavItems } from '../navigation/appNav';
import { useAuth } from '../hooks/useAuth';

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { user, onLogout } = useAuth();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    onLogout();
  };

  // Redirect if no user
  if (!user) {
    onLogout();
    return null;
  }

  // Create display values with defaults
  const displayName = user.name || 'Guest';
  const displayUser = {
    ...user,
    name: displayName,
  };

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-br from-slate-50 to-amber-50 flex flex-col">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        user={displayUser}
        navItems={mainNavItems}
        onLogout={handleLogout}
      />

      <main className="w-screen lg:pl-72 flex-1 flex flex-col">
        <Header onMenuClick={toggleSidebar} user={displayUser} />

        <div className="p-4 md:p-6 max-w-7xl mx-auto flex-1 w-full">
          <Outlet />
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default DashboardLayout;
