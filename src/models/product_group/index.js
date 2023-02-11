import { Sequelize } from "sequelize";

const ProductGroup = {
    group_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true
    },
    group_basis: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
}

export default ProductGroup
