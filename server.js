import express from "express";
import { init } from "./config/init.js";
import productRoute from "./route/Product.route.js";
import adminRoute from "./route/Admin.route.js";

init();

const port = 3000;
const server = express();
server.use(express.json());

server.listen(port, () => {
  console.log(`server listening to port ${port}`);
});

server.use("/products", productRoute);
server.use("/admin", adminRoute);
