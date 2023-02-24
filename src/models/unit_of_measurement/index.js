import { ENUM, Sequelize, DataTypes } from "sequelize";
import sequelize from "../../config";

const UnitOfMeasureMent = sequelize.define(
  "unit_of_measurement",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    unit_name: {
      type: Sequelize.STRING(45),
      allowNull: false,
      unique: true,
    },
    unit_type: {
      type: Sequelize.ENUM("linear", "weight", "quantity", "currency"),
      allowNull: true,
      max: 45,
    },
    unit_description: {
      type: Sequelize.STRING(45),
      allowNull: false,
      max: 45,
    },
    unit_alias: {
      type: Sequelize.STRING(10),
      allowNull: true,
      max: 10,
    },
  },
);

export default UnitOfMeasureMent;
