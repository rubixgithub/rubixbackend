import { Sequelize } from "sequelize";
import sequelize from "../../initializers";

const ProductGroup = sequelize.define("tb_product_group", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    group_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
    },
    group_basis: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
});

export default ProductGroup;
