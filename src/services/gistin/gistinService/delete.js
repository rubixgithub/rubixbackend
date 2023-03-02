import GistinDetail from "../../../models/gistin";

const byId = async (id) =>
  GistinDetail.destroy({
    where: {
      id,
    },
  });

export default {
  byId,
};
