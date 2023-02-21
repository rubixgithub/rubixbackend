import {
    getAddressService,
    postAddressService,
    deleteAddressService,
    putAddressService
} from '../../services/address/'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    ADDRESS_ALREADY_EXISTS,
    ADDRESS_IS_DELETED,
    ADDRESS_IS_NOT_EXISTS
} = constants

const getAddress = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getAddressService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getAddressById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getAddressService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createAddress = async (req, res) => {
    try {
        const {
            attention,
            country,
            address_1,
            address_2,
            city,
            state,
            postal_code,
            phone
        } = req.body
        const addressExists = await getAddressService.byAttention(attention);
        if(!addressExists) {
        const newAddress = await postAddressService.create({
            attention,
            country,
            address_1,
            address_2,
            city,
            state,
            postal_code,
            phone
        })
        OK(CREATED, res, newAddress)
    }else{
        OK(ALREADY_EXISTS, res, {message: ADDRESS_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteAddress = async (req, res) => {
    try {
        const addressDeleted = await deleteAddressService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? ADDRESS_IS_DELETED : ADDRESS_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateAddressById = async (req, res) => {
    try {
        const {
            attention,
            country,
            address_1,
            address_2,
            city,
            state,
            postal_code,
            phone
        } = req.body
        const updateAddressById = await putAddressService.byId(req.params.id, {
            attention,
            country,
            address_1,
            address_2,
            city,
            state,
            postal_code,
            phone
        })
        OK(SUCCESS, res, updateAddressById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createAddress,
    getAddress,
    getAddressById,
    deleteAddress,
    updateAddressById
}
