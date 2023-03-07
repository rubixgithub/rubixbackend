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
import Address from "./address";
import Branch from "./branch";
import BusinessPartnerType from "./business_partener_type";
import UnitOfMeasurement from "./unit_of_measurement";
import Manufacturer from "./manufacturer";
import ProductGroup from "./product_group";
import Product from "./product";

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
  app.use("/branch", Branch);
  app.use("/business-partner-type", BusinessPartnerType);
  app.use("/unit-of-measurement", UnitOfMeasurement);
  app.use("/manufacturer", Manufacturer);
  app.use("/product-group", ProductGroup);
  app.use("/product", Product);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default routes;
