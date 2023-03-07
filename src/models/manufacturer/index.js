import { Sequelize } from "sequelize";
import sequelize from "../../config";

const Manufacturer = sequelize.define(
  "manufacturer",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(45),
      allowNull: false,
      unique: true,
    },
   
  },
);

export default Manufacturer;
