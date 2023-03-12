import { Sequelize } from "sequelize";
import sequelize from "../../initializers";

const Access = sequelize.define("tb_access", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
    },
    allowView: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    allowCreate: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    allowEdit: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    allowDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

export default Access;
