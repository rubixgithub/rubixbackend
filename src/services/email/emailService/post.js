import sequelize from '../../../models'

const create = async (organisation) =>  sequelize.models.email.create(organisation)

export default {
    create
}
