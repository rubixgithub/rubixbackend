import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
} = constants

import { throwError } from '../../util/helper'

const createRole = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        description: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
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

const deleteRole = async (req, res, next) => validateId(req, res, next)

const getRole = async (req, res, next) => validateId(req, res, next)


const updateRoleById = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        description: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required()

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
    createRole,
    deleteRole,
    updateRoleById,
    getRole
}
