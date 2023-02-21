import express from 'express'

import addressValidator from "../../validators/address";
import addressController from "../../controllers/address"
import auth from "../../middleware/auth"

const Address = express.Router()

export default Address

.get('/',addressController.getAddress)

.post('/', [auth,addressValidator.createAddress], addressController.createAddress)

.get('/:id', addressController.getAddressById)

// .delete('/:id', addressValidator.deleteUser, addressController.deleteaddress)

.put('/:id', addressValidator.updateAddressById, addressController.updateAddressById)
