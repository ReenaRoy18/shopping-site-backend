import express from "express";
import { init } from "./config/init.js";
import { Product } from "./models/product.js";
init();
const port = 3000;
const server = express();
server.use(express.json());

server.listen(port, () => {
  console.log(`server listening to port ${port}`);
});

const p = new Product({
  name: "mobile",
  description: "iphone",
  categories: "mobile",
  price: 50000,
  offer: 50,
  unit: 2,
  inStock: true,
  quantity: 1,
});
// p.save();
Product.create(p);
