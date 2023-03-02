import {
  getCustomerGroupService,
  postCustomerGroupService,
  deleteCustomerGroupService,
  putCustomerGroupService,
} from "../../services/customer_group";

import constants from "../../constants";
import { throwError, OK } from "../../util/helper";

const {
  CREATED,
  SUCCESS,
  ALREADY_EXISTS,
  CUSTOMERGROUP_ALREADY_EXISTS,
  CUSTOMERGROUP_IS_DELETED,
  CUSTOMERGROUP_IS_NOT_EXISTS,
} = constants;

const getCustomerGroup = async (req, res) => {
  try {
    OK(SUCCESS, res, await getCustomerGroupService.all());
  } catch (e) {
    throwError(res, e);
  }
};

const getCustomerGroupById = async (req, res) => {
  try {
    OK(SUCCESS, res, await getCustomerGroupService.byId(req.params.id));
  } catch (e) {
    throwError(res, e);
  }
};

const createCustomerGroup = async (req, res) => {
  try {
    const { group_name, group_description } = req.body;
    const customerGroupExists = await getCustomerGroupService.byName(
      group_name
    );
    if (!customerGroupExists) {
      const newCustomerGroup = await postCustomerGroupService.create({
        group_name,
        group_description,
      });
      OK(CREATED, res, newCustomerGroup);
    } else {
      OK(ALREADY_EXISTS, res, { message: CUSTOMERGROUP_ALREADY_EXISTS });
    }
  } catch (e) {
    throwError(res, e);
  }
};

const deleteCustomerGroup = async (req, res) => {
  try {
    const customerGroupDeleted = await deleteCustomerGroupService.byId(
      req.params.id
    );
    OK(SUCCESS, res, {
      message: userDeleted
        ? CUSTOMERGROUP_IS_DELETED
        : CUSTOMERGROUP_IS_NOT_EXISTS,
    });
  } catch (e) {
    throwError(res, e);
  }
};

const updateCustomerGroupById = async (req, res) => {
  try {
    const { group_name, group_description } = req.body;
    const updateCustomerGroupById = await putCustomerGroupService.byId(
      req.params.id,
      {
        group_name,
        group_description,
      }
    );
    OK(SUCCESS, res, updateCustomerGroupById);
  } catch (e) {
    throwError(res, e);
  }
};

export default {
  createCustomerGroup,
  getCustomerGroup,
  getCustomerGroupById,
  deleteCustomerGroup,
  updateCustomerGroupById,
};
