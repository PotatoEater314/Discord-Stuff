const mongoose = require("mongoose");
const auto = new mongoose.Schema(
  {
    _id: String,
    roles: Array
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("auto", auto);
