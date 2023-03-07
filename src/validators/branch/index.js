import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
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
    MINIMUM_LENGTH_FOR_WAREHOUSE,
    MAXIMUM_LENGTH_FOR_WAREHOUSE,
    MINIMUM_LENGTH_FOR_GISTIN,
    MAXIMUM_LENGTH_FOR_GISTIN,
    MINIMUM_LENGTH_FOR_DOCSERIES,
    MAXIMUM_LENGTH_FOR_DOCSERIES

} = constants

import { throwError } from '../../util/helper'

const createBranch = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        address_1: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS1)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS1)
            .required(),
        address_2: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS2)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS2)
            .required(),
        state_teritory: Joi.string()
            .min(MINIMUM_LENGTH_FOR_STATE)
            .max(MAXIMUM_LENGTH_FOR_STATE)
            .required(),
        city: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CITY)
            .max(MAXIMUM_LENGTH_FOR_CITY)
            .required(),
        postal_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_POSTALCODE)
            .max(MAXIMUM_LENGTH_FOR_POSTALCODE)
            .required(),
        primary_contact: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PHONE)
            .max(MAXIMUM_LENGTH_FOR_PHONE)
            .required(),
        gstin: Joi.string()
            .min(MINIMUM_LENGTH_FOR_GISTIN)
            .max(MAXIMUM_LENGTH_FOR_GISTIN)
            .required(),
        doc_series: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DOCSERIES)
            .max(MAXIMUM_LENGTH_FOR_DOCSERIES)
            .required(),
        warehouses: Joi.string()
            .min(MINIMUM_LENGTH_FOR_WAREHOUSE)
            .max(MAXIMUM_LENGTH_FOR_WAREHOUSE)
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

const deleteBranch = async (req, res, next) => validateId(req, res, next)

const getBranch = async (req, res, next) => validateId(req, res, next)


const updateBranchById = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME),
        address_1: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS1)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS1),
        address_2: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS2)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS2),
        state_teritory: Joi.string()
            .min(MINIMUM_LENGTH_FOR_STATE)
            .max(MAXIMUM_LENGTH_FOR_STATE),
        city: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CITY)
            .max(MAXIMUM_LENGTH_FOR_CITY),
        postal_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_POSTALCODE)
            .max(MAXIMUM_LENGTH_FOR_POSTALCODE),
        primary_contact: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PHONE)
            .max(MAXIMUM_LENGTH_FOR_PHONE),
        gstin: Joi.string()
            .min(MINIMUM_LENGTH_FOR_GISTIN)
            .max(MAXIMUM_LENGTH_FOR_GISTIN),
        doc_series: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DOCSERIES)
            .max(MAXIMUM_LENGTH_FOR_DOCSERIES),
        warehouses: Joi.string()
            .min(MINIMUM_LENGTH_FOR_WAREHOUSE)
            .max(MAXIMUM_LENGTH_FOR_WAREHOUSE)

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
    createBranch,
    deleteBranch,
    updateBranchById,
    getBranch
}
