import sequelize from '../../../models'

const create = async (product_list) => sequelize.models.product_list.create(product_list)

export default {
    create
}
