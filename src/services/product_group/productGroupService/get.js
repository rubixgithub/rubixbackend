import sequelize from '../../../models'

const all = async () => sequelize.models.product_group.findAll()

const byId = async (id) => sequelize.models.product_group.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.product_group.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
