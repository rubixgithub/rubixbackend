import { Sequelize } from "sequelize";
import ProductGroup from "../product_group";
import sequelize from "../../config";
import UnitOfMeasureMent from "../unit_of_measurement";
import Manufacturer from "../manufacturer";

const Product = sequelize.define("product", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    product_code: {
        type: Sequelize.BIGINT
    },
    is_goods: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    is_service: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    product_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    product_description: {
        type: Sequelize.STRING(90),
        allowNull: false,
        max: 45
    },
    hsn_code: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    dimension_h: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    dimension_w: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    dimension_l: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    weight: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    brand_id: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    mpn: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    upc: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    isbn: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    ean: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    sales_price: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    min_sales_price: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    tax_rate: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    min_quanity_for_sale: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    cost_of_product: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    },
    shelf_time: {
        type: Sequelize.STRING(45),
        allowNull: true,
        max: 45
    }
});

export default Product;

ProductGroup.hasMany(Product, {
    foreignKey: "product_group_id",
    as: "Products"
});

Product.belongsTo(ProductGroup, {
    foreignKey: "product_group_id",
    as: "ProductGroup"
});

UnitOfMeasureMent.hasMany(Product, {
    foreignKey: "unit_of_measurement_id",
    as: "Products"
});

Product.belongsTo(UnitOfMeasureMent, {
    foreignKey: "unit_of_measurement_id",
    as: "UnitOfMeasureMent"
});

Manufacturer.hasMany(Product, {
    foreignKey: "manufacturer_id",
    as: "Products"
});

Product.belongsTo(Manufacturer, {
    foreignKey: "manufacturer_id",
    as: "Manufacturer"
});
