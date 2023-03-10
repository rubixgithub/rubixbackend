import OrganizationUser from "../../../models/organisation_user";

const create = async (userDetails) => OrganizationUser.create(userDetails);

export default {
    create
};
