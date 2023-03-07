import Manufacturer from "../../../models/manufacturer";

const create = async (manufaturerDetails) => Manufacturer.create(manufaturerDetails);

export default {
  create,
};
