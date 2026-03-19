// App.tsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Resource from './pages/Resource';
import PatternInterrupt from './pages/PatternInterrupt';
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
import { AuthProvider } from './context/AuthProvider';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* MainLayout wraps all nested pages */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/pattern-interrupts" element={<PatternInterrupt />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/incrisisneedhelp" element={<CrisisSupportPage />} />
          <Route path="/volunteers" element={<VolunteerPage />} />
          <Route path="/contribute" element={<ContributionPage />} />
          <Route path="/contact-us" element={<ContactPage mode="contact" />} />
          <Route
            path="/support"
            element={<ContactPage mode="email-support" />}
          />
          <Route path="/site-map" element={<SiteMapPage />} />
          <Route
            path="/canadian-crisis-centres"
            element={<CanadaCrisisCenterPage />}
          />
          <Route
            path="/british-columbia-crisis-centres"
            element={<BCCrisisCenterPage />}
          />
          <Route
            path="/alberta-crisis-centres"
            element={<ABCrisisCentrePage />}
          />
          <Route
            path="/saskatchewan-crisis-centres"
            element={<SKCrisisCenterPage />}
          />
          <Route
            path="/manitoba-crisis-centres"
            element={<MBCrisisCentrePage />}
          />
          <Route
            path="/ontario-crisis-centres"
            element={<ONCrisisCenterPage />}
          />
          <Route
            path="/quebec-crisis-centres"
            element={<QCCrisisCenterPage />}
          />
          <Route path="/:mode" element={<OtherProvinceCrisisCenterPage />} />
          <Route path="/usa-crisis-centres" element={<USACrisisCenterPage />} />
          <Route
            path="/international-crisis-centres"
            element={<InternationalCrisisCentrePage />}
          />
          <Route
            path="/incrisisneedhelp/:mode"
            element={<ChatAndCallLinePage />}
          />
          <Route path="/privacy" element={<PrivacyPage />} />
          {/* Auth Routes */}
          <Route path="/app" element={<AuthPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          {/* 404 Route - this will catch any unmatched routes within MainLayout */}
          <Route path="*" element={<NotFound />} />
        </Route>

      {/* Protected Dashboard Route - Add /* to match all dashboard sub-routes */}
      <Route
        path="/dashboard/*"  
        element={
          <AuthProvider>
            <DashboardRoutes />
          </AuthProvider>  
        }
      /> 
      </Routes>
    </>
  );
}