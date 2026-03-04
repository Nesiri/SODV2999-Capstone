import React from 'react';
import HomepageCallToAction from '../components/Home/HomepageCallToAction';
import MentalHealthHero from '../components/Home/MentalHealthHero';
import MentalHealthResources from '../components/MentalHealthResources/MentalHealthResources';
import CrisisSupportBanner from '../components/MentalHealthResources/CrisisSupportBanner';
import CompanionPawsCanada from '../components/CompanyPaws/CompanionPawsCanada';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Welcome Section */}
      <div className="flex flex-col items-center justify-center w-full">
        <MentalHealthHero />
        <MentalHealthResources />
        <CrisisSupportBanner />
        <CompanionPawsCanada />
      </div>

      {/* Full Width CTA Section */}
      <div className="w-full">
        <HomepageCallToAction />
      </div>
    </div>
  );
};

export default Home;
