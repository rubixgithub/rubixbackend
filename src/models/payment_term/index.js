import { Sequelize } from "sequelize";

const PaymentTerm = {
    document_type: {
        type: Sequelize.BIGINT
    },
    term: {
        type: Sequelize.BIGINT
    },
    days:{
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
}

export default PaymentTerm
