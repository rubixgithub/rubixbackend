import ProductGroup from "../../../models/product_group";

const create = async (product_group) => ProductGroup.create(product_group)

export default {
    create
}
