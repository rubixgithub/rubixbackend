import { Product } from "../../../models";

const create = async (product) => Product.create(product);

export default {
    create
};
