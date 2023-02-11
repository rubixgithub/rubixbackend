import sequelize from '../../../models'

const create = async (product_group) => sequelize.models.product_group.create(product_group)

export default {
    create
}
