import { Sequelize } from "sequelize";
import sequelize from "../../config";
import Customer from "../customer";

const GistinDetail = sequelize.define("gistin_detail", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  gistin: {
    type: Sequelize.BIGINT,
  },
  state: {
    type: Sequelize.BIGINT,
  },
  address: {
    type: Sequelize.STRING(45),
    allowNull: false,
    max: 45,
  },
});

export default GistinDetail;


// Customer.hasOne(GistinDetail);

// GistinDetail.belongsTo(Customer);
