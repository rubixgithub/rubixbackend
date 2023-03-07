import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_COUNTRY,
    MAXIMUM_LENGTH_FOR_COUNTRY,
    MINIMUM_LENGTH_FOR_ADDRESS1,
    MAXIMUM_LENGTH_FOR_ADDRESS1,
    MINIMUM_LENGTH_FOR_ADDRESS2,
    MAXIMUM_LENGTH_FOR_ADDRESS2,
    MINIMUM_LENGTH_FOR_CITY,
    MAXIMUM_LENGTH_FOR_CITY,
    MINIMUM_LENGTH_FOR_STATE,
    MAXIMUM_LENGTH_FOR_STATE,
    MINIMUM_LENGTH_FOR_POSTALCODE,
    MAXIMUM_LENGTH_FOR_POSTALCODE,
    MINIMUM_LENGTH_FOR_PHONE,
    MAXIMUM_LENGTH_FOR_PHONE,
    
    
} = constants

import { throwError } from '../../util/helper'

const createAddress = async (req, res, next) => {
    const schema = Joi.object({
        attention: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        country: Joi.string()
            .min(MINIMUM_LENGTH_FOR_COUNTRY)
            .max(MAXIMUM_LENGTH_FOR_COUNTRY)
            .required(),
        address_1:Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS1)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS1)
            .required(),
        address_2:Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS2)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS2)
            .required(),
        city:Joi.string()
            .min(MINIMUM_LENGTH_FOR_CITY)
            .max(MAXIMUM_LENGTH_FOR_CITY)
            .required(),
        state:Joi.string()
            .min(MINIMUM_LENGTH_FOR_STATE)
            .max(MAXIMUM_LENGTH_FOR_STATE)
            .required(),
        postal_code:Joi.string()
            .min(MINIMUM_LENGTH_FOR_POSTALCODE)
            .max(MAXIMUM_LENGTH_FOR_POSTALCODE)
            .required(),
        phone:Joi.string()
            .min(MINIMUM_LENGTH_FOR_PHONE)
            .max(MAXIMUM_LENGTH_FOR_PHONE)
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

const deleteAddress = async (req, res, next) => validateId(req, res, next)

const getAddress = async (req, res, next) => validateId(req, res, next)


const updateAddressById = async (req, res, next) => {
    const schema = Joi.object({
        attention: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME),
        country: Joi.string()
            .min(MINIMUM_LENGTH_FOR_COUNTRY)
            .max(MAXIMUM_LENGTH_FOR_COUNTRY),
        address_1:Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS1)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS1),
        address_2:Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS2)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS2),
        city:Joi.string()
            .min(MINIMUM_LENGTH_FOR_CITY)
            .max(MAXIMUM_LENGTH_FOR_CITY),
        state:Joi.string()
            .min(MINIMUM_LENGTH_FOR_STATE)
            .max(MAXIMUM_LENGTH_FOR_STATE),
        postal_code:Joi.string()
            .min(MINIMUM_LENGTH_FOR_POSTALCODE)
            .max(MAXIMUM_LENGTH_FOR_POSTALCODE),
        phone:Joi.string()
            .min(MINIMUM_LENGTH_FOR_PHONE)
            .max(MAXIMUM_LENGTH_FOR_PHONE)
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
    createAddress,
    deleteAddress,
    updateAddressById,
    getAddress
}
