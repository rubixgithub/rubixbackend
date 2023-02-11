import sequelize from '../../../models'

const all = async () => sequelize.models.payment_term.findAll()

const byId = async (id) => sequelize.models.payment_term.findOne({
    where:{
        id
    }
})

const byName = async (name) => sequelize.models.payment_term.findOne({
    where:{
        name
    }
})

export default {
    all,
    byId,
    byName,
}
