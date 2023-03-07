import CustomerGroup from "../../../models/customer_group";

const byId = async (id) =>
  CustomerGroup.destroy({
    where: {
      id,
    },
  });

export default {
  byId,
};
