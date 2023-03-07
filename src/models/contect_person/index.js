import { Sequelize } from "sequelize";

const ContectPerson = {
    salutation: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    first_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45,
        unique:true
    },
    last_name:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    email:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    work_phone:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    mobile:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    is_primary:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    }
}

export default ContectPerson
