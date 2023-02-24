import User from "./user";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";
import Access from "./access";
import Role from "./role";
import Organisation from "./organisation";
import Address from "./address";
import Branch from "./branch";
import BusinessPartnerType from "./business_partener_type";
import ContectPerson from "./contect_person";
import UnitOfMeasurement from "./unit_of_measurement";
import Manufacturer from "./manufacturer";
import ProductGroup from "./product_group";

const routes = (app) => {
  app.use("/users", User);
  app.use("/role", Role);
  app.use("/access", Access);
  app.use("/organisation", Organisation);
  app.use("/address", Address);
  app.use("/branch", Branch);
  app.use("/businessPartnerType", BusinessPartnerType);
  app.use("/contectPerson", ContectPerson);
  app.use("/unit-of-measurement", UnitOfMeasurement);
  app.use("/manufacturer", Manufacturer);
  app.use("/product-group", ProductGroup);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default routes;
