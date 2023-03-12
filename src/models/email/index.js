import { Sequelize } from "sequelize";
import sequelize from "../../initializers";
const Email = sequelize.define("tb_email", {
    tempId: {
        type: Sequelize.BIGINT
    },
    slugName: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    lang: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    internalName: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    templName: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    status: {
        type: Sequelize.BIGINT
    },
    content: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        max: 45
    }
});

export default Email;
