const { Schema, model} = require('mongoose');



const rolSchema = new Schema({
    name: String

},{
    versionKey: false
}
)

rolSchema.ROLES = ["Usuario", "admin"];

module.exports = model("Rol",rolSchema);
