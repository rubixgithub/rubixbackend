import sequelize from '../../../models'

const byId = async (id) => sequelize.models.product_list.destroy({
    where:{
        id
    }
})

export default {
    byId
}
