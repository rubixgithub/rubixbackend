import sequelize from '../../../models'

const create = async (role) => sequelize.models.role.create(role)

export default {
    create
}
