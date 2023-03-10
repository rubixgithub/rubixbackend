import bcrypt from "bcryptjs";

export const encrypt = (password) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
};
export const decrypt = (password) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.decodeBase64(password, salt);
};

export const compare = (password, encodedPassword) => {
    return bcrypt.compareSync(password, encodedPassword);
};
