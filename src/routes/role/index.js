import express from 'express'

import roleValidator from "../../validators/role";
import roleController from "../../controllers/role"
import auth from "../../middleware/auth"

const Role = express.Router()

export default Role

.get('/', roleController.getRole)

.post('/', [auth,roleValidator.createRole], roleController.createRole)

.get('/:id', roleController.getRoleById)

// .delete('/:id', roleValidator.deleteUser, roleController.deleteRole)

.put('/:id', roleValidator.updateRoleById, roleController.updateRoleById)
