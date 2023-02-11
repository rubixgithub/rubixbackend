import sequelize from '../../../models'

const create = async (address) => sequelize.models.address.create(address)

export default {
    create
}
