import UnitOfMeasureMent from "../../../models/unit_of_measurement";

const all = async () => UnitOfMeasureMent.findAll();

const byId = async (id) =>
  UnitOfMeasureMent.findOne({
    where: {
      id,
    },
  });

const byName = async (name) =>
  UnitOfMeasureMent.findOne({
    where: {
      unit_name: name,
    },
  });

export default {
  all,
  byId,
  byName,
};
