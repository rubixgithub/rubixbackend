import express from 'express'
import organisationController from '../../controllers/organisation'
import organisationValidator from '../../validators/organisation'
import auth from "../../middleware/auth"


const Organisation = express.Router()

export default Organisation

.get('/', auth,organisationController.getOrganisation)

.post('/', [auth,organisationValidator.createOrganisation], organisationController.createOrganisation)

.get('/:id', auth,organisationController.getOrganisation)

.delete('/:id', [auth,organisationValidator.deleteOrganisation], organisationController.deleteOrganisation)

.put('/:id', [auth,organisationValidator.updateOrganisationById], organisationController.updateOrganisationById)
