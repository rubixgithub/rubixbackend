import {
  getManufacturerService,
  postManufacturerService,
  putManufacturerService,
  deleteManufacturerService,
} from "../../services/manufacturer";

import constants from "../../constants";
import { throwError, OK } from "../../util/helper";

const {
  CREATED,
  SUCCESS,
  ALREADY_EXISTS,
  MANUFACTURER_ALREADY_EXISTS,
  MANUFACTURER_IS_DELETED,
  MANUFACTURER_IS_NOT_EXISTS,
} = constants;

const getManufacturer = async (req, res) => {
  try {
    OK(SUCCESS, res, await getManufacturerService.all());
  } catch (e) {
    throwError(res, e);
  }
};

const getManufacturerById = async (req, res) => {
  try {
    OK(SUCCESS, res, await getManufacturerService.byId(req.params.id));
  } catch (e) {
    throwError(res, e);
  }
};

const createManufacturer = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name)
    const manufacturerExists = await getManufacturerService.byName(name);
    if (!manufacturerExists) {
      const newManufacturer = await postManufacturerService.create({ name });
      OK(CREATED, res, newManufacturer);
    } else {
      OK(ALREADY_EXISTS, res, { message: MANUFACTURER_ALREADY_EXISTS });
    }
  } catch (e) {
    throwError(res, e);
  }
};

const deleteManufacturer = async (req, res) => {
  try {
    const manufacturerDeleted = await deleteManufacturerService.byId(
      req.params.id
    );
    OK(SUCCESS, res, {
      message: manufacturerDeleted
        ? MANUFACTURER_IS_DELETED
        : MANUFACTURER_IS_NOT_EXISTS,
    });
  } catch (e) {
    throwError(res, e);
  }
};

const updateManufacturerById = async (req, res) => {
  try {
    const { name } = req.body;
    const updateManufacturerById = await putManufacturerService.byId(
      req.params.id,
      { name }
    );
    OK(SUCCESS, res, updateManufacturerById);
  } catch (e) {
    throwError(res, e);
  }
};

export default {
  createManufacturer,
  getManufacturer,
  getManufacturerById,
  deleteManufacturer,
  updateManufacturerById,
};
