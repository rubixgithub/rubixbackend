import { Sequelize } from "sequelize";
import sequelize from "../../config";
import OrganizationUser from "../organisation_user";
import { encrypt } from "../../util/encryptionHelper";

const User = sequelize.define("tb_user", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true,
        isEmail: true,
        max: 45
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false,
        max: 255,
        is: /^[0-9a-f]{64}$/i
    },
    language: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        default: false
    },
    mobileNumber: {
        type: Sequelize.STRING(15),
        allowNull: true
    }
});

export default User;

User.hasMany(OrganizationUser, {
    foreignKey: "userId",
    as: "Organizations"
});

OrganizationUser.belongsTo(User, {
    foreignKey: "userId",
    as: "User"
});

User.beforeCreate(async (User, options) => {
    let hashedPassword = await encrypt(User.password);
    User.password = hashedPassword;
});
