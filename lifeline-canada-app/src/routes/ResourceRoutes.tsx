// routes/ResourceRoutes.tsx
import { Routes, Route } from 'react-router-dom';

// Import all resource pages
import ResourceCoping from '../pages/ResourcePages/ResourceCoping';
import ResourceHowToHelp from '../pages/ResourcePages/ResourceHowToHelp';
import ResourceWarningSigns from '../pages/ResourcePages/ResourceWarningSigns';
import ResourceSelfManagement from '../pages/ResourcePages/ResourceSelfManagement';
import ResourceSearchProfessional from '../pages/ResourcePages/ResourceSearchProfessional';
import ResourceECounselling from '../pages/ResourcePages/ResourceECounselling';
import ResourcePTSD from '../pages/ResourcePages/ResourcePTSD';
import ResourceGrief from '../pages/ResourcePages/ResourceGrief';
import ResourceDepression from '../pages/ResourcePages/ResourceDepression';
import ResourceAnxiety from '../pages/ResourcePages/ResourceAnxiety';
import ResourceAddiction from '../pages/ResourcePages/ResourceAddiction';
import ResourceAttemptSurvivors from '../pages/ResourcePages/ResourceAttemptSurvivors';
import ResourceBereavedSupport from '../pages/ResourcePages/ResourceBereavedSupport';
import ResourceOrganizations from '../pages/ResourcePages/ResourceOrgaanizations';
import ResourceSurvivorsSuicideLoss from '../pages/ResourcePages/ResourceSurvivorsSuicideLoss';
import ResourceSurvivorsAfterSuicideLoss from '../pages/ResourcePages/ResourceSurvivorsAfterSuicideLoss';
import ResourceEducators from '../pages/ResourcePages/ResourceEducators';
import ResourceHealthProfessionals from '../pages/ResourcePages/ResourceHealthProfessionals';
import ResourceFirstResponders from '../pages/ResourcePages/ResourceFirstResponders';
import ResourceCareGivers from '../pages/ResourcePages/ResourceCareGivers';
import ResourceMediaProfessionals from '../pages/ResourcePages/ResourceMediaProfessionals';
import ResourceMythsFacts from '../pages/ResourcePages/ResourceMythsFacts';
import ResourceCommunitiesRefugees from '../pages/ResourcePages/ResourceCommunitiesRefugees';
import ResourceCommunitiesSeniors from '../pages/ResourcePages/ResourceCommunitiesSeniors';
import ResourceCommunitiesVeterans from '../pages/ResourcePages/ResourceCommunitiesVeterans';
import ResourceCommunitiesLGBTQ from '../pages/ResourcePages/ResourceCommunitiesLGBTQ';
import ResourceCommunitiesMen from '../pages/ResourcePages/ResourceCommunitiesMen';
import ResourceCommunitiesIndigenous from '../pages/ResourcePages/ResourceCommunitiesIndigenous';
import ResourceCommunitiesParents from '../pages/ResourcePages/ResourceCommunitiesParents';
import ResourceCommunitiesCollegeStudents from '../pages/ResourcePages/ResourceCommunitiesCollegeStudents';
import ResourceCommunitiesTeensYouth from '../pages/ResourcePages/ResourceCommunitiesTeensYouth';

export default function ResourceRoutes() {
  return (
    <Routes>
      <Route path="suicidal-thoughts" element={<ResourceCoping />} />
      <Route path="how-to-help" element={<ResourceHowToHelp />} />
      <Route path="warning-signs" element={<ResourceWarningSigns />} />
      <Route path="self-management" element={<ResourceSelfManagement />} />
      <Route path="search-professional" element={<ResourceSearchProfessional />} />
      <Route path="e-counselling" element={<ResourceECounselling />} />
      <Route path="ptsd" element={<ResourcePTSD />} />
      <Route path="grief" element={<ResourceGrief />} />
      <Route path="depression" element={<ResourceDepression />} />
      <Route path="anxiety" element={<ResourceAnxiety />} />
      <Route path="addiction" element={<ResourceAddiction />} />
      <Route path="attempt-survivors" element={<ResourceAttemptSurvivors />} />
      <Route path="bereaved-support" element={<ResourceBereavedSupport />} />
      <Route path="organizations" element={<ResourceOrganizations />} />
      <Route path="suicide-loss" element={<ResourceSurvivorsSuicideLoss />} />
      <Route path="after-suicide-loss" element={<ResourceSurvivorsAfterSuicideLoss />} />
      <Route path="educators" element={<ResourceEducators />} />
      <Route path="health-professionals" element={<ResourceHealthProfessionals />} />
      <Route path="first-responders" element={<ResourceFirstResponders />} />
      <Route path="care-givers" element={<ResourceCareGivers />} />
      <Route path="media-professionals" element={<ResourceMediaProfessionals />} />
      <Route path="myths-facts" element={<ResourceMythsFacts />} />
      <Route path="refugees" element={<ResourceCommunitiesRefugees />} />
      <Route path="seniors" element={<ResourceCommunitiesSeniors />} />
      <Route path="veterans" element={<ResourceCommunitiesVeterans />} />
      <Route path="lgbtq2s" element={<ResourceCommunitiesLGBTQ />} />
      <Route path="men" element={<ResourceCommunitiesMen />} />
      <Route path="indigenous" element={<ResourceCommunitiesIndigenous />} />
      <Route path="parents" element={<ResourceCommunitiesParents />} />
      <Route path="college-students" element={<ResourceCommunitiesCollegeStudents />} />
      <Route path="teens-youth" element={<ResourceCommunitiesTeensYouth />} />
    </Routes>
  );
}