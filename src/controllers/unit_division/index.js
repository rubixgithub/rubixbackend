import {
    getUnitDivisionService,
    postUnitDivisionService,
    deleteUnitDivisionService,
    putUnitDivisionService
} from '../../services/UnitDivision'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    UNITDIVISION_ALREADY_EXISTS,
    UNITDIVISION_IS_DELETED,
    UNITDIVISION_IS_NOT_EXISTS
} = constants

const getUnitDivision = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getUnitDivisionService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getUnitDivisionById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getUnitDivisionService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createUnitDivision = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body
        const unitDivisionExists = await getUnitDivisionService.byName(name);
        if(!unitDivisionExists) {
        const newUnitDivision = await postUnitDivisionService.create({
            name,
            description
        })
        OK(CREATED, res, newUnitDivision)
    }else{
        OK(ALREADY_EXISTS, res, {message: UNITDIVISION_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteUnitDivision = async (req, res) => {
    try {
        const unitDivisionDeleted = await deleteUnitDivisionService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? UNITDIVISION_IS_DELETED : UNITDIVISION_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateUnitDivisionById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateUnitDivisionById = await putUnitDivisionService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateUnitDivisionById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createUnitDivision,
    getUnitDivision,
    getUnitDivisionById,
    deleteUnitDivision,
    updateUnitDivisionById
}
