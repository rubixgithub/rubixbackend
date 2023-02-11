import { Sequelize } from "sequelize";

const Gistin = {
    gistin:  {
        type: Sequelize.BIGINT
    },
    state: {
        type: Sequelize.BIGINT
    },
    address:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
}

export default Gistin
