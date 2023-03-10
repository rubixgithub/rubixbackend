import {
    getOrganisationService,
    postOrganisationService,
    deleteOrganisationService,
    putOrganisationService
} from "../../services/organisation";

import { postOrganizationUserService } from "../../services/organization_user";

import { getRoleService } from "../../services/role";
import { getUserService } from "../../services/user";

import constants from "../../constants";
import { throwError, OK } from "../../util/helper";
import { JsonWebToken } from "../../util/jwtHelper";

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    ORGANISATION_ALREADY_EXISTS,
    ORGANISATION_IS_DELETED,
    ORGANISATION_IS_NOT_EXISTS,
    BAD_REQUEST,
    UNAUTHORIZED
} = constants;

const getOrganisation = async (req, res) => {
    try {
        OK(SUCCESS, res, { data: await getOrganisationService.all() });
    } catch (e) {
        throwError(res, e);
    }
};

const getOrganisationById = async (req, res) => {
    try {
        OK(SUCCESS, res, await getOrganisationService.byId(req.params.id));
    } catch (e) {
        throwError(res, e);
    }
};

const createOrganisation = async (req, res) => {
    try {
        const {
            name,
            logo,
            industry,
            country_id,
            state_teritory,
            address_1,
            address_2,
            city,
            postal_code,
            iec,
            org_currency,
            inventory_start_date,
            fiscal_year,
            contact_no,
            email,
            default_org_flag,
            is_gst
        } = req.body;
        const user_id = req.decoded.user.id;
        console.log("user id", req.decoded.user);
        const organisationExists = await getOrganisationService.byName(name);
        if (!organisationExists) {
            const newOrganisation = await postOrganisationService.create({
                name,
                logo,
                industry,
                country_id,
                state_teritory,
                address_1,
                address_2,
                city,
                postal_code,
                iec,
                org_currency,
                inventory_start_date,
                fiscal_year,
                contact_no,
                email,
                default_org_flag,
                is_gst,
                user_id
            });
            OK(CREATED, res, newOrganisation);
        } else {
            OK(ALREADY_EXISTS, res, { message: ORGANISATION_ALREADY_EXISTS });
        }
    } catch (e) {
        throwError(res, e);
    }
};

const setUpOrganisation = async (req, res) => {
    try {
        const organizationDetails = {
            ...req.body
        };
        const { name } = req.body;
        const token = req.headers["jwt-token"];
        const tokenData = JsonWebToken.decode(token);

        const userInfo = await getUserService.byId(tokenData.id);
        if (!userInfo) {
            OK(UNAUTHORIZED, res, {
                success: false,
                message: "Invalid JWT"
            });
        }

        const roleInfo = await getRoleService.byName("Admin");
        if (!roleInfo) {
            throw new Error("No role details found");
        }

        const organisationExists = await getOrganisationService.byName(name);
        if (!organisationExists && tokenData.isAdmin) {
            const newOrganisation = await postOrganisationService.create(
                organizationDetails
            );

            if (newOrganisation) {
                const organizationUser = {
                    organizationId: newOrganisation.id,
                    roleId: roleInfo.id,
                    userId: userInfo.id,
                    username: userInfo.username,
                    defaultOrganisationId: newOrganisation.id
                };
                const orgUser = await postOrganizationUserService.create(
                    organizationUser
                );
                newOrganisation.addOrganizationUser(orgUser);
                const jwtUtil = new JsonWebToken("secret");
                const accessToken = jwtUtil.generate(
                    { id: userInfo.id, organization_id: newOrganisation.id },
                    constants.TOKEN_LIFETIME_IN_SECONDS
                );
                const refreshToken = jwtUtil.generate(
                    { id: userInfo.id, organization_id: newOrganisation.id },
                    constants.REFRESH_LINK_LIFETIME_IN_SECONDS
                );
                const result = {
                    accessToken,
                    refreshToken
                };
                OK(CREATED, res, {
                    message: "Organization setup successfully completed",
                    data: result
                });
            }
        } else {
            OK(ALREADY_EXISTS, res, {
                success: false,
                message: ORGANISATION_ALREADY_EXISTS
            });
        }
    } catch (e) {
        throwError(res, e);
    }
};

const deleteOrganisation = async (req, res) => {
    try {
        const roleDeleted = await deleteOrganisationService.byId(req.params.id);
        OK(SUCCESS, res, {
            message: userDeleted
                ? ORGANISATION_IS_DELETED
                : ORGANISATION_IS_NOT_EXISTS
        });
    } catch (e) {
        throwError(res, e);
    }
};

const updateOrganisationById = async (req, res) => {
    try {
        const {
            name,
            logo,
            industry,
            country_id,
            state_teritory,
            address_1,
            address_2,
            city,
            postal_code,
            iec,
            org_currency,
            inventory_start_date,
            fiscal_year,
            contact_no,
            email,
            default_org_flag,
            is_gst
        } = req.body;
        const updateOrganisationById = await putOrganisationService.byId(
            req.params.id,
            {
                name,
                logo,
                industry,
                country_id,
                state_teritory,
                address_1,
                address_2,
                city,
                postal_code,
                iec,
                org_currency,
                inventory_start_date,
                fiscal_year,
                contact_no,
                email,
                default_org_flag,
                is_gst
            }
        );
        OK(SUCCESS, res, updateOrganisationById);
    } catch (e) {
        throwError(res, e);
    }
};

export default {
    createOrganisation,
    getOrganisation,
    getOrganisationById,
    deleteOrganisation,
    updateOrganisationById,
    setUpOrganisation
};
