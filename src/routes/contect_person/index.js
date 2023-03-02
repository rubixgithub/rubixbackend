import express from "express";

import contactPersonController from "../../controllers/contect_person";

const ContactPerson = express.Router();

ContactPerson.get("/", contactPersonController.getContectPerson);

ContactPerson.post("/", contactPersonController.createContectPerson);

ContactPerson.get("/:id", contactPersonController.getContectPersonById);

ContactPerson.delete('/:id', contactPersonController.deleteContectPerson)

ContactPerson.put("/:id", contactPersonController.updateContectPersonById);

export default ContactPerson;
