import sequelize from '../../../models'

const create = async (business_partner) => sequelize.models.business_partner.create(business_partner)

export default {
    create
}
