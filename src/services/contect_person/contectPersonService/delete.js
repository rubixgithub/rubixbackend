import sequelize from '../../../models'

const byId = async (id) => sequelize.models.contect_person.destroy({
    where:{
        id
    }
})

export default {
    byId
}
