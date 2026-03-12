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
import ResourceCoping from './pages/ResourceCoping';
import ResourceHowToHelp from './pages/ResourceHowToHelp';
import ResourceSearchProfessional from './pages/ResourceSearchProfessional';
import ResourceWarningSigns from './pages/ResourceWarningSigns';
import ResourceSelfManagement from './pages/ResourceSelfManagement';
import ResourceECounselling from './pages/ResourceECounselling';
import ResourcePTSD from './pages/ResourcePTSD';
import ResourceGrief from './pages/ResourceGrief';
import ResourceDepression from './pages/ResourceDepression';
import ResourceAnxiety from './pages/ResourceAnxiety';
import ResourceAddiction from './pages/ResourceAddiction';
import ResourceAttemptSurvivors from './pages/ResourceAttemptSurvivors';
import ResourceBereavedSupport from './pages/ResourceBereavedSupport';
import ResourceOrganizations from './pages/ResourceOrgaanizations';
import ResourceSurvivorsSuicideLoss from './pages/ResourceSurvivorsSuicideLoss';
import ResourceSurvivorsAfterSuicideLoss from './pages/ResourceSurvivorsAfterSuicideLoss';

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
          <Route
            path="/email-support"
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
          <Route path="/in-crisis/:mode" element={<ChatAndCallLinePage />} />

          <Route path="/resources/suicidal-thoughts" element={<ResourceCoping />} />
          <Route path="/resources/how-to-help" element={<ResourceHowToHelp />} />
          <Route path="/resources/warning-signs" element={<ResourceWarningSigns />} />
          <Route path="/resources/self-management" element={<ResourceSelfManagement />} />
          <Route path="/resources/search-professional" element={<ResourceSearchProfessional />} />
          <Route path="/resources/e-counselling" element={<ResourceECounselling />} />
          <Route path="/resources/ptsd" element={<ResourcePTSD />} />
          <Route path="/resources/grief" element={<ResourceGrief />} />
          <Route path="/resources/depression" element={<ResourceDepression />} />
          <Route path="/resources/anxiety" element={<ResourceAnxiety />} />
          <Route path="/resources/addiction" element={<ResourceAddiction />} />
          <Route path="/resources/attempt-survivors" element={<ResourceAttemptSurvivors />} />
          <Route path="/resources/bereaved-support" element={<ResourceBereavedSupport />} />
          <Route path="/resources/organizations" element={<ResourceOrganizations />} />
          <Route path="/resources/suicide-loss" element={<ResourceSurvivorsSuicideLoss />} />
          <Route path='/resources/after-suicide-loss' element={<ResourceSurvivorsAfterSuicideLoss />} />
        </Route>
      </Routes>
    </>
  );
}
