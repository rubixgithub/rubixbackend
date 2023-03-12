import { Sequelize } from "sequelize";
import sequelize from "../../initializers";
const Branch = sequelize.define("tb_branch", {
    name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
    },
    address1: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    address2: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    stateTeritory: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    city: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    postalCode: {
        type: Sequelize.BIGINT
    },
    primaryContact: {
        type: Sequelize.BIGINT
    },
    gstin: {
        type: Sequelize.BIGINT
    },
    docSeries: {
        type: Sequelize.BIGINT
    },
    warehouses: {
        type: Sequelize.BIGINT
    }
});

export default Branch;
