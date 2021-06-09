const mongoose = require("mongoose")

const MedicoSchema = mongoose.Schema(
  {
  login: String,
  password: String,
},
{ timestamps: true}
);
const MedicoModel = mongoose.model('medico', MedicoSchema)
module.exports = MedicoModel;