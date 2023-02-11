import express from 'express'
import userController from '../../controllers/user'
import userValidator from '../../validators/user'
import auth from '../../middleware/auth'

const User = express.Router()

export default User

.get('/',userController.getUsers)

.post('/', userValidator.createUser, userController.createUser)

.get('/:id', userController.getUserById)

.delete('/:id', userValidator.deleteUser, userController.deleteUser)

.put('/:id', userValidator.updateUserById, userController.updateUserById)

.post('/login',userValidator.logingUser,userController.loginUser)

.post('/forgotPassword',userController.forgotPassword)

.post('/roles',auth,userController.addRemoveRoles)