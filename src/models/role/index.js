import { Sequelize } from "sequelize";

const Role = {
    name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    description: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
}

export default Role
