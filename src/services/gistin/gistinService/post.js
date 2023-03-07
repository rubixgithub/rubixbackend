import GistinDetail from "../../../models/gistin";
const create = async (gistin) => GistinDetail.create(gistin);

export default {
  create,
};
