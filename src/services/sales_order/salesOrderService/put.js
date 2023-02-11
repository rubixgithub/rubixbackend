import sequelize from '../../../models'
import constants from '../../../constants'

const {
    ROLE_IS_UPDATED,
    ROLE_IS_NOT_EXISTS
} = constants

const byId = async (id, sales_order) => {
    const result = await sequelize.models.sales_order.update(sales_order, {
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
