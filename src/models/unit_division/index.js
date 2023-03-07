import { Sequelize } from "sequelize";

const UnitDivision = {
    name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    address: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    gstin:{
        type: Sequelize.BIGINT
    },
    registered_name:{
        type: Sequelize.BIGINT
    },
    currency:{
        type: Sequelize.BIGINT
    },
    department_id:{
        type: Sequelize.BIGINT
    }
}

export default UnitDivision
