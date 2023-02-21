import sequelize from '../../../models'
import constants from '../../../constants'

const {
    ADDRESS_IS_UPDATED,
    ADDRESS_IS_NOT_EXISTS
} = constants

const byId = async (id, address) => {
    const result = await sequelize.models.address.update(address, {
        where: {
            id
        }
    })
    if(result && result.length && result[0]){
        return { message: ADDRESS_IS_UPDATED }
    }else{
        return { message: ADDRESS_IS_NOT_EXISTS }
    }
}

export default {
    byId
}
