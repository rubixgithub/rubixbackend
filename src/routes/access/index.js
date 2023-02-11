import express from 'express'
import accessController from '../../controllers/access'
import accessValidator from '../../validators/access'

const Access = express.Router()

export default Access

.get('/', accessController.getAccess)

.post('/', accessValidator.createAccess, accessController.createAccess)

.get('/:id', accessValidator.getAccess)

.delete('/:id', accessValidator.deleteAccess, accessController.deleteAccess)

.put('/:id', accessValidator.updateAccessById, accessController.updateAccessById)
