import Joi from 'joi'
import constants from '../../constants'

const {
    MINIMUM_LENGTH_FOR_EMAIL,
    MAXIMUM_LENGTH_FOR_EMAIL,
    MINIMUM_LENGTH_SALUTATION,
    MAXIMUM_LENGTH_SALUTATION,
    MINIMUM_LENGTH_FOR_FIRSTNAME,
    MAXIMUM_LENGTH_FOR_FIRSTNAME,
    MINIMUM_LENGTH_FOR_LASTNAME,
    MAXIMUM_LENGTH_FOR_LASTNAME,
    MINIMUM_LENGTH_FOR_WORKPHONE,
    MAXIMUM_LENGTH_FOR_WORKPHONE,
    MINIMUM_LENGTH_FOR_MOBILE,
    MAXIMUM_LENGTH_FOR_MOBILE,
    MINIMUM_LENGTH_FOR_ISPRIMARY,
    MAXIMUM_LENGTH_FOR_ISPRIMARY

} = constants

import { throwError } from '../../util/helper'

const createContectPerson = async (req, res, next) => {
    const schema = Joi.object({
        salutation: Joi.string()
            .min(MINIMUM_LENGTH_SALUTATION)
            .max(MAXIMUM_LENGTH_SALUTATION)
            .required(),
        first_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_FIRSTNAME)
            .max(MAXIMUM_LENGTH_FOR_FIRSTNAME)
            .required(),
        last_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LASTNAME)
            .max(MAXIMUM_LENGTH_FOR_LASTNAME)
            .required(),
        email: Joi.string()
            .min(MINIMUM_LENGTH_FOR_EMAIL)
            .max(MAXIMUM_LENGTH_FOR_EMAIL)
            .required(),
        work_phone: Joi.string()
            .min(MINIMUM_LENGTH_FOR_WORKPHONE)
            .max(MAXIMUM_LENGTH_FOR_WORKPHONE)
            .required(),
        mobile: Joi.string()
            .min(MINIMUM_LENGTH_FOR_MOBILE)
            .max(MAXIMUM_LENGTH_FOR_MOBILE)
            .required(),
        is_primary: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ISPRIMARY)
            .max(MAXIMUM_LENGTH_FOR_ISPRIMARY)
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

const deleteContectPerson = async (req, res, next) => validateId(req, res, next)

const getContectPerson = async (req, res, next) => validateId(req, res, next)


const updateContectPersonById = async (req, res, next) => {
    const schema = Joi.object({
        salutation: Joi.string()
            .min(MINIMUM_LENGTH_SALUTATION)
            .max(MAXIMUM_LENGTH_SALUTATION),
        first_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_FIRSTNAME)
            .max(MAXIMUM_LENGTH_FOR_FIRSTNAME),
        last_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LASTNAME)
            .max(MAXIMUM_LENGTH_FOR_LASTNAME),
        email: Joi.string()
            .min(MINIMUM_LENGTH_FOR_EMAIL)
            .max(MAXIMUM_LENGTH_FOR_EMAIL),
        work_phone: Joi.string()
            .min(MINIMUM_LENGTH_FOR_WORKPHONE)
            .max(MAXIMUM_LENGTH_FOR_WORKPHONE),
        mobile: Joi.string()
            .min(MINIMUM_LENGTH_FOR_MOBILE)
            .max(MAXIMUM_LENGTH_FOR_MOBILE),
        is_primary: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ISPRIMARY)
            .max(MAXIMUM_LENGTH_FOR_ISPRIMARY)

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
    createContectPerson,
    deleteContectPerson,
    updateContectPersonById,
    getContectPerson
}
