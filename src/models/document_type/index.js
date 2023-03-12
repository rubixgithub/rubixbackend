import { Sequelize } from "sequelize";
import sequelize from "../../initializers";
const DocumentType = sequelize.define("tb_document_type", {
    docType: {
        type: Sequelize.BIGINT
    },
    description: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
});

export default DocumentType;
