import express from "express";
import manufacturerController from "../../controllers/manufacturer";

const Manufacturer = express.Router();

Manufacturer.get("/", manufacturerController.getManufacturer)

Manufacturer.post("/", manufacturerController.createManufacturer)

Manufacturer.get("/:id", manufacturerController.getManufacturerById)

Manufacturer.delete("/:id", manufacturerController.deleteManufacturer)

Manufacturer.put("/:id",  manufacturerController.updateManufacturerById);

export default Manufacturer