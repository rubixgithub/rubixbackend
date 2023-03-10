import Organization from "../../../models/organisation";
import OrganizationUser from "../../../models/organisation_user";

const all = async () => OrganizationUser.findAll({
    include : [{model: Organization, as: "Organizations"}]
});

const byId = async (id) =>
    OrganizationUser.findOne({
        where: {
            id
        }
    });

const byName = async (name) =>
    OrganizationUser.findOne({
        where: {
            username: name
        }
    });

export default {
    all,
    byId,
    byName
};
