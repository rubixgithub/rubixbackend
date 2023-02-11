import { Sequelize } from "sequelize";

const DocumentType = {
    doc_type: {
        type: Sequelize.BIGINT
    },
    description: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
}

export default DocumentType
