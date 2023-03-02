import GistinDetail from "../../../models/gistin";

const all = async () => GistinDetail.findAll();

const byId = async (id) =>
  GistinDetail.findOne({
    where: {
      id,
    },
  });

const byGstin = async (gistin) =>
  GistinDetail.findOne({
    where: {
      gistin,
    },
  });

export default {
  all,
  byId,
  byGstin,
};
