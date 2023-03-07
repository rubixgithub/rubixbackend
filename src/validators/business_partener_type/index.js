import Joi from 'joi'
import constants from '../../constants'

const {
    MINIMUM_LENGTH_FOR_PARTNERTYPE,
    MAXIMUM_LENGTH_FOR_PARTNERTYPE

} = constants

import { throwError } from '../../util/helper'

const createBusinessPartenerType = async (req, res, next) => {
    const schema = Joi.object({
        partner_code:Joi.number(),
        partner_type: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PARTNERTYPE)
            .max(MAXIMUM_LENGTH_FOR_PARTNERTYPE)
            .required()

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

const deleteBusinessPartenerType = async (req, res, next) => validateId(req, res, next)

const getBusinessPartenerType = async (req, res, next) => validateId(req, res, next)


const updateBusinessPartenerTypeById = async (req, res, next) => {
    const schema = Joi.object({
        partner_code:Joi.number(),
        partner_type: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PARTNERTYPE)
            .max(MAXIMUM_LENGTH_FOR_PARTNERTYPE)

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
    createBusinessPartenerType,
    deleteBusinessPartenerType,
    updateBusinessPartenerTypeById,
    getBusinessPartenerType
}
