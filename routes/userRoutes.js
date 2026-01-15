import express from "express";
import {
  loginUser,
  registerUser,
  getUser,
} from "../controllers/userController.js";

const route = express.Router();

route.get("/login", loginUser);
route.post("/", registerUser);
route.get("/getUser", getUser);

export default route;
