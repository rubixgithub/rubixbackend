import Address from "../../../models/address";

const all = async () => Address.findAll();

const byId = async (id) =>
  Address.findOne({
    where: {
      id,
    },
  });

const byName = async (name) =>
  Address.findOne({
    where: {
      name,
    },
  });

export default {
  all,
  byId,
  byName,
};
