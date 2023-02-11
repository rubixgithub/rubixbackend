import sequelize from '../../../models'

const all = async () => sequelize.models.customer_group.findAll()

const byId = async (id) => sequelize.models.customer_group.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.customer_group.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
