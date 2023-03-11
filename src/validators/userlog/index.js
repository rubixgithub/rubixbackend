import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_USER_ID,
    MINIMUM_LENGTH_FOR_USER_ID,
    MAXIMUM_LENGTH_FOR_LOG_ACTION_ID,
    MINIMUM_LENGTH_FOR_LOG_ACTION_ID,
    MAXIMUM_LENGTH_FOR_MESSAGE,
    MINIMUM_LENGTH_FOR_MESSAGE,
    MAXIMUM_LENGTH_FOR_IP_ADDRESS,
    MINIMUM_LENGTH_FOR_IP_ADDRESS,
    MAXIMUM_LENGTH_FOR_REQUEST_URI,
    MINIMUM_LENGTH_FOR_REQUEST_URI,
    MAXIMUM_LENGTH_FOR_SESSIONID,
    MINIMUM_LENGTH_FOR_SESSIONID,
    MAXIMUM_LENGTH_FOR_OTHERINFO,
    MINIMUM_LENGTH_FOR_OTHERINFO,
    MAXIMUM_LENGTH_FOR_LOG_DATE,
    MINIMUM_LENGTH_FOR_LOG_DATE,
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
} = constants

import { throwError } from '../../util/helper'

const createUserLog = async (req, res, next) => {
    const schema = Joi.object({
        user_id: Joi.string()
            .min(MINIMUM_LENGTH_FOR_USER_ID)
            .max(MAXIMUM_LENGTH_FOR_USER_ID)
            .required(),
        log_action_id:  Joi.string()
            .min(MINIMUM_LENGTH_FOR_LOG_ACTION_ID)
            .max(MAXIMUM_LENGTH_FOR_LOG_ACTION_ID)
            .required(),
        message:  Joi.string()
            .min(MINIMUM_LENGTH_FOR_MESSAGE)
            .max(MAXIMUM_LENGTH_FOR_MESSAGE)
            .required(),
        ip_address: Joi.string()
            .min(MINIMUM_LENGTH_FOR_IP_ADDRESS)
            .max(MAXIMUM_LENGTH_FOR_IP_ADDRESS)
            .required(),
        request_uri: Joi.string()
            .min(MINIMUM_LENGTH_FOR_REQUEST_URI)
            .max(MAXIMUM_LENGTH_FOR_REQUEST_URI)
            .required(),
        sessionId:  Joi.string()
            .min(MINIMUM_LENGTH_FOR_SESSIONID)
            .max(MAXIMUM_LENGTH_FOR_SESSIONID)
            .required(),
        otherInfo:  Joi.string()
            .min(MINIMUM_LENGTH_FOR_OTHERINFO)
            .max(MAXIMUM_LENGTH_FOR_OTHERINFO)
            .required(),
        log_date: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LOG_DATE)
            .max(MAXIMUM_LENGTH_FOR_LOG_DATE)
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

const deleteUserLog = async (req, res, next) => validateId(req, res, next)

const getUserLog = async (req, res, next) => validateId(req, res, next)


const updateUserLogById = async (req, res, next) => {
    const schema = Joi.object({
        user_id: Joi.string()
            .min(MINIMUM_LENGTH_FOR_USER_ID)
            .max(MAXIMUM_LENGTH_FOR_USER_ID),
        log_action_id:  Joi.string()
            .min(MINIMUM_LENGTH_FOR_LOG_ACTION_ID)
            .max(MAXIMUM_LENGTH_FOR_LOG_ACTION_ID),
        message:  Joi.string()
            .min(MINIMUM_LENGTH_FOR_MESSAGE)
            .max(MAXIMUM_LENGTH_FOR_MESSAGE),
        ip_address: Joi.string()
            .min(MINIMUM_LENGTH_FOR_IP_ADDRESS)
            .max(MAXIMUM_LENGTH_FOR_IP_ADDRESS),
        request_uri: Joi.string()
            .min(MINIMUM_LENGTH_FOR_REQUEST_URI)
            .max(MAXIMUM_LENGTH_FOR_REQUEST_URI),
        sessionId:  Joi.string()
            .min(MINIMUM_LENGTH_FOR_SESSIONID)
            .max(MAXIMUM_LENGTH_FOR_SESSIONID),
        otherInfo:  Joi.string()
            .min(MINIMUM_LENGTH_FOR_OTHERINFO)
            .max(MAXIMUM_LENGTH_FOR_OTHERINFO),
        log_date: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LOG_DATE)
            .max(MAXIMUM_LENGTH_FOR_LOG_DATE)

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
    createUserLog,
    deleteUserLog,
    updateUserLogById,
    getUserLog
}
