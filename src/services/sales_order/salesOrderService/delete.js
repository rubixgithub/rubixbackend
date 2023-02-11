import sequelize from '../../../models'

const byId = async (id) => sequelize.models.sales_order.destroy({
    where:{
        id
    }
})

export default {
    byId
}
