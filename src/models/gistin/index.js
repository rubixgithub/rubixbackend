import { Sequelize } from "sequelize";
import sequelize from "../../config";

const Gistin = sequelize.define("tb_gistin", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    gistinNo: {
        type: Sequelize.BIGINT
    },
    gstinState: {
        type: Sequelize.STRING(45)
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
    gstRegisteredOn: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

export default Gistin;
