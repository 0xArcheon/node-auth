import express from "express";
import {
  loginUser,
  registerUser,
  getUser,
} from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const route = express.Router();

route.post("/login", loginUser);
route.post("/register", registerUser);
route.get("/me", auth, getUser);

export default route;
