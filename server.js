import express from "express";
import { init } from "./config/init.js";
import productRoute from "./route/Product.route.js";
import adminRoute from "./route/Admin.route.js";
import cors from "cors";
import categoryRoute from "./route/Category.route.js";
import userRoute from "./route/User.route.js";
import supplierRoute from "./route/Supplier.route.js";
import multer from "multer";
import path from "path";
import { log } from "console";
init();

const port = 3000;
const server = express();
server.use(cors());
server.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

server.post("/upload", multer({ storage }).single("image"), (req, res) => {
  res.status(200).send({
    ok: true,
    path: "http://localhost:3000/" + req.file.path.replace("\\", "/"),
  });
});

server.get("/preview?path=:path", (req, res) => {
  const imagePathFull = req.params["path"];
  console.log("===========>", imagePathFull);
  const imagePath = imagePathFull.slice(imagePathFull.indexOf("Images/") + 7);
  res.sendFile("./Images/" + imagePath);
});

server.listen(port, () => {
  console.log(`server listening to port ${port}`);
});

server.use("/products", productRoute);
server.use("/admin", adminRoute);
server.use("/category", categoryRoute);
server.use("/user", userRoute);
server.use("/supplier", supplierRoute);
