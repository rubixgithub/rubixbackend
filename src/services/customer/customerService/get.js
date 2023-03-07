import ContactPerson from "../../../models/contect_person";
import Customer from "../../../models/customer";
const all = async () =>
  Customer.findAll({
    //include: [{ model: ContactPerson, as: "ContactPersons" }],
    include: { all: true, },
  });

const byId = async (id) =>
  Customer.findOne({
    where: {
      id,
    },
  });

const byName = async (name) =>
  Customer.findOne({
    where: {
      customerName: name,
    },
  });

export default {
  all,
  byId,
  byName,
};
