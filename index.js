import express from "express";

const PORT = 3000;
const app = express();

app.get((req, res) => {
  res.json({ message: "hello from server" });
});

app.listen(PORT, () => {
  console.log("Server started on port: ", PORT);
});
