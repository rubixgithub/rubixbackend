import User from "../../../models/user";
const create = async (userDetails) => User.create(userDetails);

export default {
    create
};
