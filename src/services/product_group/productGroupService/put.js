import ProductGroup from "../../../models/product_group";
import constants from "../../../constants";

const { PRODUCTGROUP_IS_UPDATED, PRODUCTGROUP_IS_NOT_EXISTS } = constants;

const byId = async (id, product_group) => {
  const result = await ProductGroup.update(product_group, {
    where: {
      id,
    },
  });
  if (result && result.length && result[0]) {
    return { message: PRODUCTGROUP_IS_UPDATED };
  } else {
    return { message: PRODUCTGROUP_IS_NOT_EXISTS };
  }
};

export default {
  byId,
};
