import {
    getProductListService,
    postProductListService,
    deleteProductListService,
    putProductListService
} from '../../services/ProductList'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    PRODUCTLIST_ALREADY_EXISTS,
    PRODUCTLIST_IS_DELETED,
    PRODUCTLIST_IS_NOT_EXISTS
} = constants

const getProductList = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getProductListService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getProductListById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getProductListService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createProductList = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body
        const productListExists = await getProductListService.byName(name);
        if(!productListExists) {
        const newProductList = await postProductListService.create({
            name,
            description
        })
        OK(CREATED, res, newProductList)
    }else{
        OK(ALREADY_EXISTS, res, {message: PRODUCTLIST_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteProductList = async (req, res) => {
    try {
        const ProductListDeleted = await deleteProductListService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? PRODUCTLIST_IS_DELETED : PRODUCTLIST_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateProductListById = async (req, res) => {
    try {
        const {
            name,
            discription
        } = req.body
        const updateProductListById = await putProductListService.byId(req.params.id, {
            name,
            discription
        })
        OK(SUCCESS, res, updateProductListById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createProductList,
    getProductList,
    getProductListById,
    deleteProductList,
    updateProductListById
}
