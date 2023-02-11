import sequelize from '../../../models'

const create = async (logData) => sequelize.models.userlog.create(logData)

export default {
    create
}
