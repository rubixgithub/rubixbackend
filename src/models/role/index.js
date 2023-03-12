import { Sequelize } from "sequelize";
import sequelize from "../../initializers";

const Role = sequelize.define("tb_role", {
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
    description: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
});

export default Role;
