import { ProductGroup } from "../../../models";

const create = async (product_group) => ProductGroup.create(product_group);

export default {
    create
};
