// layouts/DashboardLayout.tsx
import React, { useState } from 'react';

import Sidebar from '../components/AppComponent/Dashboard/Sidebar';
import Header from '../components/AppComponent/Dashboard/Header';
import Footer from '../components/AppComponent/Dashboard/Footer';
import { mainNavItems } from '../navigation/appNav';

interface User {
  name: string;
  email: string;
}

interface DashboardLayoutProps {
  user: User;
  children: React.ReactNode;
  onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  user,
  children,
  onLogout,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        user={user}
        navItems={mainNavItems}
        onLogout={handleLogout}
      />

      <main className="w-full lg:pl-72 min-h-screen">
        <Header onMenuClick={toggleSidebar} user={user} />

        <div className="p-4 md:p-6 max-w-7xl mx-auto">
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
