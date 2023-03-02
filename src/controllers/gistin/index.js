import {
    getGistinService,
    postGistinService,
    deleteGistinService,
    putGistinService
} from '../../services/gistin'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    GISTIN_ALREADY_EXISTS,
    GISTIN_IS_DELETED,
    GISTIN_IS_NOT_EXISTS
} = constants

const getGistin = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getGistinService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getGistinById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getGistinService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createGistin = async (req, res) => {
    try {
        const {
            gistin,
            state,
            address
        } = req.body
        const gistinExists = await getGistinService.byGstin(gistin);
        if(!gistinExists) {
        const newGistin = await postGistinService.create({
            gistin,
            state,
            address
        })
        OK(CREATED, res, newGistin)
    }else{
        OK(ALREADY_EXISTS, res, {message: GISTIN_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteGistin = async (req, res) => {
    try {
        const gistinDeleted = await deleteGistinService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? GISTIN_IS_DELETED : GISTIN_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateGistinById = async (req, res) => {
    try {
        const {
            gistin,
            state,
            address
        } = req.body
        const updateGistinById = await putGistinService.byId(req.params.id, {
            gistin,
            state,
            address
        })
        OK(SUCCESS, res, updateGistinById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createGistin,
    getGistin,
    getGistinById,
    deleteGistin,
    updateGistinById
}
