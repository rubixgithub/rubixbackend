import { Sequelize } from "sequelize";

const Gst = {
    is_gst_registered: {
        type: Sequelize.BIGINT
    },
    gstin: {
        type: Sequelize.BIGINT
    },
    business_legal_name:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    business_trade_name:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    GST_regestered_on:{
        type: Sequelize.DATE	
    },
}

export default Gst
