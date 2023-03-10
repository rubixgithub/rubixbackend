import sequelize from '../../../models'
import constants from '../../../constants'

const {
    USER_IS_UPDATED,
    USER_IS_NOT_EXISTS
} = constants

const byId = async (id, role) => {
    const result = await sequelize.models.access.update(role, {
        where: {
            id
        }
    })
    if(result && result.length && result[0]){
        return { message: USER_IS_UPDATED }
    }else{
        return { message: USER_IS_NOT_EXISTS }
    }
}

export default {
    byId
}
