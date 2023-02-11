import sequelize from '../../../models'

const create = async (wearhouse) => sequelize.models.wearhouse.create(wearhouse)

export default {
    create
}
