import sequelize from "../config";
import User from "./user";
import encrypt from "../initializers/encrypt";
import { nanoid } from "nanoid";
import Access from "./access";
import Role from "./role";
import Organisation from "./organisation";
import UserLog from "./userlog";
import Email from "./email";
import Branch from "./branch";
import BusinessPartnerType from "./business_partener_type";
import Address from "./address";
import BusinessPartner from "./business_partner";
import ContectPerson from "./contect_person";
import Customer from "./customer";
import CustomerGroup from "./customer_group";
import DocumentType from "./document_type";
import UnitDivision from "./unit_division";
import Exports from "./exports";
import Gistin from "./gistin";
import Gst from "./gst";
import IcAdvice from "./ic_advice";
import PaymentTerm from "./payment_term";
import ProductList from "./product_list";
import SaleOrder from "./sales_order";
import Wearhouse from "./wearhouse";
import Product from "./product";
import ProductGroup from "./product_group";
import UnitOfMeasureMent from "./unit_of_measurement";
import Manufacturer from "./manufacturer";

const role = sequelize.define("role", Role);
const user = sequelize.define("user", User);
const access = sequelize.define("access", Access);
const organisation = sequelize.define("organisation", Organisation);
const userlog = sequelize.define("userlog", UserLog);
const email = sequelize.define("email", Email);
const branch = sequelize.define("branch", Branch);
const business_partner_type = sequelize.define(
    "business_partner_type",
    BusinessPartnerType
);
const business_partner = sequelize.define("business_partner", BusinessPartner);
const document_type = sequelize.define("document_type", DocumentType);
const exports = sequelize.define("exports", Exports);
const gst = sequelize.define("gst", Gst);
const ic_advice = sequelize.define("ic_advice", IcAdvice);
const payment_terms = sequelize.define("payment_terms", PaymentTerm);
const product_list = sequelize.define("product_list", ProductList);
const sale_order = sequelize.define("sale_order", SaleOrder);
const unit_division = sequelize.define("unit_division", UnitDivision);
const wearhouse = sequelize.define("wearhouse", Wearhouse);

// user.belongsToMany(role, {
//     foreignKey: "role_id",
//     as: "roles",
// })
// user.belongsToMany(access, {
//     foreignKey: "permission_id",
//     as: "premission",
// })
// product_group.hasMany(product,{
//     foreignKey: "product_id",
//     as : "product"
// })
// product_list.hasMany(product,{
//     foreignKey: "product_id",
//     as : "product"
// })

// product.belongsTo(product_group,{
//     foreignKey:"product_group_id",
//     as:"product_group"
// })

organisation.belongsTo(user, {
    foreignKey: "user_id",
    as: "user"
});
user.beforeCreate(async (user, options) => {
    let hashedPw = await encrypt.encryptPassword(user.password);
    let nnid = await nanoid(10);
    user.secret = nnid;
    user.password = hashedPw;
});

export default sequelize;

export { Product, ProductGroup, UnitOfMeasureMent, Manufacturer };
