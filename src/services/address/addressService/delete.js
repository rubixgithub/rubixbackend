import sequelize from '../../../models'

const byId = async (id) => sequelize.models.address.destroy({
    where:{
        id
    }
})

export default {
    byId
}
