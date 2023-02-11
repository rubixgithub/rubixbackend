import sequelize from '../../../models'

const all = async () => sequelize.models.business_partner.findAll()

const byId = async (id) => sequelize.models.business_partner.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.business_partner.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
