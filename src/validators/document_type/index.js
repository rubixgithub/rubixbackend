import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_DOCTYPE,
    MINIMUM_LENGTH_FOR_DOCTYPE,
    MAXIMUM_LENGTH_FOR_DESCRIPTION,
    MINIMUM_LENGTH_FOR_DESCRIPTION,
} = constants

import { throwError } from '../../util/helper'

const createDocumentType = async (req, res, next) => {
    const schema = Joi.object({
        doc_type: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DOCTYPE)
            .max(MAXIMUM_LENGTH_FOR_DOCTYPE)
            .required(),
        description: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DESCRIPTION)
            .max(MAXIMUM_LENGTH_FOR_DESCRIPTION)
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

const deleteDocumentType = async (req, res, next) => validateId(req, res, next)

const getDocumentType = async (req, res, next) => validateId(req, res, next)


const updateDocumentTypeById = async (req, res, next) => {
    const schema = Joi.object({
        doc_type: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DOCTYPE)
            .max(MAXIMUM_LENGTH_FOR_DOCTYPE),
        description: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DESCRIPTION)
            .max(MAXIMUM_LENGTH_FOR_DESCRIPTION)

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
    createDocumentType,
    deleteDocumentType,
    updateDocumentTypeById,
    getDocumentType
}
