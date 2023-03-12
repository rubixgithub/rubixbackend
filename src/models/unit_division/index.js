import { Sequelize } from "sequelize";
import sequelize from "../../initializers";
const UnitDivision = sequelize.define("tb_unit_division", {
    name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
    },
    address: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    gstin: {
        type: Sequelize.BIGINT
    },
    registeredName: {
        type: Sequelize.BIGINT
    },
    currency: {
        type: Sequelize.BIGINT
    },
    departmentId: {
        type: Sequelize.BIGINT
    }
});

export default UnitDivision;
