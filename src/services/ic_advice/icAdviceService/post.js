import sequelize from '../../../models'

const create = async (ic_advice) => sequelize.models.ic_advice.create(ic_advice)

export default {
    create
}
