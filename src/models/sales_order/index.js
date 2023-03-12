import { Sequelize } from "sequelize";
import sequelize from "../../initializers";
const SalesOrder = sequelize.define("tb_sales_order", {
    poNumber: {
        type: Sequelize.BIGINT
    },
    poDate: {
        type: Sequelize.BIGINT
    },
    soNumber: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    exportContractId: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    productList: {
        type: Sequelize.BIGINT
    },
    pricingList: {
        type: Sequelize.BIGINT
    },
    exportRoute: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    column10: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
});

export default SalesOrder;
