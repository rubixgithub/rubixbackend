import sequelize from '../../../models'

const all = async () => sequelize.models.product_list.findAll()

const byId = async (id) => sequelize.models.product_list.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.product_list.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
