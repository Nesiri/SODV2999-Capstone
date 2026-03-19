import { MentalHealthCardsGrid } from '../components/Cards/MentalHealthCard';
import ResourcesSection from '../components/MentalHealthResources/ResourcesSection';
import PatternInterruptCard from '../components/PatternInterrupt/PatternInterruptCard';
import { mentalHealthCards } from '../constants/mental-health-cards';
import patternInterruptImg from '../assets/PattInturrMain.png';
import CrisisCentres from '../components/CrisisCenter/CrisisCentres';
const Resource = () => {
  return (
    <div className=" relative top-20 sm:top-0 min-h-screen bg-gray-50">
      <ResourcesSection />
      <MentalHealthCardsGrid cards={mentalHealthCards} variant = 'compact' />
      <PatternInterruptCard src={patternInterruptImg} />
      <CrisisCentres />
    </div>
  );
};

export default Resource;
