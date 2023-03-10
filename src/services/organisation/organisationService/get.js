import Organization from "../../../models/organisation";
const all = async () => Organization.findAll();

const byId = async (id) =>
    Organization.findOne({
        where: {
            id
        }
    });

const byName = async (name) =>
    Organization.findOne({
        where: {
            name
        }
    });

export default {
    all,
    byId,
    byName
};
