import Joi from "joi";
import constants from "../../constants";

const {
    MAXIMUM_LENGTH_FOR_PRODUCT_CODE,
    MINIMUM_LENGTH_FOR_PRODUCT_CODE,
    MAXIMUM_LENGTH_FOR_PRODUCT_NAME,
    MINIMUM_LENGTH_FOR_PRODUCT_NAME,
    MAXIMUM_LENGTH_FOR_PRODUCT_DESCRIPTION,
    MINIMUM_LENGTH_FOR_PRODUCT_DESCRIPTION,
    MAXIMUM_LENGTH_FOR_HSN_CODE,
    MINIMUM_LENGTH_FOR_HSN_CODE,
    MAXIMUM_LENGTH_FOR_DIMENSION_H,
    MINIMUM_LENGTH_FOR_DIMENSION_H,
    MAXIMUM_LENGTH_FOR_DIMENSION_W,
    MINIMUM_LENGTH_FOR_DIMENSION_W,
    MAXIMUM_LENGTH_FOR_DIMENSION_L,
    MINIMUM_LENGTH_FOR_DIMENSION_L,
    MAXIMUM_LENGTH_FOR_WEIGHT,
    MINIMUM_LENGTH_FOR_WEIGHT,
    MAXIMUM_LENGTH_FOR_BRAND_ID,
    MINIMUM_LENGTH_FOR_BRAND_ID,
    MAXIMUM_LENGTH_FOR_MPN,
    MINIMUM_LENGTH_FOR_MPN,
    MAXIMUM_LENGTH_FOR_UPC,
    MINIMUM_LENGTH_FOR_UPC,
    MAXIMUM_LENGTH_FOR_ISBN,
    MINIMUM_LENGTH_FOR_ISBN,
    MAXIMUM_LENGTH_FOR_EAN,
    MINIMUM_LENGTH_FOR_EAN,
    MAXIMUM_LENGTH_FOR_SALES_PRICE,
    MINIMUM_LENGTH_FOR_SALES_PRICE,
    MAXIMUM_LENGTH_FOR_MIN_SALES_PRICE,
    MINIMUM_LENGTH_FOR_MIN_SALES_PRICE,
    MAXIMUM_LENGTH_FOR_PRODUCT_GROUP_ID,
    MINIMUM_LENGTH_FOR_PRODUCT_GROUP_ID,
    MAXIMUM_LENGTH_FOR_TAX_RATE,
    MINIMUM_LENGTH_FOR_TAX_RATE,
    MAXIMUM_LENGTH_FOR_MIN_QUANTITY_FOR_SALE,
    MINIMUM_LENGTH_FOR_MIN_QUANTITY_FOR_SALE,
    MAXIMUM_LENGTH_FOR_COST_OF_PRODUCT,
    MINIMUM_LENGTH_FOR_COST_OF_PRODUCT,
    MAXIMUM_LENGTH_FOR_SHELF_TIME,
    MINIMUM_LENGTH_FOR_SHELF_TIME
} = constants;

import { throwError } from "../../util/helper";

const createProduct = async (req, res, next) => {
    const schema = Joi.object({
        product_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PRODUCT_CODE)
            .max(MAXIMUM_LENGTH_FOR_PRODUCT_CODE)
            .required(),
        product_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PRODUCT_NAME)
            .max(MAXIMUM_LENGTH_FOR_PRODUCT_NAME)
            .required(),
        product_description: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PRODUCT_DESCRIPTION)
            .max(MAXIMUM_LENGTH_FOR_PRODUCT_DESCRIPTION)
            .required(),
        unit_of_measurement_id: Joi.string().uuid().required(),
        hsn_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_HSN_CODE)
            .max(MAXIMUM_LENGTH_FOR_HSN_CODE),
        dimension_h: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DIMENSION_H)
            .max(MAXIMUM_LENGTH_FOR_DIMENSION_H),

        dimension_w: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DIMENSION_W)
            .max(MAXIMUM_LENGTH_FOR_DIMENSION_W),
        dimension_l: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DIMENSION_L)
            .max(MAXIMUM_LENGTH_FOR_DIMENSION_L),

        weight: Joi.string()
            .min(MINIMUM_LENGTH_FOR_WEIGHT)
            .max(MAXIMUM_LENGTH_FOR_WEIGHT),
        manufacturer_id: Joi.string().uuid().required(),
        brand_id: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BRAND_ID)
            .max(MAXIMUM_LENGTH_FOR_BRAND_ID),
        mpn: Joi.string()
            .min(MINIMUM_LENGTH_FOR_MPN)
            .max(MAXIMUM_LENGTH_FOR_MPN)
            .required(),
        upc: Joi.string()
            .min(MINIMUM_LENGTH_FOR_UPC)
            .max(MAXIMUM_LENGTH_FOR_UPC)
            .required(),
        isbn: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ISBN)
            .max(MAXIMUM_LENGTH_FOR_ISBN)
            .required(),
        ean: Joi.string()
            .min(MINIMUM_LENGTH_FOR_EAN)
            .max(MAXIMUM_LENGTH_FOR_EAN)
            .required(),
        sales_price: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SALES_PRICE)
            .max(MAXIMUM_LENGTH_FOR_SALES_PRICE)
            .required(),
        min_sales_price: Joi.string()
            .min(MINIMUM_LENGTH_FOR_MIN_SALES_PRICE)
            .max(MAXIMUM_LENGTH_FOR_MIN_SALES_PRICE)
            .required(),
        product_group_id: Joi.string().uuid(),
        tax_rate: Joi.string()
            .min(MINIMUM_LENGTH_FOR_TAX_RATE)
            .max(MAXIMUM_LENGTH_FOR_TAX_RATE)
            .required(),
        min_quanity_for_sale: Joi.string()
            .min(MINIMUM_LENGTH_FOR_MIN_QUANTITY_FOR_SALE)
            .max(MAXIMUM_LENGTH_FOR_MIN_QUANTITY_FOR_SALE)
            .required(),
        cost_of_product: Joi.string()
            .min(MINIMUM_LENGTH_FOR_COST_OF_PRODUCT)
            .max(MAXIMUM_LENGTH_FOR_COST_OF_PRODUCT)
            .required(),
        shelf_time: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SHELF_TIME)
            .max(MAXIMUM_LENGTH_FOR_SHELF_TIME)
            .required()
    });
    const validate = schema.validate(req.body);

    if (validate && validate.error) {
        throwError(res, {
            error: validate.error
        });
    } else if (validate && validate.value) {
        await next();
    }
};

const deleteProduct = async (req, res, next) => validateId(req, res, next);

const getProduct = async (req, res, next) => validateId(req, res, next);

const updateProductById = async (req, res, next) => {
    const schema = Joi.object({
        product_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PRODUCT_CODE)
            .max(MAXIMUM_LENGTH_FOR_PRODUCT_CODE),
        product_name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PRODUCT_NAME)
            .max(MAXIMUM_LENGTH_FOR_PRODUCT_NAME),
        product_description: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PRODUCT_DESCRIPTION)
            .max(MAXIMUM_LENGTH_FOR_PRODUCT_DESCRIPTION),
        unit_of_measurement_id: Joi.string().uuid().required(),
        hsn_code: Joi.string()
            .min(MINIMUM_LENGTH_FOR_HSN_CODE)
            .max(MAXIMUM_LENGTH_FOR_HSN_CODE),
        dimension_h: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DIMENSION_H)
            .max(MAXIMUM_LENGTH_FOR_DIMENSION_H),
        dimension_w: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DIMENSION_W)
            .max(MAXIMUM_LENGTH_FOR_DIMENSION_W),
        dimension_l: Joi.string()
            .min(MINIMUM_LENGTH_FOR_DIMENSION_L)
            .max(MAXIMUM_LENGTH_FOR_DIMENSION_L),
        weight: Joi.string()
            .min(MINIMUM_LENGTH_FOR_WEIGHT)
            .max(MAXIMUM_LENGTH_FOR_WEIGHT),
        manufacturer_id: Joi.string().uuid().required(),
        brand_id: Joi.string()
            .min(MINIMUM_LENGTH_FOR_BRAND_ID)
            .max(MAXIMUM_LENGTH_FOR_BRAND_ID),
        mpn: Joi.string()
            .min(MINIMUM_LENGTH_FOR_MPN)
            .max(MAXIMUM_LENGTH_FOR_MPN),
        upc: Joi.string()
            .min(MINIMUM_LENGTH_FOR_UPC)
            .max(MAXIMUM_LENGTH_FOR_UPC),
        isbn: Joi.string()
            .min(MINIMUM_LENGTH_FOR_ISBN)
            .max(MAXIMUM_LENGTH_FOR_ISBN),
        ean: Joi.string()
            .min(MINIMUM_LENGTH_FOR_EAN)
            .max(MAXIMUM_LENGTH_FOR_EAN),
        sales_price: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SALES_PRICE)
            .max(MAXIMUM_LENGTH_FOR_SALES_PRICE),
        min_sales_price: Joi.string()
            .min(MINIMUM_LENGTH_FOR_MIN_SALES_PRICE)
            .max(MAXIMUM_LENGTH_FOR_MIN_SALES_PRICE),
        product_group_id: Joi.string()
            .min(MINIMUM_LENGTH_FOR_PRODUCT_GROUP_ID)
            .max(MAXIMUM_LENGTH_FOR_PRODUCT_GROUP_ID),
        tax_rate: Joi.string()
            .min(MINIMUM_LENGTH_FOR_TAX_RATE)
            .max(MAXIMUM_LENGTH_FOR_TAX_RATE),
        min_quanity_for_sale: Joi.string()
            .min(MINIMUM_LENGTH_FOR_MIN_QUANTITY_FOR_SALE)
            .max(MAXIMUM_LENGTH_FOR_MIN_QUANTITY_FOR_SALE),
        cost_of_product: Joi.string()
            .min(MINIMUM_LENGTH_FOR_COST_OF_PRODUCT)
            .max(MAXIMUM_LENGTH_FOR_COST_OF_PRODUCT),
        shelf_time: Joi.string()
            .min(MINIMUM_LENGTH_FOR_SHELF_TIME)
            .max(MAXIMUM_LENGTH_FOR_SHELF_TIME)
    });

    const validate = schema.validate(req.body);

    if (validate && validate.error) {
        throwError(res, {
            error: validate.error
        });
    } else if (validate && validate.value) {
        await validateId(req, res, next);
    }
};

const validateId = async (req, res, next) => {
    const validateParams = Joi.number().required().validate(req.params.id);

    if (validateParams && validateParams.error) {
        throwError(res, {
            error: validateParams.error
        });
    } else if (validateParams && validateParams.value) {
        await next();
    }
};

export default {
    createProduct,
    deleteProduct,
    updateProductById,
    getProduct
};
