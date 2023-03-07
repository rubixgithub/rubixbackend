import ContactPerson from "../../../models/contect_person";
import constants from "../../../constants";

const { CONTECTPERSON_IS_UPDATED, CONTECTPERSON_IS_NOT_EXISTS } = constants;

const byId = async (id, contect_person) => {
  const result = await ContactPerson.update(contect_person, {
    where: {
      id,
    },
  });
  if (result && result.length && result[0]) {
    return { message: CONTECTPERSON_IS_UPDATED };
  } else {
    return { message: CONTECTPERSON_IS_NOT_EXISTS };
  }
};

export default {
  byId,
};
