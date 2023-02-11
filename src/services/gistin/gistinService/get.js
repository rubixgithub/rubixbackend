import sequelize from '../../../models'

const all = async () => sequelize.models.gistin.findAll()

const byId = async (id) => sequelize.models.gistin.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.gistin.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
