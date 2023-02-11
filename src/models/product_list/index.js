import { Sequelize } from "sequelize";

const ProductList = {
    contract_id: {
        type: Sequelize.BIGINT
    },
    product_id: {
        type: Sequelize.BIGINT
    },
    customer_product_detials:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    quantity:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    unit_of_measurement:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    price:{
        type: Sequelize.BIGINT
    },
    packing_code:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    one_pack_quantity:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    gross_weight:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    storage_location:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    pss:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    shipping_mark_i:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
}

export default ProductList
