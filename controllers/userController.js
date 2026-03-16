import bcrypt from "bcryptjs";
import userSchema from "../models/userModel.js";

export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Username, Email and Password is required to registrer");
  }

  const isExisting = userSchema.findOne({ email, username });

  if (isExisting) {
    res.status(400);
    throw new Error("User already exists");
  }
  try {
    res.json({ message: "register" });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    res.json({ message: "login" });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    res.json({ message: "user" });
  } catch (error) {
    next(error);
  }
};
