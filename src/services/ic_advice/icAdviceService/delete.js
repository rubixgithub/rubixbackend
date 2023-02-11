import sequelize from '../../../models'

const byId = async (id) => sequelize.models.ic_advice.destroy({
    where:{
        id
    }
})

export default {
    byId
}
