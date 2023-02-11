import {
    getAccessService,
    postAccessService,
    deleteAccessService,
    putAccessService
} from '../../services/access'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    ACCESS_ALREADY_EXISTS,
    ACCESS_IS_DELETED,
    ACCESS_IS_NOT_EXISTS
} = constants

const getAccess = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getAccessService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getAccessById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getAccessService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createAccess = async (req, res) => {
    try {
        const {
            name,
            view,
            create,
            edit,
            isdelete
        } = req.body
        const accessExists = await getRoleService.byName(name)
        if(!accessExists) {
            const newAccess = await postAccessService.create({
                name,
                view,
                create,
                edit,
                isdelete
            })
            OK(CREATED, res, newAccess)
        }else{
            OK(ALREADY_EXISTS, res, {message: ACCESS_ALREADY_EXISTS})
        }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteAccess = async (req, res) => {
    try {
        const accessDeleted = await deleteAccessService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? ACCESS_IS_DELETED : ACCESS_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateAccessById = async (req, res) => {
    try {
        const {
            name,
            view,
            create,
            edit,
            isdelete
        } = req.body
        const updateAccessById = await putAccessService.byId(req.params.id, {
            name,
            view,
            create,
            edit,
            isdelete
        })
        OK(SUCCESS, res, updateAccessById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createAccess,
    getAccess,
    getAccessById,
    deleteAccess,
    updateAccessById
}
