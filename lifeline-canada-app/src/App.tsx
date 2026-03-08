import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import CrisisHelp from "./pages/CrisisHelp";
import Contact from "./pages/Contact";

import PatternLanding from "./pages/pattern/PatternLanding";
import PatternTemplate from "./pages/pattern/PatternTemplate";
import TransformNegativeThoughtsPage from "./pages/pattern/TransformNegativeThoughtsPage";
import CopingMechanismsPage from "./pages/pattern/CopingMechanismsPage";
import InteractiveMindPage from "./pages/pattern/InteractiveMindPage";
import MentalHealthAppsPage from "./pages/pattern/MentalHealthAppsPage";
import WordsOfWisdomPage from "./pages/pattern/WordsOfWisdomPage";
import ImageGalleryPage from "./pages/pattern/ImageGalleryPage";
import ActsOfKindnessPage from "./pages/pattern/ActsOfKindnessPage";
import SelfManagementPage from "./pages/pattern/SelfManagementPage";

import LifeLineLanding from "./pages/lifeline/LifeLineLanding";
import LifeLineTemplate from "./pages/lifeline/LifeLineTemplate";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="pattern" element={<PatternLanding />} />
        <Route
          path="pattern/transform-negative-thoughts"
          element={<TransformNegativeThoughtsPage />}
        />
        <Route
          path="pattern/coping-mechanisms"
          element={<CopingMechanismsPage />}
        />
        <Route
          path="pattern/interactive-mind"
          element={<InteractiveMindPage />}
        />
        <Route
        path="pattern/mental-health-apps"
        element={<MentalHealthAppsPage />}
        />
        <Route
        path="pattern/words-of-wisdom"
        element={<WordsOfWisdomPage />}
        />
        <Route
        path="pattern/gallery"
        element={<ImageGalleryPage />}
        />
        <Route
        path="pattern/acts-of-kindness"
        element={<ActsOfKindnessPage />}
        />
        <Route
        path="pattern/self-management"
        element={<SelfManagementPage />}
        />
        <Route path="pattern/:slug" element={<PatternTemplate />} />

        <Route path="about" element={<About />} />
        <Route path="resources" element={<Resources />} />
        <Route path="crisis-help" element={<CrisisHelp />} />
        <Route path="contact" element={<Contact />} />

        <Route path="lifeline-app" element={<LifeLineLanding />} />
        <Route path="lifeline-app/:slug" element={<LifeLineTemplate />} />
      </Route>
    </Routes>
  );
}