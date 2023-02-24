import Manufacturer from "../../../models/manufacturer";
import constants from '../../../constants'

const {
    MANUFACTURER_IS_NOT_EXISTS,
    MANUFACTURER_IS_UPDATED
} = constants

const byId = async (id, unitDetails) => {
    const result = await Manufacturer.update(unitDetails, {
        where: {
            id
        }
    })
    if(result && result.length && result[0]){
        return { message: MANUFACTURER_IS_UPDATED }
    }else{
        return { message: MANUFACTURER_IS_NOT_EXISTS }
    }
}

export default {
    byId
}
