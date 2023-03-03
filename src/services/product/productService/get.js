import {
    Manufacturer,
    Product,
    ProductGroup,
    UnitOfMeasureMent
} from "../../../models";
const all = async () =>
    Product.findAll({
        include: [
            {
                model: ProductGroup,
                foreignKey: "product_group_id",
                as: "ProductGroup"
            },
            {
                model: UnitOfMeasureMent,
                foreignKey: "unit_of_measurement_id",
                as: "UnitOfMeasureMent"
            },
            {
                model: Manufacturer,
                foreignKey: "manufacturer_id",
                as: "Manufacturer"
            }
        ]
    });

const byId = async (id) =>
    Product.findOne({
        where: {
            id
        }
    });

const byName = async (name) =>
    Product.findOne({
        where: {
            product_name: name
        }
    });

export default {
    all,
    byId,
    byName
};
