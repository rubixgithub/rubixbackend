import sequelize from '../../../models'

const all = async () => sequelize.models.branch.findAll()

const byId = async (id) => sequelize.models.branch.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.branch.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
