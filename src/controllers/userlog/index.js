import {
    getUserLogService,
    postUserLogService,
    deleteUserLogService,
    putUserLogService
} from '../../services/UserLog'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    USERLOG_ALREADY_EXISTS,
    USERLOG_IS_DELETED,
    USERLOG_IS_NOT_EXISTS
} = constants

const getUserLog = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getUserLogService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getUserLogById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getUserLogService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createUserLog = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body
        const userLogExists = await getUserLogService.byName(name);
        if(!userLogExists) {
        const newUserLog = await postUserLogService.create({
            name,
            description
        })
        OK(CREATED, res, newUserLog)
    }else{
        OK(ALREADY_EXISTS, res, {message: USERLOG_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteUserLog = async (req, res) => {
    try {
        const userLogDeleted = await deleteUserLogService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? USERLOG_IS_DELETED : USERLOG_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateUserLogById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateUserLogById = await putUserLogService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateUserLogById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createUserLog,
    getUserLog,
    getUserLogById,
    deleteUserLog,
    updateUserLogById
}
