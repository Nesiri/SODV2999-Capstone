import AdditionalCrisisResources from '../components/CrisisCenter/AdditionalCrisisResources';
import CrisisCentres from '../components/CrisisCenter/CrisisCentres';
import CrisisSupport from '../components/CrisisCenter/CrisisSupport';

function CrisisSupportPage() {
  return (
    <>
      <CrisisSupport />
      <div id="local-crisis-support">
        <CrisisCentres />
      </div>
      <AdditionalCrisisResources />
    </>
  );
}

export default CrisisSupportPage;
