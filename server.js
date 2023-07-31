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
import fs from "fs";
init();

const port = 3000;
const server = express();
server.use(cors());
server.use(express.json());

if (!fs.existsSync("./Images")) {
  fs.mkdir("./Images", { recursive: true }, (err) => {
    err && console.error(err);
  });
  console.log("Create Images Folder");
}

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
    path: req.file.path.replace("\\", "/"),
  });
});

server.get("/preview", (req, res) => {
  const imagePathFull = "./" + req.query["path"];
  res.sendFile(imagePathFull, { root: "." });
});

server.listen(port, () => {
  console.log(`server listening to port ${port}`);
});

server.use("/products", productRoute);
server.use("/admin", adminRoute);
server.use("/category", categoryRoute);
server.use("/user", userRoute);
server.use("/supplier", supplierRoute);
