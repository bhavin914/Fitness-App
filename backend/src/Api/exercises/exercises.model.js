const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  length: {
    type: Number, // Length in minutes
    max: 60,
    required: true,
  },
});

module.exports = mongoose.model("exercises", exerciseSchema);
