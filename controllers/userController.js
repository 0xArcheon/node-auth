const registerUser = (req, res) => {
  res.json({ message: "register" });
};

const loginUser = (req, res) => {
  res.json({ message: "login" });
};

const getUser = (req, res) => {
  res.json({ message: "user" });
};

export default { registerUser, loginUser, getUser };
