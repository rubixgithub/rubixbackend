import { Sequelize } from "sequelize";

const Organisation = {
    name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    logo: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    industry: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:false
    },
    country_id: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    state_teritory:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:false
    },
    address_1:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:false
    },
    address_2: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:false
    },
    city: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:false
    },
    postal_code: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    iec: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique:false
    },
    org_currency: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:false
    },
    inventory_start_date:{
        type: Sequelize.DATE,
        allowNull: false,
        unique:false
    },
    fiscal_year: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique:false
    },
    contact_no: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique:true
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique:true
    },
    default_org_flag: {
        type: Sequelize.BOOLEAN
    },
    is_gst:{
        type: Sequelize.BOOLEAN
    },
}

export default Organisation