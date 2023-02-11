import sequelize from '../../../models'

const create = async (sales_order) => sequelize.models.sales_order.create(sales_order)

export default {
    create
}
