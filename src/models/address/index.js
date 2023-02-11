import { Sequelize } from "sequelize";

const Address = {
    attention: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    country: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    address_1:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    address_2:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    city:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    state:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    postal_code:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    phone:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    }
}

export default Address
