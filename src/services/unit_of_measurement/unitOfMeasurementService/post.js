import UnitOfMeasureMent from "../../../models/unit_of_measurement";

const create = async (unitDetails) => UnitOfMeasureMent.create(unitDetails);

export default {
  create,
};
