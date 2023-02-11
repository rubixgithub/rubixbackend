import sequelize from '../../../models'

const byId = async (id) => sequelize.models.customer_group.destroy({
    where:{
        id
    }
})

export default {
    byId
}
