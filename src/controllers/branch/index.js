import {
    getBranchService,
    postBranchService,
    deleteBranchService,
    putBranchService
} from '../../services/branch'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    BRANCH_ALREADY_EXISTS,
    BRANCH_IS_DELETED,
    BRANCH_IS_NOT_EXISTS
} = constants

const getBranch = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getBranchService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getBranchById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getBranchService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createBranch = async (req, res) => {
    try {
        console.log("nfjdjfjdhfj")
        const {
            name,
            address_1,
            address_2,
            state_teritory,
            city,
            postal_code,
            primary_contact,
            gstin,
            doc_series,
            warehouses
        } = req.body
        const branchExists = await getBranchService.byName(name);
        if(!branchExists) {
        const newBranch = await postBranchService.create({
            name,
            address_1,
            address_2,
            state_teritory,
            city,
            postal_code,
            primary_contact,
            gstin,
            doc_series,
            warehouses
        })
        OK(CREATED, res, newBranch)
    }else{
        OK(ALREADY_EXISTS, res, {message: BRANCH_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteBranch = async (req, res) => {
    try {
        const branchDeleted = await deleteBranchService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? BRANCH_IS_DELETED : BRANCH_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateBranchById = async (req, res) => {
    try {
        const {
            name,
            address_1,
            address_2,
            state_teritory,
            city,
            postal_code,
            primary_contact,
            gstin,
            doc_series,
            warehouses
        } = req.body
        const updateBranchById = await putBranchService.byId(req.params.id, {
            name,
            address_1,
            address_2,
            state_teritory,
            city,
            postal_code,
            primary_contact,
            gstin,
            doc_series,
            warehouses
        })
        OK(SUCCESS, res, updateBranchById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createBranch,
    getBranch,
    getBranchById,
    deleteBranch,
    updateBranchById
}
