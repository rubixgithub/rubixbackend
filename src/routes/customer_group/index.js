import express from "express";

import customerGroupController from "../../controllers/customer_group";

const CustomerGroup = express.Router();

CustomerGroup.get("/", customerGroupController.getCustomerGroup);

CustomerGroup.post("/", customerGroupController.createCustomerGroup);

CustomerGroup.get("/:id", customerGroupController.getCustomerGroupById);

//CustomerGroup.delete('/:id', roleValidator.deleteUser, roleController.deleteRole)

CustomerGroup.put("/:id", customerGroupController.updateCustomerGroupById);

export default CustomerGroup;
