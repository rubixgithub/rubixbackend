import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
} = constants

import { throwError } from '../../util/helper'

const createAccess = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        view: Joi.number(),
        create: Joi.boolean(),
        edit: Joi.boolean(),
        isdelete: Joi.boolean()

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

const deleteAccess = async (req, res, next) => validateId(req, res, next)

const getAccess = async (req, res, next) => validateId(req, res, next)


const updateAccessById = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        view: Joi.number(),
        create: Joi.boolean(),
        edit: Joi.boolean(),
        delete: Joi.boolean()

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
    createAccess,
    deleteAccess,
    updateAccessById,
    getAccess
}
