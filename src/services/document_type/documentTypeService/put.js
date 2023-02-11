import sequelize from '../../../models'
import constants from '../../../constants'

const {
    ROLE_IS_UPDATED,
    ROLE_IS_NOT_EXISTS
} = constants

const byId = async (id, document_type) => {
    const result = await sequelize.models.document_type.update(document_type, {
        where: {
            id
        }
    })
    if(result && result.length && result[0]){
        return { message: ROLE_IS_UPDATED }
    }else{
        return { message: ROLE_IS_NOT_EXISTS }
    }
}

export default {
    byId
}
