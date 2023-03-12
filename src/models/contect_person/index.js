import { Sequelize } from "sequelize";
import sequelize from "../../initializers";

const ContactPerson = sequelize.define("tb_contact_person", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    salutation: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
    },
    firstName: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    lastName: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
    },
    workPhone: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    mobile: {
        type: Sequelize.BIGINT,
        allowNull: true,
        unique: true
    },
    isPrimary: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

export default ContactPerson;
