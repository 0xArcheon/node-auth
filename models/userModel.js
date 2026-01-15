import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    reruired: [true, "Please enter a username"],
    unique: [true, "username already exists"],
  },

  email: {
    type: String,
    reruired: [true, "Please enter a email"],
    unique: [true, "email already exists, please use a different one or login"],
  },

  password: {
    type: String,
    reruired: [true, "Password is required"],
  },

  timestamps: true,
});

export default userSchema;
