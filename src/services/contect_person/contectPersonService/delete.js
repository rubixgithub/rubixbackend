import ContactPerson from "../../../models/contect_person";

const byId = async (id) =>
  ContactPerson.destroy({
    where: {
      id,
    },
  });

export default {
  byId,
};
