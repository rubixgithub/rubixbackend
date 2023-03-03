import { Product } from "../../../models";

const byId = async (id) =>
    Product.destroy({
        where: {
            id
        }
    });

export default {
    byId
};
