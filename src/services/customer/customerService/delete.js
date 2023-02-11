import sequelize from '../../../models'

const byId = async (id) => sequelize.models.customer.destroy({
    where:{
        id
    }
})

export default {
    byId
}
