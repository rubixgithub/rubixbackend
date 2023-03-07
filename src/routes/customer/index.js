import express from "express";

import customerController from "../../controllers/customer";

const Customer = express.Router();

Customer.get("/", customerController.getCustomer);

Customer.post("/", customerController.createCustomer);

Customer.get("/:id", customerController.getCustomerById);

// .delete('/:id', roleValidator.deleteUser, roleController.deleteRole)

Customer.put("/:id", customerController.updateCustomerById);

export default Customer;
