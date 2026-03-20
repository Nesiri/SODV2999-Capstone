import MediaCardsSection from '../components/Cards/MediaCards';
import PatternInterruptSection from '../components/PatternInterrupt/PatternInterruptSection';
import { patternInterruptCards } from '../constants/patternInterruptCards';

const patternInterrupt = () => {
  return (
    <>
      <PatternInterruptSection />
      <MediaCardsSection
        cards={patternInterruptCards}
        title="Pattern Interrupt Media"
        description="Explore these media resources to learn more about pattern interrupts and how they can help you break negative cycles and build healthier habits."
      />
    </>
  );
};

export default patternInterrupt;
