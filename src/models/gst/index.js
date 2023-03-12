import { Sequelize } from "sequelize";
import sequelize from "../../initializers";
const Gst = sequelize.define("tb_gst", {
    isGstRegistered: {
        type: Sequelize.BIGINT
    },
    gstin: {
        type: Sequelize.BIGINT
    },
    businessLegalName: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    businessTradeName: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    gstRegesteredOn: {
        type: Sequelize.DATE
    }
});

export default Gst;
