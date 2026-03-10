import MBCrisisCentres from "../../components/CrisisCenter/Canada/Manitoba/MBCrisisCentres"
import MBRegionalCrisisCentres from "../../components/CrisisCenter/Canada/Manitoba/MBRegionalCrisisCentres"
import MBWideCrisisCentres from "../../components/CrisisCenter/Canada/Manitoba/MBWideCrisisCenters"

function MBCrisisCentrePage(){
    return (
        <>
        <MBCrisisCentres/>
        <MBWideCrisisCentres/>
        <MBRegionalCrisisCentres/>
        </>
    )
}

export default MBCrisisCentrePage