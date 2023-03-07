import Address from "../../../models/address";

const all = async () => Address.findAll();

const byId = async (id) =>
  Address.findOne({
    where: {
      id,
    },
  });

const byAttention = async (attention) => sequelize.models.address.findOne({
    where:{
        attention
    }
})

export default {
    all,
    byId,
    byAttention,
}
