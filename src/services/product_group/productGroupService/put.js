import sequelize from '../../../models'
import constants from '../../../constants'

const {
    ROLE_IS_UPDATED,
    ROLE_IS_NOT_EXISTS
} = constants

const byId = async (id, product_group) => {
    const result = await sequelize.models.product_group.update(product_group, {
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
