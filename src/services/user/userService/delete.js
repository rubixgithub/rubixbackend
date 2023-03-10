import User from "../../../models/user";
const byId = async (id) =>
    User.destroy({
        where: {
            id
        }
    });

export default {
    byId
};
