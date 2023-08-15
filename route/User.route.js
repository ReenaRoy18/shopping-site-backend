import express from "express";
import { User } from "../models/user.js";
import { deliveryAddress } from "../models/userAddress.js";
const userRoute = express.Router();

userRoute.post("", async (req, res) => {
  const { email, password ,mobileNo , fullName} = req.body;
  try {
    const userObj = new User({
      email,
      password,
      mobileNo,
      fullName
    });

    await userObj.save();

    res.send({ ok: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to add", err });
  }
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

userRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  User.findOne({ _id: id })
    .then((user) => {
      res.status(200).send({ ok: true, data: user });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});

userRoute.put("/:id", (req, res) => {
  const user = req.body;
  const { id } = req.params;

  const updateUserObj = {
    email: user.email,
    password: user.password,
  };
  User.updateOne({ _id: id }, updateUserObj)
    .then((updateUser) => {
      res.status(200).send({ ok: true, data: updateUserObj });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});

userRoute.delete("", (req, res) => {
  const { id } = req.params;
  User.deleteOne({ _id: id })
    .then((user) => {
      res.status(200).send({ ok: true, data: user });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});
export default userRoute;
