import { Sequelize } from "sequelize";

const CustomerGroup = {
    gorup_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    group_description: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
}

export default CustomerGroup
