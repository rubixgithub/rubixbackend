import Customer from "../../../models/customer";
import constants from "../../../constants";

const { CUSTOMER_IS_UPDATED, CUSTOMER_IS_NOT_EXISTS } = constants;

const byId = async (id, customer) => {
  const result = await Customer.update(customer, {
    where: {
      id,
    },
  });
  if (result && result.length && result[0]) {
    return { message: CUSTOMER_IS_UPDATED };
  } else {
    return { message: CUSTOMER_IS_NOT_EXISTS };
  }
};

export default {
  byId,
};
