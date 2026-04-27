import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import route from "./routes/userRoutes.js";

const PORT = 5000;
const app = express();
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:3000";

app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});

app.use("/api/", route);

app.listen(PORT, () => {
  console.log("Server started on port: ", PORT);
});
