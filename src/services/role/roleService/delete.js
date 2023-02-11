import sequelize from '../../../models'

const byId = async (id) => sequelize.models.role.destroy({
    where:{
        id
    }
})

export default {
    byId
}
