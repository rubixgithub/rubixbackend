import Role from "../../../models/role";
const all = async () => Role.findAll();

const byId = async (id) =>
    Role.findOne({
        where: {
            id
        }
    });

const byName = async (name) =>
    Role.findOne({
        where: {
            name
        }
    });

export default {
    all,
    byId,
    byName
};
