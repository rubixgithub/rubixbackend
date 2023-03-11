import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_UNIT_OF_MEASUREMENT,
    MINIMUM_LENGTH_FOR_UNIT_OF_MEASUREMENT,
    MAXIMUM_LENGTH_FOR_ONE_PACK_QUANTITY,
    MINIMUM_LENGTH_FOR_ONE_PACK_QUANTITY,
    MAXIMUM_LENGTH_FOR_GROSS_WEIGHT,
    MINIMUM_LENGTH_FOR_GROSS_WEIGHT,
    MAXIMUM_LENGTH_FOR_STORAGE_LOCATION,
    MINIMUM_LENGTH_FOR_STORAGE_LOCATION,
    MAXIMUM_LENGTH_FOR_PSS,
    MINIMUM_LENGTH_FOR_PSS,
    MAXIMUM_LENGTH_FOR_SHIPPING_MARK,
    MINIMUM_LENGTH_FOR_SHIPPING_MARK
} = constants

import { throwError } from '../../util/helper'

const createProductList = async (req, res, next) => {
    const schema = Joi.object({
        contract_id: Joi.number()
            .required(),
        quantity: Joi.number()
                .required(),
        unit_of_measurement: Joi.string()
                .min(MINIMUM_LENGTH_FOR_UNIT_OF_MEASUREMENT)
                .max(MAXIMUM_LENGTH_FOR_UNIT_OF_MEASUREMENT)
                .required(),
        price: Joi.number()
                .required(),
        one_pack_quantity: Joi.string()
                .min(MINIMUM_LENGTH_FOR_ONE_PACK_QUANTITY)
                .max(MAXIMUM_LENGTH_FOR_ONE_PACK_QUANTITY)
                .required(),
        gross_weight: Joi.string()
                .min(MINIMUM_LENGTH_FOR_GROSS_WEIGHT)
                .max(MAXIMUM_LENGTH_FOR_GROSS_WEIGHT)
                .required(),
        storage_location: Joi.string()
                .min(MINIMUM_LENGTH_FOR_STORAGE_LOCATION)
                .max(MAXIMUM_LENGTH_FOR_STORAGE_LOCATION)
                .required(),
        pss: Joi.string()
                .min(MINIMUM_LENGTH_FOR_PSS)
                .max(MAXIMUM_LENGTH_FOR_PSS)
                .required(),
        shipping_mark_i: Joi.string()
                .min(MINIMUM_LENGTH_FOR_SHIPPING_MARK)
                .max(MAXIMUM_LENGTH_FOR_SHIPPING_MARK)
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

const deleteProductList = async (req, res, next) => validateId(req, res, next)

const getProductList = async (req, res, next) => validateId(req, res, next)


const updateProductListById = async (req, res, next) => {
    const schema = Joi.object({
        contract_id: Joi.number(),
        quantity:Joi.number(),
        unit_of_measurement: Joi.string()
                .min(MINIMUM_LENGTH_FOR_UNIT_OF_MEASUREMENT)
                .max(MAXIMUM_LENGTH_FOR_UNIT_OF_MEASUREMENT),
        price: Joi.number(),
        one_pack_quantity: Joi.string()
                .min(MINIMUM_LENGTH_FOR_ONE_PACK_QUANTITY)
                .max(MAXIMUM_LENGTH_FOR_ONE_PACK_QUANTITY),
        gross_weight: Joi.string()
                .min(MINIMUM_LENGTH_FOR_GROSS_WEIGHT)
                .max(MAXIMUM_LENGTH_FOR_GROSS_WEIGHT),
        storage_location: Joi.string()
                .min(MINIMUM_LENGTH_FOR_STORAGE_LOCATION)
                .max(MAXIMUM_LENGTH_FOR_STORAGE_LOCATION),
        pss: Joi.string()
                .min(MINIMUM_LENGTH_FOR_PSS)
                .max(MAXIMUM_LENGTH_FOR_PSS),
        shipping_mark_i: Joi.string()
                .min(MINIMUM_LENGTH_FOR_SHIPPING_MARK)
                .max(MAXIMUM_LENGTH_FOR_SHIPPING_MARK)


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
    createProductList,
    deleteProductList,
    updateProductListById,
    getProductList
}
