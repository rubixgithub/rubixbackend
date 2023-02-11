import sequelize from '../../../models'

const all = async () => sequelize.models.document_type.findAll()

const byId = async (id) => sequelize.models.document_type.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.document_type.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
