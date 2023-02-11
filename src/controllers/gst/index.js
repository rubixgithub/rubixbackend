import {
    getGstService,
    postGstService,
    deleteGstService,
    putGstService
} from '../../services/Gst'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    GST_ALREADY_EXISTS,
    GST_IS_DELETED,
    GST_IS_NOT_EXISTS
} = constants

const getGst = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getGstService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getGstById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getGstService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createGst = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body
        const gstExists = await getGstService.byName(name);
        if(!gstExists) {
        const newGst = await postGstService.create({
            name,
            description
        })
        OK(CREATED, res, newGst)
    }else{
        OK(ALREADY_EXISTS, res, {message: GST_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteGst = async (req, res) => {
    try {
        const GstDeleted = await deleteGstService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? GST_IS_DELETED : GST_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateGstById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateGstById = await putGstService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateGstById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createGst,
    getGst,
    getGstById,
    deleteGst,
    updateGstById
}
