import {
    getBusinessPartenerTypeService,
    postBusinessPartenerTypeService,
    deleteBusinessPartenerTypeService,
    putBusinessPartenerTypeService
} from '../../services/BusinessPartenerType'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    BUSINESSPARTNERTYPE_ALREADY_EXISTS,
    BUSINESSPARTNERTYPE_IS_DELETED,
    BUSINESSPARTNERTYPE_IS_NOT_EXISTS
} = constants

const getBusinessPartenerType = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getBusinessPartenerTypeService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getBusinessPartenerTypeById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getBusinessPartenerTypeService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createBusinessPartenerType = async (req, res) => {
    try {
        console.log("nfjdjfjdhfj")
        const {
            name,
            description
        } = req.body
        const businessPartenerTypeExists = await getBusinessPartenerTypeService.byName(name);
        if(!businessPartenerTypeExists) {
        const newBusinessPartenerType = await postBusinessPartenerTypeService.create({
            name,
            description
        })
        OK(CREATED, res, newBusinessPartenerType)
    }else{
        OK(ALREADY_EXISTS, res, {message: BUSINESSPARTNERTYPE_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteBusinessPartenerType = async (req, res) => {
    try {
        const businessPartenerTypeDeleted = await deleteBusinessPartenerTypeService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? BUSINESSPARTNERTYPE_IS_DELETED : BUSINESSPARTNERTYPE_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateBusinessPartenerTypeById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateBusinessPartenerTypeById = await putBusinessPartenerTypeService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateBusinessPartenerTypeById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createBusinessPartenerType,
    getBusinessPartenerType,
    getBusinessPartenerTypeById,
    deleteBusinessPartenerType,
    updateBusinessPartenerTypeById
}
