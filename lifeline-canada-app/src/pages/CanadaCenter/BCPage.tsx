import BCCrisisCentres from '../../components/CrisisCenter/Canada/BC/BCCrisisCentres';
import BCRegionalCrisisCentres from '../../components/CrisisCenter/Canada/BC/BCRegionalCrisisCentres';
import BCwideCrisisCentres from '../../components/CrisisCenter/Canada/BC/BCWideCrisisCenters';

function BCCrisisCenterPage() {
  return (
    <>
      <BCCrisisCentres />
      <BCwideCrisisCentres />
      <BCRegionalCrisisCentres />
    </>
  );
}

export default BCCrisisCenterPage;
