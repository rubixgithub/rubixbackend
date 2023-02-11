import sequelize from '../../../models'

const byId = async (id) => sequelize.models.email.destroy({
    where:{
        id
    }
})

export default {
    byId
}
