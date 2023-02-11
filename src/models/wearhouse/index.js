import { Sequelize } from "sequelize";

const Wearhouse = {
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
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    email:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    phone:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    status:{
        type: Sequelize.BOOLEAN
    },
    is_primary:{
        type: Sequelize.BOOLEAN
    },
    is_active:{
        type: Sequelize.BOOLEAN
    }
}

export default Wearhouse
