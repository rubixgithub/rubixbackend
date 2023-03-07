import Customer from "../../../models/customer";

const create = async (customer) => Customer.create(customer);

export default {
  create,
};
