import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_EMAIL,
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_PASSWORD,
    MINIMUM_LENGTH_FOR_EMAIL,

    MINIMUM_LENGTH_FOR_LANGUAGE,
    MAXIMUM_LENGTH_FOR_LANGUAGE,
    MINIMUM_LENGTH_FOR_PROFILE_PICTURE,
    MAXIMUM_LENGTH_FOR_PROFILE_PICTURE,

} = constants

import { throwError } from '../../util/helper'

const createUser = async (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        email: Joi.string()
        .min(MINIMUM_LENGTH_FOR_EMAIL)
            .max(MAXIMUM_LENGTH_FOR_EMAIL)
            .email(),
        password: Joi.string().min(MINIMUM_LENGTH_FOR_PASSWORD),

        language: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LANGUAGE)
            .max(MAXIMUM_LENGTH_FOR_LANGUAGE)
            .required(),
        profile_picture: Joi.string()
            .required(),
        is_admin: Joi.boolean().required(),
        is_active: Joi.boolean().required(),
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

const deleteUser = async (req, res, next) => validateId(req, res, next)

const getUser = async (req, res, next) => validateId(req, res, next)


const updateUserById = async (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME),
        email: Joi.string()
        .min(MINIMUM_LENGTH_FOR_EMAIL)
            .max(MAXIMUM_LENGTH_FOR_EMAIL)
            .email(),
        password: Joi.string().min(6),

        language: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LANGUAGE)
            .max(MAXIMUM_LENGTH_FOR_LANGUAGE),
        profile_picture: Joi.string()
            .min(1)
            .max(MAXIMUM_LENGTH_FOR_PROFILE_PICTURE),
        is_admin: Joi.boolean().required(),
        is_active: JoiJoi.boolean().required(),

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
const logingUser = async (req,res,next) => {
    const schema = Joi.object({
        email: Joi.string()
        .min(MINIMUM_LENGTH_FOR_EMAIL)
            .max(MAXIMUM_LENGTH_FOR_EMAIL)
            .email(),
        password: Joi.string().min(MINIMUM_LENGTH_FOR_PASSWORD),
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

export default {
    createUser,
    deleteUser,
    updateUserById,
    getUser,
    logingUser
}
