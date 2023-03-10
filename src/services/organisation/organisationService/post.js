import Organization from "../../../models/organisation";
const create = async (organisation) => Organization.create(organisation);

export default {
    create
};
