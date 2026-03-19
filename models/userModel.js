import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
      unique: [true, "username already exists"],
      lowercase: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Please enter a email"],
      unique: [
        true,
        "email already exists, please use a different one or login",
      ],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

var User = new mongoose.model("User", userSchema);

export default User;
