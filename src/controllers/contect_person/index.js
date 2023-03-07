import {
  getContactPersonService,
  postContactPersonService,
  putContactPersonService,
  deleteContactPersonService,
} from "../../services/contect_person";

import constants from "../../constants";
import { throwError, OK } from "../../util/helper";

const {
  CREATED,
  SUCCESS,
  ALREADY_EXISTS,
  CONTECTPERSON_ALREADY_EXISTS,
  CONTECTPERSON_IS_DELETED,
  CONTECTPERSON_IS_NOT_EXISTS,
} = constants;

const getContectPerson = async (req, res) => {
  try {
    OK(SUCCESS, res, await getContactPersonService.all());
  } catch (e) {
    throwError(res, e);
  }
};

const getContectPersonById = async (req, res) => {
  try {
    OK(SUCCESS, res, await getContactPersonService.byId(req.params.id));
  } catch (e) {
    throwError(res, e);
  }
};

const createContectPerson = async (req, res) => {
  try {
    const contactPersonDetails = {
      ...req.body,
    };

    const contectPersonExists = await getContactPersonService.byEmail(
      contactPersonDetails.email
    );

    if (!contectPersonExists) {
      const newContectPerson = await postContactPersonService.create(
        contactPersonDetails
      );
      OK(CREATED, res, newContectPerson);
    } else {
      OK(ALREADY_EXISTS, res, { message: CONTECTPERSON_ALREADY_EXISTS });
    }
  } catch (e) {
    throwError(res, e);
  }
};

const deleteContectPerson = async (req, res) => {
  try {
    const contectPersonDeleted = await deleteContactPersonService.byId(
      req.params.id
    );
    OK(SUCCESS, res, {
      message: userDeleted
        ? CONTECTPERSON_IS_DELETED
        : CONTECTPERSON_IS_NOT_EXISTS,
    });
  } catch (e) {
    throwError(res, e);
  }
};

const updateContectPersonById = async (req, res) => {
  try {
    const contactPersonDetails = {
      ...req.body,
    };
    const updateContectPersonById = await putContactPersonService.byId(
      req.params.id,
      contactPersonDetails
    );
    OK(SUCCESS, res, updateContectPersonById);
  } catch (e) {
    throwError(res, e);
  }
};

export default {
  createContectPerson,
  getContectPerson,
  getContectPersonById,
  deleteContectPerson,
  updateContectPersonById,
};
