import sequelize from '../../../models'

const byId = async (id) => sequelize.models.userlog.destroy({
    where:{
        id
    }
})

export default {
    byId
}
