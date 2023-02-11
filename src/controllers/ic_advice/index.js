import {
    getIcAdviceService,
    postIcAdviceService,
    deleteIcAdviceService,
    putIcAdviceService
} from '../../services/IcAdvice'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    ICADVICE_ALREADY_EXISTS,
    ICADVICE_IS_DELETED,
    ICADVICE_IS_NOT_EXISTS
} = constants

const getIcAdvice = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getIcAdviceService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getIcAdviceById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getIcAdviceService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createIcAdvice = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body
        const icAdviceExists = await getIcAdviceService.byName(name);
        if(!icAdviceExists) {
        const newIcAdvice = await postIcAdviceService.create({
            name,
            description
        })
        OK(CREATED, res, newIcAdvice)
    }else{
        OK(ALREADY_EXISTS, res, {message: ICADVICE_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteIcAdvice = async (req, res) => {
    try {
        const IcAdviceDeleted = await deleteIcAdviceService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? ICADVICE_IS_DELETED : ICADVICE_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateIcAdviceById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateIcAdviceById = await putIcAdviceService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateIcAdviceById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createIcAdvice,
    getIcAdvice,
    getIcAdviceById,
    deleteIcAdvice,
    updateIcAdviceById
}
