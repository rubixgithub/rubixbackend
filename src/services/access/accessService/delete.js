import sequelize from '../../../models'

const byId = async (id) => sequelize.models.access.destroy({
    where:{
        id
    }
})

export default {
    byId
}
