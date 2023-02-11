import sequelize from '../../../models'

const all = async () => sequelize.models.userlog.findAll()

const byId = async (id) => sequelize.models.userlog.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.userlog.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
