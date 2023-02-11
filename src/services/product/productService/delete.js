import sequelize from '../../../models'

const byId = async (id) => sequelize.models.product.destroy({
    where:{
        id
    }
})

export default {
    byId
}
