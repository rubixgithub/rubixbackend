import { Sequelize } from "sequelize";
import sequelize from "../../initializers";
import Address from "../address";
import ContactPerson from "../contect_person";
import CustomerGroup from "../customer_group";
import GistinDetail from "../gistin";

const Customer = sequelize.define("tb_customer", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    customerCode: {
        type: Sequelize.BIGINT(),
        allowNull: false,
        unique: true
    },
    customerName: {
        type: Sequelize.STRING(63),
        allowNull: false,
        max: 45
    },
    contactSalutation: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    contactFirstName: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    contactLastName: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    designation: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    department: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    phone: {
        type: Sequelize.BIGINT(),
        allowNull: false
    },
    taxIdentifier: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    enableAccess: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    createdBy: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    contractType: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    contractPolicyId: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
});

export default Customer;

Customer.hasMany(Address, {
    foreignKey: "customerId",
    as: "Addresses"
});

Address.belongsTo(Customer, {
    foreignKey: "customerId",
    as: "Customers"
});

Customer.hasMany(ContactPerson, {
    foreignKey: "customerId",
    as: "ContactPersons"
});

ContactPerson.belongsTo(Customer, {
    foreignKey: "customerId",
    as: "Customers"
});

Customer.belongsToMany(CustomerGroup, {
    through: "customer_customer_groups"
});

CustomerGroup.belongsToMany(Customer, {
    through: "customer_customer_groups"
});
