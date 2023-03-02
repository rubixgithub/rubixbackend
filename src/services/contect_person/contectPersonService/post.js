import ContactPerson from "../../../models/contect_person";

const create = async (contect_person) => ContactPerson.create(contect_person);

export default {
  create,
};
