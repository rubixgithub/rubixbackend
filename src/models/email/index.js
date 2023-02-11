import { Sequelize } from "sequelize";

const Email = {
    temp_id: {
        type: Sequelize.BIGINT
    },
    slug_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    lang:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    internal_name:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    templ_name:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    status:{
        type: Sequelize.BIGINT
    },
    content:{
        type: Sequelize.STRING(1000),
        allowNull: false,
        max: 45
    }
}

export default Email
