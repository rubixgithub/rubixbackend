import Organization from "../../../models/organisation";
const byId = async (id) =>
    Organization.destroy({
        where: {
            id
        }
    });

export default {
    byId
};
