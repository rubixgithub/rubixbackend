import sequelize from "../config";
import User from "./user";
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


// user.beforeCreate(async (user, options) => {
//     let hashedPw = await encrypt.encryptPassword(user.password);
//     let nnid = await nanoid(10);
//     user.secret = nnid;
//     user.password = hashedPw;
// });

export default sequelize;

export { Product, ProductGroup, UnitOfMeasureMent, Manufacturer };
