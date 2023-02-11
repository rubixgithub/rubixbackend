import {
    getProductGroupService,
    postProductGroupService,
    deleteProductGroupService,
    putProductGroupService
} from '../../services/ProductGroup'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    PRODUCTGROUP_ALREADY_EXISTS,
    PRODUCTGROUP_IS_DELETED,
    PRODUCTGROUP_IS_NOT_EXISTS
} = constants

const getProductGroup = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getProductGroupService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getProductGroupById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getProductGroupService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createProductGroup = async (req, res) => {
    try {
        console.log("nfjdjfjdhfj")
        const {
            name,
            description
        } = req.body
        const productGroupExists = await getProductGroupService.byName(name);
        if(!productGroupExists) {
        const newProductGroup = await postProductGroupService.create({
            name,
            description
        })
        OK(CREATED, res, newProductGroup)
    }else{
        OK(ALREADY_EXISTS, res, {message: PRODUCTGROUP_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteProductGroup = async (req, res) => {
    try {
        const productGroupDeleted = await deleteProductGroupService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? PRODUCTGROUP_IS_DELETED : PRODUCTGROUP_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateProductGroupById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateProductGroupById = await putProductGroupService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateProductGroupById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createProductGroup,
    getProductGroup,
    getProductGroupById,
    deleteProductGroup,
    updateProductGroupById
}
