const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  //user email address
  email: {
    type: String,
    require: true
  },
  //user password
  password: {
    type: String,
    require: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
