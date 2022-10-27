const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true
  },
  isMobileNumberVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    default: true,
    type: Boolean
 },
 isDeleted: {
    default: false
 }

});

const user = mongoose.model("User", userSchema);
module.exports = user;
