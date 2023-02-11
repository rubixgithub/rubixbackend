import { Sequelize } from "sequelize";

const Customer = {
    customer_code: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    customer_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    contact_salutation: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    contact_first_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    contact_last_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    designation: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    department: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    phone: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    tax_identifier: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    enable_access: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    created_by: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    contract_type: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    contract_policy_id: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
}

export default Customer
