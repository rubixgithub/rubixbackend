import sequelize from '../../../models'

const all = async () => sequelize.models.email.findAll()

const byId = async (id) => sequelize.models.email.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.email.findOne({
    where:{
        name
    }
})

const byIdAndLang = async (id,lang) => sequelize.models.email.findOne({
    where:{
        id,
        lang
    }
})

export default {
    all,
    byId,
    byName,
    byIdAndLang
}
