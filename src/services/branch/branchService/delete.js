import sequelize from '../../../models'

const byId = async (id) => sequelize.models.branch.destroy({
    where:{
        id
    }
})

export default {
    byId
}
