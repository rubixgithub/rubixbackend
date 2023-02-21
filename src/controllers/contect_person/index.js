import {
    getContectPersonService,
    postContectPersonService,
    deleteContectPersonService,
    putContectPersonService
} from '../../services/contect_person'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    CONTECTPERSON_ALREADY_EXISTS,
    CONTECTPERSON_IS_DELETED,
    CONTECTPERSON_IS_NOT_EXISTS
} = constants

const getContectPerson = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getContectPersonService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getContectPersonById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getContectPersonService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createContectPerson = async (req, res) => {
    try {
        console.log("nfjdjfjdhfj")
        const {
            salutation,
            first_name,
            last_name,
            email,
            work_phone,
            mobile,
            is_primary
        } = req.body
        const contectPersonExists = await getContectPersonService.byName(name);
        if(!contectPersonExists) {
        const newContectPerson = await postContectPersonService.create({
            salutation,
            first_name,
            last_name,
            email,
            work_phone,
            mobile,
            is_primary
        })
        OK(CREATED, res, newContectPerson)
    }else{
        OK(ALREADY_EXISTS, res, {message: CONTECTPERSON_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteContectPerson = async (req, res) => {
    try {
        const contectPersonDeleted = await deleteContectPersonService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? CONTECTPERSON_IS_DELETED : CONTECTPERSON_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateContectPersonById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateContectPersonById = await putContectPersonService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateContectPersonById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createContectPerson,
    getContectPerson,
    getContectPersonById,
    deleteContectPerson,
    updateContectPersonById
}
