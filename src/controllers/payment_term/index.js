import {
    getPaymentTermService,
    postPaymentTermService,
    deletePaymentTermService,
    putPaymentTermService
} from '../../services/PaymentTerm'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    PAYMENTTERM_ALREADY_EXISTS,
    PAYMENTTERM_IS_DELETED,
    PAYMENTTERM_IS_NOT_EXISTS
} = constants

const getPaymentTerm = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getPaymentTermService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getPaymentTermById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getPaymentTermService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createPaymentTerm = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body
        const paymentTermExists = await getPaymentTermService.byName(name);
        if(!paymentTermExists) {
        const newPaymentTerm = await postPaymentTermService.create({
            name,
            description
        })
        OK(CREATED, res, newPaymentTerm)
    }else{
        OK(ALREADY_EXISTS, res, {message: PAYMENTTERM_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deletePaymentTerm = async (req, res) => {
    try {
        const paymentTermDeleted = await deletePaymentTermService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? PAYMENTTERM_IS_DELETED : PAYMENTTERM_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updatePaymentTermById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updatePaymentTermById = await putPaymentTermService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updatePaymentTermById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createPaymentTerm,
    getPaymentTerm,
    getPaymentTermById,
    deletePaymentTerm,
    updatePaymentTermById
}
