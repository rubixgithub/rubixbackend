import {
    getSalesOrderService,
    postSalesOrderService,
    deleteSalesOrderService,
    putSalesOrderService
} from '../../services/SalesOrder'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    SALESORDER_ALREADY_EXISTS,
    SALESORDER_IS_DELETED,
    SALESORDER_IS_NOT_EXISTS
} = constants

const getSalesOrder = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getSalesOrderService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getSalesOrderById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getSalesOrderService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createSalesOrder = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body
        const salesOrderExists = await getSalesOrderService.byName(name);
        if(!salesOrderExists) {
        const newSalesOrder = await postSalesOrderService.create({
            name,
            description
        })
        OK(CREATED, res, newSalesOrder)
    }else{
        OK(ALREADY_EXISTS, res, {message: SALESORDER_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteSalesOrder = async (req, res) => {
    try {
        const salesOrderDeleted = await deleteSalesOrderService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? SALESORDER_IS_DELETED : SALESORDER_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateSalesOrderById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateSalesOrderById = await putSalesOrderService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateSalesOrderById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createSalesOrder,
    getSalesOrder,
    getSalesOrderById,
    deleteSalesOrder,
    updateSalesOrderById
}
