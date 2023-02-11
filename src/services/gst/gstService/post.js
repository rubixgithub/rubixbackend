import sequelize from '../../../models'

const create = async (gst) => sequelize.models.gst.create(gst)

export default {
    create
}
