import { Sequelize } from "sequelize";

const Access = {
    name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    view: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    create: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    edit: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    isdelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}

export default Access
