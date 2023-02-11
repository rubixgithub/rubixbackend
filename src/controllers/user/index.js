import {
    getUserService,
    postUserService,
    deleteUserService,
    putUserService,
    autheticateService,
    addRoles
} from '../../services'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'
import encrypt from '../../initializers/encrypt'
import { getRoleService } from '../../services/role'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    NOT_FOUND,
    EMAIL_ALREADY_EXISTS,
    EMAIL_NOT_EXISTS,
    USER_IS_DELETED,
    USER_IS_NOT_EXISTS,
    PASSWORD_NOT_MACHED,
    EXTECTATION_FAILED,
} = constants

const getUsers = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getUserService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getUserById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getUserService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const loginUser = async (req,res)=>{
    try {
        const {
            email,
            password
        } = req.body
        const user =  await getUserService.byEmail(email);
        if(!user){
            OK(NOT_FOUND, res, {message: EMAIL_NOT_EXISTS})
        }
        const isMached = (password,user.dataValues.password) ? true : false;
        if(isMached){
            const token = await autheticateService.generateJwtToken(user);
            user['token'] = token;
            const responseArr = {
                user : user,
                token : token
            }
            OK(SUCCESS, res, responseArr)
        }else{
            OK(EXTECTATION_FAILED, res, {message: PASSWORD_NOT_MACHED})
        }
        
    } catch(e){
        throwError(res,e)
    }
}
const createUser = async (req, res) => {
    try {
        const {
            username,
            email,
            password,
            language,
            profile_picture,
            is_admin,
            is_active
        } = req.body
        const userExists = await getUserService.byEmail(email)
        if(!userExists) {
            const newUser = await postUserService.create({
                username,
                email,
                password,
                language,
                profile_picture,
                is_admin,
                is_active
            })
            OK(CREATED, res, newUser)
        }else{
            OK(ALREADY_EXISTS, res, {message: EMAIL_ALREADY_EXISTS})
        }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteUser = async (req, res) => {
    try {
        const userDeleted = await deleteUserService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? USER_IS_DELETED : USER_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateUserById = async (req, res) => {
    try {
        const {
            username,
            email,
            password,
            language,
            profile_picture,
            is_admin,
            is_active
        } = req.body
        const updateUserById = await putUserService.byId(req.params.id, {
            username,
            email,
            password,
            language,
            profile_picture,
            is_admin,
            is_active
        })
        OK(SUCCESS, res, updateUserById)
    } catch (e) {
        throwError(res, e)
    }
}

const forgotPassword = async(req, res)=>{
    try{
        const {
            email,
            old_password,
            new_password,
        } = req.body
        const user =  await getUserService.byEmail(email);
        if(user){
            const isMached = encrypt.comparePassword(old_password,user.dataValues.password)
            if(isMached){
                const password = encrypt.encryptPassword(new_password);
                const updateUserById = await putUserService.byId(user.dataValues.id, {
                    password
                })
                OK(SUCCESS, res, updateUserById)
            }else{
                OK(EXTECTATION_FAILED, res,PASSWORD_NOT_MACHED)
            }
        }else{
            OK(SUCCESS, res, USER_IS_NOT_EXISTS)
        }

    }catch(e){
        throwError(res,e)
    }
}

const addRemoveRoles = async (req,res)=>{
    try{
        const {
            userId,
            roleToAdd,
            roleToRemove
        } = req.body
        let roleNotExitst = new Array();
        let roleAdded = new Array();
        let roleCouldNotRemove = new Array();
        let roleRemoved = new Array();
        for (const [key, roleId] of Object.entries(roleToAdd)) {
            const role = getRoleService.byId(roleId)
            if(role){
                roleAdded.push(roleId);
            }else{
                roleNotExitst.push(roleId)
            }
        }
        await addRoles.updateRoles(userId,roleAdded)
        for (const [key, roleId] of Object.entries(roleToRemove)) {
            const role = getRoleService.byId(roleId)
            if(role){
                roleRemoved.push(roleId);
            }else{
                roleCouldNotRemove.push(roleId)
            }
        }
        // addRoles.updateRoles(roleRemoved)
        OK(SUCCESS, res, USER_IS_NOT_EXISTS)
    }catch(e){
        throwError(res,e)
    }
}

export default {
    createUser,
    getUsers,
    getUserById,
    deleteUser,
    updateUserById,
    loginUser,
    forgotPassword,
    addRemoveRoles
}
