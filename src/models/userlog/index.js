import { Sequelize } from "sequelize";

const UserLog = {
    user_id: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    log_action_id: {
        type: Sequelize.STRING(45)
    },
    message: {
        type: Sequelize.STRING
    },
    ip_address: {
        type: Sequelize.STRING
    },
    request_uri: {
        type: Sequelize.STRING
    },
    sessionId: {
        type: Sequelize.STRING
    },
    otherInfo: {
        type: Sequelize.STRING
    },
    log_date:{
        type: Sequelize.STRING
    }
}

export default UserLog
