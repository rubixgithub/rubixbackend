import sequelize from '../../../models'

const all = async () => sequelize.models.contect_person.findAll()

const byId = async (id) => sequelize.models.contect_person.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.contect_person.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
