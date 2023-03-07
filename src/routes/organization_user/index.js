import express from "express";
import organizationUserController from "../../controllers/organization_user";
import auth from "../../middleware/auth";

const OrganizationUser = express.Router();

OrganizationUser.get("/", organizationUserController.getOrganizationUsers);

OrganizationUser.post("/", organizationUserController.createOrganizationUser);

OrganizationUser.get("/:id", organizationUserController.getOrganizationUserById);

OrganizationUser.delete("/:id", organizationUserController.deleteOrganizationUser);

OrganizationUser.put("/:id", organizationUserController.updateOrganizationUserById);

export default OrganizationUser;
