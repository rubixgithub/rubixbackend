import sequelize from '../../../models'

const create = async (customer) => sequelize.models.customer.create(customer)

export default {
    create
}
