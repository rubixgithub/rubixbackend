import sequelize from '../../../models'

const byId = async (id) => sequelize.models.business_partener_type.destroy({
    where:{
        id
    }
})

export default {
    byId
}
