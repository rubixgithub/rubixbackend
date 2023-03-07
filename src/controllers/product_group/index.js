import {
  getProductGroupService,
  postProductGroupService,
  deleteProductGroupService,
  putProductGroupService,
} from "../../services/product_group";

import constants from "../../constants";
import { throwError, OK } from "../../util/helper";

const {
  CREATED,
  SUCCESS,
  ALREADY_EXISTS,
  PRODUCTGROUP_ALREADY_EXISTS,
  PRODUCTGROUP_IS_DELETED,
  PRODUCTGROUP_IS_NOT_EXISTS,
} = constants;

const getProductGroup = async (req, res) => {
  try {
    OK(SUCCESS, res, await getProductGroupService.all());
  } catch (e) {
    throwError(res, e);
  }
};

const getProductGroupById = async (req, res) => {
  try {
    OK(SUCCESS, res, await getProductGroupService.byId(req.params.id));
  } catch (e) {
    throwError(res, e);
  }
};

const createProductGroup = async (req, res) => {
  try {
    const { group_name, group_basis } = req.body;
    const productGroupExists = await getProductGroupService.byName(group_name);
    if (!productGroupExists) {
      const newProductGroup = await postProductGroupService.create({
        group_name,
        group_basis,
      });
      OK(CREATED, res, newProductGroup);
    } else {
      OK(ALREADY_EXISTS, res, { message: PRODUCTGROUP_ALREADY_EXISTS });
    }
  } catch (e) {
    throwError(res, e);
  }
};

const deleteProductGroup = async (req, res) => {
  try {
    const productGroupDeleted = await deleteProductGroupService.byId(
      req.params.id
    );
    OK(SUCCESS, res, {
      message: productGroupDeleted
        ? PRODUCTGROUP_IS_DELETED
        : PRODUCTGROUP_IS_NOT_EXISTS,
    });
  } catch (e) {
    throwError(res, e);
  }
};

const updateProductGroupById = async (req, res) => {
  try {
    const { group_name, group_basis } = req.body;
    const updateProductGroupById = await putProductGroupService.byId(
      req.params.id,
      {
        group_name,
        group_basis,
      }
    );
    OK(SUCCESS, res, updateProductGroupById);
  } catch (e) {
    throwError(res, e);
  }
};

export default {
  createProductGroup,
  getProductGroup,
  getProductGroupById,
  deleteProductGroup,
  updateProductGroupById,
};
