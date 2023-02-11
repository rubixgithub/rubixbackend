import {
    getProductService,
    postProductService,
    deleteProductService,
    putProductService
} from '../../services/Product'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    PRODUCT_ALREADY_EXISTS,
    PRODUCT_IS_DELETED,
    PRODUCT_IS_NOT_EXISTS
} = constants

const getProduct = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getProductService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getProductById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getProductService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createProduct = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body
        const productExists = await getProductService.byName(name);
        if(!productExists) {
        const newProduct = await postProductService.create({
            name,
            description
        })
        OK(CREATED, res, newProduct)
    }else{
        OK(ALREADY_EXISTS, res, {message: PRODUCT_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productDeleted = await deleteProductService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? PRODUCT_IS_DELETED : PRODUCT_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateProductById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateProductById = await putProductService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateProductById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createProduct,
    getProduct,
    getProductById,
    deleteProduct,
    updateProductById
}
