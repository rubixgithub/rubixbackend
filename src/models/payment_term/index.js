import { Sequelize } from "sequelize";
import sequelize from "../../initializers";
const PaymentTerm = sequelize.define("tb_payment_term", {
    document_type: {
        type: Sequelize.BIGINT
    },
    term: {
        type: Sequelize.BIGINT
    },
    days: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
});

export default PaymentTerm;
