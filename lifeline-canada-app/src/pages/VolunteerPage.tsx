import AdministrationAssistantSection from '../components/Volunteer/AdministrationAssistantSection';
import CommunicationsSpecialistSection from '../components/Volunteer/CommunicationsSpecialistSection';
import GetInvolvedSection from '../components/Volunteer/GetInvolvedSection';
import MarketingManagerSection from '../components/Volunteer/MarketingManagerSection';
import ProjectManagerSection from '../components/Volunteer/ProjectManagerSection';
import VolunteerFormSection from '../components/Volunteer/VolunteerFormSection';
import VolunteerOpportunitiesSection from '../components/Volunteer/VolunteerOpportunitiesSection';

function VolunteerPage() {
  return (
    <>
      <GetInvolvedSection />
      <VolunteerOpportunitiesSection />
      <VolunteerFormSection />
      <CommunicationsSpecialistSection />
      <AdministrationAssistantSection />
      <ProjectManagerSection />
      <MarketingManagerSection />
    </>
  );
}

export default VolunteerPage;
