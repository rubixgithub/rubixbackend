import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_SLUGNAME,
    MINIMUM_LENGTH_FOR_SLUGNAME,
    MAXIMUM_LENGTH_FOR_LANG,
    MINIMUM_LENGTH_FOR_LANG,
    MAXIMUM_LENGTH_FOR_INTERNAL_NAME,
    MINIMUM_LENGTH_FOR_INTERNAL_NAME,
    MAXIMUM_LENGTH_FOR_TEMPL_NAME,
    MINIMUM_LENGTH_FOR_TEMPL_NAME,
    MAXIMUM_LENGTH_FOR_STATUS,
    MINIMUM_LENGTH_FOR_STATUS,
    MAXIMUM_LENGTH_FOR_CONTENT,
    MINIMUM_LENGTH_FOR_CONTENT,
} = constants

import { throwError } from '../../util/helper'

const createEmail = async (req, res, next) => {
    const schema = Joi.object({
        temp_id: Joi.number()
            .required(),
        slug_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SLUGNAME)
            .max(MAXIMUM_LENGTH_FOR_SLUGNAME)
            .required(),
        lang: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LANG)
            .max(MAXIMUM_LENGTH_FOR_LANG)
            .required(),
        internal_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_INTERNAL_NAME)
            .max(MAXIMUM_LENGTH_FOR_INTERNAL_NAME)
            .required(),
        templ_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_TEMPL_NAME)
            .max(MAXIMUM_LENGTH_FOR_TEMPL_NAME)
            .required(),
        status: Joi.string()
            .min(MINIMUM_LENGTH_FOR_STATUS)
            .max(MAXIMUM_LENGTH_FOR_STATUS)
            .required(),
        content: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CONTENT)
            .max(MAXIMUM_LENGTH_FOR_CONTENT)
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

const deleteEmail = async (req, res, next) => validateId(req, res, next)

const getEmail = async (req, res, next) => validateId(req, res, next)


const updateEmailById = async (req, res, next) => {
    const schema = Joi.object({
        temp_id: Joi.number(),
        slug_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SLUGNAME)
            .max(MAXIMUM_LENGTH_FOR_SLUGNAME),
        lang: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LANG)
            .max(MAXIMUM_LENGTH_FOR_LANG),
        internal_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_INTERNAL_NAME)
            .max(MAXIMUM_LENGTH_FOR_INTERNAL_NAME),
        templ_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_TEMPL_NAME)
            .max(MAXIMUM_LENGTH_FOR_TEMPL_NAME),
        status: Joi.string()
            .min(MINIMUM_LENGTH_FOR_STATUS)
            .max(MAXIMUM_LENGTH_FOR_STATUS),
        content: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CONTENT)
            .max(MAXIMUM_LENGTH_FOR_CONTENT)

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
    createEmail,
    deleteEmail,
    updateEmailById,
    getEmail
}
