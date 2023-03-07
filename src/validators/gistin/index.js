import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_ADDRESS,
    MINIMUM_LENGTH_FOR_ADDRESS,
} = constants

import { throwError } from '../../util/helper'

const createGistin = async (req, res, next) => {
    const schema = Joi.object({
        gistin: Joi.number()
            .required(),
        state: Joi.number()
            .required(),
        address:Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS)
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

const deleteGistin = async (req, res, next) => validateId(req, res, next)

const getGistin = async (req, res, next) => validateId(req, res, next)


const updateGistinById = async (req, res, next) => {
     const schema = Joi.object({
        gistin: Joi.number()
            .required(),
        state: Joi.number()
            .required(),
        address:Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS)
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
    createGistin,
    deleteGistin,
    updateGistinById,
    getGistin
}
