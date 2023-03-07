import User from "../../../models/user";

const all = async () => User.findAll();

const byId = async (id) =>
    User.findOne({
        where: {
            id
        }
    });

const byEmail = async (email) =>
    User.findOne({
        where: {
            email
        }
    });

export default {
    all,
    byId,
    byEmail
};
