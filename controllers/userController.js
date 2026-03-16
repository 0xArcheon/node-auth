import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Username, Email and Password are required",
      });
    }

    const isExisting = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (isExisting) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created successfully!",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    return res.status(400).json({ error: `${error}` });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password is required!" });
    }

    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (isCorrectPassword) {
      return res.status(200).json({ message: "Login successfull" });
    } else {
      return res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    return res.status(400).json({ error: `${error}` });
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { username } = req.body;
    const result = await User.find({ username }).select("-password");
    res.status(200).json({
      success: true,
      count: result.length,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
