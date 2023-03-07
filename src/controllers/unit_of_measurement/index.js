import {
  getUnitOfMeasurementService,
  postUnitOfMeasurementService,
  putUnitOfMeasurementService,
  deleteUnitOfMeasurementService,
} from "../../services/unit_of_measurement";

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'


const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    UNIT_MEASUREMENT_ALREADY_EXISTS,
    UNIT_MEASUREMENT_IS_DELETED,
    UNIT_MEASUREMENT_IS_UPDATED,
    UNIT_MEASUREMENT_IS_NOT_EXISTS
} = constants

const getUnitOfMeasurement = async (req, res) => {
  try {
    OK(SUCCESS, res, await getUnitOfMeasurementService.all());
  } catch (e) {
    throwError(res, e);
  }
};

const getUnitOfMeasurementById = async (req, res) => {
  try {
    OK(SUCCESS, res, await getUnitOfMeasurementService.byId(req.params.id));
  } catch (e) {
    throwError(res, e);
  }
};

const createUnitOfMeasurement = async (req, res) => {
  try {
    const unitDetails = {
      unit_name: req.body.name,
      unit_description: req.body.description,
      unit_alias: req.body.aliase,
      unit_type: req.body.type,
    };
    const unitOfMeasurementExists = await getUnitOfMeasurementService.byName(
      unitDetails.unit_name
    );
    if (!unitOfMeasurementExists) {
      const newUnitOfMeasurement = await postUnitOfMeasurementService.create(
        unitDetails
      );
      OK(CREATED, res, newUnitOfMeasurement);
    } else {
      OK(ALREADY_EXISTS, res, { message: UNIT_MEASUREMENT_ALREADY_EXISTS });
    }
  } catch (e) {
    throwError(res, e);
  }
};

const deleteUnitOfMeasurement = async (req, res) => {
  try {
    const unitOfMeasurementDeleted = await deleteUnitOfMeasurementService.byId(
      req.params.id
    );
    OK(SUCCESS, res, {
      message: unitOfMeasurementDeleted ? UNIT_MEASUREMENT_IS_DELETED : UNIT_MEASUREMENT_IS_NOT_EXISTS,
    });
  } catch (e) {
    throwError(res, e);
  }
};

const updateUnitOfMeasurementById = async (req, res) => {
  try {
    const unitDetails = {
        unit_name: req.body.name,
        unit_description: req.body.description,
        unit_alias: req.body.aliase,
        unit_type: req.body.type,
      };
    const updateUnitOfMeasurementById = await putUnitOfMeasurementService.byId(
      req.params.id,
      unitDetails
    );
    OK(SUCCESS, res, updateUnitOfMeasurementById);
  } catch (e) {
    throwError(res, e);
  }
};

export default {
  createUnitOfMeasurement,
  getUnitOfMeasurement,
  getUnitOfMeasurementById,
  deleteUnitOfMeasurement,
  updateUnitOfMeasurementById,
};
