import express from "express";
import { Product } from "../models/product.js";
const productRoute = express.Router();

productRoute.post("", (req, res) => {
    const product = req.body;

    const productObj = new Product({
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        offer: product.offer,
        unit: product.unit,
        inStock: product.inStock,
        quantity: product.quantity,
    })

    productObj.save().then(product => {
        res.status(200).send({ok:true})
    }).catch(err => {
        res.status(400).send(err)
    })

})

export default productRoute;