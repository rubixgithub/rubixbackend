import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import sequelize from "./models";
import constants from "./constants";
import routes from "./routes/index";
const { DEV_SERVER_PORT } = constants;
dotenv.config({ path: `./${process.env.NODE_ENV}.env` });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

routes(app);

sequelize.sync();

app.listen(process.env.PORT || DEV_SERVER_PORT);

module.exports = app;
