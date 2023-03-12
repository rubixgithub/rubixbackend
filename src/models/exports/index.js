import { Sequelize } from "sequelize";
import sequelize from "../../initializers";
const ProductGroup = sequelize.define("tb_export_contract", {
    contract_date: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
    },
    currency: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    language: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    payment_term: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    terms_of_payment_text: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    inco_term_1: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    inco_term_2: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    description_of_goods: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    shipping_mark_h: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    pre_carriage_by: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    place_of_receipt: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    place_of_delivery: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    mode_of_transport: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    port_of_loading: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    port_of_discharge: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    final_destination: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    country_final_destination: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    expected_shipment_date: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    country: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    created_by: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    lc_number_id: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    product_list: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    type_of_shipment_container: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    shipment_type: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    seller_reference: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    buyer_reference: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    additional_information: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    }
});

export default ProductGroup;
