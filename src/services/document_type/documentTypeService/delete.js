import sequelize from '../../../models'

const byId = async (id) => sequelize.models.document_type.destroy({
    where:{
        id
    }
})

export default {
    byId
}
