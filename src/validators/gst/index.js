import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_BUSINESS_LEGAL_NAME,
    MINIMUM_LENGTH_FOR_BUSINESS_LEGAL_NAME,
    MAXIMUM_LENGTH_FOR_BUSINESS_TRADE_NAME,
    MINIMUM_LENGTH_FOR_BUSINESS_TRADE_NAME,
} = constants

import { throwError } from '../../util/helper'

const createGst = async (req, res, next) => {
    const schema = Joi.object({
        is_gst_registered: Joi.number()
            .required(),
        gstin: Joi.number()
            .required(),
        business_legal_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BUSINESS_LEGAL_NAME)
            .max(MAXIMUM_LENGTH_FOR_BUSINESS_LEGAL_NAME)
            .required(),
        business_trade_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BUSINESS_TRADE_NAME)
            .max(MAXIMUM_LENGTH_FOR_BUSINESS_TRADE_NAME)
            .required(),
        GST_regestered_on: Joi.date()
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

const deleteGst = async (req, res, next) => validateId(req, res, next)

const getGst = async (req, res, next) => validateId(req, res, next)


const updateGstById = async (req, res, next) => {
    const schema = Joi.object({
        is_gst_registered: Joi.number(),
        gstin: Joi.number(),
        business_legal_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BUSINESS_LEGAL_NAME)
            .max(MAXIMUM_LENGTH_FOR_BUSINESS_LEGAL_NAME),
        business_trade_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BUSINESS_TRADE_NAME)
            .max(MAXIMUM_LENGTH_FOR_BUSINESS_TRADE_NAME),
        GST_regestered_on: Joi.date(),

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
    createGst,
    deleteGst,
    updateGstById,
    getGst
}
