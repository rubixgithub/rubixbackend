import sequelize from '../../../models'

const all = async () => sequelize.models.sales_order.findAll()

const byId = async (id) => sequelize.models.sales_order.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.sales_order.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
