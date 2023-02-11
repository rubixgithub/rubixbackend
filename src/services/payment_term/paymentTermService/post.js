import sequelize from '../../../models'

const create = async (payment_term) => sequelize.models.payment_term.create(payment_term)

export default {
    create
}
