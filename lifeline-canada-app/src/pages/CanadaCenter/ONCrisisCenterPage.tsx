import ONCrisisCentres from "../../components/CrisisCenter/Canada/Ontario/ONCrisisCentres"
import ONRegionalCrisisCentres from "../../components/CrisisCenter/Canada/Ontario/ONRegionalCrisisCentres"
import ONWideCrisisCentres from "../../components/CrisisCenter/Canada/Ontario/ONWideCrisisCenters"

function ONCrisisCenterPage(){
    return (
        <>
        <ONCrisisCentres/>
        <ONWideCrisisCentres/>
        <ONRegionalCrisisCentres/>
        </>
    )
}
export default ONCrisisCenterPage