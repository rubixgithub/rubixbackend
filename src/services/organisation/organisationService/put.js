import Organization from "../../../models/organisation";
import constants from "../../../constants";

const { ORGANISATION_IS_UPDATED, ORGANISATION_IS_NOT_EXISTS } = constants;

const byId = async (id, organisation) => {
    const result = await Organization.update(organisation, {
        where: {
            id
        }
    });
    if (result && result.length && result[0]) {
        return { message: ORGANISATION_IS_UPDATED };
    } else {
        return { message: ORGANISATION_IS_NOT_EXISTS };
    }
};

export default {
    byId
};
