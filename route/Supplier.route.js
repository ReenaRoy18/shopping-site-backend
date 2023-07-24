import express from "express";
import { Supplier } from "../models/supplier.js";
import { Types } from "mongoose";
import { Address } from "../models/address.js";
const supplierRoute = express.Router();

supplierRoute.post("", async (req, res) => {
  const supplier = req.body;
  const address = req.body.address;

  const addressModel = new Address({
    plot_No: address.plot_No,
    street: address.street,
    area: address.area,
    city: address.city,
    state: address.state,
    country: address.country,
  });
  const saveAddress = await addressModel.save();
  const supplierObj = new Supplier({
    name: supplier.name,
    address: saveAddress._id,
  });

  supplierObj
    .save()
    .then((supplier) => {
      res.status(200).send({ ok: true });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});

export default supplierRoute;
