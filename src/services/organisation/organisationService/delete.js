import sequelize from '../../../models'

const byId = async (id) => sequelize.models.organisation.destroy({
    where:{
        id
    }
})

export default {
    byId
}
