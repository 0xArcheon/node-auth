import express from "express";
import {
  loginUser,
  registerUser,
  getUser,
} from "../controllers/userController.js";

const route = express.Router();

route.get("/login", loginUser);
route.post("/register", registerUser);
route.get("/me", getUser);

export default route;
