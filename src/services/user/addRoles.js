import sequelize from '../../models'
import constants from '../../constants'
var serialize = require('serialize-javascript');

const {
    USER_IS_UPDATED,
    USER_IS_NOT_EXISTS
} = constants

const updateRoles = async (id, role) => {
    
    const roleData  =  {
        'role_id' : serialize(role, {isJSON: true})
    };
    const result = await sequelize.models.user.update(roleData, {
        where: {
            id
        }
    })
    if(result && result.length && result[0]){
        return { message: USER_IS_UPDATED }
    }else{
        return { message: USER_IS_NOT_EXISTS }
    }
}

export default {
    updateRoles
}
