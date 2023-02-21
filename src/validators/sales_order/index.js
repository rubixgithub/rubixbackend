import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_PO_DATE,
    MINIMUM_LENGTH_FOR_PO_DATE,
    MAXIMUM_LENGTH_FOR_SO_NUMBER,
    MINIMUM_LENGTH_FOR_SO_NUMBER,
    MAXIMUM_LENGTH_FOR_EXPORT_CONTRACTID,
    MINIMUM_LENGTH_FOR_EXPORT_CONTRACTID,
    MAXIMUM_LENGTH_FOR_EXPORT_ROUTE,
    MINIMUM_LENGTH_FOR_EXPORT_ROUTE,
    MAXIMUM_LENGTH_FOR_COLUMN_10,
    MINIMUM_LENGTH_FOR_COLUMN_10
} = constants

import { throwError } from '../../util/helper'

const createSalesOrder = async (req, res, next) => {
    const schema = Joi.object({
        po_number: Joi.number()
            .required(),
        po_date: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PO_DATE)
            .max(MAXIMUM_LENGTH_FOR_PO_DATE)
            .required(),
        so_number:Joi.string()
            .min(MINIMUM_LENGTH_FOR_SO_NUMBER)
            .max(MAXIMUM_LENGTH_FOR_SO_NUMBER)
            .required(),
        export_contract_id:Joi.string()
            .min(MINIMUM_LENGTH_FOR_EXPORT_CONTRACTID)
            .max(MAXIMUM_LENGTH_FOR_EXPORT_CONTRACTID)
            .required(),
        product_list:Joi.number()
            .required(),
        pricing_list:Joi.number()
            .required(),
        export_route:Joi.string()
            .min(MINIMUM_LENGTH_FOR_EXPORT_EXPORT_ROUTE)
            .max(MAXIMUM_LENGTH_FOR_EXPORT_EXPORT_ROUTE)
            .required(),
        column_10:Joi.string()
            .min(MINIMUM_LENGTH_FOR_COLUMN_10)
            .max(MAXIMUM_LENGTH_FOR_COLUMN_10)
            .required(),

        })
    const validate = schema.validate(req.body)

    if (validate && validate.error) {
        throwError(res, {
            error: validate.error
        })
    } else if (validate && validate.value) {
        await next()
    }
}

const deleteSalesOrder = async (req, res, next) => validateId(req, res, next)

const getSalesOrder = async (req, res, next) => validateId(req, res, next)


const updateSalesOrderById = async (req, res, next) => {
    const schema = Joi.object({
        po_number: Joi.number(),
        po_date: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PO_DATE)
            .max(MAXIMUM_LENGTH_FOR_PO_DATE),
        so_number:Joi.string()
            .min(MINIMUM_LENGTH_FOR_SO_NUMBER)
            .max(MAXIMUM_LENGTH_FOR_SO_NUMBER),
        export_contract_id:Joi.string()
            .min(MINIMUM_LENGTH_FOR_EXPORT_CONTRACTID)
            .max(MAXIMUM_LENGTH_FOR_EXPORT_CONTRACTID),
        product_list:Joi.number(),
        pricing_list:Joi.number(),
        export_route:Joi.string()
            .min(MINIMUM_LENGTH_FOR_EXPORT_ROUTE)
            .max(MAXIMUM_LENGTH_FOR_EXPORT_ROUTE),
        column_10:Joi.string()
            .min(MINIMUM_LENGTH_FOR_COLUMN_10)
            .max(MAXIMUM_LENGTH_FOR_COLUMN_10),

        })

    const validate = schema.validate(req.body)

    if (validate && validate.error) {
        throwError(res, {
            error: validate.error
        })
    } else if (validate && validate.value) {
        await validateId(req, res, next)
    }
}

const validateId = async (req , res, next) => {
    const validateParams = Joi.number().required().validate(req.params.id)

    if (validateParams && validateParams.error) {
        throwError(res, {
            error: validateParams.error
        })
    } 
    
    else if (validateParams && validateParams.value) {
        await next()
    }
}

export default {
    createSalesOrder,
    deleteSalesOrder,
    updateSalesOrderById,
    getSalesOrder
}
