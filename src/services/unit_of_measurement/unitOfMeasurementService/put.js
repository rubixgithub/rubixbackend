import UnitOfMeasureMent from "../../../models/unit_of_measurement";
import constants from '../../../constants'

const {
    UNIT_MEASUREMENT_IS_UPDATED,
    UNIT_MEASUREMENT_IS_NOT_EXISTS
} = constants

const byId = async (id, unitDetails) => {
    const result = await UnitOfMeasureMent.update(unitDetails, {
        where: {
            id
        }
    })
    if(result && result.length && result[0]){
        return { message: UNIT_MEASUREMENT_IS_UPDATED }
    }else{
        return { message: UNIT_MEASUREMENT_IS_NOT_EXISTS }
    }
}

export default {
    byId
}
