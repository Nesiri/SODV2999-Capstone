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

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* Move Routes to top*/}
      <Routes>
        {/* MainLayout wraps all nested pages */}
        <Route path="/" element={<MainLayout />}>
          {/* Index route (Home) */}
          <Route index element={<Home />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/pattern-interrupt" element={<PatternInterrupt />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/in-crisis" element={<CrisisSupportPage />} />
          <Route path="/get-involved" element={<VolunteerPage />} />
          <Route path="/contribute" element={<ContributionPage />} />
        
         <Route path="/contact" element={<ContactPage mode="contact" />} />
         <Route path="/email-support" element={<ContactPage mode="email-support" />} />
        </Route>
      </Routes>
    </>
  );
}
