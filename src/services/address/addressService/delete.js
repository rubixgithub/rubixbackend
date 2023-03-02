import Address from "../../../models/address";

const byId = async (id) =>
  Address.destroy({
    where: {
      id,
    },
  });

export default {
  byId,
};
