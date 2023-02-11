import {
    getExportsService,
    postExportsService,
    deleteExportsService,
    putExportsService
} from '../../services/Exports'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    EXPORTS_ALREADY_EXISTS,
    EXPORTS_IS_DELETED,
    EXPORTS_IS_NOT_EXISTS
} = constants

const getExports = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getExportsService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getExportsById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getExportsService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createExports = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body
        const exportsExists = await getExportsService.byName(name);
        if(!exportsExists) {
        const newExports = await postExportsService.create({
            name,
            description
        })
        OK(CREATED, res, newExports)
    }else{
        OK(ALREADY_EXISTS, res, {message: EXPORTS_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteExports = async (req, res) => {
    try {
        const exportsDeleted = await deleteExportsService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? EXPORTS_IS_DELETED : EXPORTS_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateExportsById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateExportsById = await putExportsService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateExportsById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createExports,
    getExports,
    getExportsById,
    deleteExports,
    updateExportsById
}
