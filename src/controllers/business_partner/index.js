import {
    getBusinessPartenerService,
    postBusinessPartenerService,
    deleteBusinessPartenerService,
    putBusinessPartenerService
} from '../../services/BusinessPartener'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    BUSINESSPARTNER_ALREADY_EXISTS,
    BUSINESSPARTNER_IS_DELETED,
    BUSINESSPARTNER_IS_NOT_EXISTS
} = constants

const getBusinessPartener = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getBusinessPartenerService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getBusinessPartenerById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getBusinessPartenerService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createBusinessPartener = async (req, res) => {
    try {
        console.log("nfjdjfjdhfj")
        const {
            name,
            description
        } = req.body
        const businessPartenerExists = await getBusinessPartenerService.byName(name);
        if(!businessPartenerExists) {
        const newBusinessPartener = await postBusinessPartenerService.create({
            name,
            description
        })
        OK(CREATED, res, newBusinessPartener)
    }else{
        OK(ALREADY_EXISTS, res, {message: BUSINESSPARTNER_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteBusinessPartener = async (req, res) => {
    try {
        const businessPartenerDeleted = await deleteBusinessPartenerService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? BUSINESSPARTNER_IS_DELETED : BUSINESSPARTNER_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateBusinessPartenerById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateBusinessPartenerById = await putBusinessPartenerService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateBusinessPartenerById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createBusinessPartener,
    getBusinessPartener,
    getBusinessPartenerById,
    deleteBusinessPartener,
    updateBusinessPartenerById
}
