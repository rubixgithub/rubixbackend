import sequelize from '../../../models'

const all = async () => sequelize.models.unit_division.findAll()

const byId = async (id) => sequelize.models.unit_division.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.unit_division.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
