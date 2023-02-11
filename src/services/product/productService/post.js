import sequelize from '../../../models'

const create = async (product) => sequelize.models.product.create(product)

export default {
    create
}
