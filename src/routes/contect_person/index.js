import express from 'express'

import contectPersonValidator from "../../validators/contect_person";
import contectPersonController from "../../controllers/contect_person"
import auth from "../../middleware/auth"

const ContectPerson = express.Router()

export default ContectPerson

.get('/', contectPersonController.getContectPerson)

.post('/', [auth,contectPersonValidator.createContectPerson], contectPersonController.createContectPerson)

.get('/:id', contectPersonController.getContectPerson)

.delete('/:id', contectPersonValidator.deleteContectPerson, contectPersonController.deleteContectPerson)

.put('/:id', contectPersonValidator.updateContectPersonById, contectPersonController.updateContectPersonById)
