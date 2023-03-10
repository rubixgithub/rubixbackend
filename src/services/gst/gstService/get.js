import sequelize from '../../../models'

const all = async () => sequelize.models.gst.findAll()

const byId = async (id) => sequelize.models.gst.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.gst.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
