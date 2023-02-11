import sequelize from '../../../models'

const create = async (branch) => sequelize.models.branch.create(branch)

export default {
    create
}
