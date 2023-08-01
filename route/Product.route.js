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
    image: product.image,
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
  console.log(productObj);
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
  Product.find({ isDeleted: false })
    .select("-isDeleted")
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

productRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  Product.findOne({ _id: id, isDeleted: false })
    .select("-isDeleted")
    .then((product) => {
      res.status(200).send({ product });
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

productRoute.put("/:id", (req, res) => {
  const product = req.body;
  const parentObjectId = new Types.ObjectId(product.category.parent);

  const { id } = req.params;

  const updateProduct = {
    name: product.name,
    description: product.description,
    image: product.image,
    category: {
      name: product.category.name,
      parent: parentObjectId,
    },
    price: product.price,
    offer: product.offer,
    unit: product.unit,
    inStock: product.inStock,
    quantity: product.quantity,
  };
  Product.updateOne({ _id: id }, updateProduct)
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

productRoute.delete("/:id", (req, res) => {
  const { id } = req.params;
  Product.updateOne({ _id: id }, { isDeleted: true })
    .then((product) => {
      res.status(200).send({ ok: true });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

export default productRoute;
