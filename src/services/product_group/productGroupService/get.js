import { ProductGroup, Product } from "../../../models";

const all = async () =>
    ProductGroup.findAll({
        include: [
            {
                model: Product,
                foreignKey: "product_group_id",
                as: "Products"
            }
        ]
    });

const byId = async (id) =>
    ProductGroup.findOne({
        where: {
            id
        }
    });

const byName = async (name) =>
    ProductGroup.findOne({
        where: {
            group_name: name
        }
    });

export default {
    all,
    byId,
    byName
};
