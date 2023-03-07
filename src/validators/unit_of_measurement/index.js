import Joi from "joi";
import constants from "../../constants";

const {
    MAXIMUM_LENGTH_FOR_EMAIL,
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_PASSWORD,
    MINIMUM_LENGTH_FOR_EMAIL,

    MINIMUM_LENGTH_FOR_LANGUAGE,
    MAXIMUM_LENGTH_FOR_LANGUAGE,
    MINIMUM_LENGTH_FOR_PROFILE_PICTURE,
    MAXIMUM_LENGTH_FOR_PROFILE_PICTURE
} = constants;

import { throwError } from "../../util/helper";

const createUnitOfMeasurement = async (req, res, next) => {
    const schema = Joi.object({
        unit_name: Joi.string().min(3).max(45).required(),
        unit_description: Joi.string()
            .min(MINIMUM_LENGTH_FOR_EMAIL)
            .max(MAXIMUM_LENGTH_FOR_EMAIL)
            .required(),
        unit_alias: Joi.string().max(10),

        unit_type: Joi.string().min(3).max(45)
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

const updateUnitOfMeasurement = async (req, res, next) => {
    const schema = Joi.object({
        unit_name: Joi.string().min(3).max(45),
        unit_description: Joi.string().min(3).max(90),
        unit_alias: Joi.string().max(10),

        unit_type: Joi.string().min(3).max(45)
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
    createUnitOfMeasurement,
    updateUnitOfMeasurement
};
