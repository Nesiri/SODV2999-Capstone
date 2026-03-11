import ABCrisisCentres from '../../components/CrisisCenter/Canada/Alberta/ABCrisisCentres';
import ABRegionalCrisisCentres from '../../components/CrisisCenter/Canada/Alberta/ABRegionalCrisisCentres';
import CrisisCentres from '../../components/CrisisCenter/Canada/Alberta/ABWideCrisisCenters';

function ABCrisisCentrePage() {
  return (
    <>
      <ABCrisisCentres />
      <CrisisCentres />
      <ABRegionalCrisisCentres />
    </>
  );
}

export default ABCrisisCentrePage;
