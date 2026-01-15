import express from "express";
import connectDB from "./config/db.js";
import route from "./routes/userRoutes.js";

const PORT = 3000;
const app = express();
app.use(express.json());
// connectDB();

app.get((req, res) => {
  res.json({ message: "hello from server" });
});

app.listen(PORT, () => {
  console.log("Server started on port: ", PORT);
});
