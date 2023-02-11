import {
    getEmailService,
    postEmailService,
    deleteEmailService,
    putEmailService
} from '../../services/email'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    EMAIL_ALREADY_EXISTS,
    EMAIL_IS_DELETED,
    EMAIL_IS_NOT_EXISTS
} = constants

const getEmail = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getEmailService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getEmailById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getEmailService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createEmail = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body
        const emailExists = await getEmailService.byName(name);
        if(!emailExists) {
        const newEmail = await postEmailService.create({
            name,
            description
        })
        OK(CREATED, res, newEmail)
    }else{
        OK(ALREADY_EXISTS, res, {message: EMAIL_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteEmail = async (req, res) => {
    try {
        const emailDeleted = await deleteEmailService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? EMAIL_IS_DELETED : EMAIL_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateEmailById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateEmailById = await putEmailService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateEmailById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createEmail,
    getEmail,
    getEmailById,
    deleteEmail,
    updateEmailById
}
