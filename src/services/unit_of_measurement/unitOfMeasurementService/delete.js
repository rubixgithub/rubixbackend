import UnitOfMeasureMent from "../../../models/unit_of_measurement";

const byId = async (id) => UnitOfMeasureMent.destroy({
    where:{
        id
    }
})

export default {
    byId
}
