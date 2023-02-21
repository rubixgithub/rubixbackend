import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
    MAXIMUM_LENGTH_FOR_ADDRESS1,
    MINIMUM_LENGTH_FOR_ADDRESS1,
    MAXIMUM_LENGTH_FOR_ADDRESS2,
    MINIMUM_LENGTH_FOR_ADDRESS2,
    MAXIMUM_LENGTH_FOR_STATE_TERITORY,
    MINIMUM_LENGTH_FOR_STATE_TERITORY,
    MAXIMUM_LENGTH_FOR_CITY,
    MINIMUM_LENGTH_FOR_CITY,
    MAXIMUM_LENGTH_FOR_POSTAL_CODE,
    MINIMUM_LENGTH_FOR_POSTAL_CODE,
    MAXIMUM_LENGTH_FOR_EMAIL,
    MINIMUM_LENGTH_FOR_EMAIL,
    MAXIMUM_LENGTH_FOR_PHONE,
    MINIMUM_LENGTH_FOR_PHONE,
    MAXIMUM_LENGTH_FOR_STATUS,
    MINIMUM_LENGTH_FOR_STATUS,
    MAXIMUM_LENGTH_FOR_IS_PRIMARY,
    MINIMUM_LENGTH_FOR_IS_PRIMARY,
    MAXIMUM_LENGTH_FOR_IS_ACTIVE,
    MINIMUM_LENGTH_FOR_IS_ACTIVE
} = constants

import { throwError } from '../../util/helper'

const createWearHouse = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        address_1:Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS1)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS1)
            .required(),
        address_2:Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS2)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS2)
            .required(),
        state_teritory:Joi.string()
            .min(MINIMUM_LENGTH_FOR_STATE_TERITORY)
            .max(MAXIMUM_LENGTH_FOR_STATE_TERITORY)
            .required(),
        city:Joi.string()
            .min(MINIMUM_LENGTH_FOR_CITY)
            .max(MAXIMUM_LENGTH_FOR_CITY)
            .required(),
        postal_code:Joi.string()
            .min(MINIMUM_LENGTH_FOR_POSTAL_CODE)
            .max(MAXIMUM_LENGTH_FOR_POSTAL_CODE)
            .required(),
        email:Joi.string()
            .min(MINIMUM_LENGTH_FOR_EMAIL)
            .max(MAXIMUM_LENGTH_FOR_EMAIL)
            .required(),
        phone:Joi.string()
            .min(MINIMUM_LENGTH_FOR_PHONE)
            .max(MAXIMUM_LENGTH_FOR_PHONE)
            .required(),
        status:Joi.string()
            .min(MINIMUM_LENGTH_FOR_STATUS)
            .max(MAXIMUM_LENGTH_FOR_STATUS)
            .required(),
        is_primary:Joi.string()
            .min(MINIMUM_LENGTH_FOR_IS_PRIMARY)
            .max(MAXIMUM_LENGTH_FOR_IS_PRIMARY)
            .required(),
        is_active:Joi.string()
            .min(MINIMUM_LENGTH_FOR_IS_ACTIVE)
            .max(MAXIMUM_LENGTH_FOR_IS_ACTIVE)
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

const deleteWearHouse = async (req, res, next) => validateId(req, res, next)

const getWearHouse = async (req, res, next) => validateId(req, res, next)


const updateWearHouseById = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME),
        address_1:Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS1)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS1),
        address_2:Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS2)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS2),
        state_teritory:Joi.string()
            .min(MINIMUM_LENGTH_FOR_STATE_TERITORY)
            .max(MAXIMUM_LENGTH_FOR_STATE_TERITORY),
        city:Joi.string()
            .min(MINIMUM_LENGTH_FOR_CITY)
            .max(MAXIMUM_LENGTH_FOR_CITY),
        postal_code:Joi.string()
            .min(MINIMUM_LENGTH_FOR_POSTAL_CODE)
            .max(MAXIMUM_LENGTH_FOR_POSTAL_CODE),
        email:Joi.string()
            .min(MINIMUM_LENGTH_FOR_EMAIL)
            .max(MAXIMUM_LENGTH_FOR_EMAIL),
        phone:Joi.string()
            .min(MINIMUM_LENGTH_FOR_PHONE)
            .max(MAXIMUM_LENGTH_FOR_PHONE),
        status:Joi.string()
            .min(MINIMUM_LENGTH_FOR_STATUS)
            .max(MAXIMUM_LENGTH_FOR_STATUS),
        is_primary:Joi.string()
            .min(MINIMUM_LENGTH_FOR_IS_PRIMARY)
            .max(MAXIMUM_LENGTH_FOR_IS_PRIMARY),
        is_active:Joi.string()
            .min(MINIMUM_LENGTH_FOR_IS_ACTIVE)
            .max(MAXIMUM_LENGTH_FOR_IS_ACTIVE)
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
    createWearHouse,
    deleteWearHouse,
    updateWearHouseById,
    getWearHouse
}
