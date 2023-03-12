import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../initializers";
import Organization from "../organisation";
import Role from "../role";

const OrganizationUser = sequelize.define("tb_organization_user", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true,
        max: 45
    },
    status: {
        type: DataTypes.ENUM("pending", "approved"),
        defaultValue: "approved"
    },
    profilePicture: {
        type: Sequelize.STRING,
        allowNull: true
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    defaultOrganisationId: {
        type: Sequelize.UUID,
        allowNull: true
    }
});

export default OrganizationUser;

Organization.hasMany(OrganizationUser, {
    foreignKey: "organizationId",
    as: "OrganizationUsers"
});

OrganizationUser.belongsTo(Organization, {
    foreignKey: "organizationId",
    as: "Organizations"
});

Role.hasMany(OrganizationUser, {
    foreignKey: "roleId",
    as: "OrganizationUsers"
});

OrganizationUser.belongsTo(Role, {
    foreignKey: "roleId",
    as: "Organization"
});
