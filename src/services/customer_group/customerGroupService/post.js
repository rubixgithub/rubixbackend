import sequelize from '../../../models'

const create = async (customer_group) => sequelize.models.customer_group.create(customer_group)

export default {
    create
}
