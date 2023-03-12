import { Sequelize } from "sequelize";
import sequelize from "../../initializers";

const BusinessPartner = sequelize.define("tb_business_partner", {
    partnerCompanyName: {
        type: Sequelize.BIGINT
    },
    partnerContactPerson: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    contactNumber: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
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
    city: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    country: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    website: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    bankName: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    bankBranch: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    bankAccountNo: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    ifscCode: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    swiftCode: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    adCode: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    submissionBranch: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    bankAddress: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
});

export default BusinessPartner;
