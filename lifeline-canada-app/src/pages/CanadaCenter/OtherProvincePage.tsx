import { useParams } from 'react-router-dom';
import NBCrisisCentres from '../../components/CrisisCenter/Canada/OtherProvince/NBCrisisCentres';
import NLCrisisCentres from '../../components/CrisisCenter/Canada/OtherProvince/NLCrisisCentres';
import NSCrisisCentres from '../../components/CrisisCenter/Canada/OtherProvince/NSCrisisCenter';
import PECrisisCentres from '../../components/CrisisCenter/Canada/OtherProvince/PECrisisCenter';
import YTCrisisCentres from '../../components/CrisisCenter/Canada/OtherProvince/YTCrisisCenter';
import NUCrisisCentres from '../../components/CrisisCenter/Canada/OtherProvince/NUCrisisCenter';
import NTCrisisCentres from '../../components/CrisisCenter/Canada/OtherProvince/NTCrisisCenter';
import NotFound from '../NotFound';

function OtherProvinceCrisisCenterPage() {
  const { mode } = useParams<{ mode: string }>();
  console.log({ mode });
  let content;
  switch (mode?.toLowerCase().trim()) {
    case 'newbrunswick-crisis-centres':
      content = <NBCrisisCentres />;
      break;
    case 'newfoundland-crisis-centres':
      content = <NLCrisisCentres />;
      break;
    case 'nova-scotia-crisis-centres':
      content = <NSCrisisCentres />;
      break;
    case 'pei-crisis-centres':
      content = <PECrisisCentres />;
      break;
    case 'yukon-crisis-centres':
      content = <YTCrisisCentres />;
      break;
    case 'nunavut-crisis-centres':
      content = <NUCrisisCentres />;
      break;
    case 'nwterritories-crisis-centres':
      content = <NTCrisisCentres />;
      break;

    default:
      content = <NotFound />;
  }

  return <>{content}</>;
}

export default OtherProvinceCrisisCenterPage;
