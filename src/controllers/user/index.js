import {
    getUserService,
    postUserService,
    putUserService,
    deleteUserService
} from "../../services/user";
import { JsonWebToken } from "../../util/jwtHelper";
import constants from "../../constants";
import { throwError, OK } from "../../util/helper";
import { compare, encrypt } from "../../util/encryptionHelper";
import { getRoleService } from "../../services/role";

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    NOT_FOUND,
    BAD_REQUEST,
    EMAIL_ALREADY_EXISTS,
    EMAIL_NOT_EXISTS,
    USER_IS_DELETED,
    USER_IS_NOT_EXISTS,
    PASSWORD_NOT_MACHED,
    EXTECTATION_FAILED,
    NO_CONTENT
} = constants;

const getUsers = async (req, res) => {
    try {
        const users = await getUserService.all();
        if (!users.length) {
            OK(NO_CONTENT, res, { data: users });
        }
        OK(SUCCESS, res, { data: users });
    } catch (e) {
        throwError(res, e);
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await getUserService.byId(req.params.id);
        if (!user) {
            OK(BAD_REQUEST, res, {
                message: `No user found with provided id ${req.params.id}`
            });
        }
        OK(SUCCESS, res, { success: false, data: user });
    } catch (e) {
        throwError(res, e);
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await getUserService.byEmail(email);
        if (!user) {
            OK(NOT_FOUND, res, { message: EMAIL_NOT_EXISTS });
        }
        const isMached = compare(password, user.password) ? true : false;
        if (isMached) {
            const jwtUtil = new JsonWebToken("secret");
            const accessToken = jwtUtil.generate(
                { id: user.id, organization_id: "newOrganisation.id" },
                constants.TOKEN_LIFETIME_IN_SECONDS
            );
            const refreshToken = jwtUtil.generate(
                { id: user.id, organization_id: "newOrganisation.id" },
                constants.REFRESH_LINK_LIFETIME_IN_SECONDS
            );
            const result = {
                accessToken,
                refreshToken
            };
            OK(SUCCESS, res, { data: result });
        } else {
            OK(EXTECTATION_FAILED, res, { message: PASSWORD_NOT_MACHED });
        }
    } catch (e) {
        throwError(res, e);
    }
};

const createUser = async (req, res) => {
    try {
        const { email, password, language, isAdmin, mobileNumber, username } =
            req.body;
        const userExists = await getUserService.byEmail(email);
        if (!userExists) {
            const newUser = await postUserService.create({
                email,
                password,
                language,
                isAdmin,
                mobileNumber,
                username
            });
            const jwtUtil = new JsonWebToken("secret");
            const TOKEN = jwtUtil.generate({ id: newUser.id, isAdmin }, 300);
            OK(CREATED, res, {
                token: TOKEN,
                message: "User successfully added"
            });
        } else {
            OK(ALREADY_EXISTS, res, {
                success: false,
                message: EMAIL_ALREADY_EXISTS
            });
        }
    } catch (e) {
        throwError(res, e);
    }
};

const deleteUser = async (req, res) => {
    try {
        const userDeleted = await deleteUserService.byId(req.params.id);
        OK(SUCCESS, res, {
            message: userDeleted ? USER_IS_DELETED : USER_IS_NOT_EXISTS
        });
    } catch (e) {
        throwError(res, e);
    }
};

const updateUserById = async (req, res) => {
    try {
        const { email, language, mobileNumber } = req.body;
        const updateUserById = await putUserService.byId(req.params.id, {
            email,
            language,
            mobileNumber
        });
        OK(SUCCESS, res, updateUserById);
    } catch (e) {
        throwError(res, e);
    }
};

const forgotPassword = async (req, res) => {
    try {
        const { email, old_password, new_password } = req.body;
        const user = await getUserService.byEmail(email);
        if (user) {
            const isMached = encrypt.comparePassword(
                old_password,
                user.dataValues.password
            );
            if (isMached) {
                const password = encrypt.encryptPassword(new_password);
                const updateUserById = await putUserService.byId(
                    user.dataValues.id,
                    {
                        password
                    }
                );
                OK(SUCCESS, res, updateUserById);
            } else {
                OK(EXTECTATION_FAILED, res, PASSWORD_NOT_MACHED);
            }
        } else {
            OK(SUCCESS, res, USER_IS_NOT_EXISTS);
        }
    } catch (e) {
        throwError(res, e);
    }
};

const addRemoveRoles = async (req, res) => {
    try {
        const { userId, roleToAdd, roleToRemove } = req.body;
        let roleNotExitst = new Array();
        let roleAdded = new Array();
        let roleCouldNotRemove = new Array();
        let roleRemoved = new Array();
        for (const [key, roleId] of Object.entries(roleToAdd)) {
            const role = getRoleService.byId(roleId);
            if (role) {
                roleAdded.push(roleId);
            } else {
                roleNotExitst.push(roleId);
            }
        }
        await addRoles.updateRoles(userId, roleAdded);
        for (const [key, roleId] of Object.entries(roleToRemove)) {
            const role = getRoleService.byId(roleId);
            if (role) {
                roleRemoved.push(roleId);
            } else {
                roleCouldNotRemove.push(roleId);
            }
        }
        // addRoles.updateRoles(roleRemoved)
        OK(SUCCESS, res, USER_IS_NOT_EXISTS);
    } catch (e) {
        throwError(res, e);
    }
};

export default {
    createUser,
    getUsers,
    getUserById,
    deleteUser,
    updateUserById,
    loginUser,
    forgotPassword,
    addRemoveRoles
};
