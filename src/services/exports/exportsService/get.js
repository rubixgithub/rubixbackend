import sequelize from '../../../models'

const all = async () => sequelize.models.exports.findAll()

const byId = async (id) => sequelize.models.exports.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.exports.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
