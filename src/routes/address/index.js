import express from "express";

import addressController from "../../controllers/address";

const Address = express.Router();

Address.get("/", addressController.getAddress);

Address.post("/", addressController.createAddress);

Address.get("/:id", addressController.getAddressById);

// .delete('/:id', addressValidator.deleteUser, addressController.deleteaddress)

Address.put("/:id", addressController.updateAddressById);

export default Address;
