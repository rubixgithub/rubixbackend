import Sequelize from "sequelize";
import config from "../config";

const sequelize = new Sequelize(
    config.db.name,
    config.db.username,
    config.db.password,
    {
        dialect: config.db.dialect,
        host: config.db.host
    }
);

export default sequelize;
