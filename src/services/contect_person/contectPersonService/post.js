import sequelize from '../../../models'

const create = async (contect_person) => sequelize.models.contect_person.create(contect_person)

export default {
    create
}
