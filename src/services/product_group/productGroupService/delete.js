import { ProductGroup } from "../../../models";

const byId = async (id) =>
    ProductGroup.destroy({
        where: {
            id
        }
    });

export default {
    byId
};
