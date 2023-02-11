import sequelize from '../../models'
import constants from '../../constants'
import serialize from serialize-javascript;


const {
    USER_IS_UPDATED,
    USER_IS_NOT_EXISTS
} = constants

const updateAccess = async (id, access) => {
    access =  serialize(access, {isJSON: true});
    const accessData  =  {
        'permission_id' : serialize(access, {isJSON: true})
    };
    const result = await sequelize.models.user.update(accessData, {
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
    updateAccess
}
