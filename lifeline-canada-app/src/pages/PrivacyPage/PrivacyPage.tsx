import { useSearchParams } from 'react-router-dom';
import PrivacyPolicy from '../../components/Privacy/PrivacyPolicy';
import TermsOfService from '../../components/Privacy/TermsOfService';
import NotFound from '../NotFound';

function PrivacyPage() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode')?.toLowerCase().trim();
  console.log({ mode });

  if (mode === 'privacy') return <PrivacyPolicy />;
  if (mode === 'termsofservice') return <TermsOfService />;

  return <NotFound />;
}

export default PrivacyPage;
