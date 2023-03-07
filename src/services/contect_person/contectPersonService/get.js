import ContactPerson from "../../../models/contect_person";

const all = async () => ContactPerson.findAll();

const byId = async (id) =>
  ContactPerson.findOne({
    where: {
      id,
    },
  });

const byEmail = async (email) =>
  ContactPerson.findOne({
    where: {
      email,
    },
  });

export default {
  all,
  byId,
  byEmail,
};
