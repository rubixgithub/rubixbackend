import errorCodes from "./errorCodes"
import errorMessages from './errorMessages'

const ports = {
    DEV_SERVER_PORT: 5000
}

const limiters = {
    MINIMUM_LENGTH_FOR_NAME: 3,
    MAXIMUM_LENGTH_FOR_NAME: 30,
    MINIMUM_LENGTH_FOR_PASSWORD: 6,
    MINIMUM_LENGTH_FOR_EMAIL: 10,
    MAXIMUM_LENGTH_FOR_EMAIL: 45,
    // Organisational constant
    MINIMUM_LENGTH_FOR_LOGO:5,
    MAXIMUM_LENGTH_FOR_LOGO:50,
    MINIMUM_LENGTH_FOR_INDUSTRY:5,
    MAXIMUM_LENGTH_FOR_INDUSTRY:50,
    MINIMUM_LENGTH_FOR_STATETERIYORY:5,
    MAXIMUM_LENGTH_FOR_STATETERIYORY:50,
    MINIMUM_LENGTH_FOR_ADDRESS:5,
    MAXIMUM_LENGTH_FOR_ADDRESS:100,
    MINIMUM_LENGTH_FOR_CITY:3,
    MAXIMUM_LENGTH_FOR_CITY:10,
    MINIMUM_LENGTH_FOR_POSTALCODE:3,
    MAXIMUM_LENGTH_FOR_POSTALCODE:10,
    MINIMUM_LENGTH_FOR_IEC:1,
    MAXIMUM_LENGTH_FOR_IEC:5,
    MINIMUM_LENGTH_FOR_ORGCURRENCY:2,
    MAXIMUM_LENGTH_FOR_ORGCURRENCY:10,
    MINIMUM_LENGTH_FOR_FISCALYEAR:4,
    MAXIMUM_LENGTH_FOR_FISCALYEAR:11,
    MINIMUM_LENGTH_FOR_CONTECTNO:5,
    MAXIMUM_LENGTH_FOR_CONTECTNO:12,
    MINIMUM_LENGTH_FOR_COUNTRYID:2,
    MAXIMUM_LENGTH_FOR_COUNTRYID:5



}
const successMessages = {
    USER_IS_DELETED: `User is Deleted`,
    USER_IS_UPDATED: `User is Updated`,
    ACCESS_ALREADY_EXISTS:`Access all ready exists`,
    ACCESS_IS_DELETED:`Access is decline`,
    ACCESS_IS_NOT_EXISTS:`Access is not exists`,

    ORGANISATION_ALREADY_EXISTS:`Organisation already exists`,
    ORGANISATION_IS_DELETED:`Organisation is decline`,
    ORGANISATION_IS_UPDATED:`Organisation is update`,
    ORGANISATION_IS_NOT_EXISTS:`Organisation is not exists`,
    ORGANISATION_IS_NOT_EXISTS:`Organisation is not exists`,

    ROLE_ALREADY_EXISTS:`Role is already exists`,
    ROLE_IS_DELETED:`Role is decline`,
    ROLE_IS_NOT_EXISTS:`Role is not exists`,
    ROLE_IS_UPDATED : `Role is created`,
    ROLE_IS_NOT_EXISTS:`Role is not exists`,
    
    LOG_IS_UPDATED:`Log is created`,
    LOG_IS_NOT_EXISTS:`Log is updated`,

    ADDRESS_ALREADY_EXISTS:`Address all ready exists`,
    ADDRESS_IS_DELETED:`Address is decline`,
    ADDRESS_IS_NOT_EXISTS:`Address is not exists`,
    ADDRESS_IS_UPDATED:`Address is updated`,

    BRANCH_ALREADY_EXISTS:`Branch all ready exists`,
    BRANCH_IS_DELETED:`Branch is decline`,
    BRANCH_IS_NOT_EXISTS:`Branch is not exists`,
    
    BUSINESSPARTENERTYPE_ALREADY_EXISTS:`Business Partner Type all ready exists`,
    BUSINESSPARTENERTYPE_IS_DELETED:`Business Partner Type is decline`,
    BUSINESSPARTENERTYPE_IS_NOT_EXISTS:`Business Partner Type is not exists`,

    BUSINESSPARTNER_ALREADY_EXISTS:`Business Partner all ready exists`,
    BUSINESSPARTNER_IS_DELETED:`Business Partner is decline`,
    BUSINESSPARTNER_IS_NOT_EXISTS:`Business Partner is not exists`,

    CONTECTPERSON_ALREADY_EXISTS:`Contect Person all ready exists`,
    CONTECTPERSON_IS_DELETED:`Contect Person is decline`,
    CONTECTPERSON_IS_NOT_EXISTS:`Contect Person is not exists`,
    CONTECTPERSON_IS_UPDATED:`Contect Person is updated`,

    CUSTOMER_ALREADY_EXISTS:`Customer all ready exists`,
    CUSTOMER_IS_DELETED:`Customer is decline`,
    CUSTOMER_IS_NOT_EXISTS:`Customer is not exists`,
    CUSTOMER_IS_UPDATED:`Customer is updated`,

    CUSTOMERGROUP_ALREADY_EXISTS:`Customer Group all ready exists`,
    CUSTOMERGROUP_IS_DELETED:`Customer Group is decline`,
    CUSTOMERGROUP_IS_NOT_EXISTS:`Customer Group is not exists`,
    CUSTOMERGROUP_IS_UPDATED:`Customer Group is updated`,

    DOCUMENTTYPE_ALREADY_EXISTS:`Document Type all ready exists`,
    DOCUMENTTYPE_IS_DELETED:`Document Type is decline`,
    DOCUMENTTYPE_IS_NOT_EXISTS:`Document Type is not exists`,

    EMAIL_ALREADY_EXISTS:`Email all ready exists`,
    EMAIL_IS_DELETED:`Email is decline`,
    EMAIL_IS_NOT_EXISTS:`Email is not exists`,
    
    EXPORTS_ALREADY_EXISTS:`Exports all ready exists`,
    EXPORTS_IS_DELETED:`Exports is decline`,
    EXPORTS_IS_NOT_EXISTS:`Exports is not exists`,

    GISTIN_ALREADY_EXISTS:`Gistin all ready exists`,
    GISTIN_IS_DELETED:`Gistin is decline`,
    GISTIN_IS_NOT_EXISTS:`Gistin is not exists`,
    GISTIN_IS_UPDATED:`Gistin is updated`,


    GST_ALREADY_EXISTS:`Gst all ready exists`,
    GST_IS_DELETED:`Gst is decline`,
    GST_IS_NOT_EXISTS:`Gst is not exists`,

    ICADVICE_ALREADY_EXISTS:`Ic Advice all ready exists`,
    ICADVICE_IS_DELETED:`Ic Advice is decline`,
    ICADVICE_IS_NOT_EXISTS:`Ic Advice is not exists`,

    PAYMENTTERM_ALREADY_EXISTS:`Payment term all ready exists`,
    PAYMENTTERM_IS_DELETED:`Payment term is decline`,
    PAYMENTTERM_IS_NOT_EXISTS:`Payment term is not exists`,

    PRODUCT_ALREADY_EXISTS:`Product all ready exists`,
    PRODUCT_IS_DELETED:`Product is decline`,
    PRODUCT_IS_NOT_EXISTS:`Product is not exists`,

    PRODUCTLIST_ALREADY_EXISTS:`Product list all ready exists`,
    PRODUCTLIST_IS_DELETED:`Product list is decline`,
    PRODUCTLIST_IS_NOT_EXISTS:`Product list is not exists`,

    PRODUCTGROUP_ALREADY_EXISTS:`Product group all ready exists`,
    PRODUCTGROUP_IS_DELETED:`Product group is decline`,
    PRODUCTGROUP_IS_NOT_EXISTS:`Product group is not exists`,
    
    SALESORDER_ALREADY_EXISTS:`Sales order all ready exists`,
    SALESORDER_IS_DELETED:`Sales order is decline`,
    SALESORDER_IS_NOT_EXISTS:`Sales order is not exists`,

    UNITDIVISION_ALREADY_EXISTS:`Unit division all ready exists`,
    UNITDIVISION_IS_DELETED:`Unit division is decline`,
    UNITDIVISION_IS_NOT_EXISTS:`Unit division is not exists`,

    USERLOG_ALREADY_EXISTS:`User log all ready exists`,
    USERLOG_IS_DELETED:`User log is decline`,
    USERLOG_IS_NOT_EXISTS:`User log is not exists`,

    WEARHOUSE_ALREADY_EXISTS:`Wearhouse all ready exists`,
    WEARHOUSE_IS_DELETED:`Wearhouse is decline`,
    GWEARHOUSE_IS_NOT_EXISTS:`Wearhouse is not exists`,
}


export default {
    ...ports,
    ...limiters,
    ...errorCodes,
    ...errorMessages,
    ...successMessages,
}
