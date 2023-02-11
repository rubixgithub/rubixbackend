import sequelize from '../../../models'

const all = async () => sequelize.models.business_partener_type.findAll()

const byId = async (id) => sequelize.models.business_partener_type.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.business_partener_type.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
