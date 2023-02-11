import sequelize from '../../../models'

const byId = async (id) => sequelize.models.payment_term.destroy({
    where:{
        id
    }
})

export default {
    byId
}
