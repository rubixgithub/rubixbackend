import { Sequelize } from "sequelize";
import sequelize from "../../initializers";

const BusinessPartnerType = sequelize.define('tb_business_partner_type',{
    partnerCode:  {
        type: Sequelize.BIGINT
    },
    partnerType: {
        type: Sequelize.BIGINT
    }
})

export default BusinessPartnerType
