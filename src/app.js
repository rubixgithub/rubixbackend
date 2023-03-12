import express from "express";
import cors from "cors";
import config from "./config";
import sequelize from "./models";
import routes from "./routes/index";
const app = express();
const PORT = process.env.PORT || config.server.port;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

routes(app);

sequelize.sync();

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);

module.exports = app;
