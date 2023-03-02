import CustomerGroup from "../../../models/customer_group";

const all = async () => CustomerGroup.findAll();

const byId = async (id) =>
  CustomerGroup.findOne({
    where: {
      id,
    },
  });

const byName = async (name) =>
  CustomerGroup.findOne({
    where: {
      group_name: name,
    },
  });

export default {
  all,
  byId,
  byName,
};
