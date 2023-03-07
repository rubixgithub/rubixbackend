import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
    MAXIMUM_LENGTH_FOR_ADDRESS,
    MINIMUM_LENGTH_FOR_ADDRESS,
} = constants

import { throwError } from '../../util/helper'

const createUnitDivision = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        address: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS)
            .required(),
        gstin:Joi.number()
            .required(),
        registered_name:Joi.number()
            .required(),
        currency:Joi.number()
            .required(),
        department_id:Joi.number()
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

const deleteUnitDivision = async (req, res, next) => validateId(req, res, next)

const getUnitDivision = async (req, res, next) => validateId(req, res, next)


const updateUnitDivisionById = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME),
        address: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS),
        gstin:Joi.number(),
        registered_name:Joi.number(),
        currency:Joi.number(),
        department_id:Joi.number(),
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
    createUnitDivision,
    deleteUnitDivision,
    updateUnitDivisionById,
    getUnitDivision
}
