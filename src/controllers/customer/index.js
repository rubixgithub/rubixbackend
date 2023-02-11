import {
    getCustomerService,
    postCustomerService,
    deleteCustomerService,
    putCustomerService
} from '../../services/Customer'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    CUSTOMER_ALREADY_EXISTS,
    CUSTOMER_IS_DELETED,
    CUSTOMER_IS_NOT_EXISTS
} = constants

const getCustomer = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getCustomerService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getCustomerById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getCustomerService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createCustomer = async (req, res) => {
    try {
        console.log("nfjdjfjdhfj")
        const {
            name,
            description
        } = req.body
        const customerExists = await getCustomerService.byName(name);
        if(!customerExists) {
        const newCustomer = await postCustomerService.create({
            name,
            description
        })
        OK(CREATED, res, newCustomer)
    }else{
        OK(ALREADY_EXISTS, res, {message: CUSTOMER_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteCustomer = async (req, res) => {
    try {
        const customerDeleted = await deleteCustomerService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? CUSTOMER_IS_DELETED : CUSTOMER_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateCustomerById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateCustomerById = await putCustomerService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateCustomerById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createCustomer,
    getCustomer,
    getCustomerById,
    deleteCustomer,
    updateCustomerById
}
