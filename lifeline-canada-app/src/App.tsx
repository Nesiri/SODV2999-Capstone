// App.tsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Resource from './pages/ResourceMain';
import PatternInterrupt from './pages/PatternInterruptMain';
import ScrollToTop from './navigation/ScrollToTop';
import AboutPage from './pages/About';
import CrisisSupportPage from './pages/CrisisSupportPage';
import VolunteerPage from './pages/VolunteerPage';
import ContributionPage from './pages/ContributionPage';
import ContactPage from './pages/ContactPage';
import SiteMapPage from './pages/SiteMapPage';
import CanadaCrisisCenterPage from './pages/CanadaCenter/CanadaCenterPage';
import BCCrisisCenterPage from './pages/CanadaCenter/BCPage';
import ABCrisisCentrePage from './pages/CanadaCenter/ABCrisisCentrePage';
import SKCrisisCenterPage from './pages/CanadaCenter/SKCrisisCentrePage';
import MBCrisisCentrePage from './pages/CanadaCenter/MBCrisisCentrePage';
import ONCrisisCenterPage from './pages/CanadaCenter/ONCrisisCenterPage';
import QCCrisisCenterPage from './pages/CanadaCenter/QCCrisisCentrePage';
import OtherProvinceCrisisCenterPage from './pages/CanadaCenter/OtherProvincePage';
import USACrisisCenterPage from './pages/USA/USACrisisCenterPage';
import InternationalCrisisCentrePage from './pages/International/InternationalCentrePage';
import ChatAndCallLinePage from './pages/ChatAndCallPage/Chat-CallPage';
import AuthPage from './pages/AuthPage/AuthPage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';
import VerifyEmail from './pages/AuthPage/VerifyEmail';
import NotFound from './pages/NotFound';

import DashboardRoutes from './routes/DashboardRoutes';
import ResourceRoutes from './routes/ResourceRoutes'; // Import the new resource router
import { AuthProvider } from './context/AuthProvider';
import PatternInterruptRoutes from './routes/PatternInterruptRoutes';
import { CenteredLayout } from './layouts/CenterLayout';
import CrisisButton from './components/Chatbot/CrisisButton';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* MainLayout wraps all nested pages */}
        <Route path="/" element={<MainLayout />}>
          {/* Index route (Home) */}
          <Route index element={<Home />} />
          <Route path="resources" element={<Resource />} />
          <Route path="pattern-interrupts" element={<PatternInterrupt />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="incrisisneedhelp" element={<CrisisSupportPage />} />
          <Route path="volunteers" element={<VolunteerPage />} />
          <Route path="contribute" element={<ContributionPage />} />
         <Route path=":mode" element={<ContactPage />} />
          <Route path="site-map" element={<SiteMapPage />} />
          
          
          {/* Crisis Center Routes */}
          <Route path="canadian-crisis-centres" element={<CanadaCrisisCenterPage />} />
          <Route path="british-columbia-crisis-centres" element={<BCCrisisCenterPage />} />
          <Route path="alberta-crisis-centres" element={<ABCrisisCentrePage />} />
          <Route path="saskatchewan-crisis-centres" element={<SKCrisisCenterPage />} />
          <Route path="manitoba-crisis-centres" element={<MBCrisisCentrePage />} />
          <Route path="ontario-crisis-centres" element={<ONCrisisCenterPage />} />
          <Route path="quebec-crisis-centres" element={<QCCrisisCenterPage />} />
          <Route path=":mode" element={<OtherProvinceCrisisCenterPage />} />
          <Route path="usa-crisis-centres" element={<USACrisisCenterPage />} />
          <Route path="international-crisis-centres" element={<InternationalCrisisCentrePage />} />
          <Route path="in-crisis-help/:mode" element={<ChatAndCallLinePage />} />

          {/* All resource routes are now handled by ResourceRoutes */}
          <Route path="resources/*" element={<ResourceRoutes />} />
               {/* All psttern routes are now handled by PatternInterruptRoutes */}
          <Route path="pattern-interrupt/*" element={<PatternInterruptRoutes />} />
 
          {/* 404 Route - this will catch any unmatched routes within MainLayout */}
          <Route path="*" element={<NotFound />} />
        </Route>

          {/* Auth Routes */}
          <Route path="app" element={
            <CenteredLayout>
              <AuthPage />
            </CenteredLayout>
          } />
          <Route path="verify-email" element={
            <CenteredLayout>
              <VerifyEmail />
            </CenteredLayout>
          } />
          <Route path="privacy" element={
            <CenteredLayout>
              <PrivacyPage />
            </CenteredLayout>
          } />
        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard/*"  
          element={
            <AuthProvider>
              <DashboardRoutes />
            </AuthProvider>  
          }
        /> 
      </Routes>
       <CrisisButton />
    </>
  );
}