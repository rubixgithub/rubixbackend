import User from "./user";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";
import Access from "./access";
import Role from "./role";
import Organisation from "./organisation";
import CustomerGroup from "./customer_group";
import Address from "./address";
import Gistin from "./gistin";
import ContactPerson from "./contect_person";
import Customer from "./customer";

const routes = (app) => {
  app.use("/users", User);
  app.use("/role", Role);
  app.use("/access", Access);
  app.use("/organisation", Organisation);
  app.use("/customer-group", CustomerGroup);
  app.use("/address", Address);
  app.use("/gistin", Gistin);
  app.use("/contact-person", ContactPerson);
  app.use("/customer", Customer);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default routes;
