import { Product } from "../../../models";
import constants from "../../../constants";

const { PRODUCT_IS_UPDATED, PRODUCT_IS_NOT_EXISTS } = constants;

const byId = async (id, product) => {
    const result = await Product.update(product, {
        where: {
            id
        }
    });
    if (result && result.length && result[0]) {
        return { message: PRODUCT_IS_UPDATED };
    } else {
        return { message: PRODUCT_IS_NOT_EXISTS };
    }
};

export default {
    byId
};
