import { Sequelize } from "sequelize";

const BusinessPartnerType = {
    partner_code:  {
        type: Sequelize.BIGINT
    },
    partner_type: {
        type: Sequelize.BIGINT
    }
}

export default BusinessPartnerType
