import {
    getDocumentTypeService,
    postDocumentTypeService,
    deleteDocumentTypeService,
    putDocumentTypeService
} from '../../services/DocumentType'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    DOCUMENTTYPE_ALREADY_EXISTS,
    DOCUMENTTYPE_IS_DELETED,
    DOCUMENTTYPE_IS_NOT_EXISTS
} = constants

const getDocumentType = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getDocumentTypeService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getDocumentTypeById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getDocumentTypeService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createDocumentType = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body
        const documentTypeExists = await getDocumentTypeService.byName(name);
        if(!documentTypeExists) {
        const newDocumentType = await postDocumentTypeService.create({
            name,
            description
        })
        OK(CREATED, res, newDocumentType)
    }else{
        OK(ALREADY_EXISTS, res, {message: DOCUMENTTYPE_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteDocumentType = async (req, res) => {
    try {
        const documentTypeDeleted = await deleteDocumentTypeService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? DOCUMENTTYPE_IS_DELETED : DOCUMENTTYPE_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateDocumentTypeById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateDocumentTypeById = await putDocumentTypeService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateDocumentTypeById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createDocumentType,
    getDocumentType,
    getDocumentTypeById,
    deleteDocumentType,
    updateDocumentTypeById
}
