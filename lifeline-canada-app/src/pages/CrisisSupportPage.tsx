import AdditionalCrisisResources from '../components/CrisisCenter/AdditionalCrisisResources';
import CrisisCentres from '../components/CrisisCenter/CrisisCentres';
import CrisisSupport from '../components/CrisisCenter/CrisisSupport';
import WhatToExpect from '../components/CrisisCenter/WhatToExpect';

function CrisisSupportPage() {
  return (
    <>
      <CrisisSupport />
      <div id="local-crisis-support">
        <CrisisCentres />
        <WhatToExpect />
      </div>
      <AdditionalCrisisResources />
    </>
  );
}

export default CrisisSupportPage;
