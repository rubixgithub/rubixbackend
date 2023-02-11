import {
    getWearHouseService,
    postWearHouseService,
    deleteWearHouseService,
    putWearHouseService
} from '../../services/WearHouse'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    WEARHOUSE_ALREADY_EXISTS,
    WEARHOUSE_IS_DELETED,
    WEARHOUSE_IS_NOT_EXISTS
} = constants

const getWearHouse = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getWearHouseService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getWearHouseById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getWearHouseService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createWearHouse = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body
        const wearHouseExists = await getWearHouseService.byName(name);
        if(!wearHouseExists) {
        const newWearHouse = await postWearHouseService.create({
            name,
            description
        })
        OK(CREATED, res, newWearHouse)
    }else{
        OK(ALREADY_EXISTS, res, {message: WEARHOUSE_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteWearHouse = async (req, res) => {
    try {
        const wearHouseDeleted = await deleteWearHouseService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? WEARHOUSE_IS_DELETED : WEARHOUSE_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateWearHouseById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateWearHouseById = await putWearHouseService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateWearHouseById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createWearHouse,
    getWearHouse,
    getWearHouseById,
    deleteWearHouse,
    updateWearHouseById
}
