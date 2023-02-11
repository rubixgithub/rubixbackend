import { Sequelize } from "sequelize";

const Branch = {
    name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    address_1: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    address_2:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    state_teritory:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    city:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    postal_code:{
        type: Sequelize.BIGINT
    },
    primary_contact:{
        type: Sequelize.BIGINT
    },
    gstin:{
        type: Sequelize.BIGINT
    },
    doc_series:{
        type: Sequelize.BIGINT
    },
    warehouses:{
        type: Sequelize.BIGINT
    }
}

export default Branch
