import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_EMAIL,
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_EMAIL,
    MINIMUM_LENGTH_FOR_LOGO,
    MAXIMUM_LENGTH_FOR_LOGO,
    MINIMUM_LENGTH_FOR_INDUSTRY,
    MAXIMUM_LENGTH_FOR_INDUSTRY,
    MINIMUM_LENGTH_FOR_STATETERIYORY,
    MAXIMUM_LENGTH_FOR_STATETERIYORY,
    MINIMUM_LENGTH_FOR_ADDRESS,
    MAXIMUM_LENGTH_FOR_ADDRESS,
    MINIMUM_LENGTH_FOR_CITY,
    MAXIMUM_LENGTH_FOR_CITY,
    MINIMUM_LENGTH_FOR_POSTALCODE,
    MAXIMUM_LENGTH_FOR_POSTALCODE,
    MINIMUM_LENGTH_FOR_IEC,
    MAXIMUM_LENGTH_FOR_IEC,
    MINIMUM_LENGTH_FOR_ORGCURRENCY,
    MAXIMUM_LENGTH_FOR_ORGCURRENCY,
    MINIMUM_LENGTH_FOR_FISCALYEAR,
    MAXIMUM_LENGTH_FOR_CONTECTNO,
    MAXIMUM_LENGTH_FOR_FISCALYEAR,
    MINIMUM_LENGTH_FOR_CONTECTNO,
    MINIMUM_LENGTH_FOR_COUNTRYID,
    MAXIMUM_LENGTH_FOR_COUNTRYID


} = constants

import { throwError } from '../../util/helper'

const createOrganisation = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        logo: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LOGO)
            .max(MAXIMUM_LENGTH_FOR_LOGO)
            .required(),
        industry: Joi.string()
            .min(MINIMUM_LENGTH_FOR_INDUSTRY)
            .max(MAXIMUM_LENGTH_FOR_INDUSTRY)
            .required(),
        country_id:Joi.string()
            .min(MINIMUM_LENGTH_FOR_COUNTRYID)
            .max(MAXIMUM_LENGTH_FOR_COUNTRYID)
            .required(),
        state_teritory: Joi.string()
            .min(MINIMUM_LENGTH_FOR_STATETERIYORY)
            .max(MAXIMUM_LENGTH_FOR_STATETERIYORY)
            .required(),
        address_1: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS)
            .required(),
        address_2: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS)
            .max(MINIMUM_LENGTH_FOR_ADDRESS)
            .required(),
        city: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CITY)
            .max(MAXIMUM_LENGTH_FOR_CITY)
            .required(),
        postal_code: Joi.number()
            .required(),
        iec: Joi.number()
            .required(),
        org_currency: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ORGCURRENCY)
            .max(MAXIMUM_LENGTH_FOR_ORGCURRENCY)
            .required(),
        inventory_start_date:Joi.date()
            .required(),
        fiscal_year: Joi.number()
            .required(),
        contact_no: Joi.number()
                .required(),
        email: Joi.string()
            .min(MINIMUM_LENGTH_FOR_EMAIL)
            .max(MAXIMUM_LENGTH_FOR_EMAIL)
            .email(),
            default_org_flag:Joi.boolean(),
        is_gst: Joi.boolean()

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

const deleteOrganisation = async (req, res, next) => validateId(req, res, next)

const getOrganisation = async (req, res, next) => validateId(req, res, next)


const updateOrganisationById = async (req, res, next) => {
    const schema = Joi.object({
        logo: Joi.string()
        .min(MINIMUM_LENGTH_FOR_LOGO)
        .max(MAXIMUM_LENGTH_FOR_LOGO),
    industry: Joi.string()
        .min(MINIMUM_LENGTH_FOR_INDUSTRY)
        .max(MAXIMUM_LENGTH_FOR_INDUSTRY),
    state_teritory: Joi.string()
        .min(MINIMUM_LENGTH_FOR_STATETERIYORY)
        .max(MAXIMUM_LENGTH_FOR_STATETERIYORY),
    address_1: Joi.string()
        .min(MINIMUM_LENGTH_FOR_ADDRESS)
        .max(MAXIMUM_LENGTH_FOR_ADDRESS),
    address_2: Joi.string()
        .min(MINIMUM_LENGTH_FOR_ADDRESS)
        .max(MINIMUM_LENGTH_FOR_ADDRESS),
    city: Joi.string()
        .min(MINIMUM_LENGTH_FOR_CITY)
        .max(MAXIMUM_LENGTH_FOR_CITY),
    postal_code: Joi.number()
        .min(MINIMUM_LENGTH_FOR_POSTALCODE)
        .max(MAXIMUM_LENGTH_FOR_POSTALCODE),
    iec: Joi.number()
        .min(MINIMUM_LENGTH_FOR_IEC)
        .max(MAXIMUM_LENGTH_FOR_IEC),
    org_currency: Joi.string()
        .min(MINIMUM_LENGTH_FOR_ORGCURRENCY)
        .max(MAXIMUM_LENGTH_FOR_ORGCURRENCY),
    fiscal_year: Joi.number()
        .min(MINIMUM_LENGTH_FOR_FISCALYEAR)
        .max(MAXIMUM_LENGTH_FOR_FISCALYEAR),
    contact_no: Joi.number()
            .min(MINIMUM_LENGTH_FOR_CONTECTNO)
            .max(MAXIMUM_LENGTH_FOR_CONTECTNO),
    email: Joi.string()
        .min(MINIMUM_LENGTH_FOR_EMAIL)
        .max(MAXIMUM_LENGTH_FOR_EMAIL),
        default_org_flag:Joi.boolean(),
    is_gst: Joi.boolean()

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
    createOrganisation,
    deleteOrganisation,
    updateOrganisationById,
    getOrganisation
}
