import sequelize from '../../../models'

const byId = async (id) => sequelize.models.business_partner.destroy({
    where:{
        id
    }
})

export default {
    byId
}
