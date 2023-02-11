import {
    getOrganisationService,
    postOrganisationService,
    deleteOrganisationService,
    putOrganisationService
} from '../../services/organisation'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    ORGANISATION_ALREADY_EXISTS,
    ORGANISATION_IS_DELETED,
    ORGANISATION_IS_NOT_EXISTS
} = constants

const getOrganisation = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getOrganisationService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getOrganisationById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getOrganisationService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createOrganisation = async (req, res) => {
    try {
        const {
            name,
            logo,
            industry,
            country_id,
            state_teritory,
            address_1,
            address_2,
            city,
            postal_code,
            iec,
            org_currency,
            inventory_start_date,
            fiscal_year,
            contact_no,
            email,
            default_org_flag,
            is_gst
        } = req.body
        const user_id = req.decoded.user.id;
        console.log("user id",req.decoded.user)
        const organisationExists = await getOrganisationService.byName(name)
        if(!organisationExists) {
           
        const newOrganisation = await postOrganisationService.create({
            name,
            logo,
            industry,
            country_id,
            state_teritory,
            address_1,
            address_2,
            city,
            postal_code,
            iec,
            org_currency,
            inventory_start_date,
            fiscal_year,
            contact_no,
            email,
            default_org_flag,
            is_gst,
            user_id
        })
        OK(CREATED, res, newOrganisation)
    }else{
        OK(ALREADY_EXISTS, res, {message: ORGANISATION_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteOrganisation = async (req, res) => {
    try {
        const roleDeleted = await deleteOrganisationService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? ORGANISATION_IS_DELETED : ORGANISATION_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateOrganisationById = async (req, res) => {
    try {
        const {
            name,
            logo,
            industry,
            country_id,
            state_teritory,
            address_1,
            address_2,
            city,
            postal_code,
            iec,
            org_currency,
            inventory_start_date,
            fiscal_year,
            contact_no,
            email,
            default_org_flag,
            is_gst
        } = req.body
        const updateOrganisationById = await putOrganisationService.byId(req.params.id, {
            name,
            logo,
            industry,
            country_id,
            state_teritory,
            address_1,
            address_2,
            city,
            postal_code,
            iec,
            org_currency,
            inventory_start_date,
            fiscal_year,
            contact_no,
            email,
            default_org_flag,
            is_gst
        })
        OK(SUCCESS, res, updateOrganisationById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createOrganisation,
    getOrganisation,
    getOrganisationById,
    deleteOrganisation,
    updateOrganisationById
}
