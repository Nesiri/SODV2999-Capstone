// DashboardRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import MoodCheckin from '../components/AppComponent/Dashboard/MoodCheckin';

import BreathingExercises from '../components/AppComponent/Dashboard/BreathingExercises';

import DeleteAccount from '../components/AppComponent/Profile/Settings';
import MoodTrackingGraph from '../components/AppComponent/Dashboard/MoodTrackingGraph';
const ResourcesHub = lazy(
  () => import('../components/AppComponent/Dashboard/ResourcesHub')
);
export default function DashboardRoutes() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<MoodCheckin />} />
          <Route path="mood" element={<MoodTrackingGraph />} />
          <Route path="breathing" element={<BreathingExercises />} />
          <Route path="resources" element={<ResourcesHub />} />
          <Route path="settings" element={<DeleteAccount />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
