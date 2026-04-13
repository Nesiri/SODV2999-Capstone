// pages/PatternInterruptPage.tsx
import { useLocation } from 'react-router-dom';
import ImproveYourMood from '../../components/PatternInterrupt/pattern/ImproveYourMood';
import Comedy from '../../components/PatternInterrupt/pattern/comedy';
import InspiringVideos from '../../components/PatternInterrupt/pattern/InspiringVideos';
import EmotionalSupportVideos from '../../components/PatternInterrupt/pattern/EmotionalSupportVideos';
import UpliftingMusicVideos from '../../components/PatternInterrupt/pattern/UpliftingMusicVideos';
import LifeChangingBooks from '../../components/PatternInterrupt/pattern/LifeChangingBooks';
import Moviesofinspiration from '../../components/PatternInterrupt/pattern/Moviesofinspiration';
import SelfManagement from '../../components/PatternInterrupt/pattern/SelfManagement';
import CopingMechanisms from '../../components/PatternInterrupt/pattern/CopingMechanisms';
import InteractiveMind from '../../components/PatternInterrupt/pattern/InteractiveMind';
import MentalHealthApps from '../../components/PatternInterrupt/pattern/MentalHealthApps';
import TransformNegativeThoughtsPage from '../../components/PatternInterrupt/pattern/TransformNegativeThoughtsPage';
import WordsOfWisdom from '../../components/PatternInterrupt/pattern/WordsOfWisdom';
import ImageGallery from '../../components/PatternInterrupt/pattern/ImageGallery';
import ActsOfKindness from '../../components/PatternInterrupt/pattern/ActsOfKindness';
import HelpfulMovies from '../../components/PatternInterrupt/pattern/HelpfulMovies';
import NotFound from '../NotFound';

// Map paths to components
const components: Record<string, React.ComponentType> = {
  'improve-mood': ImproveYourMood,
  comedy: Comedy,
  'inspiring-videos': InspiringVideos,
  'emotional-support': EmotionalSupportVideos,
  music: UpliftingMusicVideos,
  books: LifeChangingBooks,
  'movies-inspiration': Moviesofinspiration,
  'helpful-movies': HelpfulMovies,
  'self-management': SelfManagement,
  coping: CopingMechanisms,
  'interactive-mind': InteractiveMind,
  apps: MentalHealthApps,
  'transform-thoughts': TransformNegativeThoughtsPage,
  wisdom: WordsOfWisdom,
  gallery: ImageGallery,
  kindness: ActsOfKindness,
};

export default function PatternInterruptPage() {
  const location = useLocation();
  const path = location.pathname.replace('/pattern-interrupt/', '');
  const Component = components[path];

  return Component ? <Component /> : <NotFound />;
}
