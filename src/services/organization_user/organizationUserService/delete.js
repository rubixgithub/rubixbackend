import OrganizationUser from "../../../models/organisation_user";

const byId = async (id) =>
    OrganizationUser.destroy({
        where: {
            id
        }
    });

export default {
    byId
};
