import { Product } from "../models/product.js";
import { ObjectId } from "mongodb";
import { Schema, SchemaType, Types } from "mongoose";
import express from "express";
const productRoute = express.Router();

productRoute.post("/", (req, res) => {
  const product = req.body;
  const parentObjectId = new Types.ObjectId(product.category.parent);

  const productObj = new Product({
    name: product.name,
    description: product.description,
    category: {
      name: product.category.name,
      parent: parentObjectId,
    },
    price: product.price,
    offer: product.offer,
    unit: product.unit,
    inStock: product.inStock,
    quantity: product.quantity,
  });
  productObj
    .save()
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      res.send(err);
    });
});
productRoute.get("", (req, res) => {
  const products = Product.find({});
  res.send(products);
});
productRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = Product.filter((p) => p.id === id);
  res.send(product);
});

productRoute.get("", (req, res) => {
  const products = Product.find({});
  res.send(products);
});

productRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = Product.findOne({ _id: id });
  res.send(product);
});

export default productRoute;
