import Manufacturer from "../../../models/manufacturer";

const byId = async (id) => Manufacturer.destroy({
    where:{
        id
    }
})

export default {
    byId
}
