import CanadaNationwide from '../../components/CrisisCenter/Canada/CanadaNationwide';
import CanadianCrisisCentres from '../../components/CrisisCenter/Canada/CanadianCrisisCentres';
import ProvincialCrisisCentres from '../../components/CrisisCenter/Canada/ProvincialCrisisCentres';

function CanadaCrisisCenterPage() {
  return (
    <>
      <CanadianCrisisCentres />
      <CanadaNationwide />
      <ProvincialCrisisCentres />
    </>
  );
}

export default CanadaCrisisCenterPage;
