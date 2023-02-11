import sequelize from '../../../models'

const create = async (gistin) => sequelize.models.gistin.create(gistin)

export default {
    create
}
