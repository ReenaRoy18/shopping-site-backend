import express from "express";
import { User } from "../models/user.js";
const userRoute = express.Router();

userRoute.post("", (req, res) => {
  const user = req.body;
  const userObj = new User({
    email: user.email,
    password: user.password,
  });
  userObj
    .save()
    .then((user) => {
      res.status(200).send({ ok: true, data: user });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});

userRoute.get("", (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send({ ok: true, data: users });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});

export default userRoute;
