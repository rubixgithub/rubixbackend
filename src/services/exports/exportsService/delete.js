import sequelize from '../../../models'

const byId = async (id) => sequelize.models.exports.destroy({
    where:{
        id
    }
})

export default {
    byId
}
