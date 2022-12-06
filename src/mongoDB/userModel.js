const mongoose = require("mongoose");

const usersSchema = {
  firstName: String,
  surname: String,
  email: String,
  address1: String,
  city: String,
  country: String,
  code: Number,
  status: String,
  routine: String,
};

const User = mongoose.model("User", usersSchema);

module.exports = User;
