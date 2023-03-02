import express from "express";

import gistinController from "../../controllers/gistin";

const Gistin = express.Router();

Gistin.get("/", gistinController.getGistin);

Gistin.post("/", gistinController.createGistin);

Gistin.get("/:id", gistinController.getGistinById);

// .delete('/:id', roleValidator.deleteUser, roleController.deleteRole)

Gistin.put("/:id", gistinController.updateGistinById);

export default Gistin;
