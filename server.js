import express from "express";
import { init } from "./config/init.js";
import { Product } from "./models/product.js";
import productRoute from "./route/productRoute.js";
init();
const port = 3000;
const server = express();
server.use(express.json());

server.listen(port, () => {
  console.log(`server listening to port ${port}`);
});


server.use("/products",productRoute)