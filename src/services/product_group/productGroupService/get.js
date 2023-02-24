import ProductGroup from "../../../models/product_group";

const all = async () => ProductGroup.findAll();

const byId = async (id) =>
  ProductGroup.findOne({
    where: {
      id,
    },
  });

const byName = async (name) =>
  ProductGroup.findOne({
    where: {
      group_name: name,
    },
  });

export default {
  all,
  byId,
  byName,
};
