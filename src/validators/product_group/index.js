import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_GROUP_NAME,
    MINIMUM_LENGTH_FOR_GROUP_NAME,
    MINIMUM_LENGTH_FOR_GROUP_BASIS,
    MAXIMUM_LENGTH_FOR_GROUP_BASIS,
} = constants

import { throwError } from '../../util/helper'

const createProductGroup = async (req, res, next) => {
    const schema = Joi.object({
        group_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_GROUP_NAME)
            .max(MAXIMUM_LENGTH_FOR_GROUP_NAME)
            .required(),
        group_basis: Joi.string()
            .min(MINIMUM_LENGTH_FOR_GROUP_BASIS)
            .max(MAXIMUM_LENGTH_FOR_GROUP_BASIS)
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

const deleteProductGroup = async (req, res, next) => validateId(req, res, next)

const getProductGroup = async (req, res, next) => validateId(req, res, next)


const updateProductGroupById = async (req, res, next) => {
    const schema = Joi.object({
        group_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_GROUP_NAME)
            .max(MAXIMUM_LENGTH_FOR_GROUP_NAME)
            .required(),
        group_basis: Joi.string()
            .min(MINIMUM_LENGTH_FOR_GROUP_BASIS)
            .max(MAXIMUM_LENGTH_FOR_GROUP_BASIS)
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
    createProductGroup,
    deleteProductGroup,
    updateProductGroupById,
    getProductGroup
}
