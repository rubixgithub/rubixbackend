import sequelize from '../../../models'

const all = async () => sequelize.models.ic_advice.findAll()

const byId = async (id) => sequelize.models.ic_advice.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.ic_advice.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
