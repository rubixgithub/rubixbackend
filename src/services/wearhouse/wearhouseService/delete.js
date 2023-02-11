import sequelize from '../../../models'

const byId = async (id) => sequelize.models.wearhouse.destroy({
    where:{
        id
    }
})

export default {
    byId
}
