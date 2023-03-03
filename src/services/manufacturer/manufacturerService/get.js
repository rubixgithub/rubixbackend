import Manufacturer from "../../../models/manufacturer";

const all = async () => Manufacturer.findAll();

const byId = async (id) =>
  Manufacturer.findOne({
    where: {
      id,
    },
  });

const byName = async (name) =>
  Manufacturer.findOne({
    where: {
      name,
    },
  });

export default {
  all,
  byId,
  byName,
};
