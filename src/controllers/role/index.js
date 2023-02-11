import {
    getRoleService,
    postRoleService,
    deleteRoleService,
    putRoleService
} from '../../services/role'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    ROLE_ALREADY_EXISTS,
    ROLE_IS_DELETED,
    ROLE_IS_NOT_EXISTS
} = constants

const getRole = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getRoleService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getRoleById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getRoleService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createRole = async (req, res) => {
    try {
        console.log("nfjdjfjdhfj")
        const {
            name,
            description
        } = req.body
        const roleExists = await getRoleService.byName(name);
        if(!roleExists) {
        const newRole = await postRoleService.create({
            name,
            description
        })
        OK(CREATED, res, newRole)
    }else{
        OK(ALREADY_EXISTS, res, {message: ROLE_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteRole = async (req, res) => {
    try {
        const roleDeleted = await deleteRoleService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? ROLE_IS_DELETED : ROLE_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateRoleById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateRoleById = await putRoleService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateRoleById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createRole,
    getRole,
    getRoleById,
    deleteRole,
    updateRoleById
}
