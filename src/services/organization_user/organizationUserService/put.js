import constants from "../../../constants";
import OrganizationUser from "../../../models/organisation_user";

const { ORGANIZATION_USER_IS_UPDATED, ORGANIZATION_USER_IS_NOT_EXISTS } =
    constants;

const byId = async (id, userDetails) => {
    const result = await OrganizationUser.update(userDetails, {
        where: {
            id
        }
    });
    if (result && result.length && result[0]) {
        return { message: ORGANIZATION_USER_IS_UPDATED };
    } else {
        return { message: ORGANIZATION_USER_IS_NOT_EXISTS };
    }
};

export default {
    byId
};
