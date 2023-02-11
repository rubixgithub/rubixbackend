import sequelize from '../../../models'

const all = async () => sequelize.models.organisation.findAll()

const byId = async (id) => sequelize.models.organisation.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.organisation.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName
}
