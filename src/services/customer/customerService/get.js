import sequelize from '../../../models'

const all = async () => sequelize.models.customer.findAll()

const byId = async (id) => sequelize.models.customer.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.customer.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
