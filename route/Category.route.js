import express from "express";
import { Category } from "../models/category.js";
const categoryRoute = express.Router();

categoryRoute.post("", (req, res) => {
  const category = req.body;

  const categoryObj = new Category({
    name: category.name,
    parent: category.parent,
  });
  categoryObj
    .save()
    .then((category) => {
      res.status(200).send({ ok: true });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
categoryRoute.get("", (req, res) => {
  Category.find({})
    .then((categories) => {
      res.status(200).send({ ok: true, data: categories });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});
categoryRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  Category.findOne({ _id: id })
    .then((category) => {
      res.status(200).send({ ok: true, data: category });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});

categoryRoute.put("/:id", (req, res) => {
  const { id } = req.params;
  const category = req.body;
  const categoryObj = {
    name: category.name,
    parent: category.parent,
  };
  Category.updateOne({ _id: id }, categoryObj)
    .then((updateCategory) => {
      res.status(200).send({ ok: true, data: updateCategory });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});

categoryRoute.delete("/:id", (req, res) => {
  const { id } = req.params;
  Category.deleteOne({ _id: id })
    .then((category) => {
      res.status(200).send({ ok: true, data: category });
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});

export default categoryRoute;
