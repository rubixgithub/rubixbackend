import sequelize from '../../../models'

const byId = async (id) => sequelize.models.gistin.destroy({
    where:{
        id
    }
})

export default {
    byId
}
