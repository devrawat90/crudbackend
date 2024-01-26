const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: String,
  course: String,
  roll_no: Number,
  age: Number,
  address: String,
  duration: String,

});
module.exports = mongoose.model("project1", schema);
