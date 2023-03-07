import Joi from "joi";
import constants from "../../constants";

const {
    MAXIMUM_LENGTH_FOR_MANUFACTURER_NAME,
    MINIMUM_LENGTH_FOR_MANUFACTURER_NAME
} = constants;

import { throwError } from "../../util/helper";

const createManufacturer = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_MANUFACTURER_NAME)
            .max(MAXIMUM_LENGTH_FOR_MANUFACTURER_NAME)
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

const updateManufacturerById = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(MINIMUM_LENGTH_FOR_MANUFACTURER_NAME)
            .max(MAXIMUM_LENGTH_FOR_MANUFACTURER_NAME)
            .required()
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

export default {
    createManufacturer,
    updateManufacturerById
};
