import { Sequelize } from "sequelize";

const User = {
    username: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true,
        isEmail: true,
        max: 45
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        max: 255,
        is: /^[0-9a-f]{64}$/i
    },
    language: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profile_picture: {
        type: Sequelize.STRING,
        allowNull: true
    },
    is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    role_id:{
        type: Sequelize.STRING,
        allowNull: true,
        max: 1000
    },
    permission_id:{
        type: Sequelize.STRING,
        allowNull: true,
        max: 1000
    }
}

export default User
