import express from "express";
import { init } from "./config/init.js";
import productRoute from "./route/Product.route.js";
import adminRoute from "./route/Admin.route.js";
import cors from "cors";
import categoryRoute from "./route/Category.route.js";
import userRoute from "./route/User.route.js";
import supplierRoute from "./route/Supplier.route.js";
init();

const port = 3000;
const server = express();
server.use(cors());
server.use(express.json());

server.listen(port, () => {
  console.log(`server listening to port ${port}`);
});

server.use("/products", productRoute);
server.use("/admin", adminRoute);
server.use("/category", categoryRoute);
server.use("/user", userRoute);
server.use("/supplier", supplierRoute);
