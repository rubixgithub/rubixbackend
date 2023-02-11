import sequelize from '../../../models'

const create = async (organisation) =>  sequelize.models.organisation.create(organisation)

export default {
    create
}
