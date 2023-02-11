import sequelize from '../../../models'

const create = async (business_partener_type) => sequelize.models.business_partener_type.create(business_partener_type)

export default {
    create
}
