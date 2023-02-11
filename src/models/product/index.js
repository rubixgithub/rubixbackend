import { Sequelize } from "sequelize";

const Product = {
    product_code:  {
        type: Sequelize.BIGINT
    },
    is_goods: {
        type: Sequelize.BIGINT
    },
    is_service:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    product_name:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    product_description:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    unit_of_measurement_id:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    hsn_code:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    dimension_h:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    dimension_w:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    dimension_l:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    weight:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    manufacturer_id:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    brand_id:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    mpn:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    upc:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    isbn:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    ean:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    sales_price:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    min_sales_price:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    product_group_id:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    tax_rate:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    min_quanity_for_sale:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    cost_of_product:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    shelf_time:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
}

export default Product
