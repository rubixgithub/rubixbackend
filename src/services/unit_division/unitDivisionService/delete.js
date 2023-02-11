import sequelize from '../../../models'

const byId = async (id) => sequelize.models.unit_division.destroy({
    where:{
        id
    }
})

export default {
    byId
}
