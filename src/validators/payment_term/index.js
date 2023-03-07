import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_DAYS,
    MINIMUM_LENGTH_FOR_DAYS,
} = constants

import { throwError } from '../../util/helper'

const createPaymentTerm = async (req, res, next) => {
    const schema = Joi.object({
        document_type: Joi.number()
            .required(),
        term: Joi.number()
            .required(),
        days: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DAYS)
            .max(MAXIMUM_LENGTH_FOR_DAYS)
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

const deletePaymentTerm = async (req, res, next) => validateId(req, res, next)

const getPaymentTerm = async (req, res, next) => validateId(req, res, next)


const updatePaymentTermById = async (req, res, next) => {
    const schema = Joi.object({
        document_type: Joi.number(),
        term: Joi.number(),
        days: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DAYS)
            .max(MAXIMUM_LENGTH_FOR_DAYS),

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
    createPaymentTerm,
    deletePaymentTerm,
    updatePaymentTermById,
    getPaymentTerm
}
