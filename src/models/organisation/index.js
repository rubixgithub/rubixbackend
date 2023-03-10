import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../config";

const Organization = sequelize.define("tb_organization", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
    },
    logo: {
        type: Sequelize.STRING(45),
        allowNull: true
    },
    industry: {
        type: Sequelize.STRING(45),
        allowNull: true
    },
    countryId: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    stateTeritory: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: false
    },
    address1: {
        type: Sequelize.STRING(45),
        allowNull: true,
        unique: false
    },
    address2: {
        type: Sequelize.STRING(45),
        allowNull: true,
        unique: false
    },
    city: {
        type: Sequelize.STRING(45),
        allowNull: true
    },
    postalCode: {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    orgCurrency: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: false
    },
    fiscalYear: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: false
    },
    contactNo: {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    landlineNo: {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: true,
        unique: true,
        isEmail: true
    },
    status: {
        type: DataTypes.ENUM("pending", "completed"),
        defaultValue: "pending"
    }
});

export default Organization;
