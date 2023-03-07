import express from 'express'

import branchValidator from "../../validators/branch";
import branchController from "../../controllers/branch"
import auth from "../../middleware/auth"

const branch = express.Router()

export default branch

.get('/', branchController.getBranch)

.post('/', [auth,branchValidator.createBranch], branchController.createBranch)

.get('/:id', branchController.getBranchById)

// .delete('/:id', branchValidator.deleteUser, branchController.deleteBranch)

.put('/:id', branchValidator.updateBranchById, branchController.updateBranchById)
