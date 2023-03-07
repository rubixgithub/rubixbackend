import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_EMAIL,
    MAXIMUM_LENGTH_FOR_EMAIL,
    MINIMUM_LENGTH_FOR_PHONE,
    MAXIMUM_LENGTH_FOR_PHONE,
    MINIMUM_LENGTH_FOR_CUSTOMERCODE,
    MAXIMUM_LENGTH_FOR_CUSTOMERCODE,
    MINIMUM_LENGTH_FOR_CUSTOMERNAME,
    MAXIMUM_LENGTH_FOR_CUSTOMERNAME,
    MINIMUM_LENGTH_FOR_CONTACT_SALUTATION,
    MAXIMUM_LENGTH_FOR_CONTACT_SALUTATION,
    MINIMUM_LENGTH_FOR_CONTACT_FIRST_NAME,
    MAXIMUM_LENGTH_FOR_CONTACT_FIRST_NAME,
    MINIMUM_LENGTH_FOR_CONTACT_LAST_NAME,
    MAXIMUM_LENGTH_FOR_CONTACT_LAST_NAME,
    MINIMUM_LENGTH_FOR_DESIGNATION,
    MAXIMUM_LENGTH_FOR_DESIGNATION,
    MINIMUM_LENGTH_FOR_DEPARTMENT,
    MAXIMUM_LENGTH_FOR_DEPARTMENT,
    MINIMUM_LENGTH_FOR_TAXIDENTIFIER,
    MAXIMUM_LENGTH_FOR_TAXIDENTIFIER,
    MINIMUM_LENGTH_FOR_ENABLE_ACCESS,
    MAXIMUM_LENGTH_FOR_ENABLE_ACCESS,
    MINIMUM_LENGTH_FOR_CREATED_BY,
    MAXIMUM_LENGTH_FOR_CREATED_BY,
    MINIMUM_LENGTH_FOR_CONTRACT_TYPE,
    MAXIMUM_LENGTH_FOR_CONTRACT_TYPE,
    MINIMUM_LENGTH_FOR_CONTRACT_POLICY_ID,
    MAXIMUM_LENGTH_FOR_CONTRACT_POLICY_ID



} = constants

import { throwError } from '../../util/helper'

const createCustomer = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        customer_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CUSTOMERCODE)
            .max(MAXIMUM_LENGTH_FOR_CUSTOMERCODE)
            .required(),
        customer_name: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CUSTOMERNAME)
                .max(MAXIMUM_LENGTH_FOR_CUSTOMERNAME)
                .required(),
        contact_salutation: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CONTACT_SALUTATION)
                .max(MAXIMUM_LENGTH_FOR_CONTACT_SALUTATION)
                .required(),
        contact_first_name: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CONTACT_FIRST_NAME)
                .max(MAXIMUM_LENGTH_FOR_CONTACT_FIRST_NAME)
                .required(),
        contact_last_name: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CONTACT_LAST_NAME)
                .max(MAXIMUM_LENGTH_FOR_CONTACT_LAST_NAME)
                .required(),
        designation: Joi.string()
                .min(MINIMUM_LENGTH_FOR_DESIGNATION)
                .max(MAXIMUM_LENGTH_FOR_DESIGNATION)
                .required(),
        department: Joi.string()
                .min(MINIMUM_LENGTH_FOR_DEPARTMENT)
                .max(MAXIMUM_LENGTH_FOR_DEPARTMENT)
                .required(),
        email: Joi.string()
                .min(MINIMUM_LENGTH_FOR_EMAIL)
                .max(MAXIMUM_LENGTH_FOR_EMAIL)
                .required(),
        phone: Joi.string()
                .min(MINIMUM_LENGTH_FOR_PHONE)
                .max(MAXIMUM_LENGTH_FOR_PHONE)
                .required(),
        tax_identifier: Joi.string()
                .min(MINIMUM_LENGTH_FOR_TAXIDENTIFIER)
                .max(MAXIMUM_LENGTH_FOR_TAXIDENTIFIER)
                .required(),
        enable_access: Joi.string()
                .min(MINIMUM_LENGTH_FOR_ENABLE_ACCESS)
                .max(MAXIMUM_LENGTH_FOR_ENABLE_ACCESS)
                .required(),
        created_by: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CREATED_BY)
                .max(MAXIMUM_LENGTH_FOR_CREATED_BY)
                .required(),
        contract_type: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CONTRACT_TYPE)
                .max(MAXIMUM_LENGTH_FOR_CONTRACT_TYPE)
                .required(),
        contract_policy_id: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CONTRACT_POLICY_ID)
                .max(MAXIMUM_LENGTH_FOR_CONTRACT_POLICY_ID)
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

const deleteCustomer = async (req, res, next) => validateId(req, res, next)

const getCustomer = async (req, res, next) => validateId(req, res, next)


const updateCustomerById = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME),
        customer_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CUSTOMERCODE)
            .max(MAXIMUM_LENGTH_FOR_CUSTOMERCODE),
        customer_name: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CUSTOMERNAME)
                .max(MAXIMUM_LENGTH_FOR_CUSTOMERNAME),
        contact_salutation: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CONTACT_SALUTATION)
                .max(MAXIMUM_LENGTH_FOR_CONTACT_SALUTATION),
        contact_first_name: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CONTACT_FIRST_NAME)
                .max(MAXIMUM_LENGTH_FOR_CONTACT_FIRST_NAME),
        contact_last_name: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CONTACT_LAST_NAME)
                .max(MAXIMUM_LENGTH_FOR_CONTACT_LAST_NAME),
        designation: Joi.string()
                .min(MINIMUM_LENGTH_FOR_DESIGNATION)
                .max(MAXIMUM_LENGTH_FOR_DESIGNATION),
        department: Joi.string()
                .min(MINIMUM_LENGTH_FOR_DEPARTMENT)
                .max(MAXIMUM_LENGTH_FOR_DEPARTMENT),
        email: Joi.string()
                .min(MINIMUM_LENGTH_FOR_EMAIL)
                .max(MAXIMUM_LENGTH_FOR_EMAIL),
        phone: Joi.string()
                .min(MINIMUM_LENGTH_FOR_PHONE)
                .max(MAXIMUM_LENGTH_FOR_PHONE),
        tax_identifier: Joi.string()
                .min(MINIMUM_LENGTH_FOR_TAXIDENTIFIER)
                .max(MAXIMUM_LENGTH_FOR_TAXIDENTIFIER),
        enable_access: Joi.string()
                .min(MINIMUM_LENGTH_FOR_ENABLE_ACCESS)
                .max(MAXIMUM_LENGTH_FOR_ENABLE_ACCESS),
        created_by: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CREATED_BY)
                .max(MAXIMUM_LENGTH_FOR_CREATED_BY),
        contract_type: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CONTRACT_TYPE)
                .max(MAXIMUM_LENGTH_FOR_CONTRACT_TYPE),
        contract_policy_id: Joi.string()
                .min(MINIMUM_LENGTH_FOR_CONTRACT_POLICY_ID)
                .max(MAXIMUM_LENGTH_FOR_CONTRACT_POLICY_ID)
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
    createCustomer,
    deleteCustomer,
    updateCustomerById,
    getCustomer
}
