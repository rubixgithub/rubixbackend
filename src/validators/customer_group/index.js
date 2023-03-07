import Joi from 'joi'
import constants from '../../constants'

const {
    MINIMUM_LENGTH_FOR_GROUPNAME,
    MAXIMUM_LENGTH_FOR_GROUPNAME,
    MINIMUM_LENGTH_FOR_GROUPDESCRIPTION,
    MAXIMUM_LENGTH_FOR_GROUPDESCRIPTION
} = constants

import { throwError } from '../../util/helper'

const createCustomerGroup = async (req, res, next) => {
    const schema = Joi.object({
        gorup_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_GROUPNAME)
            .max(MAXIMUM_LENGTH_FOR_GROUPNAME)
            .required(),
        group_description: Joi.string()
            .min(MINIMUM_LENGTH_FOR_GROUPDESCRIPTION)
            .max(MAXIMUM_LENGTH_FOR_GROUPDESCRIPTION)
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

const deleteCustomerGroup = async (req, res, next) => validateId(req, res, next)

const getCustomerGroup = async (req, res, next) => validateId(req, res, next)


const updateCustomerGroupById = async (req, res, next) => {
    const schema = Joi.object({
        gorup_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_GROUPNAME)
            .max(MAXIMUM_LENGTH_FOR_GROUPNAME),

        group_description: Joi.string()
            .min(MINIMUM_LENGTH_FOR_GROUPDESCRIPTION)
            .max(MAXIMUM_LENGTH_FOR_GROUPDESCRIPTION)

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
    createCustomerGroup,
    deleteCustomerGroup,
    updateCustomerGroupById,
    getCustomerGroup
}
