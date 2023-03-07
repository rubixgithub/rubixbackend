import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_PARTNERTYPE,
    MAXIMUM_LENGTH_FOR_PARTNERTYPE,
    MINIMUM_LENGTH_FOR_PARTNERCOMPANYNAME,
    MAXIMUM_LENGTH_FOR_PARTNERCOMPANYNAME,
    MINIMUM_LENGTH_FOR_PARTNERCONTECTPERSON,
    MAXIMUM_LENGTH_FOR_PARTNERCONTECTPERSON,
    MINIMUM_LENGTH_FOR_PHONE,
    MAXIMUM_LENGTH_FOR_PHONE,
    MINIMUM_LENGTH_FOR_EMAIL,
    MAXIMUM_LENGTH_FOR_EMAIL,
    MINIMUM_LENGTH_FOR_ADDRESS1,
    MAXIMUM_LENGTH_FOR_ADDRESS1,
    MINIMUM_LENGTH_FOR_ADDRESS2,
    MAXIMUM_LENGTH_FOR_ADDRESS2,
    MINIMUM_LENGTH_FOR_CITY,
    MAXIMUM_LENGTH_FOR_CITY,
    MINIMUM_LENGTH_FOR_COUNTRY,
    MAXIMUM_LENGTH_FOR_COUNTRY,
    MINIMUM_LENGTH_FOR_BANKNAMEBRANCH,
    MAXIMUM_LENGTH_FOR_BANKNAMEBRANCH,
    MINIMUM_LENGTH_FOR_WEBSITE,
    MAXIMUM_LENGTH_FOR_WEBSITE,
    MINIMUM_LENGTH_FOR_BANKNAME,
    MAXIMUM_LENGTH_FOR_BANKNAME,
    MINIMUM_LENGTH_FOR_BANKACCOUNTNO,
    MAXIMUM_LENGTH_FOR_BANKACCOUNTNO,
    MINIMUM_LENGTH_FOR_IFSCCODE,
    MAXIMUM_LENGTH_FOR_IFSCCODE,
    MINIMUM_LENGTH_FOR_SWIFTCODE,
    MAXIMUM_LENGTH_FOR_SWIFTCODE,
    MINIMUM_LENGTH_FOR_ADCODE,
    MAXIMUM_LENGTH_FOR_ADCODE,
    MINIMUM_LENGTH_FOR_SUBMISSIONBRANCH,
    MAXIMUM_LENGTH_FOR_SUBMISSIONBRANCH,
    MINIMUM_LENGTH_FOR_BANKADDRESS,
    MAXIMUM_LENGTH_FOR_BANKADDRESS
    
    

} = constants

import { throwError } from '../../util/helper'

const createBusinessPartener = async (req, res, next) => {
    const schema = Joi.object({
        partner_company_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PARTNERCOMPANYNAME)
            .max(MAXIMUM_LENGTH_FOR_PARTNERCOMPANYNAME)
            .required(),
        partner_contact_person: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PARTNERCONTECTPERSON)
            .max(MAXIMUM_LENGTH_FOR_PARTNERCONTECTPERSON)
            .required(),
        contact_number: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PHONE)
            .max(MAXIMUM_LENGTH_FOR_PHONE)
            .required(),
        email_id: Joi.string()
            .min(MINIMUM_LENGTH_FOR_EMAIL)
            .max(MAXIMUM_LENGTH_FOR_EMAIL)
            .required(),
        address_1: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS1)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS1)
            .required(),
        address_2: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS2)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS2)
            .required(),
        city: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CITY)
            .max(MAXIMUM_LENGTH_FOR_CITY)
            .required(),
        country: Joi.string()
            .min(MINIMUM_LENGTH_FOR_COUNTRY)
            .max(MAXIMUM_LENGTH_FOR_COUNTRY)
            .required(),
        website: Joi.string()
            .min(MINIMUM_LENGTH_FOR_WEBSITE)
            .max(MAXIMUM_LENGTH_FOR_WEBSITE)
            .required(),
        bank_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BANKNAME)
            .max(MAXIMUM_LENGTH_FOR_BANKNAME)
            .required(),
        bank_branch: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BANKNAMEBRANCH)
            .max(MAXIMUM_LENGTH_FOR_BANKNAMEBRANCH)
            .required(),
        bank_account_no: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BANKACCOUNTNO)
            .max(MAXIMUM_LENGTH_FOR_BANKACCOUNTNO)
            .required(),
        ifsc_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_IFSCCODE)
            .max(MAXIMUM_LENGTH_FOR_IFSCCODE)
            .required(),
        swift_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SWIFTCODE)
            .max(MAXIMUM_LENGTH_FOR_SWIFTCODE)
            .required(),
        ad_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADCODE)
            .max(MAXIMUM_LENGTH_FOR_ADCODE)
            .required(),
        submission_branch: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SUBMISSIONBRANCH)
            .max(MAXIMUM_LENGTH_FOR_SUBMISSIONBRANCH)
            .required(),
        bank_address: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BANKADDRESS)
            .max(MAXIMUM_LENGTH_FOR_BANKADDRESS)
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

const deleteBusinessPartener = async (req, res, next) => validateId(req, res, next)

const getBusinessPartener = async (req, res, next) => validateId(req, res, next)


const updateBusinessPartenerById = async (req, res, next) => {
    const schema = Joi.object({
        partner_company_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PARTNERCOMPANYNAME)
            .max(MAXIMUM_LENGTH_FOR_PARTNERCOMPANYNAME),
        partner_contact_person: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PARTNERCONTECTPERSON)
            .max(MAXIMUM_LENGTH_FOR_PARTNERCONTECTPERSON),
         contact_number: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PHONE)
            .max(MAXIMUM_LENGTH_FOR_PHONE),
        email_id: Joi.string()
            .min(MINIMUM_LENGTH_FOR_EMAIL)
            .max(MAXIMUM_LENGTH_FOR_EMAIL),
        address_1: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS1)
            .max(MAXIMUM_LENGTH_FOR_ADDRESS1),
        address_2: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDRESS2)
            .max(MAXIMUM_LENGTH_FOR_2),
        city: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CITY)
            .max(MAXIMUM_LENGTH_FOR_CITY),
        country: Joi.string()
            .min(MINIMUM_LENGTH_FOR_COUNTRY)
            .max(MAXIMUM_LENGTH_FOR_COUNTRY),
        website: Joi.string()
            .min(MINIMUM_LENGTH_FOR_WEBSITE)
            .max(MAXIMUM_LENGTH_FOR_WEBSITE),
        bank_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BANKNAME)
            .max(MAXIMUM_LENGTH_FOR_BANKNAME),
        bank_branch: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BANKNAMEBRANCH)
            .max(MAXIMUM_LENGTH_FOR_BANKNAMEBRANCH),
        bank_account_no: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BANKACCOUNTNO)
            .max(MAXIMUM_LENGTH_FOR_BANKACCOUNTNO),
        ifsc_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_IFSCCODE)
            .max(MAXIMUM_LENGTH_FOR_IFSCCODE),
        swift_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SWIFTCODE)
            .max(MAXIMUM_LENGTH_FOR_SWIFTCODE),
        ad_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADCODE)
            .max(MAXIMUM_LENGTH_FOR_ADCODE),
        submission_branch: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SUBMISSIONBRANCH)
            .max(MAXIMUM_LENGTH_FOR_SUBMISSIONBRANCH),
        bank_address: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BANKADDRESS)
            .max(MAXIMUM_LENGTH_FOR_BANKADDRESS)

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
    createBusinessPartener,
    deleteBusinessPartener,
    updateBusinessPartenerById,
    getBusinessPartener
}
