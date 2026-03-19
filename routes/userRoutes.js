import express from "express";
import {
  loginUser,
  registerUser,
  getUser,
  refreshToken,
  logout,
} from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const route = express.Router();

route.post("/login", loginUser);
route.post("/register", registerUser);
route.get("/me", auth, getUser);
route.post("/refresh", refreshToken);
route.post("/logout", logout);

export default route;
