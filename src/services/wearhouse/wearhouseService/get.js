import sequelize from '../../../models'

const all = async () => sequelize.models.wearhouse.findAll()

const byId = async (id) => sequelize.models.role.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.wearhouse.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
