import sequelize from '../../../models'

const all = async () => sequelize.models.product.findAll()

const byId = async (id) => sequelize.models.product.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.product.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
