import CustomerGroup from "../../../models/customer_group";

const create = async (customerGroupDetails) =>
  CustomerGroup.create(customerGroupDetails);

export default {
  create,
};
