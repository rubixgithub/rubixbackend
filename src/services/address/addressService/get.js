import sequelize from '../../../models'

const all = async () => sequelize.models.address.findAll()

const byId = async (id) => sequelize.models.address.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.address.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
