import constants from "../constants";
const { ERROR } = constants;

const throwError = (res, e) => {
    res.status(ERROR).json({ error: e, message: e?.message });
};

const OK = (errorCode, res, jsonValue) => {
    res.status(errorCode).json(Object.assign({ success: true }, jsonValue));
};

export { throwError, OK };
