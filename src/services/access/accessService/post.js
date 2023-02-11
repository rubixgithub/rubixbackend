import access from '../../../controllers/access'
import sequelize from '../../../models'

const create = async (access) => sequelize.models.access.create(access)

export default {
    create
}
