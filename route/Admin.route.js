import express from "express";
const adminRoute = express.Router();

adminRoute.post("/login", (req, res) => {
  const EMAIL = "admin@shopping.com";
  const PASSWORD = "admin@123";

  const { email, password } = req.body;
  if (email !== EMAIL) {
    res.status(400).send({ err: "Email does not match" });
  }
  if (password !== PASSWORD) {
    res.status(400).send({ err: "Password does not match" });
  }

  res.status(200).send({ ok: true });
});


export default adminRoute;
