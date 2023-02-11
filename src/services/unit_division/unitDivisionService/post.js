import sequelize from '../../../models'

const create = async (unit_division) => sequelize.models.unit_division.create(unit_division)

export default {
    create
}
