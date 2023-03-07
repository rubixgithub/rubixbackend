import Customer from "../../../models/customer";

const byId = async (id) =>
  Customer.destroy({
    where: {
      id,
    },
  });

export default {
  byId,
};
