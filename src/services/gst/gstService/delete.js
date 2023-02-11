import sequelize from '../../../models'

const byId = async (id) => sequelize.models.gst.destroy({
    where:{
        id
    }
})

export default {
    byId
}
