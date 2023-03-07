import Joi from 'joi'
import constants from '../../constants'

const {
    MINIMUM_LENGTH_FOR_CONTRACTDATE,
    MAXIMUM_LENGTH_FOR_CONTRACTDATE,
    MINIMUM_LENGTH_FOR_PRODUCT_LIST,
    MAXIMUM_LENGTH_FOR_PRODUCT_LIST,
    MINIMUM_LENGTH_FOR_LC_NUMBER_ID,
    MAXIMUM_LENGTH_FOR_LC_NUMBER_ID,
    MINIMUM_LENGTH_FOR_CREATED_BY,
    MAXIMUM_LENGTH_FOR_CREATED_BY,
    MINIMUM_LENGTH_FOR_COUNTRY,
    MAXIMUM_LENGTH_FOR_COUNTRY,
    MINIMUM_LENGTH_FOR_EXPECTED_SHIPMENT_DATE,
    MAXIMUM_LENGTH_FOR_EXPECTED_SHIPMENT_DATE,
    MINIMUM_LENGTH_FOR_COUNTRY_FINAL_DESTINATION,
    MAXIMUM_LENGTH_FOR_COUNTRY_FINAL_DESTINATION,
    MINIMUM_LENGTH_FOR_FINAL_DESTINATION,
    MAXIMUM_LENGTH_FOR_FINAL_DESTINATION,
    MINIMUM_LENGTH_FOR_PORT_OF_DISCHARGE,
    MAXIMUM_LENGTH_FOR_PORT_OF_DISCHARGE,
    MINIMUM_LENGTH_FOR_PORT_OF_LOADING,
    MAXIMUM_LENGTH_FOR_PORT_OF_LOADING,
    MINIMUM_LENGTH_FOR_PLACE_OF_TRANSPORT,
    MAXIMUM_LENGTH_FOR_PLACE_OF_TRANSPORT,
    MINIMUM_LENGTH_FOR_PLACEOFDELIVERY,
    MAXIMUM_LENGTH_FOR_PLACEOFDELIVERY,
    MINIMUM_LENGTH_FOR_PLACEOFRECEIPT,
    MAXIMUM_LENGTH_FOR_PLACEOFRECEIPT,
    MINIMUM_LENGTH_FOR_PRECARRIAGEBY,
    MAXIMUM_LENGTH_FOR_PRECARRIAGEBY,
    MINIMUM_LENGTH_FOR_SHIPPINGMARKH,
    MAXIMUM_LENGTH_FOR_SHIPPINGMARKH,
    MINIMUM_LENGTH_FOR_DESCRIPTIONOFGOODS,
    MAXIMUM_LENGTH_FOR_DESCRIPTIONOFGOODS,
    MINIMUM_LENGTH_FOR_INCOTERM2,
    MAXIMUM_LENGTH_FOR_INCOTERM2,
    MINIMUM_LENGTH_FOR_INCOTERM1,
    MAXIMUM_LENGTH_FOR_INCOTERM1,
    MINIMUM_LENGTH_FOR_TERMSOFPAYMENTTEXT,
    MAXIMUM_LENGTH_FOR_TERMSOFPAYMENTTEXT,
    MINIMUM_LENGTH_FOR_PAYMENTTERM,
    MAXIMUM_LENGTH_FOR_PAYMENTTERM,
    MINIMUM_LENGTH_FOR_LANGUAGE,
    MAXIMUM_LENGTH_FOR_LANGUAGE,
    MINIMUM_LENGTH_FOR_TYPR_OF_SHIPMENT_CONTAINER,
    MAXIMUM_LENGTH_FOR_TYPR_OF_SHIPMENT_CONTAINER,
    MINIMUM_LENGTH_FOR_SALLER_REFERENCE,
    MAXIMUM_LENGTH_FOR_SALLER_REFERENCE,
    MINIMUM_LENGTH_FOR_SHIPMENT_TYPE,
    MAXIMUM_LENGTH_FOR_SHIPMENT_TYPE,
    MINIMUM_LENGTH_FOR_CURRENCY,
    MAXIMUM_LENGTH_FOR_CURRENCY,
    MINIMUM_LENGTH_FOR_BUYER_REFERENCE,
    MAXIMUM_LENGTH_FOR_BUYER_REFERENCE,
    MINIMUM_LENGTH_FOR_ADDITIONAL_INFORMATION,
    MAXIMUM_LENGTH_FOR_ADDITIONAL_INFORMATION,
    
} = constants

import { throwError } from '../../util/helper'

const createExports = async (req, res, next) => {
    const schema = Joi.object({
        contract_date: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CONTRACTDATE)
            .max(MAXIMUM_LENGTH_FOR_CONTRACTDATE)
            .required(),
        currency: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CURRENCY)
            .max(MAXIMUM_LENGTH_FOR_CURRENCY)
            .required(),
        language: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LANGUAGE)
            .max(MAXIMUM_LENGTH_FOR_LANGUAGE)
            .required(),
        payment_term: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PAYMENTTERM)
            .max(MAXIMUM_LENGTH_FOR_PAYMENTTERM)
            .required(),
        terms_of_payment_text: Joi.string()
            .min(MINIMUM_LENGTH_FOR_TERMSOFPAYMENTTEXT)
            .max(MAXIMUM_LENGTH_FOR_TERMSOFPAYMENTTEXT)
            .required(),
        inco_term_1: Joi.string()
            .min(MINIMUM_LENGTH_FOR_INCOTERM1)
            .max(MAXIMUM_LENGTH_FOR_INCOTERM1)
            .required(),
        inco_term_2: Joi.string()
            .min(MINIMUM_LENGTH_FOR_INCOTERM2)
            .max(MAXIMUM_LENGTH_FOR_INCOTERM2)
            .required(),
        description_of_goods: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DESCRIPTIONOFGOODS)
            .max(MAXIMUM_LENGTH_FOR_DESCRIPTIONOFGOODS)
            .required(),
        shipping_mark_h: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SHIPPINGMARKH)
            .max(MAXIMUM_LENGTH_FOR_SHIPPINGMARKH)
            .required(),
        pre_carriage_by: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PRECARRIAGEBY)
            .max(MAXIMUM_LENGTH_FOR_PRECARRIAGEBY)
            .required(),
        place_of_receipt: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PLACEOFRECEIPT)
            .max(MAXIMUM_LENGTH_FOR_PLACEOFRECEIPT)
            .required(),
        place_of_delivery: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PLACEOFDELIVERY)
            .max(MAXIMUM_LENGTH_FOR_PLACEOFDELIVERY)
            .required(),
        mode_of_transport: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PLACE_OF_TRANSPORT)
            .max(MAXIMUM_LENGTH_FOR_PLACE_OF_TRANSPORT)
            .required(),
        port_of_loading: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PORT_OF_LOADING)
            .max(MAXIMUM_LENGTH_FOR_PORT_OF_LOADING)
            .required(),
        port_of_discharge: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PORT_OF_DISCHARGE)
            .max(MAXIMUM_LENGTH_FOR_PORT_OF_DISCHARGE)
            .required(),
        final_destination: Joi.string()
            .min(MINIMUMFINAL_DESTINATION)
            .max(MAXIMUM_LENGTH_FOR_FINAL_DESTINATION)
            .required(),
        country_final_destination: Joi.string()
            .min(MINIMUM_LENGTH_FOR_COUNTRY_FINAL_DESTINATION)
            .max(MAXIMUM_LENGTH_FOR_COUNTRY_FINAL_DESTINATION)
            .required(),
        expected_shipment_date: Joi.string()
            .min(MINIMUM_LENGTH_FOR_EXPECTED_SHIPMENT_DATE)
            .max(MAXIMUM_LENGTH_FOR_EXPECTED_SHIPMENT_DATE)
            .required(),
        country: Joi.string()
            .min(MINIMUM_LENGTH_FOR_COUNTRY)
            .max(MAXIMUM_LENGTH_FOR_COUNTRY)
            .required(),
        created_by: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CREATED_BY)
            .max(MAXIMUM_LENGTH_FOR_CREATED_BY)
            .required(),
        lc_number_id: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LC_NUMBER_ID)
            .max(MAXIMUM_LENGTH_FOR_LC_NUMBER_ID)
            .required(),
        product_list: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PRODUCT_LIST)
            .max(MAXIMUM_LENGTH_FOR_PRODUCT_LIST)
            .required(),
        type_of_shipment_container: Joi.string()
            .min(MINIMUM_LENGTH_FOR_TYPR_OF_SHIPMENT_CONTAINER)
            .max(MAXIMUM_LENGTH_FOR_TYPR_OF_SHIPMENT_CONTAINER)
            .required(),
        shipment_type: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SHIPMENT_TYPE)
            .max(MAXIMUM_LENGTH_FOR_SHIPMENT_TYPE)
            .required(),
        seller_reference: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SALLER_REFERENCE)
            .max(MAXIMUM_LENGTH_FOR_SALLER_REFERENCE)
            .required(),
        buyer_reference: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BUYER_REFERENCE)
            .max(MAXIMUM_LENGTH_FOR_BUYER_REFERENCE)
            .required(),
        additional_information: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDITIONAL_INFORMATION)
            .max(MAXIMUM_LENGTH_FOR_ADDITIONAL_INFORMATION)
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

const deleteExports = async (req, res, next) => validateId(req, res, next)

const getExports = async (req, res, next) => validateId(req, res, next)


const updateExportsById = async (req, res, next) => {
    const schema = Joi.object({
        contract_date: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CONTRACTDATE)
            .max(MAXIMUM_LENGTH_FOR_CONTRACTDATE),
        currency: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CURRENCY)
            .max(MAXIMUM_LENGTH_FOR_CURRENCY),
        language: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LANGUAGE)
            .max(MAXIMUM_LENGTH_FOR_LANGUAGE),
        payment_term: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PAYMENTTERM)
            .max(MAXIMUM_LENGTH_FOR_PAYMENTTERM),
        terms_of_payment_text: Joi.string()
            .min(MINIMUM_LENGTH_FOR_TERMSOFPAYMENTTEXT)
            .max(MAXIMUM_LENGTH_FOR_TERMSOFPAYMENTTEXT),
        inco_term_1: Joi.string()
            .min(MINIMUM_LENGTH_FOR_INCOTERM1)
            .max(MAXIMUM_LENGTH_FOR_INCOTERM1),
        inco_term_2: Joi.string()
            .min(MINIMUM_LENGTH_FOR_INCOTERM2)
            .max(MAXIMUM_LENGTH_FOR_INCOTERM2),
        description_of_goods: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DESCRIPTIONOFGOODS)
            .max(MAXIMUM_LENGTH_FOR_DESCRIPTIONOFGOODS),
        shipping_mark_h: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SHIPPINGMARKH)
            .max(MAXIMUM_LENGTH_FOR_SHIPPINGMARKH),
        pre_carriage_by: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PRECARRIAGEBY)
            .max(MAXIMUM_LENGTH_FOR_PRECARRIAGEBY),
        place_of_receipt: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PLACEOFRECEIPT)
            .max(MAXIMUM_LENGTH_FOR_PLACEOFRECEIPT),
        place_of_delivery: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PLACEOFDELIVERY)
            .max(MAXIMUM_LENGTH_FOR_PLACEOFDELIVERY),
        mode_of_transport: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PLACE_OF_TRANSPORT)
            .max(MAXIMUM_LENGTH_FOR_PLACE_OF_TRANSPORT),
        port_of_loading: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PORT_OF_LOADING)
            .max(MAXIMUM_LENGTH_FOR_PORT_OF_LOADING),
        port_of_discharge: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PORT_OF_DISCHARGE)
            .max(MAXIMUM_LENGTH_FOR_PORT_OF_DISCHARGE),
        final_destination: Joi.string()
            .min(MINIMUM_LENGTH_FOR_FINAL_DESTINATION)
            .max(MAXIMUM_LENGTH_FOR_FINAL_DESTINATION),
        country_final_destination: Joi.string()
            .min(MINIMUM_LENGTH_FOR_COUNTRY_FINAL_DESTINATION)
            .max(MAXIMUM_LENGTH_FOR_COUNTRY_FINAL_DESTINATION),
        expected_shipment_date: Joi.string()
            .min(MINIMUM_LENGTH_FOR_EXPECTED_SHIPMENT_DATE)
            .max(MAXIMUM_LENGTH_FOR_EXPECTED_SHIPMENT_DATE),
        country: Joi.string()
            .min(MINIMUM_LENGTH_FOR_COUNTRY)
            .max(MAXIMUM_LENGTH_FOR_COUNTRY),
        created_by: Joi.string()
            .min(MINIMUM_LENGTH_FOR_CREATED_BY)
            .max(MAXIMUM_LENGTH_FOR_CREATED_BY),
        lc_number_id: Joi.string()
            .min(MINIMUM_LENGTH_FOR_LC_NUMBER_ID)
            .max(MAXIMUM_LENGTH_FOR_LC_NUMBER_ID),
        product_list: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PRODUCT_LIST)
            .max(MAXIMUM_LENGTH_FOR_PRODUCT_LIST),
        type_of_shipment_container: Joi.string()
            .min(MINIMUM_LENGTH_FOR_TYPR_OF_SHIPMENT_CONTAINER)
            .max(MAXIMUM_LENGTH_FOR_TYPR_OF_SHIPMENT_CONTAINER),
        shipment_type: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SHIPMENT_TYPE)
            .max(MAXIMUM_LENGTH_FOR_SHIPMENT_TYPE),
        seller_reference: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SALLER_REFERENCE)
            .max(MAXIMUM_LENGTH_FOR_SALLER_REFERENCE),
        buyer_reference: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BUYER_REFERENCE)
            .max(MAXIMUM_LENGTH_FOR_BUYER_REFERENCE),
        additional_information: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ADDITIONAL_INFORMATION)
            .max(MAXIMUM_LENGTH_FOR_ADDITIONAL_INFORMATION)

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
    createExports,
    deleteExports,
    updateExportsById,
    getExports
}
