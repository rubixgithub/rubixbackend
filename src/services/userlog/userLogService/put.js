import sequelize from '../../../models'
import constants from '../../../constants'

const {
    LOG_IS_UPDATED,
    LOG_IS_NOT_EXISTS
} = constants

const byId = async (id, role) => {
    const result = await sequelize.models.userlog.update(role, {
        where: {
            id
        }
    })
    if(result && result.length && result[0]){
        return { message: LOG_IS_UPDATED }
    }else{
        return { message: LOG_IS_NOT_EXISTS }
    }
}

export default {
    byId
}
