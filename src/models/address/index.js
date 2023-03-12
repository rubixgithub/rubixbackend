import { Sequelize } from "sequelize";
import sequelize from "../../initializers";

const Address = sequelize.define("tb_address", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  attention: {
    type: Sequelize.STRING(45),
    allowNull: false,
    unique: true,
  },
  country: {
    type: Sequelize.STRING(45),
    allowNull: false,
    max: 45,
  },
  address1: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  address2: {
    type: Sequelize.STRING(45),
    allowNull: true,
  },
  city: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  postalCode: {
    type: Sequelize.INTEGER(),
    allowNull: false,
  },
  phone: {
    type: Sequelize.BIGINT(),
    allowNull: false,
    unique: true,
  },
});

export default Address;
