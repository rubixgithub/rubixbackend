import CustomerGroup from "../../../models/customer_group";
import constants from "../../../constants";

const { CUSTOMERGROUP_IS_UPDATED, CUSTOMERGROUP_IS_NOT_EXISTS } = constants;

const byId = async (id, customer_group) => {
  const result = await CustomerGroup.update(customer_group, {
    where: {
      id,
    },
  });
  if (result && result.length && result[0]) {
    return { message: CUSTOMERGROUP_IS_UPDATED };
  } else {
    return { message: CUSTOMERGROUP_IS_NOT_EXISTS };
  }
};

export default {
  byId,
};
