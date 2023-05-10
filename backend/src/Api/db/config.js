const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/fitnessdata")
  .then(() => console.log("db connected"));
