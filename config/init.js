import mongoose from "mongoose";

export function init() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1")
    .then((res) => {
      console.log("connected DB");
    })
    .catch((err) => {
      console.log(err);
    });
}
