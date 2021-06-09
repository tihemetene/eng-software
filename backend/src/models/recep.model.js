const mongoose = require("mongoose")

const RecepSchema = mongoose.Schema(
  {
  login: String,
  password: String,
},
{ timestamps: true}
);
const RecepModel = mongoose.model('recep', RecepSchema)
module.exports = RecepModel;