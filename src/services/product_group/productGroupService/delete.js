import ProductGroup from "../../../models/product_group";

const byId = async (id) =>
  ProductGroup.destroy({
    where: {
      id,
    },
  });

export default {
  byId,
};
