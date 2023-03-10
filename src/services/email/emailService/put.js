import sequelize from '../../../models'
import constants from '../../../constants'

const {
    ORGANISATION_IS_UPDATED,
    ORGANISATION_IS_NOT_EXISTS
} = constants

const byId = async (id, organisation) => {
    const result = await sequelize.models.email.update(organisation, {
        where: {
            id
        }
    })
    if(result && result.length && result[0]){
        return { message: ORGANISATION_IS_UPDATED }
    }else{
        return { message: ORGANISATION_IS_NOT_EXISTS }
    }
}

export default {
    byId
}
