import {
    getOrganizationUserService,
    postOrganizationUserService,
    putOrganizationUserService,
    deleteOrganizationUserService
} from "../../services/organization_user";

import constants from "../../constants";
import { throwError, OK } from "../../util/helper";

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    ORGANIZATION_USER_IS_DELETED,
    ORGANIZATION_USER_IS_NOT_EXISTS,
    ORGANIZATION_USER_ALREADY_EXISTS
} = constants;

const getOrganizationUsers = async (req, res) => {
    try {
        OK(SUCCESS, res, { data: await getOrganizationUserService.all() });
    } catch (e) {
        throwError(res, e);
    }
};

const getOrganizationUserById = async (req, res) => {
    try {
        OK(SUCCESS, res, await getOrganizationUserService.byId(req.params.id));
    } catch (e) {
        throwError(res, e);
    }
};

const createOrganizationUser = async (req, res) => {
    try {
        const userDetails = {
            ...req.body
        };
        const userExists = await getOrganizationUserService.byName(
            userDetails.username
        );
        if (!userExists) {
            const newUser = await postOrganizationUserService.create(
                userDetails
            );
            OK(CREATED, res, newUser);
        } else {
            OK(ALREADY_EXISTS, res, {
                message: ORGANIZATION_USER_ALREADY_EXISTS
            });
        }
    } catch (e) {
        throwError(res, e);
    }
};

const deleteOrganizationUser = async (req, res) => {
    try {
        const userDeleted = await deleteOrganizationUserService.byId(
            req.params.id
        );
        OK(SUCCESS, res, {
            message: userDeleted
                ? ORGANIZATION_USER_IS_DELETED
                : ORGANIZATION_USER_IS_NOT_EXISTS
        });
    } catch (e) {
        throwError(res, e);
    }
};

const updateOrganizationUserById = async (req, res) => {
    try {
        const userDetails = {
            ...req.body
        };
        const updateUserById = await putOrganizationUserService.byId(
            req.params.id,
            userDetails
        );
        OK(SUCCESS, res, updateUserById);
    } catch (e) {
        throwError(res, e);
    }
};

export default {
    getOrganizationUsers,
    updateOrganizationUserById,
    deleteOrganizationUser,
    createOrganizationUser,
    getOrganizationUserById
};
