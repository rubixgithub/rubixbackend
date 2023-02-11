import sequelize from '../../../models'

const all = async () => sequelize.models.role.findAll()

const byId = async (id) => sequelize.models.role.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.role.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
