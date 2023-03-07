import express from 'express'

import businessPartenerTypeValidator from "../../validators/business_partener_type";
import businessPartenerTypeController from "../../controllers/business_partener_type"
import auth from "../../middleware/auth"

const BusinessPartnerType = express.Router()

export default BusinessPartnerType

.get('/', businessPartenerTypeController.getBusinessPartenerType)

.post('/', [auth,businessPartenerTypeValidator.createBusinessPartenerType], businessPartenerTypeController.createBusinessPartenerType)

.get('/:id', businessPartenerTypeController.getBusinessPartenerType)

// .delete('/:id', businessPartenerTypeValidator.deleteUser, businessPartenerTypeController.deleteBusinessPartenerType)

// .put('/:id', businessPartenerTypeValidator.updateRoleById, businessPartenerTypeController.updateBusinessPartenerTypeById)
