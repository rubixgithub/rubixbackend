import sequelize from '../../../models'

const create = async (document_type) => sequelize.models.document_type.create(document_type)

export default {
    create
}
