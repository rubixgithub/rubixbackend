import sequelize from '../../../models'

const all = async () => sequelize.models.access.findAll()

const byId = async (id) => sequelize.models.access.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.access.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName
}
