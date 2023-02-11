import { Sequelize } from "sequelize";

const SalesOrder = {
    po_number: {
        type: Sequelize.BIGINT
    },
    po_date: {
        type: Sequelize.BIGINT
    },
    so_number:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    export_contract_id:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    product_list:{
        type: Sequelize.BIGINT
    },
    pricing_list:{
        type: Sequelize.BIGINT
    },
    export_route:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    column_10:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
}

export default SalesOrder
