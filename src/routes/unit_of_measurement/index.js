import express from "express";
import unitMeasureMentController from "../../controllers/unit_of_measurement";

const UnitOfMeasurement = express.Router();

UnitOfMeasurement.get("/", unitMeasureMentController.getUnitOfMeasurement)

UnitOfMeasurement.post("/", unitMeasureMentController.createUnitOfMeasurement)

UnitOfMeasurement.get("/:id", unitMeasureMentController.getUnitOfMeasurementById)

UnitOfMeasurement.delete("/:id", unitMeasureMentController.deleteUnitOfMeasurement)

UnitOfMeasurement.put("/:id",  unitMeasureMentController.updateUnitOfMeasurementById);

export default UnitOfMeasurement