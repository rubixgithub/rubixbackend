import { Sequelize } from "sequelize";
import sequelize from "../../initializers";

const CustomerGroup = sequelize.define("tb_customer_group", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  group_name: {
    type: Sequelize.STRING(45),
    allowNull: false,
    max: 45,
  },
  group_description: {
    type: Sequelize.STRING(45),
    allowNull: false,
    max: 45,
  },
});

export default CustomerGroup;
