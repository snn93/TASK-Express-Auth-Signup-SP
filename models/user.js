const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String },
    firstName: { type: String },
    lastName: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
