import sequelize from '../../../models'

const all = async () => sequelize.models.address.findAll()

const byId = async (id) => sequelize.models.address.findOne({
    where:{
        id
    }
})

const byAttention = async (attention) => sequelize.models.address.findOne({
    where:{
        attention
    }
})

export default {
    all,
    byId,
    byAttention,
}
