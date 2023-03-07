import { Sequelize } from "sequelize";

const BusinessPartner = {
    partner_company_name: {
        type: Sequelize.BIGINT
    },
    partner_contact_person:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    contact_number:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    email_id:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    address_1:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    address_2:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    city:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    country:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    website:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    bank_name:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    bank_branch:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    bank_account_no:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    ifsc_code:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    swift_code:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    ad_code:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    submission_branch:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    bank_address:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
}

export default BusinessPartner
