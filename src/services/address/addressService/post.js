import Address from "../../../models/address";
const create = async (address) => Address.create(address);

export default {
  create,
};
