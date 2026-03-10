import QCCrisisCentres from "../../components/CrisisCenter/Canada/Quebec/QCCrisisCentres"
import QCRegionalCrisisCentres from "../../components/CrisisCenter/Canada/Quebec/QCRegionalCrisisCentres"
import QCWiderCrisisCentres from "../../components/CrisisCenter/Canada/Quebec/QCWideCrisisCenters"

function QCCrisisCenterPage(){
    return (
        <>
        <QCCrisisCentres/>
        <QCWiderCrisisCentres/>
        <QCRegionalCrisisCentres/>
        </>
    )
}

export default QCCrisisCenterPage