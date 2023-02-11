import sequelize from '../../../models'

const byId = async (id) => sequelize.models.product_group.destroy({
    where:{
        id
    }
})

export default {
    byId
}
