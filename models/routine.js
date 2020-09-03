const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const routineSchema = new Schema({
  at: [[String]],
});

module.exports = mongoose.model("Routine", routineSchema);
