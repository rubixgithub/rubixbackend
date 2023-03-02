import GistinDetail from "../../../models/gistin";
import constants from "../../../constants";

const { GISTIN_IS_UPDATED, GISTIN_IS_NOT_EXISTS } = constants;

const byId = async (id, gistin) => {
  const result = await GistinDetail.update(gistin, {
    where: {
      id,
    },
  });
  if (result && result.length && result[0]) {
    return { message: GISTIN_IS_UPDATED };
  } else {
    return { message: GISTIN_IS_NOT_EXISTS };
  }
};

export default {
  byId,
};
